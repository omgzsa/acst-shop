export const useUserStore = defineStore('userStore', () => {
  // state
  const users = [];
  const currentUser = ref(null);

  // actions = functions
  async function fetchUsers() {
    const { getUsers } = useDirectusUsers();
    const data = await getUsers();
    users.value = data;
  }

  async function fetchUserById(id) {
    const { getUserById } = useDirectusUsers();
    const data = await getUserById(id);
    currentUser.value = data;
  }

  // getters = computed properties

  return {
    users,
    fetchUsers,
    currentUser,
    fetchUserById,
  };
});
