// import { Router } from "vue-router";
// import store from "../store";

// const list = [
//   "/home",
//   "/login",
//   "/register",
//   "/agreements/privacy",
//   "/agreements/service",
// ];

// export function createRouterGuards(router: Router) {
//   router.beforeEach((to, _from, next) => {
//     const { path } = to;
//     const token = store.state.user.token;
//     const userdata = store.state.user.user;
//     const isWhite = list.includes(path);
//     const isYuebao = yuebao.includes(path);
//     if (!token) {
//       if (!isWhite) {
//         next("/login");
//       }
//     }
//     next();
//   });
// }
