import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';

export const useAuthStore = defineStore('authStore', () => {
  const router = useRouter();
  const regError = ref('');
  const logError = ref('');
  // state

  // actions = functions
  async function userRegister(fName, lName, email, password) {
    const { createUser } = useDirectusAuth();
    try {
      await createUser({
        first_name: fName,
        last_name: lName,
        email: email,
        password: password,
        role: 'ef005037-964e-4b20-bd23-b60f4f38fa6e',
        status: 'active',
      });
      alert('Registered successfully');
    } catch (err) {
      err = createError({
        statusCode: err.statusCode,
        message: 'Ez az email cím már foglalt!',
      });
      regError.value = err;
    }
  }

  async function userLogin(credentials) {
    const { login } = useDirectusAuth();
    try {
      await login(credentials);
      alert('Logged in successfully');
    } catch (err) {
      err = createError({
        statusCode: err.statusCode,
        message: 'Hibás felhasználónév vagy jelszó!',
      });
      logError.value = err;
    } finally {
      router.push('/profil/info');
    }
  }

  const isLoggedIn = computed(() => {
    const user = useDirectusUser();
    if (user.value) {
      return true;
    }
    return false;
  });

  async function userLogout() {
    const { cartReset } = useCartStore();
    const { logout } = useDirectusAuth();
    //
    await logout();
    cartReset();
    router.push('/');
  }

  // getters = computed properties

  return {
    logError,
    regError,
    userRegister,
    userLogin,
    userLogout,
    isLoggedIn,
  };
});
