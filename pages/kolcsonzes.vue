<script lang="ts" setup>
//
</script>

<!-- <template>
  <ClientOnly>
    <div class="py-10 bg-white">
      <section class="site-padding">
        <h1 class="mb-12">Kölcsönzés</h1>
        <div class="overflow-x-auto">
          <table class="w-full text-left border border-collapse border-gray-300">
            <thead>
              <tr class="bg-gray-100">
                <th class="px-4 py-2 border border-gray-300">Termék</th>
                <th class="px-4 py-2 border border-gray-300">Ára</th>
                <th class="px-4 py-2 border border-gray-300">Kaució</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="flex flex-col px-4 py-2 space-y-2 text-xs border border-gray-300 xs:text-sm sm:text-base sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4">
                  <span>Csomagtartók</span>
                </td>
                <td class="px-4 py-2 text-xs border border-gray-300 xs:text-sm sm:text-base">1 300 Ft/nap</td>
                <td class="px-4 py-2 text-xs border border-gray-300 xs:text-sm sm:text-base">10 000 Ft/alkalom</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="flex flex-col px-4 py-2 space-y-2 text-xs border border-gray-300 xs:text-sm sm:text-base sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4">
                  <span>Tetőboxok</span>
                </td>
                <td class="px-4 py-2 text-xs border border-gray-300 xs:text-sm sm:text-base">1 300 Ft/nap</td>
                <td class="px-4 py-2 text-xs border border-gray-300 xs:text-sm sm:text-base">30 000 Ft/alkalom</td>
              </tr>
              <tr>
                <td class="flex flex-col px-4 py-2 space-y-2 text-xs border border-gray-300 xs:text-sm sm:text-base sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4">
                  <span>Csomagtartó + Box</span>
                </td>
                <td class="px-4 py-2 text-xs border border-gray-300 xs:text-sm sm:text-base">2 500 Ft/nap</td>
                <td class="px-4 py-2 text-xs border border-gray-300 xs:text-sm sm:text-base">30 000 Ft/alkalom</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="flex flex-col px-4 py-2 space-y-2 text-xs border border-gray-300 xs:text-sm sm:text-base sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4">
                  <span>Síléctartó</span>
                </td>
                <td class="px-4 py-2 text-xs border border-gray-300 xs:text-sm sm:text-base">800 Ft/nap</td>
                <td class="px-4 py-2 text-xs border border-gray-300 xs:text-sm sm:text-base">5 000 Ft/alkalom</td>
              </tr>
              <tr>
                <td class="flex flex-col px-4 py-2 space-y-2 text-xs border border-gray-300 xs:text-sm sm:text-base sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4">
                  <span>Kerékpártartó tetőcsomagtartóra</span>
                </td>
                <td class="px-4 py-2 text-xs border border-gray-300 xs:text-sm sm:text-base">800 Ft/nap</td>
                <td class="px-4 py-2 text-xs border border-gray-300 xs:text-sm sm:text-base">5 000 Ft/alkalom</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="flex flex-col px-4 py-2 space-y-2 text-xs border border-gray-300 xs:text-sm sm:text-base sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4">
                  <span>Kerékpártartó vonóhorogra</span>
                </td>
                <td class="px-4 py-2 text-xs border border-gray-300 xs:text-sm sm:text-base">3 300 Ft, 3 700 Ft, 4 200 Ft/nap (típus és kerékpár száma függő)</td>
                <td class="px-4 py-2 text-xs border border-gray-300 xs:text-sm sm:text-base">30 000 Ft/alkalom</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </ClientOnly>
</template> -->

<template>
  <div class="min-h-screen p-4 bg-gray-50 md:p-8">
    <div class="mx-auto max-w-7xl">
      <h1 class="mb-12">Kölcsönzés</h1>
      <ClientOnly>
        <TheRentPriceTable />
      </ClientOnly>
    </div>
  </div>
</template>
