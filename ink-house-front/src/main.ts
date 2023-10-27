import '@/assets/scss/styles.scss'
import '@/assets/scss/grid/grid.scss'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import App from '@/App.vue'

import AppHome from '@/components/AppHome.vue'
import AppOrder from '@/components/AppOrder.vue'

const routes = [
  { path: '/', component: AppHome },
  { path: '/order', component: AppOrder }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

createApp(App).use(createPinia()).use(router).mount('#app')
