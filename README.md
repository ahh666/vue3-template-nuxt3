<h2 align="center">
vue3-template-nuxt3
</h2><br>

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
- 🦾 ESLint
- 📲 具有脱机支持和自动更新行为的 [PWA](https://github.com/vite-pwa/nuxt)。

## 环境要求

- 使用 **Visual Studio Code (VS Code)** 进行代码编写
- 安装 VSCode 插件： **Vue - Official、Vetur、UnoCSS、Prettier - Code formatter、ESLint**
- Node版本 - 20.12.0
- 使用 **pnpm** 管理依赖

## 项目规范

### `runtimeConfig`与`appConfig`

两者都用于向应用程序的其余部分公开变量。使用规则：

- `runtimeConfig`：环境变量构建后，有需要指定的私有或公共令牌。
- `app.config`：在构建时确定的网站配置（如主题变体、标题）以及任何不敏感的项目配置。

## 项目目录结构

- 基础目录文档： [pages/ · Nuxt Directory Structure](https://nuxt.com/docs/guide/directory-structure/pages)
- types：各个文件、模块对应的 TS 类型编写
- api：各个模块的 api 编写

