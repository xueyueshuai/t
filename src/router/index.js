import Vue from 'vue'
import VueRouter from 'vue-router'

// 功能函数
import { isLogin, isInitMenu, menusToRoutes } from '@/utils/func.js'

// 静态路由
import routesFromLocal from './routesFromLocal.js'
import routesStatic from './routesStatic.js'

// 进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

// router
Vue.use(VueRouter)
const router = new VueRouter({
  routesStatic
})

// 去除无意义的报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 路由前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start()

  // 判断是否登录
  if (isLogin()) {
    // 判断是否已经注册动态路由
    if (isInitMenu()) {
      next();
    } else {
      // new Promise()
      let getRoutesFromSever = new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve("aaa");
        }, 1000);
      });

      getRoutesFromSever
        .then((res) => {
          window.isInitMenu = 1

          // 此步骤为核心 将获取到的路由 动态 添加到本地路由中
          let newRoutes = menusToRoutes(routesFromLocal, (component) => import('@/views/' + component))
          router.addRoute({
            path: '/',
            redirect: '/test/xys/test1',
            component: () => import('@/components/xysLayout/xysLayout.vue'),
            children: newRoutes
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

// 路由后置守卫
router.afterEach(() => {
  setTimeout(() => {
    NProgress.done()
  }, 300)
})

export default router
