# 配置

没有任何配置，页面非常小，用户无法浏览网站。 要自定义您的站点，我们首先在您的 docs 目录中创建一个 `.vitepress` 目录。 这是放置所有 VitePress 特定文件的地方。 你的项目结构大概是这样的：

Without any configuration, the page is pretty minimal, and the user has no way to navigate around the site. To customize your site, let's first create a `.vitepress` directory inside your docs directory. This is where all VitePress-specific files will be placed. Your project structure is probably like this:

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

配置 VitePress 站点的基本文件是 `.vitepress/config.js`，它应该导出一个 JavaScript 对象：
The essential file for configuring a VitePress site is `.vitepress/config.js`, which should export a JavaScript object:

```js
export default {
  title: 'VitePress',
  description: 'Just playing around.'
}
```

在上面的示例中，该站点的标题为“VitePress”，“Just play around.”作为描述元标记。

在 [Theme: Introduction](./theme-introduction) 了解有关 VitePress 功能的所有信息，以了解如何在此配置文件中配置特定功能。

您还可以在 [Configs](../config/introduction) 中找到所有配置参考。
In the above example, the site will have the title of `VitePress`, and `Just playing around.` as the description meta tag.

Learn everything about VitePress features at [Theme: Introduction](./theme-introduction) to find how to configure specific features within this config file.

You may also find all configuration references at [Configs](../config/introduction).
