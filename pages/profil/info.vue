<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth';
// const router = useRouter();
const user = useDirectusUser();
const store = useAuthStore();

definePageMeta({
  middleware: ['auth'],
});

/*
TODOS:

- Middleware routing still needs polishing
- can start user navigation, needs research on hydration mismatch error
*/
</script>

<template>
  <div class="bg-white" v-if="user">
    <div class="py-16 site-padding">
      <h1>Profil info</h1>
      <div class="flex justify-between">
        <div>
          <h2 class="text-base font-normal uppercase text-dark-300">
            first name
          </h2>
          <p>
            {{ user?.first_name }}
          </p>
        </div>
        <div>
          <h2 class="text-base font-normal uppercase text-dark-300">
            last name
          </h2>
          <p>
            {{ user?.last_name }}
          </p>
        </div>
        <div>
          <h2 class="text-base font-normal uppercase text-dark-300">email</h2>
          <p>
            {{ user?.email }}
          </p>
        </div>
      </div>
      <!-- HYDRATION MISMATCH ERROR, NESTING INVALID COMPONENTS -->
      <!-- <ProfileNav /> -->
      <button
        class="px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-red-600"
        @click="store.userLogout"
      >
        logout
      </button>
    </div>
  </div>
</template>
