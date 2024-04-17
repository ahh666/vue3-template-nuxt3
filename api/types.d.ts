/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-15 15:32:55
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-17 15:53:37
 * @FilePath     : \vue3-template-nuxt3\api\types.d.ts
 * @Description  : Description
 */

export enum RequestCodeEnum {
  SUCCESS = 200,
  TOKEN_OVERDUE = 20002, // token 失效
  INTERNAL_SERVER_ERROR = 500, // 服务异常
}
export interface ArticleListParam {
  page: number
  pageSize: number
  cat_id: number | string
}
