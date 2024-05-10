<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-12 16:54:05
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-22 16:14:20
 * @FilePath     : \vue3-template-nuxt3\layouts\home.vue
 * @Description  : Description
-->
<template>
  <main class="px0 py0">
    <Header />
    <slot />
    <Footer />
    <div class="mx-auto mt-5 text-center text-sm opacity-25">
      [Home Layout]
    </div>
  </main>
</template>
