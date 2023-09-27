<script setup>
const route = useRoute();

// const { getItemById } = useDirectusItems();
// const {
//   data: termek,
//   pending,
//   error,
//   refresh,
// } = await useAsyncData("termek", () =>
//   getItemById({
//     collection: termek,
//     id: route.params.id,
//     params: route.params.category,
//   })
// );

// console.log(termek)
</script>

<template>
  <div>
    <p>
      Itt egy termék a <strong>{{ route.params.category }}</strong> kategóriából,
    azon belül az <strong>{{ route.params.id }}</strong> termék.
    </p>
    <!-- <div class="max-w-xl">
      <code>{{ termek }}</code>
    </div> -->
  </div>
</template>
