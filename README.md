<h2 align="center">
vue3-template-nuxt3
</h2><br>
## 技术栈

Vue3 + Vite + Nuxt + TS + Less + Pinia + Vueuse

## 特性

- 💚 [Nuxt 3](https://nuxt.com/) - SSR、ESR、基于文件的路由、组件自动导入、模块等。
- ⚡️ Vite - 即时 HMR。
- 🎨 [UnoCSS](https://unocss.dev/)- 即时按需原子 CSS 引擎.
- 😃 使用由 Unocss 提供支持的 Pure CSS 中任何图标集中的图标。
- 🔥 语法。`<script setup>`
- 🍍 通过 [Pinia](https://pinia.vuejs.org/zh/) 进行状态管理
- 📑 [ layout布局](https://nuxt.com/docs/guide/directory-structure/layouts)
- 📥 API 自动导入 - 用于组合 API、VueUse 和自定义可组合项。
- 🏎 零配置云功能和部署。
- 🦾 TypeScript
- 🦾 ESLint。已内置规则且保存自动格式化
- 📲 具有脱机支持和自动更新行为的 [PWA](https://github.com/vite-pwa/nuxt)。

## 环境要求

- 使用 **Visual Studio Code (VS Code)** 进行代码编写
- 安装 VSCode 插件： **Vue - Official、Vetur、UnoCSS、Prettier - Code formatter、ESLint**
- Node版本 - 20.12.0
- 使用 **pnpm** 管理依赖

## 项目启动

- `pnpm i`
- `pnpm dev`

## 项目规范

### 命名

1. 文件和变量命名，要简明易懂，不要用中文
2. 文件命名
   - component 文件夹下的组件命名采用 `PascalBase` 风格，其他一律为 `camelCase` 风格
3. 变量命名
   - 一律为 `camelCase` 风格（函数入参以后端给出的字段名为准）
   - 布尔类型：需要一个标识变量含义的前缀，比如`has, is, wether, can, should`等
   - 数组/集合等复数形式：最好以`s`或`list`等能够标识复数形式的后缀结尾，标识当前变量是复数形式，提高可读性；
4. 函数命名
   - 一律为 `camelCase` 风格
   - 前缀为动词， eg：`add / update / delete / detail / get`
5. CSS 命名（非必要尽量使用unocss）
   - 优先使用 unocss 方法
   - 采用 [BEM](https://gitee.com/link?target=http%3A%2F%2Fgetbem.com%2F) 的命名规范：block-name -- element-name - modifier-name，也就是 `模块名--元素名-修饰器名`。
   - scss / less 中的变量、函数、混合 采用 `camelCase` 风格
6. 需要 TS 类型的文件，在当前目录下新建同名 `.d.ts` 文件

### 一些操作规范

- 封装 api 模块的时候， 仅在需要 ssr 的 api 使用 `ssrget` 、`ssrpost`  

- `runtimeConfig`与`appConfig`

  > 两者都用于向应用程序的其余部分公开变量。使用规则：

  - `runtimeConfig`：环境变量构建后，有需要指定的私有或公共令牌。
  - `app.config`：在构建时确定的网站配置（如主题变量、标题）以及任何不敏感的项目配置。



## 项目目录结构

- 基础目录文档： [pages/ · Nuxt Directory Structure](https://nuxt.com/docs/guide/directory-structure/pages)
- types：各个文件、模块对应的 TS 类型编写
- api：各个模块的 api 编写

