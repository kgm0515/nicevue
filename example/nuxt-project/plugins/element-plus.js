/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-31 20:51:37
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-31 21:01:14
 */
import { defineNuxtPlugin } from "#app";
// import NiceVue from "@nicevue/ui/dist/lib/index.js";
import NiceVue from "@nicevue/ui";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(NiceVue);
});
