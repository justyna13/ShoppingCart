import { resolve } from 'path'

export default defineNuxtConfig({
  css: ['@mdi/font/css/materialdesignicons.min.css'],
  modules: [
    "@pinia/nuxt"
  ],
  alias: {
    'images': resolve(__dirname, './assets/images'),
  },
})
