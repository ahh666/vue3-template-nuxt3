<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-12 16:54:05
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-17 16:11:47
 * @FilePath     : \vue3-template-nuxt3\components\Counter.vue
 * @Description  : Description
-->
<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>

<template>
  <div inline-flex m="y-3">
    <button rounded-full p-2 btn @click="dec()">
      <div i-carbon-subtract />
    </button>
    <div font="mono" w="15" m-auto inline-block>
      {{ count }}
    </div>
    <button rounded-full p-2 btn @click="inc()">
      <div i-carbon-add />
    </button>
  </div>
</template>
