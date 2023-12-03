<script setup>
const props = defineProps({
  modelValue: String,
  type: String,
  label: [String, Boolean],
  name: String,
  placeholder: String,
  errorMessage: String,
});
</script>

<template>
  <div class="app-text-input-wrapper">
    <label v-if="label" :for="label" class="app-input-label">{{ label }}</label>
    <input
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="app-text-input"
      :class="{ 'ring-red-500': $attrs.error }"
    />
    <span
      v-motion-slide-bottom
      v-if="$attrs.error"
      class="app-text-input-validation"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>

<style scoped>
.app-text-input-wrapper {
  @apply relative space-y-1 text-sm;
}

.app-text-input-wrapper > .app-input-label {
  @apply block;
}

.app-text-input-wrapper > .app-text-input {
  @apply block w-full py-2 border-0 shadow-sm text-dark-100 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-100 sm:text-sm sm:leading-6;
}

.app-text-input-wrapper > .app-text-input-validation {
  @apply absolute left-0 text-xs font-medium text-red-500 bg-white -bottom-6;
}
</style>
