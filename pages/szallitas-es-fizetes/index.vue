<script setup>
// const value = ref('GLS');
</script>

<template>
  <div class="bg-white">
    <div class="py-10 site-padding">
      <FormKit type="form" :actions="false" #default="{ value }">
        <FormKit
          type="multi-step"
          tab-style="progress"
          :classes="{
            outer: 'border-0 shadow-none',
          }"
        >
          <FormKit type="step" name="Szállítási cím">
            <CheckoutStepOne />
          </FormKit>

          <FormKit type="step" name="Szállítás módja">
            <CheckoutStepTwo />
          </FormKit>

          <FormKit type="step" name="Számlázási cím">
            <CheckoutStepThree />
          </FormKit>

          <template #stepNext>
            <FormKit type="submit" />
          </template>
        </FormKit>
        <pre class="mt-10">
          {{ value }}
        </pre>
      </FormKit>
      <!-- <div class="space-y-4">
        <FormKit type="text" name="Név" label="Név" placeholder="someValue" />
        <FormKit
          v-model="value"
          type="radio"
          label="Preferred transportation"
          :options="['GLS', 'MPL', 'Foxpost', 'Személyes átvétel']"
          help="How do you like to get around?"
        />
      </div> -->
    </div>
  </div>
</template>

<style>
/* .formkit-outer[data-type='multi-step']
  > [data-tab-style='progress']
  > .formkit-steps {
  border: 0;
  box-shadow: none;
} */
</style>
