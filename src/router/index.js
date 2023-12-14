import { createRouter, createWebHistory } from 'vue-router'
//import { app, pages } from '@/config'
//import HomePage from '@/pages/HomePage.vue'
import ProductList from '@/components/Product.vue';
import Cart from '@/pages/Cart.vue';
//import Header from '@/component/Header.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "ProductList",
      component: ProductList
    },
    {
      path:'/cart',
      name:"Cart",
      component: Cart
    },
    
  ]
})

export default router
