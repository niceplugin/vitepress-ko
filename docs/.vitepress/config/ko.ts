import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const ko = defineConfig({
  lang: 'en-US',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() }
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '가이드',
      link: '/guide/what-is-vitepress',
      activeMatch: '/guide/'
    },
    {
      text: '레퍼런스',
      link: '/reference/site-config',
      activeMatch: '/reference/'
    },
    {
      text: pkg.version,
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

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '소개',
      collapsed: false,
      items: [
        { text: 'VitePress란 무엇인가?', link: 'what-is-vitepress' },
        { text: '시작하기', link: 'getting-started' },
        { text: '라우팅', link: 'routing' },
        { text: '배포하기', link: 'deploy' }
      ]
    },
    {
      text: '글쓰기',
      collapsed: false,
      items: [
        { text: '마크다운 확장', link: 'markdown' },
        { text: '에셋 핸들링', link: 'asset-handling' },
        { text: '프론트마터', link: 'frontmatter' },
        { text: '마크다운에서 Vue 사용', link: 'using-vue' },
        { text: '국제화', link: 'i18n' }
      ]
    },
    {
      text: '사용자 정의',
      collapsed: false,
      items: [
        { text: '맞춤 테마 사용', link: 'custom-theme' },
        {
          text: '기본 테마 확장',
          link: 'extending-default-theme'
        },
        { text: '빌드할 때 데이터 로딩', link: 'data-loading' },
        { text: 'SSR 호환성', link: 'ssr-compat' },
        { text: 'CMS 연결', link: 'cms' }
      ]
    },
    {
      text: '실험적인',
      collapsed: false,
      items: [
        { text: 'MPA 모드', link: 'mpa-mode' },
        { text: '사이트맵 생성', link: 'sitemap-generation' }
      ]
    },
    { text: '설정 & API 참조', base: '/reference/', link: 'site-config' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '레퍼런스',
      items: [
        { text: 'Site Config', link: 'site-config' },
        { text: 'Frontmatter Config', link: 'frontmatter-config' },
        { text: 'Runtime API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: 'Default Theme',
          base: '/reference/default-theme-',
          items: [
            { text: 'Overview', link: 'config' },
            { text: 'Nav', link: 'nav' },
            { text: 'Sidebar', link: 'sidebar' },
            { text: 'Home Page', link: 'home-page' },
            { text: 'Footer', link: 'footer' },
            { text: 'Layout', link: 'layout' },
            { text: 'Badge', link: 'badge' },
            { text: 'Team Page', link: 'team-page' },
            { text: 'Prev / Next Links', link: 'prev-next-links' },
            { text: 'Edit Link', link: 'edit-link' },
            { text: 'Last Updated Timestamp', link: 'last-updated' },
            { text: 'Search', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}
