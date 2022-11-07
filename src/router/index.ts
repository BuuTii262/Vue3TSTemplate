import { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import { createRouterGuards } from "./routerGuards";
import { homeRoute } from "./modules/home";
import { other } from "./modules/other";

export const routes: Array<RouteRecordRaw> = [
  homeRoute,
  {
    path: "/other",
    component: () => import("/@/layout/Default.vue"),
    children: [...other],
  },
  {
    path: "/:patchAll(\\S+)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(""),
  routes,
});

export function setupRouter(app: App) {
  app.use(router);
  //   createRouterGuards(router);
}
export default router;
