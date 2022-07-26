/****************************************
 *              IMPORTS                 *
 * **************************************/
//VUE-ROUTER
import { createRouter, createWebHistory } from 'vue-router';
//FICHIER DES ROUTES
import routes from '@/router/routes.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
