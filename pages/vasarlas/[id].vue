<script setup>
const route = useRoute();
const id = route.params.id;
const paymentId = route.query.paymentId;

const { vasarlas } = await useGetPurchase(id, paymentId);

async function useGetPurchase(id, paymentId) {
  const vasarlas = ref({});

  const { getItems } = useDirectusItems();
  const data = await getItems({
    collection: 'vasarlasok',
    params: {
      filter: {
        id: id,
        PaymentId: { _eq: paymentId },
      },
    },
  });

  vasarlas.value = data;

  return {
    vasarlas,
  };
}

const { data } = await useFetch('/api/paymentState');

const paymentStatusMessage = computed(() => {
  switch (data.value.Status) {
    case 'Succeeded':
      return 'A fizetés sikeres volt.';
    case 'Expired':
      return 'A fizetési folyamat biztonsági ideje lejárt.';
    case 'Canceled':
    case 'Failed':
      return 'A fizetés sikertelen volt.';
    default:
      return '';
  }
});

const backLink = computed(() => {
  switch (data.value.Status) {
    case 'Succeeded':
      return '/';
    case 'Expired' || 'Canceled' || 'Failed':
      return '/kosar';
  }
});

const backLabel = computed(() => {
  switch (data.value.Status) {
    case 'Succeeded':
      return 'Vissza a főoldalra';
    case 'Expired' || 'Canceled' || 'Failed':
      return 'Vissza a kosárhoz';
  }
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
      <!-- <h1>Tranzakció folyamatban...</h1> -->
      <!-- <div class="py-4">
        <p>paymentId: {{ route.query.paymentId }}</p>
        <p>id: {{ route.params.id }}</p>
      </div> -->
      <!-- 
        if Status = 'Success'
       -->
      <div v-if="data.Status !== null" class="space-y-8">
        <div>
          Payment status: {{ data.Status }}
          <h2>{{ paymentStatusMessage }}</h2>
        </div>

        <div>
          <AppButton :to="`${backLink}`" :label="backLabel" />
        </div>
      </div>

      <div v-else>
        <Icon name="svg-spinners:bars-fade" class="inline-block w-6 h-6" />
      </div>
    </div>
  </div>
</template>
