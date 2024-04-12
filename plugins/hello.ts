/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-12 10:45:26
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-12 10:49:40
 * @FilePath     : \vitesse-nuxt3\plugins\hello.ts
 * @Description  : 返回全局可使用插件
 */

export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`,
    },
  }
})

// 模板直接使用
// template>
//   <div>
//     {{ $hello('world') }}
//   </div>
// </template>

// js引入使用
// <script setup lang="ts">
// const { $hello } = useNuxtApp()
// </script>
