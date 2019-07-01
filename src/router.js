import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import TestParam from './views/TestParam.vue';
import About from './views/About.vue';
import TestPopup from './views/TestPopup.vue';
import TestListView from './views/TestListView.vue';
import ScrollBehavior from './views/ScrollBehavior.vue';

Vue.use(Router);

const router = new Router({
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
      path: '/testlistview',
      name: 'TestListView',
      component: TestListView
    },
    {
      path: '/scrollbehavior',
      name: 'ScrollBehavior',
      meta: { keepAlive: true },
      component: ScrollBehavior
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
  ],
  /// 仅适用于body滚动
  scrollBehavior(to, from, savedPosition) {
    console.log(to);
    console.log(from);
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 600 };
    }
  }
});

export default router;
