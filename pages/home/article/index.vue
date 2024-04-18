<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-18 10:54:13
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-18 11:05:36
 * @FilePath     : \vue3-template-nuxt3\pages\home\article\index.vue
 * @Description  : Description
-->
<script setup lang="ts">
import type { ArticleList, ArticleListRes, ArticleMenuRes } from './types'
import { articleListApi, articleMenuApi } from '~/api/article'

const menu = useState<Array<ArticleMenuRes>>('menu', () => [])
const articleList = useState<Array<ArticleList>>('articleList', () => [])
const currentCatId = useState<number>('currentCatId', () => 0)

// 数据初始化
menu.value = await articleMenuApi() as ArticleMenuRes[]

watchEffect(async () => {
  const route = useRoute<'home-article'>()
  currentCatId.value = Number(route.query.cat_id)

  const data = await articleListApi({
    page: 1,
    pageSize: 10,
    cat_id: currentCatId.value,
  }) as ArticleListRes

  articleList.value = data.list
})

// 切换菜单
const router = useRouter()
function menuChange(cat_id = 0) {
  router.replace({
    path: '/home/article/list',
    query: {
      cat_id,
    },
  })
}
</script>

<template>
  <div class="flex w300">
    <div
      overflow-hidden
      border-rd="20px" shadow="[0_0_10px_0_rgba(0,0,0,0.2)]"
      class="w60 mr2 pb2 bg-#fff text-center"
    >
      <div mb-10px class="h18 w60 bg-#ffdb51 lh-72px">
        文章中心
      </div>
      <div
        v-for="m in menu" :key="m.cat_id"
        pl-24px text-left
        lh-40px cursor-pointer h-40px
        hover="bg-#283748 text-#fff"
        :class="{
          'bg-#283748 text-#fff': m.cat_id === currentCatId,
        }"
        @click="menuChange(m.cat_id)"
      >
        {{ m.cat_name }}
      </div>
    </div>
    <div
      w-940px px-20px pt-40px pb-50px class="bg-#fff  text-left"
      border-rd="5px"
    >
      <NuxtPage />
    </div>
  </div>
</template>
