/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-15 16:48:27
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-05-06 15:37:43
 * @FilePath     : \vue3-template-nuxt3\api\article.ts
 * @Description  : Description
 */
import type { ArticleListParam } from './article.types'

const { ssrget } = request

// 文章左侧菜单
export const articleMenuApi = () => ssrget('article/category')
// 文章列表
export const articleListApi = (p: ArticleListParam) => ssrget('article/list', p)
