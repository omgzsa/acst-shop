<script setup lang="ts">
import { usePriceTable, type PriceData } from '~/composables/usePriceTable'
const { headers, rows } = usePriceTable()

const isPriceObject = (price: string | PriceData): price is PriceData => {
  return typeof price === 'object' && price !== null && 'text' in price
}
</script>

<template>
  <div class="overflow-x-auto">
    <table class="min-w-full overflow-hidden bg-white rounded-lg shadow-md">
      <thead class="text-white bg-gray-800">
        <tr>
          <th v-for="header in headers" :key="header" class="px-3 py-2 text-left sm:px-4 sm:py-3">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr v-for="row in rows" :key="row.product" class="text-xs hover:bg-gray-50 xs:text-sm sm:text-base">
          <td class="px-3 py-2 sm:px-4 sm:py-3">{{ row.product }}</td>
          <td class="px-3 py-2 sm:px-4 sm:py-3">
            <template v-if="!isPriceObject(row.price)">
              {{ row.price }}
            </template>
            <template v-else>
              <span>{{ row.price.text }}</span>
              <div class="text-xs text-gray-500 xs:text-sm sm:text-base">{{ row.price.note }}</div>
            </template>
          </td>
          <td class="px-3 py-2 sm:px-4 sm:py-3">{{ row.deposit }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
