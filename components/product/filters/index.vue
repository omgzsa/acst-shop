<script setup>
const { defaultTransition } = useTailwindConfig();
</script>

<template>
  <div class="space-y-10">
    <div class="grid grid-cols-12 py-3 border-t-2 border-b-2 border-dark-200">
      <details class="max-w-5xl col-span-11">
        <summary
          class="flex items-center justify-between list-none cursor-pointer hover:font-semibold"
        >
          <div>
            <Icon name="mdi:filter-variant" size="20" class="mb-0.5 mr-2" />
            <span>Szűrés</span>
          </div>
        </summary>
        <div class="flex pt-4">FILTERS</div>
      </details>
      <span class="col-span-1 ml-auto">168 termék</span>
    </div>

    <!-- TEST FIELD -->
    <div>TEST FIELD 001</div>
  </div>
</template>
