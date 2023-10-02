<script setup>
const config = useRuntimeConfig();

const baseUrl = config.public.directusUrl;

const breakpoints = ref({
  320: {
    slidesPerView: 1.125,
    spaceBetween: 10,
  },
  420: {
    slidesPerView: 2.125,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 3.125,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 3.5,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 4.5,
    spaceBetween: 10,
  },
  1280: {
    slidesPerView: 5.5,
    spaceBetween: 10,
  },
});

const { getItems } = useDirectusItems();

const { data: kategoriak } = await useAsyncData('termekKategoria', () =>
  getItems({
    collection: 'termekKategoria',
    fields: ['id', 'termekKategoriaNev', 'termekKategoriaKep'],
  })
);

const nepszeruKategoriak = computed(() => {
  return kategoriak.value.filter((kat) => kat.nepszeruKategoria === true);
});
</script>

<template>
  <div class="space-y-12 ">
    <div class="site-padding">
      <h2>Népszerű kategóriák</h2>
    </div>
    <Swiper
      :breakpoints="breakpoints"
      :modules="[SwiperPagination]"
      :pagination="{ clickable: true }"
      :space-between="5"
      class="swiper-cards"
    >
      <SwiperSlide v-for="slide in nepszeruKategoriak" :key="slide.id">
        <HomeCategoriesCard
          :title="slide.termekKategoriaNev"
          :alt="slide.termekKategoriaNev"
          :img="`${baseUrl}/assets/${slide.termekKategoriaKep}`"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
/* .swiper {
  overflow: hidden;
} */

.swiper-cards {
  @apply max-w-full overflow-hidden pl-4 sm:pl-6 md:pl-8 xl:pl-12;
  /* max-width: 100vw;
  overflow: hidden; */
}

.swiper-wrapper {
  max-width: 310px;
  overflow: visible;
}
/* 
@media screen and (min-width: 420px) {
  .swiper-wrapper {
    max-width: 400px;
  }
}

@media screen and (min-width: 640px) {
  .swiper-wrapper {
    max-width: 600px;
  }
}

@media screen and (min-width: 768px) {
  .swiper-wrapper {
    max-width: 718px;
  }
}

@media screen and (min-width: 1024px) {
  .swiper-wrapper {
    max-width: 976px;
  }
}

@media screen and (min-width: 1280px) {
  .swiper-wrapper {
    max-width: 1210px;
  }
}

@media screen and (min-width: 1540px) {
  .swiper-wrapper {
    max-width: 1440px;
  }
} */

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-pagination,
.swiper-pagination-clickable,
.swiper-pagination-bullets,
.swiper-pagination-horizontal {
  position: relative;
  padding-top: 2rem;
  margin-right: auto;
  display: flex;
}

/* .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0;
} */

.swiper-pagination-bullet {
  width: 1.75rem;
  height: 0.3rem;
  border-radius: 10%;
  display: inline-block;
  background: #d1d1d1;
  opacity: 10.75;
  cursor: pointer;
}

.swiper-pagination-bullet-active {
  background: #bbff00;
  transform: scaleY(1.5);
}
</style>
