/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-15 16:48:27
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-18 15:41:32
 * @FilePath     : \vue3-template-nuxt3\api\article.ts
 * @Description  : Description
 */
import type { ArticleListParam } from '~/types/article'

// 文章左侧菜单
export const articleMenuApi = () => request.ssrget('article/category')
// 文章列表
export const articleListApi = (p: ArticleListParam) => request.ssrget('article/list', p)
