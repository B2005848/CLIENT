import loginPage from "@/layouts/admin_layout/account.login.vue";

const admin = [
  // Router for admin login page (separated from admin routes)
  {
    path: "/login",
    name: "admin.login",
    component: loginPage,
    meta: {
      title: "Shineonyou - Login",
    },
  },
  // Router for admin pages
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
        path: "dashboard",
        name: "admin.dashboard",
        component: () => import("../pages/admin_page/dash_broad.vue"),
        meta: {
          title: "Shineonyou - Dashboard",
        },
      },
      // Router for admin employee managements page
      {
        path: "emp_managements",
        name: "admin.emp",
        component: () => import("../pages/admin_page/emp_management/index.vue"),
        meta: {
          title: "Shineonyou - Quản lí nhân viên",
        },
      },
      // Show employee details
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
      // Show patient details
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
      // Add a new patient
      {
        path: "add_a_newpatient",
        name: "admin.add.patient",
        component: () =>
          import(
            "../pages/admin_page/patient_managements/add_patient_detail_info.vue"
          ),
        meta: {
          title: "Shineonyou - Thêm bệnh nhân mới",
        },
      },
      // Router for admin products managements page
      {
        path: "products_managements",
        name: "admin.products",
        component: () => import("../pages/admin_page/products_mga.vue"),
        meta: {
          title: "Shineonyou - Quản lí sản phẩm",
        },
      },
      // Router for admin services managements page
      {
        path: "services_managements",
        name: "admin.services",
        component: () => import("../pages/admin_page/services_mga.vue"),
        meta: {
          title: "Shineonyou - Quản lí dịch vụ",
        },
      },
      // Router for admin booking managements page
      {
        path: "booking_managements",
        name: "admin.booking",
        component: () => import("../pages/admin_page/booking_mga.vue"),
        meta: {
          title: "Shineonyou - Quản lí lịch hẹn",
        },
      },
      // Router for admin category product managements page
      {
        path: "category_products_managements",
        name: "admin.category_products",
        component: () => import("../pages/admin_page/category_product_mga.vue"),
        meta: {
          title: "Shineonyou - Quản lí danh mục sản phẩm",
        },
      },
      // Router for admin setting page
      {
        path: "settings",
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
