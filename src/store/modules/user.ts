import { User } from "./../../types/index";
import { Commit } from "vuex";

type UserState = {
  user: User;
};

export default {
  state: (): UserState => ({
    user: {
      name: "",
      token: "",
      age: 0,
    },
  }),

  mutations: {
    SET_USER(state: any, data: User) {
      state.user = data;
    },
  },
  actions: {
    getUserInfo({ commit }: { commit: Commit }, data: any) {},
  },
};
