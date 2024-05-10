<script setup lang="ts">
const online = useOnline()
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
console.log('appConfig:', appConfig)
console.log('runtimeConfig:', runtimeConfig)
</script>

<template>
  <div text-center>
    <Logos mb-6 />
    <Suspense>
      <ClientOnly>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
