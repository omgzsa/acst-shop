<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.directusUrl;

// const count = ref(0);

const props = defineProps({
  name: String,
  img: String,
  price: Number,
  quantity: Number,
});

const emit = defineEmits(['clearItem']);
</script>

<template>
  <li class="flex items-center gap-4 py-2 border-b">
    <NuxtImg
      :src="`${baseUrl}/assets/${img}`"
      alt=""
      class="object-cover w-16 h-16 p-0.5 rounded bg-dark-200"
    />

    <div>
      <h3 class="text-base text-gray-900">{{ name }}</h3>

      <dl class="mt-0.5 space-y-px text-[12px] text-gray-600">
        <div class="space-x-1">
          <dt class="inline">Ár:</dt>
          <dd class="inline font-medium tracking-wider">
            {{ price * quantity }} Ft
          </dd>
        </div>
      </dl>
    </div>

    <div class="flex items-center justify-end flex-1 gap-x-2">
      <!-- <AppCartInput class="w-12" v-model="count" />
      {{ count }} -->
      <p class="pt-1">x{{ quantity }}</p>

      <button
        class="p-1 text-gray-600 transition rounded-md hover:text-red-600 hover:bg-dark-200"
        title="Törlés"
        @click="emit('clearItem')"
      >
        <span class="sr-only">Remove item</span>
        <Icon name="mdi:trash-can-outline" size="18" />
      </button>
    </div>
  </li>
</template>
