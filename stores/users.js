import { createMyUser } from '~/server/db/users';

export const useUserStore = defineStore('userStore', () => {
  // state
  const users = [];
  const user = ref({});
  const newUser = ref({});
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
    user.value = data;
  }

  // getters = computed properties

  return {
    users,
    fetchUsers,
    currentUser,
    fetchUserById,
  };
});
