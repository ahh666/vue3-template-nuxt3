<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-17 16:11:29
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-18 11:21:15
 * @FilePath     : \vue3-template-nuxt3\components\Header.vue
 * @Description  : Description
-->
<script setup>
const router = useRouter()
function goNossr() {
  router.push('/nossr/testRoute')
}
function goDocCenter() {
  router.push('/home/article/list?cat_id=1')
}
</script>

<template>
  <header>
    <button
      m-3 text-sm btn
      @click="router.push('/')"
    >
      goHome
    </button>
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
