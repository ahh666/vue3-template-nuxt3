import { pwa } from './config/pwa'
import { runtimeConfig } from './config/runtimeConfig'
import { routeRules } from './config/routeRules'
import { app } from './config/app'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    '@tdesign-vue-next/nuxt',
  ],

  // 其他 @tdesign-vue-next/nuxt 的相关配置
  // tdesign: {
  //   resolveIcons: true
  //   ...
  // }

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app,

  devtools: {
    enabled: true,
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  // 组件名命名策略 打开则仅以文件名为组件名
  // components: [
  //   {
  //     path: '~/components/x',
  //     pathPrefix: false,
  //   },
  // ],

  pwa,

  routeRules,

  // 环境变量配置
  runtimeConfig,
})
