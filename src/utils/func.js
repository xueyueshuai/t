
// 判断用户是否登录
export const isLogin = () => {
  // todo...
  return true
}

// 判断用户是否已经获取过动态路由
export const isInitMenu = () => {
  return window.isInitMenu ? true : false
}

// 将菜单 格式化成 可以使用的动态路由
export function menusToRoutes(menus, im) {
  menus.map(item => {
    if (item.component) {
      let itemComponent = item.component
      item.component = function () {
        return im(itemComponent)
      }
    } else {
      item.component = () => import('@/components/xysLayout/emptyLayout.vue')
    }

    if (item.children) {
      menusToRoutes(item.children, im)
    }
  });
  return menus;
}