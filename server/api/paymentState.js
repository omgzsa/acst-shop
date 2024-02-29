export default defineEventHandler(async (event) => {
  const data = await $fetch(
    'https://api.test.barion.com/v2/Payment/GetPaymentState?POSKey=909c15c0-ba0a-4d6f-a9f7-1691d9616b16&PaymentId=2e99d86950d6ee118c02001dd8b71cc4'
  );

  // paymentState.value = data;

  return data;
});
