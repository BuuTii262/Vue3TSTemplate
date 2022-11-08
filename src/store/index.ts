import { createStore, useStore as baseUseStore } from "vuex";
import user from "./modules/user";
import { User, UserState } from "../types";
import { InjectionKey } from "vue";

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
