const homepage = [
  // Router for home page
  {
    path: "/homepage",
    name: "home.page",
    component: () => import("../layouts/customer_layout/index.vue"),
    meta: {
      title: "Shineonyou - Đặt lịch khám, sản phẩm sức khỏe, dịch vụ ",
    },
    children: [
      {
        path: "product",
        name: "home.page.product",
        component: () => import("../components/The_body.vue"),
        meta: {
          title: "Sản phẩm sức khỏe",
        },
      },

      {
        path: "service",
        name: "home.page.service",
        component: () => import("../pages/customer_page/service_page.vue"),
        meta: {
          title: "Dịch vụ sức khỏe",
        },
      },

      {
        path: "booking",
        name: "home.page.booking",
        component: () => import("../pages/customer_page/booking_page.vue"),
        meta: {
          title: "Đặt lịch khám",
        },
        children: [
          {
            path: "old",
            name: "home.page.booking.old",
            component: () =>
              import(
                "../pages/customer_page/children_booking_page/booking_old.vue"
              ),
            meta: {
              title: "Đặt lịch khám dành cho bệnh nhân cũ",
            },
          },
          {
            path: "new",
            name: "home.page.booking.new",
            component: () =>
              import(
                "../pages/customer_page/children_booking_page/booking_new.vue"
              ),
            meta: {
              title: "Đặt lịch khám dành cho bệnh nhân mới",
            },
          },
        ],
      },

      {
        path: "contact",
        name: "home.page.contact",
        component: () => import("../pages/customer_page/contacts_page.vue"),
        meta: {
          title: "Liên hệ",
        },
      },

      {
        path: "about",
        name: "home.page.about",
        component: () => import("../pages/customer_page/introduction_page.vue"),
        meta: {
          title: "Hướng dẫn khách hàng sử dụng trang web",
        },
      },

      {
        path: "list-doctor",
        name: "home.page.list-doctor",
        component: () => import("../pages/customer_page/list_doctor_page.vue"),
        meta: {
          title: "Danh sách bác sĩ",
        },
      },
    ],
  },
  // Login page for customer
  {
    path: "/accounts",
    name: "accounts.page",
    component: () => import("../layouts/customer_layout/accounts_page.vue"),

    children: [
      {
        path: "login",
        name: "login.page",
        component: () => import("../pages/customer_page/login_page.vue"),
        meta: {
          title: "Đăng nhập",
        },
      },

      {
        path: "sign_up",
        name: "sign_up.page",
        component: () => import("../pages/customer_page/signup_page.vue"),
        meta: {
          title: "Đăng kí tài khoản",
        },
      },
    ],
  },
];
export default homepage;
