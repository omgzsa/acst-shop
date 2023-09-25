import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = ref();
  const token = useCookie('MY_COOKIE', {
    maxAge: 60 * 60, // * 24 * 30 (30 days)
  });

  const setToken = (data) => (token.value = data);
  const setUser = (data) => (user.value = data);

  const signIn = async (data) => {
    try {
      const res = await $fetch('my-login-endpoint', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      setToken(res.token);
    } catch (error) {
      setToken();
      setUser();
      console.log(error);
    }
  };

  const fetchUser = async () => {
    if (token.value) {
      try {
        const res = await $fetch('my-single-user-endpoint');
        setUser(res);
      } catch (error) {
        setUser();
        console.log(error);
      }
    }
  };

  const logout = () => {
    setToken();
    setUser();
  };
});
