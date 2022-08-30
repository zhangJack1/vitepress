import { defineConfig } from '../../src/node'
import { version } from '../../package.json'

export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig()
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    }
  }
})

function nav() {
  return [
    { text: '指南', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
    { text: '配置', link: '/config/introduction', activeMatch: '/config/' },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: '介绍',
      collapsible: true,
      items: [
        { text: '什么是VitePress?', link: '/guide/what-is-vitepress' },
        { text: '快速上手', link: '/guide/getting-started' },
        { text: '配置', link: '/guide/configuration' },
        { text: '部署', link: '/guide/deploying' }
      ]
    },
    {
      text: '编写',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: '静态资源', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: '在Markdown中使用Vue', link: '/guide/using-vue' },
        { text: 'API参考', link: '/guide/api' }
      ]
    },
    {
      text: '主题',
      collapsible: true,
      items: [
        { text: '介绍', link: '/guide/theme-introduction' },
        { text: 'Nav', link: '/guide/theme-nav' },
        { text: 'Sidebar', link: '/guide/theme-sidebar' },
        { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
        { text: 'Edit Link', link: '/guide/theme-edit-link' },
        { text: 'Last Updated', link: '/guide/theme-last-updated' },
        { text: 'Layout', link: '/guide/theme-layout' },
        { text: 'Home Page', link: '/guide/theme-home-page' },
        { text: 'Team Page', link: '/guide/theme-team-page' },
        { text: 'Footer', link: '/guide/theme-footer' },
        { text: 'Search', link: '/guide/theme-search' },
        { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
      ]
    },
    {
      text: '迁移',
      collapsible: true,
      items: [
        {
          text: '从 VuePress 迁移',
          link: '/guide/migration-from-vuepress'
        },
        {
          text: '从 VitePress 0.x 迁移',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}

function sidebarConfig() {
  return [
    {
      text: '配置',
      items: [
        { text: '介绍', link: '/config/introduction' },
        { text: '应用配置', link: '/config/app-configs' },
        { text: '主题配置', link: '/config/theme-configs' },
        { text: 'Frontmatter 配置', link: '/config/frontmatter-configs' }
      ]
    }
  ]
}
