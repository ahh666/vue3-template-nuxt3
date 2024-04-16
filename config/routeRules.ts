/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-15 14:29:51
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-16 16:48:22
 * @FilePath     : \vitesse-nuxt3\config\routeRules.ts
 * @Description  : 路由渲染规则
 */

export const routeRules = {
  // 预加载
  // '/': { prerender: true },
  // 不使用ssr
  '/nossr/**': { ssr: false },
  // '/home/**': { ssr: false },
}
