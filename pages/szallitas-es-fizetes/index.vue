<script setup>
//
</script>

<template>
  <div class="bg-white">
    <div class="py-10 site-padding">
      <FormKit
        label="Név"
        name="fullName"
        type="text"
        help="Kérjük adja meg a teljes nevét"
        validation="required"
        value="@useFormkit"
        prefix-icon="avatarMan"
      />
    </div>
  </div>
</template>

<style></style>
