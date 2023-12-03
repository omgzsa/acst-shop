import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('authStore', () => {
  const router = useRouter();
  const error = ref('');
  // state

  // actions = functions
  async function registerUser(fName, lName, email, password) {
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
      router.push('/');
    } catch (err) {
      error.value = err.message;
    }
  }

  async function userLogin(email, password) {
    const { login } = useDirectusAuth();
    try {
      await login({ email: email, password: password });
    } catch (err) {
      error.value = err.message;
    }
  }

  async function userLogout() {
    const { logout } = useDirectusAuth();
    await logout();
  }

  // getters = computed properties

  return {
    registerUser,
    userLogin,
    userLogout,
    error,
  };
});
