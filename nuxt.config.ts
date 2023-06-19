import { resolve } from "path"

export default defineNuxtConfig({
  css: [
    "@mdi/font/css/materialdesignicons.min.css",
    resolve(__dirname, "./assets/styles/main.scss")
  ],
  modules: [
    "@pinia/nuxt"
  ],
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ]
  },
  alias: {
    "images": resolve(__dirname, "./assets/images"),
    "@": resolve(__dirname, "/")
  },
})
