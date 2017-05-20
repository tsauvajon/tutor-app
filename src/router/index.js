import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import Params from '../components/Admin/Params';
import Users from '../components/Admin/Users';
import Profile from '../components/Profile';
import Courses from '../components/Courses';

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
