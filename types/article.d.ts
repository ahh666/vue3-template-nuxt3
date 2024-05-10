/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-18 15:41:01
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-26 15:13:49
 * @FilePath     : \vue3-template-nuxt3\types\article.d.ts
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

export interface ArticleInfo {
  id?: number
  cat_id?: number
  add_time?: number
  click?: number
  content?: string
  title?: string
}

export interface ArticleListRes {
  list: ArticleInfo[]
  page: number
  total: number
}
