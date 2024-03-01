<script setup>
definePageMeta({
  middleware: ['auth'],
});

const user = useDirectusUser();

// const { orders } = useGetOrders();

const { getItems } = useDirectusItems();

const { data } = await useAsyncData(() => {
  return getItems({
    collection: 'vasarlasok',
    params: {
      fields: ['PaymentId', 'PaymentStatus', 'teljesOsszeg', 'vasarlo'],
      filter: {
        vasarlo: user.value.id,
      },
      sort: ['-date_created'],
    },
  });
});

console.log(data.value);
</script>

<template>
  <div class="bg-white">
    <div class="py-10 site-padding">
      <div class="grid grid-cols-6">
        <div class="col-span-1">
          <ProfileNav />
        </div>
        <div v-if="data" class="flex flex-col col-span-5 space-y-4">
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-3 py-3 text-xs font-medium tracking-wide text-left uppercase text-dark-100"
                >
                  Payment ID
                </th>
                <th
                  scope="col"
                  class="px-3 py-3 text-xs font-medium tracking-wide text-left uppercase text-dark-100"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="px-3 py-3 text-xs font-medium tracking-wide text-left uppercase text-dark-100"
                >
                  Price
                </th>
                <th scope="col" class="relative py-3 pl-3 pr-4 sm:pr-6">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="i in data" :key="i.PaymentId">
                <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {{ i.PaymentId }}
                </td>
                <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {{ i.PaymentStatus }}
                </td>
                <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {{ i.teljesOsszeg }} Ft
                </td>
                <td
                  class="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6"
                >
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Details</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
