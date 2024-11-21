<script lang="ts" setup>
//
</script>

<template>
  <div class="py-10 md:py-16 bg-gray-50">
    <div class="mx-auto space-y-4 site-padding">
      <h1 class="mb-8">Kölcsönzés</h1>
      <p class="max-w-4xl">
        Nem szükséges megvásárolnia, amit egyszerűen bérelhet is! Legyen szó tetőboxról, csomagtartóról vagy kerékpártartóról, nálunk a legjobb megoldásokat találja az utazáshoz. Kölcsönzési szolgáltatásaink rugalmasak, gyorsak és kényelmesek, hogy Ön csak az élményekre koncentrálhasson.
      </p>
      <p class="max-w-4xl">
        Kérdése van? Forduljon hozzánk bizalommal! Segítünk megtalálni az igényeihez legjobban illő eszközöket, és gondoskodunk róla, hogy minden gördülékenyen menjen.
      </p>
      <p class="max-w-4xl mb-8">
        📞 Hívjon minket, vagy látogasson el boltunkba még ma!
      </p>
      <ClientOnly>
        <TheRentPriceTable />
      </ClientOnly>
    </div>
  </div>
</template>
