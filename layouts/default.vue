<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-12 16:54:05
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-05-11 16:21:53
 * @FilePath     : \vue3-template-nuxt3\layouts\default.vue
 * @Description  : Description
-->
<template>
  <main class="px0 py0">
    <Header />
    <div bg="#f4f4f4" py15px min-h400px text-center>
      <slot />
    </div>
    <Footer />
  </main>
</template>
