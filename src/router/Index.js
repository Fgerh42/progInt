import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/pages/LoginPage.vue";

import Person from "./module/Person";

import Index from "@/views/Index.vue";
import auth from "@/api/auth";

const routes = [
  {
    path: "/login",
    component: Login,
    name: Login.name,
    meta: { needAuth: false },
  },
  {
    path: "/",
    component: Index,
    meta: { needAuth: true },
    children: [

      ...Person, 
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  let data = JSON.parse(localStorage.getItem("data"));

  let token = "";
  if (data) {
    token = data.token;
  }

  if (to.matched.some((record) => record.meta.needAuth)) {
    if (!token) {
      next({ path: "/login" });
    } else {
      auth.me().then((val) => {
        if (val.ok) {
          next();
        } else {
          localStorage.clear();
          next({ path: "/login" });
        }
      });
    }
  } else {
    next();
  }
});
