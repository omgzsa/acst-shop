<script setup>
import { useCartStore } from '@/stores/cart';

const { defaultTransition } = useTailwindConfig();

const { createItems } = useDirectusItems();

const cartStore = useCartStore();

const shoppingDetails = ref([
  {
    id: 1,
    name: 'Szállítás',
    content:
      "Shipping Methods Once your order is confirmed, our warehouse will process and send it within 3 business days. Depending on your location and elected delivery method, delivery can take 2-7 business days. We'll email you the tracking information and an estimated delivery date when each item is sent. Shipping options may vary depending on your specific region.However, there's no need to worry, as our system will automatically select the best carrier for you during checkout. We offer free delivery on orders over £50/€50.",
  },
  {
    id: 2,
    name: 'Visszaküldés',
    content:
      'All our returns are free within 60 days from the day the package was delivered. Make sure you initiate the return process on our website following the given instructions and use the return labels provided by us.',
  },
  {
    id: 3,
    name: 'Fizetés',
    content:
      'Payment method options:\n\n- Credit Cards (we accept VISA, Mastercard, American Express, Diners and JCB); - Apple Pay.',
  },
]);

// const checkout = async () => {
//   try {
//     const items = cartStore.items;

//     await createItems({ collection: 'session', items });
//   } catch (e) {
//     // Handle errors if needed
//     console.error('Error creating orders:', e);
//   }
// };
</script>

<template>
  <section>
    <div
      class="min-h-[80vh] gap-8 py-6 lg:py-16 site-padding lg:grid lg:grid-cols-8"
    >
      <!-- CART WIDGET -->
      <div class="mb-8 lg:col-span-5">
        <header class="space-y-2">
          <h1 class="">Kosár</h1>
          <p class="inline-block mr-1">Valami még kimaradt?</p>
          <span class="underline">Folytasd a vásárlást itt.</span>
        </header>

        <!-- LISTED ITEMS -->
        <div class="mt-8">
          <ul v-if="!cartStore.isEmpty">
            <AppCartItem
              v-for="item in cartStore.items"
              :key="item"
              :name="item.name"
              :img="item.img"
              :price="item.price"
              :quantity="item.quantity"
              @clearItem="cartStore.clearItem(item.name)"
            />
          </ul>

          <div v-else>
            <em>A kosár üres.</em>
          </div>

          <!-- SUMMERY  -->
          <div class="flex justify-end pt-8">
            <div class="w-full max-w-sm space-y-4">
              <dl class="space-y-0.5 text-sm text-gray-700">
                <div class="flex justify-between">
                  <dt>Részösszeg (ÁFA-val)</dt>
                  <dd>{{ cartStore.cartTotal }} Ft</dd>
                </div>

                <div class="flex justify-between">
                  <dt>Házhozszállítás:</dt>
                  <dd class="text-dark-300">A következő lépésben számítva</dd>
                </div>

                <div class="flex justify-between text-2xl font-bold">
                  <dt>Teljes összeg:</dt>
                  <dd>{{ cartStore.cartTotal }} Ft</dd>
                </div>
              </dl>

              <div class="flex justify-end space-x-2">
                <button
                  class="px-4 py-2 space-x-2 font-semibold border rounded-md shadow-md hover:shadow-lg hover:bg-dark-300 hover:text-dark-200"
                  :class="defaultTransition"
                  @click="cartStore.$reset()"
                >
                  <span class="text-base leading-snug tracking-wide xl:text-lg">
                    Kosár kiürítése
                  </span>
                </button>
                <AppButton
                  label="Szállítás & Fizetés"
                  to="/szallitas-es-fizetes"
                />
                <!-- <button
                  class="px-4 py-2 space-x-2 font-semibold border rounded-md shadow-md border-accent-100 duration-400 bg-accent-100 text-dark-100 hover:bg-dark-100 hover:text-white hover:shadow-lg"
                  :class="defaultTransition"
                  @click="checkout"
                >
                  <span class="text-base leading-snug tracking-wide xl:text-lg">
                    Fizetés
                  </span>
                </button> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SHIPPING / RETURN / PAYMENT DETAILS -->
      <div class="space-y-4 lg:col-span-3">
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
  </section>
</template>
