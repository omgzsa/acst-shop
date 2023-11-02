<script setup>
const { defaultTransition } = useTailwindConfig();
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
</script>

<template>
  <section>
    <div class="min-h-[80vh] py-6 lg:py-10 site-padding">
      <div class="max-w-xl mx-auto">
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
                  <dt>Subtotal</dt>
                  <dd>£250</dd>
                </div>

                <div class="flex justify-between">
                  <dt>VAT</dt>
                  <dd>£25</dd>
                </div>

                <div class="flex justify-between">
                  <dt>Discount</dt>
                  <dd>-£20</dd>
                </div>

                <div class="flex justify-between !text-base font-medium">
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
                <AppButton label="Fizetés" to="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>