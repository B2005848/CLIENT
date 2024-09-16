import loginPage from "@/layouts/admin_layout/account.login.vue";

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
        path: "admin/dashboard",
        name: "admin.dashboard",
        component: () => import("../pages/admin_page/dash_broad.vue"),
        meta: {
          title: "Shineonyou - Dashboard",
        },
      },
      // Router for admin employee managements page
      {
        path: "admin/emp_managements",
        name: "admin.emp",
        component: () => import("../pages/admin_page/emp_management/index.vue"),
        meta: {
          title: "Shineonyou - Quản lí nhân viên",
        },
      },
      // Show
      {
        path: "emp_details/:username",
        name: "admin.emp_details",
        component: () =>
          import("../pages/admin_page/emp_management/emp_detail_info.vue"),
        meta: {
          title: "Shineonyou - Chi tiết nhân viên",
        },
      },

      // Router for admin patients managements page
      {
        path: "patients_managements",
        name: "admin.patients",
        component: () =>
          import("../pages/admin_page/patient_managements/index.vue"),
        meta: {
          title: "Shineonyou - Quản lí bệnh nhân",
        },
      },
      // Show
      {
        path: "patient_details/:username",
        name: "admin.patient_details",
        component: () =>
          import(
            "../pages/admin_page/patient_managements/patient_detail_info.vue"
          ),
        meta: {
          title: "Shineonyou - Chi tiết bệnh nhân",
        },
      },
      // add
      {
        path: "add_a_newpatient",
        name: "admin.add.patient",
        component: () =>
          import(
            "../pages/admin_page/patient_managements/add_patient_detail_info.vue"
          ),
        meta: {
          title: "Shineonyou - Chi tiết nhân viên",
        },
      },
      // Router for admin products managements page
      {
        path: "/admin/products_managements",
        name: "admin.products",
        component: () => import("../pages/admin_page/products_mga.vue"),
        meta: {
          title: "Shineonyou - Quản lí sản phẩm",
        },
      },
      // Router for admin services managements page
      {
        path: "/admin/services_managements",
        name: "admin.services",
        component: () => import("../pages/admin_page/services_mga.vue"),
        meta: {
          title: "Shineonyou - Quản lí dịch vụ",
        },
      },
      // Router for admin booking managements page
      {
        path: "/admin/booking_managements",
        name: "admin.booking",
        component: () => import("../pages/admin_page/booking_mga.vue"),
        meta: {
          title: "Shineonyou - Quản lí lịch hẹn",
        },
      },
      // Router for admin category product managements page
      {
        path: "/admin/category_products_managements",
        name: "admin.category_products",
        component: () => import("../pages/admin_page/category_product_mga.vue"),
        meta: {
          title: "Shineonyou - Quản lí danh mục sản phẩm",
        },
      },
      // Router for admin setting page
      {
        path: "/admin/settings",
        name: "admin.settings",
        component: () => import("../pages/admin_page/setting_page.vue"),
        meta: {
          title: "Shineonyou - Cài đặt hệ thống",
        },
      },
    ],
  },
];
export default admin;
