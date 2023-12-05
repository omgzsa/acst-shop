<script setup>
import { useAuthStore } from '@/stores/auth';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const { defaultTransition } = useTailwindConfig();

const user = useDirectusUser();
const store = useAuthStore();

const email = inject('email');
const password = inject('password');

yup.setLocale({
  mixed: {
    required: 'A mező kitöltése kötelező!',
  },
  string: {
    email: 'Érvényes e-mail címet adjon meg!',
    min: ({ path, min }) =>
      `A ${(path = 'jelszó')} legalább ${min} karakter hosszú legyen.`,
  },
});

const { handleSubmit, isSubmitting, resetForm, meta } = useForm({
  validationSchema: yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    // passwordConfirm: yup
    //   .string()
    //   .required()
    //   .min(6)
    //   .oneOf([yup.ref('password')]),
  }),
});

const onSubmit = handleSubmit((values) => {
  store.userLogin(JSON.stringify(values, null, 2));

  resetForm({
    values: {
      email: '',
      password: '',
    },
  });
});

const handleLogout = () => {
  if (!user.value) return console.log('Nincs bejelentkezve!');
  store.userLogout();
};
</script>

<template>
  <div class="w-full max-w-xl py-16 space-y-3">
    <h2 class="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
      Bejelentkezés
    </h2>
    <div class="pb-4">
      <h3 class="text-lg">IMPORTANT INFORMATION</h3>
      <p class="text-sm">
        We are improving our website and this may impact the access to our
        customer’s accounts. If you are not able to log in now, please
        temporarily register again. We will be back on track soon!
      </p>
    </div>
    <form class="space-y-8" @submit="onSubmit" autocomplete="off">
      <AppInputText name="email" type="email" label="E-mail" v-model="email" />
      <AppInputText
        name="password"
        type="password"
        label="Jelszó"
        v-model="password"
      />

      <div class="flex flex-col pt-4 space-y-4">
        <button
          type="submit"
          class="px-4 py-2 space-x-2 font-semibold text-white border shadow-md border-dark-100 duration-400 bg-dark-100 hover:bg-accent-100 hover:text-dark-100 hover:shadow-lg"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Bejelentkezés...' : 'Bejelentkezés' }}
        </button>
        <div v-if="store.error" class="text-red-600">
          {{ store.error }}
        </div>
        <div>
          <span class="self-start text-sm tracking-wide"
            >Elfelejtetted a jelszavad?</span
          ><br />
          <NuxtLink
            rel="noopener noreferrer"
            href="#"
            class="self-start text-sm tracking-wide underline underline-offset-2 text-dark-100"
            >Kattints ide ha megváltoztatnád</NuxtLink
          >
        </div>
        <button
          type="submit"
          @click.prevent="handleLogout"
          class="px-4 py-2 space-x-2 font-semibold border shadow-md text-dark-100 border-dark-100 duration-400 bg-dark-200 hover:bg-dark-300 hover:text-white hover:shadow-lg"
          :class="defaultTransition"
        >
          Kijelentkezés
        </button>
      </div>
    </form>
  </div>
</template>
