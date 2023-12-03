<script setup>
import { useAuthStore } from '@/stores/auth';
const { defaultTransition } = useTailwindConfig();

const email = inject('email');
const password = inject('password');

const firstName = ref('');
const lastName = ref('');
// const repeatPassword = ref('');
// const marketingAccept = ref(false);

const store = useAuthStore();

const handleCreateAccount = () => {
  store.registerUser(
    firstName.value,
    lastName.value,
    props.email,
    props.password
  );
  // reset for fields to empty string
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  password.value = '';
};

const passwordValidator = computed(() => {
  return password.value !== repeatPassword.value;
});
</script>

<template>
  <section class="w-full max-w-xl py-16 space-y-3">
    <h2 class="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
      Regisztráció
    </h2>

    <form class="grid grid-cols-6 mt-8 gap-y-8 gap-x-4">
      <div class="col-span-6">
        <AppInputText
          v-model="lastName"
          type="text"
          label="Vezetéknév"
          name="lastname"
          placeholder="Babszem"
        />
      </div>

      <div class="col-span-6">
        <AppInputText
          v-model="firstName"
          type="text"
          label="Keresztnév"
          name="firstname"
          placeholder="Jankó"
        />
      </div>

      <div class="col-span-6">
        <AppInputText
          v-model="email"
          type="text"
          label="E-mail"
          name="email_register"
          placeholder="email@pelda.hu"
        />
      </div>

      <div class="col-span-6">
        <AppInputText
          v-model="password"
          type="password"
          label="Jelszó"
          name="password_register"
          placeholder="******"
        />
      </div>

      <div class="col-span-6 mt-4">
        <label for="MarketingAccept" class="flex gap-4">
          <input
            type="checkbox"
            id="MarketingAccept"
            class="w-5 h-5 transition-all bg-white border-gray-400 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-accent-100 checked:text-dark-100"
          />

          <span class="text-sm text-gray-700">
            I want to receive emails about events, product updates and company
            announcements.
          </span>
        </label>
      </div>

      <div class="col-span-6">
        <p class="text-sm text-gray-500">
          A fiók létrehozásával Ön elfogadja a
          <a href="#" class="text-gray-700 underline">
            felhasználói feltételeket</a
          >
          és az
          <a href="#" class="text-gray-700 underline"
            >adatvédelmi szabályzatot</a
          >.
        </p>
      </div>

      <div class="flex flex-col col-span-full sm:gap-4">
        <button
          type="submit"
          @click.prevent="handleCreateAccount"
          class="px-4 py-2 space-x-2 font-semibold text-white border shadow-md border-dark-100 duration-400 bg-dark-100 hover:bg-accent-100 hover:text-dark-100 hover:shadow-lg"
          :class="defaultTransition"
        >
          Regisztráció
        </button>
      </div>
    </form>
  </section>
</template>
