import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./homepage.router";
import Admin from "./admin.router";

const routes = [...Home, ...Admin];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ?? "Error 404 - PAGE NOT FOUND!!!";
  next();
});
export default router;
