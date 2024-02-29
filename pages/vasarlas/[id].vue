<script setup>
const route = useRoute();
const id = route.params.id;
const paymentId = route.query.paymentId;

// const { vasarlas } = await useGetPurchase(id, paymentId);

// async function useGetPurchase(id, paymentId) {
//   const vasarlas = ref({});

//   const { getItems } = useDirectusItems();
//   const data = await getItems({
//     collection: 'vasarlasok',
//     params: {
//       filter: {
//         id: id,
//         PaymentId: { _eq: paymentId },
//       },
//     },
//   });

//   vasarlas.value = data;

//   return {
//     vasarlas,
//   };
// }

const { data, error, pending } = await useFetch(`/api/payment/${paymentId}`);

console.log('from api/payment/:paymentId/', data.value);

const paymentStatusMessage = computed(() => {
  switch (data.value.Status) {
    case 'Succeeded':
      return 'A fizetés sikeres volt.';
    case 'Expired':
      return 'A fizetési folyamat biztonsági ideje lejárt.';
    case 'Canceled':
    case 'Failed':
      return 'A fizetés sikertelen volt.';
  }
});

const backInfo = computed(() => {
  const status = data.value.Status;
  return {
    link: {
      Succeeded: '/',
      Canceled: '/kosar',
      Failed: '/kosar',
      Expired: '/kosar',
    }[status],
    label: {
      Succeeded: 'Vissza a főoldalra',
      Canceled: 'Vissza a kosárhoz',
      Failed: 'Vissza a kosárhoz',
      Expired: 'Vissza a kosárhoz',
    }[status],
  };
});

if (data.value) {
  const { updateItem } = useDirectusItems();
  await useAsyncData(() => {
    return updateItem({
      collection: 'vasarlasok',
      id: id,
      item: {
        PaymentStatus: data.value.Status,
      },
    });
  });
}
</script>

<template>
  <div class="bg-white">
    <div class="grid h-screen py-16 place-content-center site-padding gap-y-16">
      <h1>Tranzakció folyamatban...</h1>
      <!-- <div class="py-4">
        <p>paymentId: {{ route.query.paymentId }}</p>
        <p>id: {{ route.params.id }}</p>
      </div> -->
      <!-- 
        if Status = 'Success'
       -->
      <div v-if="data !== null" class="space-y-8">
        <div>
          Payment status: {{ data.Status || 'N/A' }}
          <h2>{{ paymentStatusMessage || 'N/A' }}</h2>
        </div>

        <div>
          <AppButton :to="`${backInfo.link}`" :label="backInfo.label" />
        </div>
      </div>

      <div v-else>
        <Icon name="svg-spinners:bars-fade" class="inline-block w-6 h-6" />
      </div>
    </div>
  </div>
</template>
