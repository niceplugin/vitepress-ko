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
      pattern:
        'https://github.com/niceplugin/vitepress-ko/edit/main-ko/docs/:path',
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
        { text: '사이트 구성', link: 'site-config' },
        { text: '머리말 구성', link: 'frontmatter-config' },
        { text: '런타임 API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: '기본 테마',
          base: '/reference/default-theme-',
          items: [
            { text: '개요', link: 'config' },
            { text: '네비게이션', link: 'nav' },
            { text: '사이드바', link: 'sidebar' },
            { text: '홈 페이지', link: 'home-page' },
            { text: '푸터', link: 'footer' },
            { text: '레이아웃', link: 'layout' },
            { text: '배지', link: 'badge' },
            { text: '팀 페이지', link: 'team-page' },
            { text: '이전 / 다음 링크', link: 'prev-next-links' },
            { text: '편집 링크', link: 'edit-link' },
            { text: '마지막 업데이트 시간', link: 'last-updated' },
            { text: '검색', link: 'search' },
            { text: '카본 광고', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}
