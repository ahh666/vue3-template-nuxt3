<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-17 16:11:29
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-05-11 16:22:53
 * @FilePath     : \vue3-template-nuxt3\components\Header.vue
 * @Description  : Description
-->
<script setup>
const router = useRouter()
</script>

<template>
  <header h110px w100vw py10px px flex justify-center>
    <div w1200px>
      <a inline-block>
        <img w329px src="/logo.png" alt="logo">
      </a>
      <button
        m-3 text-sm btn
        @click="router.push('/nossr/testRoute')"
      >
        NOSSR
      </button>
      <button
        m-3 text-sm btn
        @click="router.push('/home/article/1')"
      >
        DOC-CENTER
      </button>
      <button
        m-3 text-sm btn
        @click="router.push('/11111')"
      >
        404
      </button>
    </div>
  </header>
</template>
