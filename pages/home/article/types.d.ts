/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-15 15:32:55
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-18 11:12:44
 * @FilePath     : \vue3-template-nuxt3\pages\home\article\types.d.ts
 * @Description  : Description
 */

export interface ArticleMenuRes {
  cat_id: number
  cat_name: string
  description: string
  keywords: string
  parent_id: number
  sort: number
  unique_id: string
}

export interface ArticleList {
  id: number
  cat_id: number
  add_time: number
  click: number
  content: string
  title: string
}

export interface ArticleListRes {
  list: ArticleList[]
  page: number
  total: number
}
