
export const isLogin = () => {
  return true
}


export const isInitMenu = () => {
  return window.isInitMenu
}


export function menusToRoutes(menus,im) {
  menus.map(item => {
    if (item.component) {
      let aa = item.component

      item.component = function(){
        return im(aa)
      }
    }else{
      item.component = ()=>import('@/components/xysLayout/emptyLayout.vue')
    }

    if (item.children) {
      menusToRoutes(item.children,im)
    }
  });


  return menus;
}