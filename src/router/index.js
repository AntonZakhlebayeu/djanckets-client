import { createRouter, createWebHistory } from 'vue-router'

import store from '@/store'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import CategoryView from '../views/CategoryView.vue'
import SearchView from '../views/SearchView.vue'
import CartView from '../views/CartView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import MyAccountView from '../views/MyAccountView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import SuccessView from '../views/SuccessView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/:category_slug/:product_slug/',
    name: 'Product',
    component: ProductView,
  },
  {
    path: '/:category_slug/',
    name: 'CategoryView',
    component: CategoryView,
  },
  {
    path: '/search',
    name: 'SearchView',
    component: SearchView,
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  },
  {
    path: '/sign-up',
    name: 'SignUpView',
    component: SignUpView,
  },
  {
    path: '/log-in',
    name: 'LoginView',
    component: LoginView,
  },
  {
    path: '/my-account',
    name: 'MyAccountView',
    component: MyAccountView,
    meta: {
      requireLogin: true,
    }
  },
  {
    path: '/cart/checkout',
    name: 'CheckoutView',
    component: CheckoutView,
    meta: {
      requireLogin: true,
    }
  },
  {
    path: '/cart/success',
    name: 'SuccessView',
    component: SuccessView,
    meta: {
      requireLogin: true,
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'LoginView', query: { to: to.path } });
  } else {
    next()
  }
})

export default router
