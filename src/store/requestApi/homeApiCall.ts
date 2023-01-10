import { captureRejectionSymbol } from "events";
import { Commit } from "vuex";
import { getBanners } from "../../api/other";
export default {
  state: () => ({
    bannerLists: null,
  }),

  mutations: {
    SET_BANNER_LIST(state: any, data: any) {
      state.bannerLists = data;
    },
  },
  actions: {
    async getBannerList({ commit }: { commit: Commit }, data: any) {
      return await getBanners({}).then((res: any) => {
        if (res.code == 0) {
          commit("SET_BANNER_LIST", res.data);
          return res.data;
        }
      });
    },
  },
};
