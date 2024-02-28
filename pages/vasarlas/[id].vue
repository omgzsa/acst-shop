<script setup>
const { getItems } = useDirectusItems();
const route = useRoute();

const { data: vasarlas } = await useAsyncData(() => {
  return getItems({
    collection: 'vasarlasok',
    params: {
      // fields: ['*'],
      filter: {
        id: route.params.id,
        PaymentId: { _eq: route.query.paymentId },
      },
    },
  });
});

console.log(vasarlas.value);
</script>

<template>
  <div class="bg-white">
    <div class="py-16 site-padding">
      <h1>Fizetés</h1>
      <div class="py-4">
        route.query.paymentId: {{ route.query.paymentId }} route.params.id:
        {{ route.params.id }}
      </div>
      <div v-if="vasarlas">{{ vasarlas }}</div>
      <div v-else>Nincs.</div>
    </div>
  </div>
</template>
