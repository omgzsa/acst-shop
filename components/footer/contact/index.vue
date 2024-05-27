<script lang="ts" setup>
defineProps({
  address: String,
  phone: String,
  email: String,
  openingHours: Object,
});
</script>

<template>
  <div class="flex flex-col col-span-1 space-y-2">
    <FooterContactItem icon="mdi:map-marker">
      <a
        href="https://maps.app.goo.gl/2iGQBRQAvzb6iHah9"
        target="_blank"
        class="footer-link hover:text-accent-100 text-zinc-50"
      >
        {{ address }}
      </a>
    </FooterContactItem>
    <FooterContactItem icon="mdi:clock-time-eight">
      <ul>
        <li v-for="day in openingHours" :key="day" class="text-zinc-50">
          {{ day }}
        </li>
      </ul>
    </FooterContactItem>
    <FooterContactItem icon="mdi:phone">
      <a
        :href="`tel:${phone}`"
        class="footer-link hover:text-accent-100 text-zinc-50"
      >
        {{ phone }}
      </a>
    </FooterContactItem>
    <FooterContactItem icon="mdi:email">
      <a
        :href="`mailto:${email}`"
        class="footer-link hover:text-accent-100 text-zinc-50"
      >
        {{ email }}
      </a>
    </FooterContactItem>
  </div>
</template>
