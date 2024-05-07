<script setup>
import { useCartStore } from '@/stores/cart';
import { useAuthStore } from '@/stores/auth';
import { schemas } from './schemas.js';
import { Form, Field, ErrorMessage } from 'vee-validate';

const cartStore = useCartStore();
const { isLoggedIn } = useAuthStore();
const user = useDirectusUser();
const router = useRouter();

let isSubmitting = ref(false);

const currentStep = ref(0);
const formSteps = ['Info', 'Számlázás', 'Szállítás', 'Fizetés'];

const stepValues = ref({
  name: '',
  phone: '',
  streetAndNumber: '',
  city: '',
  postCode: '',
  addressMatch: null,
  receiptName: '',
  receiptStreetAndNumber: '',
  receiptCity: '',
  receiptPostCode: '',
  deliveryMode: '',
  paymentMode: '',
  termsAccepted: null,
});

const receiptName = computed(() =>
  stepValues.value.addressMatch ? 'megegyezik.' : stepValues.value.receiptName
);
const receiptStreetAndNumber = computed(() =>
  stepValues.value.addressMatch
    ? 'megegyezik.'
    : stepValues.value.receiptStreetAndNumber
);
const receiptCity = computed(() =>
  stepValues.value.addressMatch ? 'megegyezik.' : stepValues.value.receiptCity
);
const receiptPostCode = computed(() =>
  stepValues.value.addressMatch
    ? 'megegyezik.'
    : stepValues.value.receiptPostCode
);

const shoppingDetails = ref([
  {
    id: 1,
    name: 'Személyes átvétel',
    content:
      'Személyes átvételre 1011 Győr, Kossuth Lajos utca 1. szám alatti üzletünkben van lehetőség. E-mailes értesítés után vehető át a megrendelt termék.',
  },
  {
    id: 2,
    name: 'MPL - Magyar Posta',
    content:
      'Minden városba szállítunk az MPL futárszolgálattal. A 1,5m-nél hosszab csomagokat csak az MPL tudja szállítani. A szállítási idő 3-5 munkanap.',
  },
  {
    id: 3,
    name: 'GLS',
    content:
      'A GLS futárszolgálattal csak Magyarország területére tudunk szállítani, akár kisebb csomagokat is. A szállítási idő 2-3 munkanap.',
  },
]);

// schemas come from ./schemas.js
const paymentSchema = computed(() => {
  return schemas[currentStep.value];
});

function nextStep(values, { resetForm }) {
  if (currentStep.value === 3) {
    onSubmit(values);
    resetForm({
      values: stepValues.value,
    });
    return;
  }

  currentStep.value++;
}

function prevStep() {
  if (currentStep.value <= 0) {
    return;
  }

  currentStep.value--;
}

async function onSubmit(values) {
  if (isSubmitting.value) return;

  console.log(values);

  const {
    postCode,
    city,
    streetAndNumber,
    receiptPostCode,
    receiptCity,
    receiptStreetAndNumber,
    paymentMode,
  } = values;

  const userData = {
    szallitasiIranyitoszam: postCode || null,
    szallitasiVaros: city || null,
    szallitasiCim: streetAndNumber || null,
    szallitasiCimReszletek: '',
    szamlazasiIranyitoszam: receiptPostCode === '' ? postCode : postCode,
    szamlazasiVaros: receiptCity === '' ? city : city,
    szamlazasiCim:
      receiptStreetAndNumber === '' ? streetAndNumber : streetAndNumber,
    szamlazasiCegnev: '',
    szamlazasiAdoszam: '',
  };

  const orderData = {
    vasarlo: user.value.id,
    termekek: cartStore.items.map((item) => ({ termekek_id: item.id })),
    teljesOsszeg: cartStore.cartTotal,
  };

  try {
    isSubmitting.value = true;

    if (!isLoggedIn) {
      throw createError({
        message: 'Nem vagy bejelentkezve.',
      });
    }

    if (paymentMode === 'transfer') {
      // simplified order process - no need for paymentId/redirect to payment service
      orderData.PaymentStatus = 'Banki átutalás';
      await updateUserData(userData);
      await createOrder(orderData);

      // reset cart and redirect to home
      cartStore.cartReset();
      router.push('/', {
        replace: true,
      });
    }

    if (paymentMode === 'creditCard') {
      // update buyer/user's data with the new delivery and billing address
      await updateUserData(userData);
      // create order with the products and the total amount
      const createdOrder = await createOrder(orderData);
      // getting order id for the newly created order
      const orderId = createdOrder.id;

      // Delay for 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // get paymentId for the order so it can redirect to BARION w/ query params
      const paymentId = await getPaymentId(orderId);

      if (!paymentId) {
        throw createError({
          message: 'Nem sikerült létrehozni a fizetési azonosítót.',
        });
      }

      // redirect to payment service's site
      await redirectToPaymentService(paymentId, orderId);
    }
  } catch (error) {
    console.error('Error in onSubmit:', error);
  } finally {
    isSubmitting.value = false;
  }
}

async function updateUserData(userData) {
  try {
    const { updateUser } = useDirectusUsers();
    await updateUser({
      id: user.value.id,
      user: userData,
    });
  } catch (error) {
    console.error('Error updating user data:', error);
  }
}

async function createOrder(orderData) {
  try {
    const { createItems } = useDirectusItems();
    const rendeles = await createItems({
      collection: 'vasarlasok',
      items: orderData,
    });
    console.log('createOrder - rendeles', rendeles);
    return rendeles;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}

async function getPaymentId(orderId) {
  try {
    const { getItemById } = useDirectusItems();
    const myPaymentId = await getItemById({
      collection: 'vasarlasok',
      id: orderId,
      fields: ['PaymentId'],
    });
    return myPaymentId.PaymentId;
  } catch (error) {
    console.error('Error getting paymentId:', error);
    throw error;
  }
}

async function redirectToPaymentService(paymentId, orderId) {
  await navigateTo(`https://secure.test.barion.com/Pay?Id=${paymentId}`, {
    external: true,
  });
}

function handleChange(value) {
  cartStore.setDeliveryMode(value.target.value);
}

function updateStepValues(e) {
  // map the form values to the stepValues object
  stepValues.value[e.target.name] = e.target.value;
  stepValues.value['addressMatch'] = e.target.checked;
}

// watch isSubmitting and log it's value to console
watch(isSubmitting, (value) => {
  console.log('isSubmitting', value);
});
</script>

<template>
  <div class="bg-white">
    <div
      class="relative grid py-8 space-y-6 lg:grid-cols-8 lg:gap-x-8 site-padding"
    >
      <h1 class="lg:col-span-full">Szállítás és fizetés</h1>

      <!-- 
          STEPPER 
        -->
      <div class="flex justify-between pb-4 lg:col-span-5">
        <div
          v-for="(step, index) in formSteps"
          :key="index"
          class="flex flex-col items-center"
        >
          <span
            :class="{
              'text-dark-100 font-bold underline underline-offset-4':
                currentStep === index,
              'text-dark-300 font-normal': currentStep !== index,
            }"
            class="text-sm font-bold sm:text-lg lg:text-xl"
            >{{ step }}</span
          >
        </div>
      </div>

      <!-- 
        FORM
       -->
      <Form
        @submit="nextStep"
        :validation-schema="paymentSchema"
        :initial-values="stepValues"
        keep-values
        v-slot="{ values }"
        @change="updateStepValues"
        class="lg:col-span-5"
      >
        <!-- <div class="pb-6 mx-auto border-t border-gray-300 w-80" /> -->

        <TransitionGroup name="slide-fade">
          <!-- 
            STEP 1 - INFO
          -->
          <template v-if="currentStep === 0">
            <div class="space-y-2 sm:space-y-4">
              <h4 class="mb-4 sm:mb-0">Szállítási cím:</h4>
              <div>
                <label class="block" for="name">Név</label>
                <Field name="name" id="name" />
                <p class="pt-1 text-sm text-red-500 sm:text-base">
                  <ErrorMessage name="name" />
                </p>
              </div>

              <div>
                <label class="block" for="phone">Telefonszám</label>
                <Field name="phone" id="phone" />
                <p class="pt-1 text-sm text-red-500 sm:text-base">
                  <ErrorMessage name="phone" />
                </p>
              </div>

              <div>
                <label class="block" for="streetAndNumber">Utca, házszám</label>
                <Field name="streetAndNumber" id="streetAndNumber" />
                <p class="pt-1 text-sm text-red-500 sm:text-base">
                  <ErrorMessage name="streetAndNumber" />
                </p>
              </div>

              <div class="flex justify-between gap-x-4">
                <div class="flex-1">
                  <label class="block" for="city">Város</label>
                  <Field name="city" id="city" />
                  <p class="pt-1 text-sm text-red-500 sm:text-base">
                    <ErrorMessage name="city" />
                  </p>
                </div>

                <div class="flex-1">
                  <label class="block" for="postCode">Irányítószám</label>
                  <Field name="postCode" id="postCode" />
                  <p class="pt-1 text-sm text-red-500 sm:text-base">
                    <ErrorMessage name="postCode" />
                  </p>
                </div>
              </div>
            </div>
          </template>

          <!-- 
            STEP 2 - BILLING
          -->
          <template v-if="currentStep === 1">
            <div class="space-y-2 sm:space-y-4">
              <h4 class="mb-4 sm:mb-0">Számlázási cím:</h4>
              <div class="flex items-start gap-x-3">
                <label class="order-2 block" for="addressMatch"
                  >A számlázási címem megegyezik az előző lépésben megadott
                  címmel.</label
                >
                <Field
                  name="addressMatch"
                  type="checkbox"
                  id="addressMatch"
                  :value="true"
                  class="mt-0.5 shadow text-dark-100 focus:ring-accent-100"
                />
                <!-- <ErrorMessage name="addressMatch" /> -->
              </div>
              <p
                v-if="!values.addressMatch"
                class="text-sm text-red-500 sm:text-base"
              >
                Töltsd ki a mezőket ha másik címre küldjük a számlát.
              </p>
              <div>
                <label class="block" for="receiptName">Név</label>
                <Field
                  name="receiptName"
                  id="receiptName"
                  :disabled="values.addressMatch"
                  :class="{
                    'cursor-not-allowed opacity-50': values.addressMatch,
                  }"
                />
                <p class="pt-1 text-sm text-red-500 sm:text-base">
                  <ErrorMessage name="receiptName" />
                </p>
              </div>

              <div>
                <label class="block" for="receiptStreetAndNumber"
                  >Utca, házszám</label
                >
                <Field
                  name="receiptStreetAndNumber"
                  id="receiptStreetAndNumber"
                  :disabled="values.addressMatch"
                  :class="{
                    'cursor-not-allowed opacity-50': values.addressMatch,
                  }"
                />
                <p class="pt-1 text-sm text-red-500 sm:text-base">
                  <ErrorMessage name="receiptStreetAndNumber" />
                </p>
              </div>

              <div class="flex justify-between gap-x-4">
                <div class="flex-1">
                  <label class="block" for="receiptCity">Város</label>
                  <Field
                    name="receiptCity"
                    id="receiptCity"
                    :disabled="values.addressMatch"
                    :class="{
                      'cursor-not-allowed opacity-50': values.addressMatch,
                    }"
                  />
                  <p class="pt-1 text-sm text-red-500 sm:text-base">
                    <ErrorMessage name="receiptCity" />
                  </p>
                </div>

                <div class="flex-1">
                  <label class="block" for="receiptPostCode"
                    >Irányítószám</label
                  >
                  <Field
                    name="receiptPostCode"
                    id="receiptPostCode"
                    :disabled="values.addressMatch"
                    :class="{
                      'cursor-not-allowed opacity-50': values.addressMatch,
                    }"
                  />
                  <p class="pt-1 text-sm text-red-500 sm:text-base">
                    <ErrorMessage name="receiptPostCode" />
                  </p>
                </div>
              </div>
            </div>
          </template>

          <!-- 
            STEP 3 - DELIVERY
          -->
          <template v-if="currentStep === 2">
            <div class="space-y-2 sm:space-y-4">
              <h4 class="mb-4 sm:mb-0">Szállítás módja:</h4>

              <div class="flex flex-col py-2 space-y-2">
                <Field
                  v-slot="{ field, handleChange }"
                  name="deliveryMode"
                  type="radio"
                  value="personal"
                  @change="handleChange"
                >
                  <label>
                    <input
                      class="mb-1 w-5 h-5 mr-1.5 shadow text-dark-100 focus:ring-accent-100"
                      type="radio"
                      name="deliveryMode"
                      v-bind="field"
                      value="personal"
                    />
                    <span class="ml-1">Személyes átvétel</span>
                    <span v-if="field.checked" class="ml-1.5 text-gray-400"
                      >+0 Ft</span
                    >
                  </label>
                </Field>

                <Field
                  v-slot="{ field, handleChange }"
                  name="deliveryMode"
                  type="radio"
                  value="POSTA"
                  @change="handleChange"
                >
                  <label>
                    <input
                      class="mb-1 w-5 h-5 mr-1.5 shadow text-dark-100 focus:ring-accent-100"
                      type="radio"
                      name="deliveryMode"
                      v-bind="field"
                      value="POSTA"
                    />
                    <span class="ml-1">MPL - Magyar Posta</span>
                    <span v-if="field.checked" class="ml-1.5 text-gray-400"
                      >+8000 Ft</span
                    >
                  </label>
                </Field>

                <Field
                  v-slot="{ field, handleChange }"
                  name="deliveryMode"
                  type="radio"
                  value="GLS"
                  @change="handleChange"
                >
                  <label>
                    <input
                      class="mb-1 w-5 h-5 mr-1.5 shadow text-dark-100 focus:ring-accent-100"
                      type="radio"
                      name="deliveryMode"
                      v-bind="field"
                      value="GLS"
                    />
                    <span class="ml-1">GLS</span>
                    <span v-if="field.checked" class="ml-1.5 text-gray-400"
                      >+3500 Ft</span
                    >
                  </label>
                  <p v-if="false" class="text-sm text-red-500">
                    A GLS nem választható mivel a rendelésedben 1,5m-nél
                    hosszabb termék is szerepel, amelyet csak a MPL tud
                    szállítani.
                  </p>
                </Field>
              </div>
              <p class="pt-1 text-sm text-red-500 sm:text-base">
                <ErrorMessage name="deliveryMode" />
              </p>

              <!-- delivery infos -->
              <div class="space-y-4">
                <details
                  v-for="detail in shoppingDetails"
                  :key="detail.id"
                  class="border-b"
                >
                  <summary
                    class="flex items-center justify-between pb-2 font-semibold cursor-pointer text-dark-100"
                  >
                    {{ detail.name }} <span>+</span>
                  </summary>
                  <p class="py-2">
                    {{ detail.content }}
                  </p>
                </details>
              </div>
            </div>
          </template>

          <!-- 
            STEP 4 - PAYMENT
          -->
          <template v-if="currentStep === 3">
            <div class="space-y-1 sm:space-y-4">
              <h4 class="mb-4 sm:mb-0">Fizetés módja:</h4>

              <div class="flex flex-col py-2 space-y-2">
                <!-- <Field
                  v-slot="{ field }"
                  name="paymentMode"
                  type="radio"
                  value="utanvet"
                >
                  <label>
                    <input
                      class="mb-1 w-5 h-5 mr-1.5 shadow text-dark-100 focus:ring-accent-100"
                      type="radio"
                      name="paymentMode"
                      v-bind="field"
                      value="utanvet"
                    />
                    Útánvét
                  </label>
                </Field> -->

                <Field
                  v-slot="{ field }"
                  name="paymentMode"
                  type="radio"
                  value="transfer"
                >
                  <label>
                    <input
                      class="mb-1 w-5 h-5 mr-1.5 shadow text-dark-100 focus:ring-accent-100"
                      type="radio"
                      name="paymentMode"
                      v-bind="field"
                      value="transfer"
                    />
                    Banki átutalás
                  </label>
                </Field>

                <Field
                  v-slot="{ field }"
                  name="paymentMode"
                  type="radio"
                  value="creditCard"
                >
                  <label>
                    <input
                      class="mb-1 w-5 h-5 mr-1.5 shadow text-dark-100 focus:ring-accent-100"
                      type="radio"
                      name="paymentMode"
                      v-bind="field"
                      value="creditCard"
                    />
                    Bankártyás fizetés BARION-nal
                  </label>
                </Field>
              </div>
              <p class="pt-1 text-sm text-red-500 sm:text-base">
                <ErrorMessage name="paymentMode" />
              </p>

              <TheBarionStrip width="300" height="28" />

              <div class="flex items-start gap-x-3">
                <label class="order-2 block text-xs" for="addressMatch"
                  >Elolvastam és elfogadom az
                  <NuxtLink
                    class="text-sm text-blue-700 hover:text-blue-500 hover:underline underline-offset-4"
                    to="/dokumentumok/aszf.vue"
                    >adatvédelmi szabályzatot</NuxtLink
                  >.</label
                >
                <Field
                  name="termsAccepted"
                  type="checkbox"
                  id="termsAccepted"
                  :value="true"
                  class="mt-0.5 shadow text-dark-100 focus:ring-accent-100"
                />
                <!-- <ErrorMessage name="addressMatch" /> -->
              </div>
              <p
                v-if="!values.termsAccepted"
                class="text-sm text-red-500 sm:text-base"
              >
                El kell fogadnod az adatvédelmi szabályzatot a továbblépéshez.
              </p>
            </div>
          </template>
        </TransitionGroup>

        <!-- 
          BUTTONS: NEXT, PREV, PAY 
        -->
        <div class="flex justify-between pt-16">
          <button
            class="flex items-center text-base font-medium transition-all text-dark-300 hover:text-dark-100 hover:ring-0 ring-1 ring-gray-300 px-3 pt-1.5 pb-1 hover:bg-accent-100"
            v-if="currentStep !== 0"
            type="button"
            @click="prevStep"
          >
            Előző
          </button>

          <button
            class="flex items-center ml-auto text-base font-medium transition-all text-dark-300 hover:text-dark-100 hover:ring-0 ring-1 ring-gray-300 px-3 pt-1.5 pb-1 hover:bg-accent-100"
            v-if="currentStep !== 3"
            type="submit"
          >
            Következő
          </button>

          <button
            class="text-xl font-medium transition-all hover:underline text-dark-300 hover:text-orange-600 underline-offset-4"
            v-if="currentStep === 3"
            type="submit"
            :disabled="isSubmitting || !isLoggedIn || !values.termsAccepted"
            :class="{
              'cursor-not-allowed opacity-50 line-through':
                isSubmitting || !isLoggedIn || !values.termsAccepted,
            }"
          >
            <span v-if="isSubmitting">
              <Icon
                name="svg-spinners:bars-fade"
                class="inline-block w-6 h-6"
              />
            </span>
            <span v-else> Fizetés</span>
          </button>
        </div>

        <!-- 
          LOGIN if not
         -->
        <div v-if="!isLoggedIn" class="flex flex-col pt-4 text-right">
          <span class="text-lg font-bold text-red-500"
            >Nem indíthatsz fizetést ha nem vagy bejelentkezve.</span
          >
          <NuxtLink
            to="/profil/info"
            class="inline-flex self-end pt-2 text-sm tracking-wide uppercase text-dark-300 hover:text-dark-100 hover:underline underline-offset-4"
          >
            Bejelentkezem!
          </NuxtLink>
        </div>
      </Form>

      <!-- 
        SUMMARY
       -->
      <div class="lg:absolute lg:right-4 xl:right-20 lg:top-5 lg:col-span-3">
        <CheckoutSummary
          :step-values="stepValues"
          :receipt-name="receiptName"
          :receipt-street-and-number="receiptStreetAndNumber"
          :receipt-city="receiptCity"
          :receipt-post-code="receiptPostCode"
          :total="cartStore.cartTotal"
        />
      </div>
    </div>
  </div>
</template>

<style>
.slide-fade-move,
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.25s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.slide-fade-leave-active {
  position: absolute;
}
</style>
