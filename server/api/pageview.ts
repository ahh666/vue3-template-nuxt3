/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-12 16:33:09
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-15 16:41:19
 * @FilePath     : \vitesse-nuxt3\server\api\pageview.ts
 * @Description  : Description
 */
const startAt = Date.now()
let count = 0

export default defineEventHandler(() => ({
  pageview: count++,
  startAt,
}))
