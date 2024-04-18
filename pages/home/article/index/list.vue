<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-18 10:45:17
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-18 11:20:03
 * @FilePath     : \vue3-template-nuxt3\pages\home\article\index\list.vue
 * @Description  : Description
-->
<script setup lang="ts">
import type { ArticleList, ArticleListRes, ArticleMenuRes } from '../types'
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

// 查看文章详情
const router = useRouter()
function readDetail(cat_id = 0, id = 0) {
  router.push({
    path: '/home/article/detail',
    query: {
      cat_id,
      id,
    },
  })
}
</script>

<template>
  <div>
    <div
      v-for="a in articleList" :key="a.id"
      border-b="1px solid #f1f1f1"
      px-30px py-0 flex items-center
      justify-between h-70px
    >
      <div w-500px class="text-#585858">
        {{ a.title }}
      </div>
      <div text-14px text-left class="text-#8f8f8f">
        {{ useDateFormat(a.add_time * 1000, 'YYYY-MM-DD').value }}
      </div>
      <div
        cursor-pointer
        w-100px text-center class="b-rd-30px bg-#ffdb51
        h30px lh-30px" @click="readDetail(a.cat_id, a.id)"
      >
        查看
      </div>
    </div>
  </div>
</template>
