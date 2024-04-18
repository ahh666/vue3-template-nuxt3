/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-15 15:32:55
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-18 11:10:55
 * @FilePath     : \vue3-template-nuxt3\api\article.types.d.ts
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
