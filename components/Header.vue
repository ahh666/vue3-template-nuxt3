<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-17 16:11:29
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-17 16:14:30
 * @FilePath     : \vue3-template-nuxt3\components\Header.vue
 * @Description  : Description
-->
<script setup>
const router = useRouter()
function goNossr() {
  router.push('/nossr/testRoute')
}
function goDocCenter() {
  router.push('/home/article')
}
</script>

<template>
  <header>
    <button
      m-3 text-sm btn
      @click="goNossr"
    >
      goNossr
    </button>
    <button
      m-3 text-sm btn
      @click="goDocCenter"
    >
      goDocCenter
    </button>
  </header>
</template>
