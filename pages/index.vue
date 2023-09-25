<script setup>
const data = ref([]);
const { getItems } = useDirectusItems();

const fetchFeaturedCategories = async () => {
  try {
    const filters = { nepszeruKategoria: { _eq: 'true' } };
    data.value = await getItems({
      collection: 'termekKategoria',
      params: {
        filter: filters,
      },
    });
    // console.log(data.value);
  } catch (error) {
    console.error(error);
  }
};

await fetchFeaturedCategories();

// const { getItems } = useDirectusItems();
// const { data } = await useAsyncData('termekek', () =>
//   getItems({
//     collection: 'termekek',
//     fields: ['id', 'termekNev', 'termekAr', 'termekLeiras', 'termekKep'],
//   })
// );

const slides = ref([
  {
    id: 1,
    title: 'Kerékpártartók',
    img: 'kerekpartartok.webp',
  },
  {
    id: 2,
    title: 'Tetőboxok',
    img: 'tetocsomagtartok.webp',
  },
  {
    id: 3,
    title: 'Csomagtartó boxok és kosarak',
    img: 'csomagtarto-boxok.webp',
  },
  {
    id: 4,
    title: 'Bőröndök és utazótáskák',
    img: 'borondok-es-utazotaskak.webp',
  },
  {
    id: 5,
    title: 'Kerékpártartók',
    img: 'kerekpartartok.webp',
  },
  {
    id: 6,
    title: 'Tetőboxok',
    img: 'tetocsomagtartok.webp',
  },
  {
    id: 7,
    title: 'Csomagtartó boxok és kosarak',
    img: 'csomagtarto-boxok.webp',
  },
  {
    id: 8,
    title: 'Bőröndök és utazótáskák',
    img: 'borondok-es-utazotaskak.webp',
  },
]);
</script>

<template>
  <section class="grid gap-y-32">
    <HomeHero title="Maximális kényelem a szabadban" />
    <section>
      <HomeCategories />
    </section>
    <section>
      <HomeCta title="Emeld a következő szintre szabadtéri élményeid" />
    </section>
    <section class="">
      <h2 class="site-padding">Népszerű termékek</h2>
      <div class="bg-gray-400 h-80"></div>
    </section>
    <section>
      <HomeFeatured />
    </section>
    <section class="grid items-center justify-center h-48">
      ... MORE CONTENT TO COME
    </section>
  </section>
</template>
