<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-12 16:54:05
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-18 15:42:28
 * @FilePath     : \vue3-template-nuxt3\layouts\default.vue
 * @Description  : Description
-->
<template>
  <main class="px-10 py-20 text-center">
    <Header />
    <slot />
    <Footer />
    <div class="mx-auto mt-5 text-center text-sm opacity-25">
      [Default Layout]
    </div>
  </main>
</template>
