import { createStore } from "vuex";
import user from "./modules/user";

import createPersistedState from "vuex-persistedstate";

const store = createStore({
  modules: {
    user,
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
      key: "user",
      paths: ["user"],
    }),
  ],
});

export default store;
