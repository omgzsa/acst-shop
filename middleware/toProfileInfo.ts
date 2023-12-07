export default defineNuxtRouteMiddleware((to, from) => {
  const { fetchUser, setUser } = useDirectusAuth();
  const user = useDirectusUser();

  if (user.value) {
    console.log('User is logged in');
    // return navigateTo('/profil/info');
  }

  if (!user.value) {
    console.log('User is not logged in');
  }
});
