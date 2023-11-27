<script setup>
const { createUser } = useDirectusAuth();

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const repeatPassword = ref('');

const passwordValidator = computed(() => {
  return password.value !== repeatPassword.value;
});

const handleCreateAccount = async () => {
  try {
    await createUser({
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      password: password.value,
      role: 'ef005037-964e-4b20-bd23-b60f4f38fa6e',
      status: 'active',
    });
    alert('Registered successfully');
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <section class="bg-white">
    <div class="grid py-16 site-padding">
      <div class="max-w-xl lg:max-w-2xl">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Welcome to ACST
        </h1>

        <p class="mt-4 leading-relaxed text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
          dolorum aliquam, quibusdam aperiam voluptatum.
        </p>

        <form class="grid grid-cols-6 gap-6 mt-8">
          <div class="col-span-6 sm:col-span-3">
            <label
              for="FirstName"
              class="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              v-model="firstName"
              class="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="LastName"
              class="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              v-model="lastName"
              class="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
            />
          </div>

          <div class="col-span-6">
            <label for="Email" class="block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              id="Email"
              v-model="email"
              class="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="Password"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              type="password"
              id="Password"
              v-model="password"
              class="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
            />
          </div>

          <div class="relative col-span-6 sm:col-span-3">
            <label
              for="PasswordConfirmation"
              class="block text-sm font-medium text-gray-700"
            >
              Password Confirmation
            </label>

            <input
              type="password"
              id="PasswordConfirmation"
              v-model="repeatPassword"
              class="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
            />

            <span
              v-if="passwordValidator"
              class="absolute bottom-0 left-0 -mb-6 text-xs font-medium text-red-500 bg-white rounded-md"
            >
              Passwords do not match
            </span>
          </div>

          <div class="col-span-6 mt-4">
            <label for="MarketingAccept" class="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                class="w-5 h-5 bg-white border-gray-200 rounded-md shadow-sm"
              />

              <span class="text-sm text-gray-700">
                I want to receive emails about events, product updates and
                company announcements.
              </span>
            </label>
          </div>

          <div class="col-span-6">
            <p class="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" class="text-gray-700 underline">
                terms and conditions
              </a>
              and
              <a href="#" class="text-gray-700 underline">privacy policy</a>.
            </p>
          </div>

          <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              @click="handleCreateAccount"
              class="inline-block px-12 py-3 text-sm font-medium text-white transition bg-blue-600 border border-blue-600 rounded-md shrink-0 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Create an account
            </button>

            <p class="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <NuxtLink href="/login" class="text-gray-700 underline"
                >Log in</NuxtLink
              >.
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
