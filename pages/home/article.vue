<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-15 15:05:08
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-16 16:56:23
 * @FilePath     : \vitesse-nuxt3\pages\home\article.vue
 * @Description  : Description
-->
<script setup lang="ts">
import type { ArticleList, ArticleListRes, ArticleMenuRes } from './types'
import { articleListApi, articleMenuApi } from '~/api/article'

const route = useRoute<'home-article'>()
const menu = useState<Array<ArticleMenuRes>>('menu', () => [])
const articleList = useState<Array<ArticleList>>('menu', () => [])

menu.value = await articleMenuApi() as ArticleMenuRes[]
const data = await articleListApi({
  page: 1,
  pageSize: 20,
  cat_id: route.query.cat_id as string,
}) as ArticleListRes

articleList.value = data.list
</script>

<template>
  <div class="home-article">
    <div class="home-article-menu">
      <div class="home-article-menu__title">
        文章中心
      </div>
      <div v-for="m in menu" :key="m.cat_id" class="home-article-menu__item">
        {{ m.cat_name }}
      </div>
    </div>
    <div class="home-article-list">
      <div v-for="a in articleList" :key="a.id" class="home-article-list_-item">
        {{ a.title }}
      </div>
    </div>
  </div>
</template>
