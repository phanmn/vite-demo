import { defineAsyncComponent } from 'vue';

export default function init(routes: any[]) {
  const defaultRoute = {
    path: '/',
    component: defineAsyncComponent({
      loader: () => import('/@/components/layouts/authenLayout/AuthenLayout.vue')
    }),
    children: [
      {
        path: 'login', name: 'login', component: defineAsyncComponent({
          loader: () => import('/@/components/pages/login/LoginPage.vue'),
        }),
        meta: {
          title: 'Đăng nhập vào tài khoản của bạn'
        },
      },
    ]
  };

  routes.push(defaultRoute);
}