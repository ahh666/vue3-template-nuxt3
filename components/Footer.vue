<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-12 16:54:05
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-05-11 16:24:24
 * @FilePath     : \vue3-template-nuxt3\components\Footer.vue
 * @Description  : Description
-->

<template>
  <footer h300px w100vw py55px flex justify-center>
    <div items-center w1200px flex justify-between>
      <a inline-block href="/">
        <img w326px h90px src="/logo.png" alt="logo">
      </a>
      <div style="background: radial-gradient(#797979, hsla(0, 0%, 100%, 0) 71%)" w1px h186px />
      <div text="[#c1c1c1] 14px" w700px>
        <div flex justify-between>
          <a href="https://beian.miit.gov.cn/" target="_blank" class="user_center">浙ICP备XXXXXXX号-2</a>
          <a inline-block decoration-none h-20px lh-20px m-0px target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=">
            <img float-left src="/anbei-logo.png">
            <p
              float-left h-20px lh-20px ml-5px text="[rgb(147,147,147)]"
            >
              浙公网安备 XXXXXXXXXXXX号
            </p>
          </a>
          <a href="" target="_blank" class="user_center">电子营业执照</a>
          <a href="" target="_blank" class="user_center">浙B2-XXXXXXXX</a>
        </div>
        <div my10px>
          ©版权所有 XXXXXXXX科技有限公司 All Rights Reserved 抄袭必究
        </div>
        <div flex>
          <a mr40px>
            <img
              w133px h45px
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAoCAYAAAAfWs+KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTMzQjJDMUIzOTg3MTFFOTlCRkY5QjBDMDc3QTdGMjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTMzQjJDMUMzOTg3MTFFOTlCRkY5QjBDMDc3QTdGMjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMzNCMkMxOTM5ODcxMUU5OUJGRjlCMEMwNzdBN0YyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMzNCMkMxQTM5ODcxMUU5OUJGRjlCMEMwNzdBN0YyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Put2CuoAAAuaSURBVHja7Fx5dBXV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"
            >
          </a>
          <a target="cyxyv" href="">
            <img w133px h45px src="https://aqyzmedia.yunaq.com/labels/label_lg_90040.png">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
