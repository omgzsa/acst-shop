<script setup>
const { createItems } = useDirectusItems();
const { defaultTransition } = useTailwindConfig();
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();

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
    <div class="min-h-[80vh] py-6 lg:py-10 site-padding">
      <div class="max-w-2xl mx-auto">
        <header class="space-y-2">
          <h1 class="">Kosár</h1>
          <p class="inline-block mr-1">Valami még kimaradt?</p>
          <span class="underline">Folytasd a vásárlást itt.</span>
        </header>

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
            <!-- <AppCartItem
              v-for="(items, name) in cartStore.grouped"
              :item="items[0]"
              :key="name"
            /> -->
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
    </div>
  </section>
</template>
