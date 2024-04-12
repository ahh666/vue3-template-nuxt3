/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-10 18:02:40
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-10 18:02:42
 * @FilePath     : \vitesse-nuxt3\enums\interface.ts
 * @Description  : Description
 */
export enum RequestCodeEnum {
  SUCCESS = 0,
  TOKEN_OVERDUE = 20002, // 用户登录失败
  INTERNAL_SERVER_ERROR = 500, // 服务异常
}
