import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Params from '../components/Admin/Params.vue';
import Users from '../components/Admin/Users.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
      component: Home,
    },
    {
      path: '/courses/mine',
      name: 'mycourses',
      component: Home,
    },
    {
      path: '/courses',
      name: 'courses',
      component: Home,
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
