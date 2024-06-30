const admin = [
  // Router for admin page
  {
    path: "/admin",
    name: "admin.page",
    component: () => import("../layouts/admin_layout/index.vue"),
    meta: {
      title: "Shineonyou - Administrators",
    },
    children: [
      // Router for admin dashboard page
      {
        path: "/admin/dashboard",
        name: "admin.dashboard",
        component: () => import("../pages/admin_page/dash_broad.vue"),
        meta: {
          title: "Shineonyou - Dashboard",
        },
      },
    ],
  },
];
export default admin;
