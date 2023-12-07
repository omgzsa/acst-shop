<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth';
// const router = useRouter();
const user = useDirectusUser();
const store = useAuthStore();

definePageMeta({
  middleware: ['auth'],
  // layout: 'user',
});

/*
TODOS:

- Middleware routing still needs polishing
- can start user navigation, needs research on hydration mismatch error
*/
</script>

<template>
  <div class="bg-white">
    <div class="py-10 site-padding">
      <h1>Profil info</h1>
      <!-- HYDRATION MISMATCH ERROR, NESTING INVALID COMPONENTS -->
      <div class="grid grid-cols-6">
        <div class="col-span-1">
          <ProfileNav />
        </div>
        <div v-if="user" class="flex justify-between col-span-5">
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
      </div>
    </div>
  </div>
</template>
