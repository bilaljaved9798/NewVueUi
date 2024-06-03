import VueRouter from "vue-router";
import routes from "./routes";
import Login from "@/pages/Login.vue";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

// Redirect from the root URL ("/") to the login page
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    return next('/login');
  }
  next();
});

export default router;
