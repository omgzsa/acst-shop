<script setup>
const { defaultTransition } = useTailwindConfig();
</script>

<template>
  <div class="">
    <div class="grid grid-cols-6 py-3 border-t-2 border-b-2 border-dark-200">
      <details class="col-span-4 sm:col-span-5">
        <summary
          class="flex items-center justify-between list-none cursor-pointer"
        >
          <div class="flex items-center hover:font-semibold">
            <Icon name="mdi:filter-variant" size="22" class="mb-0.5 mr-2" />
            <span>Szűrés</span>
          </div>
        </summary>
        <p class="pt-4">FILTERS</p>
      </details>
      <span class="col-span-2 ml-auto sm:col-span-1">168 termék</span>
    </div>
  </div>
</template>
