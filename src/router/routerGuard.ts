import { Router } from "vue-router";
import { useStore } from "vuex";
let store = useStore();

const list = ["/home", "/login", "/register"];

export function createRouterGuards(router: Router) {
  router.beforeEach((to, _from, next) => {
    const { path } = to;
    const token = store.state.user.token;
    const isWhite = list.includes(path);
    if (!token) {
      if (!isWhite) {
        next("/login");
      }
    }
    next();
  });
}
