<script setup>
import { useAuthStore } from '@/stores/auth';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const store = useAuthStore();
const error = useError();

const email = inject('email');
const password = inject('password');
const first_name = inject('first_name');
const last_name = inject('last_name');

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

const { handleSubmit, isSubmitting, resetForm, setTouched } = useForm({
  validationSchema: yup.object({
    first_name: yup
      .string()
      .required()
      .matches(/^[a-zA-Z]+$/),
    last_name: yup
      .string()
      .required()
      .matches(/^[a-zA-Z]+$/),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  }),
});

// async-ra csereltem
const onSubmit = handleSubmit(async (values, ctx) => {
  const { first_name, last_name, email, password } = values;
  await store.userRegister(first_name, last_name, email, password);

  resetForm({
    values: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },
  });
  setTouched({
    values: {
      first_name: false,
      last_name: false,
      email: false,
      password: false,
    },
  });
});
// const marketingAccept = ref(false);
</script>

<template>
  <section class="w-full max-w-xl py-16 space-y-3">
    <h2 class="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
      Regisztráció
    </h2>
    <form class="space-y-8" @submit="onSubmit" autocomplete="off">
      <AppInputText
        name="first_name"
        type="text"
        label="Keresztnév"
        v-model="first_name"
      />
      <AppInputText
        name="last_name"
        type="text"
        label="Vezetéknév"
        v-model="last_name"
      />
      <AppInputText name="email" type="email" label="E-mail" v-model="email" />
      <AppInputText
        name="password"
        type="password"
        label="Jelszó"
        v-model="password"
      />

      <div class="pt-4">
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

      <div>
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

      <div v-if="store.regError" class="text-red-600">
        <!-- {{ store.regError.statusCode }}<br /> -->
        {{ store.regError.message }}
      </div>

      <div class="flex flex-col space-y-4">
        <button
          type="submit"
          class="px-4 py-2 space-x-2 font-semibold text-white border shadow-md border-dark-100 duration-400 bg-dark-100 hover:bg-accent-100 hover:text-dark-100 hover:shadow-lg"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Regisztráció...' : 'Regisztráció' }}
        </button>
      </div>
    </form>
  </section>
</template>
