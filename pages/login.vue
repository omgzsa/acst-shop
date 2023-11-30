<script setup>
// import { useUserStore } from '@/stores/users';

// const { users, fetchUsers } = useUserStore();
// await fetchUsers();
// console.log(users.value);

const { login, logout } = useDirectusAuth();
const user = useDirectusUser();

const email = ref('');
const password = ref('');

const onSubmit = async () => {
  try {
    await login({ email: email.value, password: password.value });
  } catch (e) {
    console.log(e);
  }
};

const logOut = async () => {
  await logout();
};
</script>

<template>
  <div class="bg-white">
    <div class="site-padding">
      <h1>Login</h1>
      <input type="email" placeholder="Your E-Mail Address" v-model="email" />
      <input type="password" placeholder="Your Password" v-model="password" />
      <br />
      <button
        class="px-6 py-3 mr-4 rounded text-dark-100 bg-accent-200 hover:bg-accent-100"
        @click="onSubmit"
      >
        Login
      </button>
      <button
        class="px-6 py-3 text-white bg-gray-500 rounded hover:bg-gray-800"
        @click="logOut"
      >
        Logout
      </button>
    </div>
    <div class="site-padding" v-if="user">
      <h1>Current User</h1>
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>
