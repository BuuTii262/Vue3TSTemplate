import { createStore, useStore as baseUseStore } from "vuex";
import user from "./modules/user";
import homeApiCall from "./requestApi/homeApiCall";
import { User, UserState } from "../types";
import { InjectionKey } from "vue";

import createPersistedState from "vuex-persistedstate";

export interface State {
  user: {
    user: User;
  };
}

const store = createStore<State>({
  modules: {
    user,
    homeApiCall,
  },
  // plugins: [
  //   createPersistedState({
  //     storage: window.localStorage,
  //     key: "user",
  //     paths: ["user"],
  //   }),
  // ],
});

export default store;
