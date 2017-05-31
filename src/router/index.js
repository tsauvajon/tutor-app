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

router.beforeEach((to, from, next) => {
  switch (to.name) {
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

// router.beforeEach((to, from, next) => {
//   if (to.path === '/auth' && store.getters.user) {
//     next('/profile');
//   }
//   next();
// });

router.afterEach((to) => {
  if (to.path === '/auth' && store.getters.user) {
    router.replace('/profile');
  }

  if (to.path !== '/auth' && !store.getters.user) {
    const fb = store.getters.fbApp;

    // console.log(store.getters);
    // console.log(fb);
    // console.log(store.getters.fbApp);
    // si fb === null alors il faut attendre mais c'est chiant
    // si fb !== null on peut check s'il y a un current user
    if (fb && !fb.auth().currentUser) {
      router.replace('/auth');
    }
  }
});

export default router;
