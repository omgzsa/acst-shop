<script lang="ts" setup>
// import { useAuthStore } from '@/stores/auth';
// const router = useRouter();
const user = useDirectusUser();
const auth = useDirectusAuth();

// const store = useAuthStore();

// const handleLogout = () => {
//   if (!user.value) return console.log('Nincs bejelentkezve!');
//   store.userLogout();
// };

definePageMeta({
  middleware: ['auth'],
});
console.log(auth);
</script>

<template>
  <div class="bg-white">
    <div class="site-padding">
      <h1>Profil info</h1>
      <div>
        <h2 class="text-base font-normal uppercase text-dark-300">
          first name
        </h2>
        <p>
          {{ user!.first_name }}
        </p>
      </div>
      <div>
        <h2 class="text-base font-normal uppercase text-dark-300">last name</h2>
        <p>
          {{ user!.last_name }}
        </p>
      </div>
      <div>
        <h2 class="text-base font-normal uppercase text-dark-300">email</h2>
        <p>
          {{ user!.email }}
        </p>
      </div>
    </div>
  </div>
</template>
