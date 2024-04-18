<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-18 10:45:24
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-18 11:21:56
 * @FilePath     : \vue3-template-nuxt3\pages\home\article\index\detail.vue
 * @Description  : Description
-->
<script setup lang="ts">
import type { ArticleList, ArticleListRes, ArticleMenuRes } from '../types'
import { articleListApi } from '~/api/article'

const articleList = useState<Array<ArticleList>>('articleList', () => [])
const currentCatId = useState<number>('currentCatId', () => 0)

// 数据初始化

// watchEffect(async () => {
const route = useRoute<'home-article'>()
currentCatId.value = Number(route.query.cat_id)

const data = await articleListApi({
  page: 1,
  pageSize: 10,
  cat_id: currentCatId.value,
}) as ArticleListRes

articleList.value = data.list
// })

// 返回公告列表
const router = useRouter()
</script>

<template>
  <div>
    <div cursor-pointer @click="router.back()">
      返回公告列表
    </div>
    <div v-html="articleList[0].content" />
  </div>
</template>
