import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/curso/:id',
    name: 'Curso',

    component: () => import('../views/Curso.vue')
  },

  {
    path: '/registro',
    name: 'Registro',

    component: () => import('../views/Registro.vue')
  },

  {
    path: '/carrito',
    name: 'Carrito',

    component: () => import('../views/Carrito.vue')
  },

  // {
  //   path: '/pago',
  //   name: 'Pago',

  //   component: () => import('../views/Pago.vue')
  // },

  {
    path: '/comprado',
    name: 'Comprado',

    component: () => import('../views/Comprado.vue')
  },

  {
    path: '/registrarse',
    name: 'Registrarse',

    component: () => import('../views/Registrarse.vue')
  },

  {
    path: '/paypal',
    name: 'PagoPayPal',

    component: () => import('../views/PagoPaypal.vue')
  },

  {
    path: '/nav',
    name: 'NavBar',

    component: () => import('../views/NavBar.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
