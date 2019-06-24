import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import TestParam from './views/TestParam.vue';
import About from './views/About.vue';
import TestPopup from './views/TestPopup.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/testparam',
      name: 'TestParam',
      component: TestParam
    },
    {
      path: '/testpopup',
      name: 'TestPopup',
      component: TestPopup
    },
    {
      path: '/about',
      name: 'about',
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
