import { User } from "./../../types/index";
import { Commit } from "vuex";
export default {
  state() {
    return {
      user: {},
    };
  },

  mutations: {
    SET_USER(state: any, data: User) {
      state.user = data;
    },
  },
  actions: {
    getUserInfo({ commit }: { commit: Commit }, data: any) {},
  },
};
