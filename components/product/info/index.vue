<script setup>
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  id: Number,
  img: String,
  name: String,
  description: String,
  details: String,
  price: Number,
  hasVarranty: Boolean,
});

const emit = defineEmits(['add-to-cart']);

const addProductToCart = () => {
  emit('add-to-cart', {
    id: props.id,
    name: props.name,
    price: props.price,
    img: props.img,
  });
};
</script>

<template>
  <div class="pb-10 space-y-4 lg:col-span-1">
    <!-- PRODUCT IMPORTANT INFOS -->
    <div class="flex flex-col pt-4 pb-10 space-y-6 border-b">
      <h1>{{ props.name }}</h1>
      <p>{{ props.description }}</p>
      <div class="tracking-wide">
        <span class="block text-xs sm:text-sm">Online ár:</span>
        <div class="space-x-1">
          <p class="inline text-2xl font-bold lg:text-3xl">
            {{ props.price }} Ft
          </p>
          <span>(ÁFA-val)</span>
        </div>
      </div>
      <button
        class="flex items-center justify-center px-4 py-2 space-x-2 font-semibold border rounded-md shadow-md border-accent-100 duration-400 bg-accent-100 text-dark-100 hover:bg-dark-100 hover:text-white hover:shadow-lg"
        :class="defaultTransition"
        @click="addProductToCart"
      >
        <Icon name="mdi:cart-outline" class="mb-1 text-lg" />
        <span class="text-base tracking-wide">Kosárba rakom</span>
      </button>
    </div>

    <!-- PRODUCT HASVARRANTY BOOL -->
    <div
      v-if="hasVarranty"
      class="flex items-center pt-4 pb-8 space-x-2 border-b"
    >
      <Icon
        name="mdi:check"
        class="p-0.5 text-xl text-white rounded-full bg-dark-100"
      />
      <span class="tracking-wide"> Eredeti THULE garancia </span>
    </div>

    <!-- PRODUCT LONG DESCRIPTION -->
    <div class="pt-4 pb-8 space-y-4 border-b lg:border-b-0">
      <h3>Termék leírása</h3>
      <p>
        {{ props.details }}
      </p>
    </div>
  </div>
</template>
