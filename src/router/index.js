import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home';
import Params from '../components/Admin/Params';
import Users from '../components/Admin/Users';
import Profile from '../components/Profile';
import Courses from '../components/Courses';
import Auth from '../components/Auth';
import store from '../vuex/store';

Vue.use(VueRouter);

const checkFromAuth = (to, from, next) => {
  console.log('window location search:', window.location.search);
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
