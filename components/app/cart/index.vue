<script setup>
//
</script>

<template>
  <section>
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <header class="text-center">
          <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
        </header>

        <div class="mt-8">
          <ul class="space-y-4">
            <li class="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                class="object-cover w-16 h-16 rounded"
              />

              <div>
                <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt class="inline">Size:</dt>
                    <dd class="inline">XXS</dd>
                  </div>

                  <div>
                    <dt class="inline">Color:</dt>
                    <dd class="inline">White</dd>
                  </div>
                </dl>
              </div>

              <div class="flex items-center justify-end flex-1 gap-2">
                <form>
                  <label for="Line1Qty" class="sr-only"> Quantity </label>

                  <input
                    type="number"
                    min="1"
                    value="1"
                    id="Line1Qty"
                    class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </form>

                <button class="text-gray-600 transition hover:text-red-600">
                  <span class="sr-only">Remove item</span>
                  <Icon name="mdi:trash-can-outline" size="18" />
                </button>
              </div>
            </li>
          </ul>

          <div class="flex justify-end pt-8 mt-8 border-t border-gray-100">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
