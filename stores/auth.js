import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('authStore', () => {
  const router = useRouter();
  const error = ref('');
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
      router.push('/');
    } catch (err) {
      error.value = err;
    }
  }

  // async function userInvite(email) {
  //   const { inviteUser } = useDirectusAuth();
  //   try {
  //     await inviteUser({
  //       email: email,
  //       role: 'ef005037-964e-4b20-bd23-b60f4f38fa6e',
  //     });
  //     alert('Invite send successfully');
  //   } catch (err) {
  //     error.value = err;
  //   }
  // }

  async function userLogin(credentials) {
    const { login } = useDirectusAuth();
    try {
      await login(credentials);
      alert('Logged in successfully');
      router.push('/');
    } catch (err) {
      error.value = err;
      error.value = createError({
        statusCode: 401,
        message: 'Nem megfelelő felhasználó név vagy jelszó!',
      });
    }
  }

  async function userLogout() {
    const { logout } = useDirectusAuth();
    await logout();
    router.push('/');
  }

  // getters = computed properties

  return {
    userRegister,
    // userInvite,
    userLogin,
    userLogout,
    error,
  };
});
