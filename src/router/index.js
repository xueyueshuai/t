import Vue from 'vue'
import VueRouter from 'vue-router'

import { isLogin, isInitMenu, menusToRoutes } from '../../src/utils/func.js'
import routesFromLocal from './routesFromLocal.js'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
Vue.use(VueRouter)
let routes = [
  { path: '/home', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
  { path: '/login', name: 'login', component: () => import('@/views/login.vue') },
]

const router = new VueRouter({
  routes
})

// 去除无意义的报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


// 路由守卫
router.beforeEach((to, from, next) => {
  NProgress.start()

  // 判断是否登录
  if (isLogin()) {
    // 判断是否已经注册动态路由
    if (isInitMenu()) {
      next();
    } else {
      // new Promise()
      let pro = new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve("aaa");
        }, 1000);
      });

      pro
        .then((res) => {
          window.isInitMenu = 1
          let n = menusToRoutes(routesFromLocal, (component) => import('@/views/' + component))
          router.addRoute({
            path: '/',
            redirect: '/test/xys/test1',
            component: () => import('@/components/xysLayout/xysLayout.vue'),
            children: n
          })

          // 触发重定向
          next({
            ...to,
            replace: true
          });
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(() => {
          console.log("finally");
        });
    }
  } else if (['login'].includes(to.name)) {
    next();
  } else {
    next({
      path: '/login',
      query: to.path === '/' ? {} : {
        redirect: to.path
      }
    });
  }
});

router.afterEach(() => {
  setTimeout(() => {
    NProgress.done()
  }, 300)
})

export default router
