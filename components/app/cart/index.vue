<script setup>
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
</script>

<template>
  <section>
    <div class="py-10 site-padding">
      <div class="max-w-3xl mx-auto">
        <header class="text-center">
          <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Kosár</h1>
        </header>

        <div class="mt-8">
          <ul v-if="!cartStore.isEmpty" class="space-y-4">
            <AppCartItem
              v-for="item in cartStore.items"
              :key="item.id"
              :id="item.id"
              :name="item.name"
              :img="item.img"
            />
          </ul>

          <div v-else>
            <em>A kosár üres.</em>
          </div>

          <!-- SUMMERY  -->
          <!-- <div class="flex justify-end pt-8 mt-8 border-t border-gray-100">
            <div class="w-screen max-w-lg space-y-4">
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
                  <dt>Total</dt>
                  <dd>£200</dd>
                </div>
              </dl>

              <div class="flex justify-end">
                <span
                  class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="-ms-1 me-1.5 h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    />
                  </svg>

                  <p class="text-xs whitespace-nowrap">2 Discounts Applied</p>
                </span>
              </div>

              <div class="flex justify-end">
                <a
                  href="#"
                  class="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
                >
                  Checkout
                </a>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>
