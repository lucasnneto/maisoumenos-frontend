export default {
  state: {
    users: [],
    user: {},
  },
  mutations: {
    USUARIOS_RECEBIDOS(state, users) {
      state.users = users;
    },
    USUARIO_RECEBIDO(state, user) {
      state.user = user;
    },
  },
  getters: {
    users(state) {
      return state.users;
    },
    user(state) {
      return state.user;
    },
  },
  actions: {
    fetchusers({ commit }) {
      //PUXAR DADOS DO BD e COMMIT
      commit("USUARIO_RECEBIDO", { nome: "AAA" });
    },
  },
};
