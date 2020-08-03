import { createRouter, createWebHistory } from 'vue-router';
import authenLayoutRoute from '/@/components/pages/authenLayout.route.ts';

const routes = buildRoutes();
let router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

updateTitlePage();

function buildRoutes(): any[] {
  const vueRoutes: any[] = [];
  authenLayoutRoute(vueRoutes);

  vueRoutes.push({
    path: '/:catchAll(.*)',
    redirect: {
      name: 'login',
    }
  });
  return vueRoutes;
}

function updateTitlePage() {
  // check change state and set title for page

  router.afterEach(route => {
    document.title = route.meta?.title;
  });
}

export default router;