import { RouteRecordRaw } from "vue-router";

export const homeRouters = [
  {
    path: "/home",
    name: "home",
    meta: {
      title: "tabbar.home",
      icon: "./images/tabbar/home.png",
      icon_select: "./images/tabbar/home_select.png",
    },
    // component: () => import("/@/views/Home/index.vue"),
    component: () => import("./../../views/Home/index.vue"),
  },
];

export const homeRoute: RouteRecordRaw = {
  path: "/",
  component: () => import("/@/layout/Home.vue"),
  redirect: "/home",
  children: [...homeRouters],
};
