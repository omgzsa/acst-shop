<script setup>
const baseUrl = useDirectusUrl();

const breakpoints = ref({
  320: {
    slidesPerView: 1.35,
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
  1540: {
    slidesPerView: 6.5,
    spaceBetween: 10,
  },
  1920: {
    slidesPerView: 7.5,
    spaceBetween: 10,
  },
});

const { getItems } = useDirectusItems();

const { data: nepszeruKategoriak } = await useAsyncData('termekKategoria', () =>
  getItems({
    collection: 'termekKategoria',
    params: {
      fields: [
        'id',
        'termekKategoriaNev',
        'termekKategoriaKep',
        'nepszeruKategoria',
        'slug',
      ],
      filter: {
        nepszeruKategoria: {
          _eq: 'true',
        },
      },
    },
  })
);
</script>

<template>
  <div class="space-y-8">
    <h2 class="site-padding">Népszerű kategóriák</h2>
    <Swiper
      :breakpoints="breakpoints"
      :modules="[SwiperPagination]"
      :pagination="{ clickable: true }"
      :space-between="5"
    >
      <SwiperSlide v-for="slide in nepszeruKategoriak" :key="slide.id">
        <HomeCategoriesCard
          :title="slide.termekKategoriaNev"
          :alt="slide.termekKategoriaNev"
          :img="`${baseUrl}/assets/${slide.termekKategoriaKep}`"
          :to="`/${slide.slug}`"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
/* SWIPER STYLINGS */
.swiper {
  --contentWidth: 1900px;

  padding-left: max(1.125rem, 57vw - var(--contentWidth) / 2);
}

/* 
@media (min-width: 1920px) {
  .swiper-cards {
    @apply site-padding;
  }
} */

.swiper-wrapper {
  max-width: 310px;
  overflow: visible;
}

/* .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
} */

.swiper-pagination,
.swiper-pagination-clickable,
.swiper-pagination-bullets,
.swiper-pagination-horizontal {
  position: relative;
  padding-top: 2rem;
  margin-right: auto;
  display: flex;
}

.swiper-pagination-bullet {
  width: 1.75rem;
  height: 0.3rem;
  border-radius: 10%;
  display: inline-block;
  background: #d1d1d1;
  opacity: 10.75;
  cursor: pointer;
}

.swiper-pagination-bullet:hover {
  background: #bbff00;
  transform: scaleY(1.5);
}

.swiper-pagination-bullet-active {
  background: #bbff00;
  transform: scaleY(1.5);
}
</style>
