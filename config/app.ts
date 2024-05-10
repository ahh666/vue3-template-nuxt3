/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-26 16:47:58
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-05-10 18:08:07
 * @FilePath     : \vue3-template-nuxt3\config\app.ts
 * @Description  : Description
 */
import { appDescription, appName, keywords } from '../constants/index'

export const app = {
  // baseURL: '/seo',
  title: appName,
  head: {
    viewport: 'width=device-width,initial-scale=1',
    link: [
      { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
      { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: appDescription },
      { name: 'keywords', content: keywords },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
      { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
    ],
  },
}
