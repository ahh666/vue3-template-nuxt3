/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-15 14:20:27
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-15 18:43:48
 * @FilePath     : \vitesse-nuxt3\config\runtimeConfig.ts
 * @Description  : 环境变量配置
 */

// 使用场景：环境变量构建后，有需要指定的私有或公共令牌。
// 使用：
// <script setup lang="ts">
// const runtimeConfig = useRuntimeConfig()
// </script>
export const runtimeConfig = {
  // 仅服务端可读取
  apiSecret: 'key661',
  // 服务端和客户端都可读取
  public: {
  // base api
    apiBase: 'https://api-test.pxb7.com',
  },
}
