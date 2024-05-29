const homepage = [
  // Router for home page
  {
    path: "/",
    name: "home.page",
    component: () => import("../layouts/home_page.vue"),
    meta: {
      title: "Shineonyou",
    },
  },
];
export default homepage;
