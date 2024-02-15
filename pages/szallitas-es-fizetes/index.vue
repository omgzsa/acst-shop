<script setup>
import { useCartStore } from '@/stores/cart';
import { schemas } from './schemas.js';
import { Form, Field, ErrorMessage } from 'vee-validate';

const cartStore = useCartStore();

const currentStep = ref(0);
const formSteps = ['Info', 'Számlázás', 'Szállítás', 'Fizetés'];

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

function nextStep(values) {
  if (currentStep.value === 3) {
    onSubmit(values);
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
  console.log('Done: ', JSON.stringify(values, null, 2));
}

function handleChange(value) {
  cartStore.setDeliveryMode(value.target.value);
}
</script>

<template>
  <div class="bg-white">
    <div class="py-8 space-y-8 site-padding">
      <h1>Szállítás és fizetés</h1>
      <p class="max-w-xl">
        For this use-case you should pass `keepValues` to the form to let
        vee-validate keep the values across steps.
      </p>
      <p class="font-bold">cartTotal: {{ cartStore.cartTotal }} ft</p>

      <!-- 
          STEPPER 
        -->
      <div class="flex justify-between py-4">
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

      <Form
        @submit="nextStep"
        :validation-schema="paymentSchema"
        keep-values
        v-slot="{ values }"
        class=""
      >
        <!-- <div class="pb-6 mx-auto border-t border-gray-300 w-80" /> -->

        <!-- {{ values }} -->
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
                <Field
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
              </div>
              <p class="pt-1 text-sm text-red-500 sm:text-base">
                <ErrorMessage name="paymentMode" />
              </p>

              <TheBarionStrip width="300" height="28" />
            </div>
          </template>
        </TransitionGroup>

        <!-- BUTTONS: NEXT, PREV, PAY -->
        <div class="flex justify-between pt-16">
          <button
            class="block text-xl font-medium transition-all text-dark-300 hover:text-dark-100"
            v-if="currentStep !== 0"
            type="button"
            @click="prevStep"
          >
            <span></span>
            Előző
          </button>

          <button
            class="ml-auto text-xl font-medium transition-all text-dark-300 hover:text-dark-100"
            v-if="currentStep !== 3"
            type="submit"
          >
            Következő
            <span></span>
          </button>

          <button
            class="text-xl font-medium transition-all hover:underline text-dark-300 hover:text-orange-600 underline-offset-4"
            v-if="currentStep === 3"
            type="submit"
            @click="handleSubmit"
          >
            Fizetés
            <span></span>
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<style>
.slide-fade-move, /* apply transition to moving elements */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.25s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.slide-fade-leave-active {
  position: absolute;
}
</style>
