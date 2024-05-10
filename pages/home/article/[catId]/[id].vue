<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-18 10:45:24
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-05-10 10:33:04
 * @FilePath     : \vue3-template-nuxt3\pages\home\article\[catId]\[id].vue
 * @Description  : 文章详情
-->
<script setup lang="ts">
import type { ArticleListRes } from '~/types/article'
import { articleListApi } from '~/api/article'
import { appName } from '~/constants/index'

const route = useRoute()

const { catId, id } = route.params as { catId: string, id: string }
const data = await articleListApi({
  page: 1,
  pageSize: 10,
  cat_id: Number(catId),
  id: Number(id),
}) as ArticleListRes

const articleInfo = data.list?.[0] || {}

const pubTime = useDateFormat((articleInfo.add_time || 0) * 1000, 'YYYY-MM-DD').value

useHead({
  title: `${articleInfo.title}_${appName}`,
})

// 返回公告列表
const router = useRouter()
function goArticleList() {
  router.replace(`/home/article/${catId}`)
}
</script>

<template>
  <div>
    <div text="[#8f8f8f] 14px" flex mb10px items-center cursor-pointer @click="goArticleList">
      <div i-carbon:arrow-left inline-block mr4px />返回公告列表
    </div>
    <h1 text="center 30px" mt16px>
      {{ articleInfo.title }}
    </h1>
    <div text="[#8f8f8f] 14px center">
      <span mr40px>发布时间：{{ pubTime }}</span>
      <span>点击数：{{ articleInfo.click }}</span>
    </div>
    <div v-html="articleInfo.content" />
    <div mt20px font-600 text-center cursor-pointer>
      <a href="https://www.pxb7.com/allGame">查看全部交易中的游戏 &gt;</a>
    </div>
  </div>
</template>
