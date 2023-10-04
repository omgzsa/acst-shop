<script setup>
const { defaultTransition } = useTailwindConfig();
</script>

<template>
  <div class="space-y-10">
    <div class="grid grid-cols-6 py-3 border-t-2 border-b-2 border-dark-200">
      <details class="col-span-4">
        <summary
          class="flex items-center justify-between list-none cursor-pointer"
        >
          <div class="flex items-center hover:font-semibold">
            <Icon name="mdi:filter-variant" size="22" class="mb-0.5 mr-2" />
            <span>Szűrés</span>
          </div>
        </summary>
        <div class="pt-4">FILTERS</div>
      </details>
      <span class="col-span-2 ml-auto">168 termék</span>
    </div>

    <!-- TEST FIELD -->
    <div>TEST FIELD 001</div>
  </div>
</template>
