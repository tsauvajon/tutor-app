import Vue from 'vue';
import VueRouter from 'vue-router';

import Params from '../components/Admin/Params.vue';
import Users from '../components/Admin/Users.vue';
import Profile from '../components/Profile.vue';
import Courses from '../components/Courses.vue';
import Agenda from '../components/Agenda.vue';
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
      component: Courses,
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
      path: '/courses',
      name: 'courses',
      component: Courses,
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: Agenda,
    },
  ],
});

router.beforeEach((from, to, next) => {
  switch (from.name) {
    case 'profile':
      store.dispatch('setPageTitle', 'Profil');
      break;
    case 'courses':
      store.dispatch('setPageTitle', 'Cours');
      break;
    case 'users':
      store.dispatch('setPageTitle', 'Utilisateurs');
      break;
    case 'params':
      store.dispatch('setPageTitle', 'Paramètres');
      break;
    case 'planning':
    case 'agenda':
      store.dispatch('setPageTitle', 'Planning');
      break;
    default:
      store.dispatch('setPageTitle', "Tutor'App");
      break;
  }
  next();
});

export default router;
