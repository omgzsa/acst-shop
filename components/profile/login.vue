<script setup>
import { useAuthStore } from '@/stores/auth';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
// const { defaultTransition } = useTailwindConfig();

const store = useAuthStore();

const email = inject('email');
const password = inject('password');

yup.setLocale({
  mixed: {
    required: 'A mező kitöltése kötelező!',
  },
  string: {
    email: 'Érvényes e-mail címet adj meg!',
    min: ({ path, min }) =>
      `A ${(path = 'jelszó')} legalább ${min} karakter hosszú legyen.`,
  },
});

const { handleSubmit, isSubmitting, resetForm, setTouched, meta } = useForm({
  validationSchema: yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  }),
});

const onSubmit = handleSubmit((values) => {
  store.userLogin(JSON.stringify(values, null, 2));

  setTouched({
    email: false,
    password: false,
  });

  resetForm({
    values: {
      email: '',
      password: '',
    },
  });
});
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

      <div class="flex flex-col pt-4 space-y-10">
        <button
          type="submit"
          class="px-4 py-2 space-x-2 font-semibold text-white border shadow-md border-dark-100 duration-400 bg-dark-100 hover:bg-accent-100 hover:text-dark-100 hover:shadow-lg"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Bejelentkezés...' : 'Bejelentkezés' }}
        </button>
        <div v-if="store.logError" class="text-red-600">
          <!-- {{ store.logError.statusCode }}<br /> -->
          {{ store.logError.message }}
        </div>
        <div>
          <span class="self-start text-sm tracking-wide"
            >Elfelejtetted a jelszavad?</span
          ><br />
          <NuxtLink
            rel="noopener noreferrer"
            href="#"
            class="self-start text-sm tracking-wide underline underline-offset-2 text-dark-300 hover:text-dark-100"
            >Kattints ide ha megváltoztatnád</NuxtLink
          >
        </div>
      </div>
    </form>
  </div>
</template>
