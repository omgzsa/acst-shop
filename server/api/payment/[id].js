export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const { barion } = useRuntimeConfig();

  const url = `https://api.test.barion.com/v2/Payment/GetPaymentState?POSKey=${barion.posKey}&PaymentId=${id}`;

  const data = await $fetch(url);

  return data;
});
