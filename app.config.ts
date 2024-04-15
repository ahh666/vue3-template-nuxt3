/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-15 10:53:41
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-15 10:56:32
 * @FilePath     : \vitesse-nuxt3\app.config.ts
 * @Description  : 应用配置
 */

// 使用场景：在构建时确定的公共令牌、网站配置（如主题变体、标题）以及任何不敏感的项目配置。
// 使用：
// <script setup lang="ts">
// const appConfig = useAppConfig()
// </script>
export default defineAppConfig({
  title: 'Nuxt3 SSR',
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000',
    },
  },
})
