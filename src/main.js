/****************************************
 *              IMPORTS                 *
 * **************************************/
//VUE3
import { createApp } from "vue";
//APPLICATION
import App from "./App.vue";
//VUE-ROUTER
import router from "@/router";
//PINIA
import { createPinia } from "pinia";
//CSS
import "./assets/main.css";

/****************************************
 *              CREATION                *
 *                DE                    *
 *          L'APPLICATION               *
 * **************************************/
const app = createApp(App);

/****************************************
 *              MONTAGE                *
 *                DE                    *
 *          L'APPLICATION               *
 * **************************************/
// eslint-disable-next-line prettier/prettier
app
  .use(router)
  .use(createPinia())
  .mount("#app");
