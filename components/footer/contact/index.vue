<script setup>
defineProps({
  address: String,
  phone: String,
  email: String,
  openingHours: Object,
});
</script>

<template>
  <div class="flex flex-col space-y-2">
    <FooterContactItem icon="mdi:map-marker">
      <a class="footer-link hover:text-accent-100">
        {{ address }}
      </a>
    </FooterContactItem>
    <FooterContactItem icon="mdi:clock-time-eight">
      <ul>
        <li v-for="day in openingHours" :key="day">
          {{ day }}
        </li>
      </ul>
    </FooterContactItem>
    <FooterContactItem icon="mdi:phone">
      <a class="footer-link hover:text-accent-100">
        {{ phone }}
      </a>
    </FooterContactItem>
    <FooterContactItem icon="mdi:email">
      <a class="footer-link hover:text-accent-100">
        {{ email }}
      </a>
    </FooterContactItem>
  </div>
</template>
