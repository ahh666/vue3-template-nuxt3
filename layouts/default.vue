<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-12 16:54:05
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-22 16:33:56
 * @FilePath     : \vue3-template-nuxt3\layouts\default.vue
 * @Description  : Description
-->
<template>
  <main class="px0 py0">
    <Header />
    <div bg="#f4f4f4" py15px>
      <slot />
    </div>
    <Footer />
  </main>
</template>
