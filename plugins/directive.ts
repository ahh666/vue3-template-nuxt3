/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-12 10:44:04
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-12 10:44:08
 * @FilePath     : \vitesse-nuxt3\plugins\directive.ts
 * @Description  : vue 指令 directive
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {
    mounted(el) {
      el.focus()
    },
    getSSRProps(binding, vnode) {
      // 你可以在这里提供SSR专用道具
      return {}
    },
  })
})
