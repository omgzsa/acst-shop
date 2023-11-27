<script setup lang="ts">
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
  logout();
};
</script>

<template>
  <div class="bg-white">
    <div class="site-padding">
      <h1>Login</h1>
      <input type="email" placeholder="Your E-Mail Address" v-model="email" />
      <input type="password" placeholder="Your Password" v-model="password" />
      <button @click="onSubmit">Login</button>
      <button @click="logOut">Logout</button>
    </div>
    <div class="site-padding" v-if="user">
      <h1>Current User</h1>
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>
