import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  privateRuntimeConfig: {
    API_TOKEN: process.env.API_TOKEN
  },
  buildModules: [
    'nuxt-windicss',
  ],
})
