<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.directusUrl;

const props = defineProps({
  id: Number,
  name: String,
  img: String,
});
</script>

<template>
  <li class="flex items-center gap-4">
    <NuxtImg
      :src="`${baseUrl}/assets/${img}`"
      alt=""
      class="object-cover w-16 h-16 rounded"
    />

    <div>
      <h3 class="text-sm text-gray-900">{{ name }}</h3>

      <!-- <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt class="inline">Size:</dt>
              <dd class="inline">XXS</dd>
            </div>

            <div>
              <dt class="inline">Color:</dt>
              <dd class="inline">White</dd>
            </div>
          </dl> -->
    </div>

    <div class="flex items-center justify-end flex-1 gap-2">
      <form>
        <label for="Line1Qty" class="sr-only"> darab </label>

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
</template>
