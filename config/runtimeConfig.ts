/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-15 14:20:27
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-28 15:37:55
 * @FilePath     : \vue3-template-nuxt3\config\runtimeConfig.ts
 * @Description  : 环境变量配置
 */

// 使用场景：环境变量构建后，有需要指定的私有或公共令牌。
// 使用：
// <script setup lang="ts">
// const runtimeConfig = useRuntimeConfig()
// </script>

// 该配置文件中的常量会根据打包命令及 .env.xxx 中的配置自动调整，对应 NUXT_XXX 、NUXT_PUBLIC_XXX
// eslint-disable-next-line node/prefer-global/process
const { BASE_URL } = process.env

export const runtimeConfig = {
  // 仅服务端可读取
  apiSecret: 'key661',
  // 服务端和客户端都可读取
  public: {
    baseUrl: BASE_URL,
  // base api
    apiBase: '',
  },
}
