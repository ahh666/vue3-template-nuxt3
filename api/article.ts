/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-15 16:48:27
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-18 11:10:35
 * @FilePath     : \vue3-template-nuxt3\api\article.ts
 * @Description  : Description
 */
import type { ArticleListParam } from './article.types'

// 文章左侧菜单
export const articleMenuApi = () => request.ssrget('article/category')
// 文章列表
export const articleListApi = (p: ArticleListParam) => request.ssrget('article/list', p)
