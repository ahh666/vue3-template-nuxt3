<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-18 10:45:17
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-05-06 15:44:16
 * @FilePath     : \vue3-template-nuxt3\pages\home\article\[catId]\index.vue
 * @Description  : 文章列表
-->
<script setup lang="ts">
import type { ArticleInfo, ArticleListRes } from '~/types/article'
import { articleListApi } from '~/api/article'

useHead({
  title: '游戏行业动态_螃蟹网络游戏账号交易代售平台',
})

const articleList = useState<Array<ArticleInfo>>('articleList', () => [])
const currentPage = useState<number>('currentPage', () => 1)
const total = useState<number>('total', () => 0)

const { params } = useRoute()

async function getArticleList(page = 1) {
  currentPage.value = page
  const queryCatId = Number((params as { catId: string }).catId)
  const data = await articleListApi({
    page,
    pageSize: 10,
    cat_id: queryCatId,
  }) as ArticleListRes

  articleList.value = data.list
  total.value = data.total
}

watchEffect(async () => {
  getArticleList()
})

// 查看文章详情
const router = useRouter()
function readDetail(catId = 0, id = 0) {
  router.push({
    path: `/home/article/${catId}/${id}`,
  })
}
</script>

<template>
  <div>
    <div
      v-for="a in articleList" :key="a.id"
      cursor-pointer px-30px py-0 h-70px
      border-b="1px solid #f1f1f1"
      flex items-center justify-between
      hover="bg-#fffaf0"
      @click="readDetail(a.cat_id, a.id)"
    >
      <div :title="a.title" text="[#585858] ellipsis" overflow-hidden whitespace-nowrap w500px>
        {{ a.title }}
      </div>
      <div text="[#8f8f8f] 14px left">
        {{ useDateFormat((a.add_time || 0) * 1000, 'YYYY-MM-DD').value }}
      </div>
      <div
        cursor-pointer
        w100px text-center class="b-rd-30px bg-#ffdb51
        h30px lh-30px"
      >
        查看
      </div>
    </div>
    <div mt30px>
      <t-pagination
        v-model:current="currentPage"
        style="justify-content: center;"
        :show-page-size="false" :total-content="false" :total="total"
        @change="getArticleList(currentPage)"
      />
    </div>
  </div>
</template>
