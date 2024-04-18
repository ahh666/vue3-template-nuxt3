/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-18 15:41:01
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-18 15:41:01
 * @FilePath     : \vue3-template-nuxt3\types\article.d.ts
 * @Description  : Description
 */

export interface ArticleListParam {
  page: number
  pageSize: number
  cat_id: number
  id?: number
}
export interface ArticleDetailParam {
  page: number
  pageSize: number
  cat_id: number
  id: number
}
