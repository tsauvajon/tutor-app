import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import Params from '../components/Admin/Params.vue';
import Users from '../components/Admin/Users.vue';
import Profile from '../components/Profile.vue';
import Courses from '../components/Courses.vue';
import Auth from '../components/Auth.vue';
import store from '../vuex/store';

Vue.use(VueRouter);

const checkFromAuth = (to, from, next) => {
  const query = window.location.search.substr(1).split('=');
  if (query[0] === 'mode') {
    next({
      path: '/auth',
      query: { mode: query[1] },
    });
  } else {
    next();
  }
};

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      beforeEnter: checkFromAuth,
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    },
    {
      path: '/params',
      name: 'params',
      component: Params,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/courses/mine',
      name: 'mycourses',
      component: Home,
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses,
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: Home,
    },
    {
      path: '/chat',
      name: 'chat',
      component: Home,
    },
  ],
});

// Avant chaque redirection, vérifie si l'utilisateur est log
router.beforeEach((to, from, next) => {
  if (to.path !== '/auth' && !store.getters.user) {
    next('/auth');
  } else {
    next();
  }
});

export default router;
