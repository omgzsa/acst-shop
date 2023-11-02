<script setup>
defineProps({
  modelValue: { type: [Number, String], default: 1 },
});

const emit = defineEmits(['update:modelValue', 'input']);
const updateValue = (value) => {
  if (value !== '') {
    emit('update:modelValue', value);
  }
};
</script>

<template>
  <form @submit.prevent="updateValue">
    <label for="Line1Qty" class="sr-only"> darab </label>

    <input
      :value="modelValue"
      @input="updateValue($event.target.value)"
      type="number"
      min="1"
      value="1"
      id="Line1Qty"
      class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
    />
  </form>
</template>
