# 快速上手

本节将帮助您从头开始构建一个基本的 VitePress 文档站点。 如果您已经有一个现有项目并希望将文档保留在项目中，请从第 2 步开始。

::: warning
VitePress目前处于`alpha`状态。它已经适合使用开箱即用的文档，但是配置和主题化API仍然可能在小版本之间发生变化。
:::

## Step. 1: 创建一个项目

创建并进去新项目的目录

```sh
$ mkdir vitepress-starter && cd vitepress-starter
```

用你喜欢的包管理工具初始化项目

```sh
$ yarn init
```

## Step. 2: 安装VitePress

添加 VitePress 和 Vue 作为项目的开发依赖项。

```sh
$ yarn add --dev vitepress vue
```

::: details Getting missing peer deps warnings?
`@docsearch/js` 的peer dependencies存在某些问题。 如果你看到某些命令由于它们而失败，您现在可以尝试以下解决方法：

如果使用pnpm，在`package.json`添加以下代码：

```json
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search"
    ]
  }
}
```

:::

创建你的第一篇文章

```sh
$ mkdir docs && echo '# Hello VitePress' > docs/index.md
```

## Step. 3: 启动本地开发环境

`package.json`添加以下scripts

```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}
```

启动文档网站的本地服务

```sh
$ yarn docs:dev
```

VitePress 将在 `http://localhost:5173` 启动一个热重载开发服务器。

## Step. 4: 增加更多文档

让我们向站点添加另一个页面。 创建一个文件名 `getting-started.md` 以及您在 Step 中创建的 `index.md`。 2. 现在你的目录结构应该是这样的。
<!-- Let's add another page to the site. Create a file name `getting-started.md` along with `index.md` you've created in Step. 2. Now your directory structure should look like this. -->

```
.
├─ docs
│  ├─ getting-started.md
│  └─ index.md
└─ package.json
```

然后，尝试访问 `http://localhost:5173/getting-started.html`，您应该会看到 `getting-started.md` 的内容。
<!-- Then, try to access `http://localhost:5173/getting-started.html` and you should see the content of `getting-started.md` is shown. -->

这就是 VitePress 的基本工作方式。 目录结构与 URL 路径相对应。 您添加文件，然后尝试访问它。

<!-- This is how VitePress works basically. The directory structure corresponds with the URL path. You add files, and just try to access it. -->

## 接下来?

到目前为止，您应该拥有一个基本但功能强大的 VitePress 文档站点。 但目前，用户无法浏览该网站，因为它缺少例如我们在该网站上的侧边栏菜单。

要启用这些导航，我们必须向站点添加一些配置。 前往 [配置指南](./configuration) 了解如何配置 VitePress。

如果您想了解更多关于您可以在页面中执行的操作，例如编写降价内容或使用 Vue 组件，请查看文档的“编写”部分。 [Markdown 指南](./markdown) 将是一个很好的起点。

如果您想了解如何自定义网站外观（主题），并了解 VitePress 默认主题提供的功能，请访问 [主题：简介](./theme-introduction)。

当您的文档站点开始成形时，请务必阅读 [部署指南](./deploying)。

<!-- By now, you should have a basic but functional VitePress documentation site. But currently, the user has no way to navigate around the site because it's missing for example sidebar menu we have on this site.

To enable those navigations, we must add some configurations to the site. Head to [configuration guide](./configuration) to learn how to configure VitePress.

If you would like to know more about what you can do within the page, for example, writing markdown contents, or using Vue Component, check out the "Writing" section of the docs. [Markdown guide](./markdown) would be a great starting point.

If you want to know how to customize how the site looks (Theme), and find out the features VitePress's default theme provides, visit [Theme: Introduction](./theme-introduction).

When your documentation site starts to take shape, be sure to read the [deployment guide](./deploying). -->
