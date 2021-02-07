import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Trials from '../views/Trials.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/trials',
    name: 'Past Trials',
    component: Trials,
  },
  {
    path: '/about',
    name: 'How It Works',
    component: About,
  },
  {
    path: '/login',
    name: 'Log In / Sing Up',
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
