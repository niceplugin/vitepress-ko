import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { ko } from './ko'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: '한국어', lang: 'ko-KR', link: '/', ...ko },
    en: { label: 'English', lang: 'en-US', link: 'https://vitepress.dev/' }
  }
})
