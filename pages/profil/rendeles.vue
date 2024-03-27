<script setup>
definePageMeta({
  middleware: ['auth'],
});

const user = useDirectusUser();
const orderInModal = ref(null);
const show = ref(false);

// const { orders } = useGetOrders();

const { getItems } = useDirectusItems();
const { data } = await useAsyncData(() => {
  return getItems({
    collection: 'vasarlasok',
    params: {
      fields: [
        'date_created',
        'PaymentId',
        'PaymentStatus',
        'teljesOsszeg',
        'vasarlo',
      ],
      filter: {
        vasarlo: user.value.id,
        // PaymentStatus: { _eq: 'Succeeded' },
        PaymentStatus: { _in: ['Succeeded', 'Expired', 'Canceled'] },
      },
      sort: ['-date_created'],
    },
  });
});

function formatDate(date) {
  return new Date(date).toLocaleDateString('hu-HU');
}

const handleOpen = (e, item) => {
  show.value = true;
  orderInModal.value = item;
};
</script>

<template>
  <div class="bg-white">
    <div class="py-10 site-padding">
      <h1 class="pb-8">Rendeléseim</h1>
      <div class="grid grid-cols-6">
        <!-- 
          PROFILE NAVIGATION
         -->
        <div class="pb-8 md:m-0 col-span-full md:col-span-1">
          <ProfileNav />
        </div>
        <div v-if="data" class="overflow-x-auto col-span-full md:col-span-5">
          <table class="min-w-full text-sm bg-white divide-y-2 divide-gray-200">
            <!-- 
              TABLE HEADER
             -->
            <thead class="text-left">
              <tr>
                <th
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                >
                  Payment ID
                </th>
                <th
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                >
                  Status
                </th>
                <th
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                >
                  Date
                </th>
                <th
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                >
                  Price
                </th>
                <th class="px-4 py-2"></th>
              </tr>
            </thead>

            <!-- 
              TABLE BODY
             -->
            <tbody class="divide-y divide-gray-200">
              <tr v-for="i in data" :key="i.PaymentId">
                <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {{ i.PaymentId }}
                </td>
                <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {{ i.PaymentStatus }}
                </td>
                <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {{ formatDate(i.date_created) }}
                </td>
                <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {{ i.teljesOsszeg.toLocaleString('hu-HU') }} Ft
                </td>
                <td class="px-4 py-2 whitespace-nowrap">
                  <button
                    @click="handleOpen($event, i)"
                    class="inline-block px-3 py-1 space-x-2 font-semibold transition-all shadow ring-1 ring-accent-100 duration-400 bg-accent-100 text-dark-100 hover:bg-dark-100 hover:text-white hover:shadow-lg"
                  >
                    Megnézem
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <AppModal
            v-model="show"
            :order="orderInModal"
            @confirm="() => (show = false)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
