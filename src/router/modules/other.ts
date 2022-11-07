import { RouteRecordRaw } from "vue-router";

export const other: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    //component: () => import('/@/views/Login/index.vue'),
    component: () => import("/@/views/newLogin/index.vue"),
  },
];
