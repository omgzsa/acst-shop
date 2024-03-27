<script setup>
const breakpoints = ref({
  320: {
    slidesPerView: 2.1,
    spaceBetween: 10,
  },
  420: {
    slidesPerView: 2.5,
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
const { data: popularProducts } = await useAsyncData('nepszeruTermekek', () => {
  return getItems({
    collection: 'termekek',
    params: {
      fields: [
        'id',
        'termekNev',
        'termekLeiras',
        'kapcsolodoKategoria.slug',
        'kapcsolodoAlKategoria.slug',
        'termekKep',
        'slug',
      ],
      filter: {
        nepszeruTermek: {
          _eq: 'true',
        },
      },
    },
  });
});
</script>

<template>
  <div class="py-10">
    <Swiper
      :breakpoints="breakpoints"
      :modules="[SwiperPagination]"
      :pagination="{ clickable: true }"
      :space-between="5"
      class="swiper"
    >
      <SwiperSlide v-for="p in popularProducts" :key="p.id">
        <HomePopularCard :product="p" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
/* SWIPER STYLINGS */
/* #__nuxt > div > main > div > section > section:nth-child(4) > div > .swiper {
  @apply pl-4 overflow-hidden sm:pl-6 md:pl-8 xl:pl-12;
}

@media (min-width: 1920px) {
  .swiper-cards {
    @apply site-padding;
  }
}

.swiper-wrapper {
  max-width: 310px;
  overflow: visible;
}

.swiper-slide {
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
