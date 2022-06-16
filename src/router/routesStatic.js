

const routesStatic = [
  { path: '/home', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
  { path: '/login', name: 'login', component: () => import('@/views/login.vue') },
]

export default routesStatic