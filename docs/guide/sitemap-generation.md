# 사이트맵 생성

VitePress는 기본적으로 사이트용 `sitemap.xml` 파일을 생성하는 지원을 제공합니다. 활성화하려면 다음을 `.vitepress/config.js`에 추가하세요:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  sitemap: {
    hostname: 'https://example.com'
  }
})
```

`sitemap.xml`에 `<lastmod>` 태그를 포함하고 싶다면, [`lastUpdated`](../reference/default-theme-last-updated) 옵션을 활성화할 수 있습니다.

## 옵션들

사이트맵 지원은 [`sitemap`](https://www.npmjs.com/package/sitemap) 모듈에 의해 제공됩니다. 이 모듈에서 지원하는 모든 옵션을 설정 파일의 `sitemap` 옵션에 전달할 수 있습니다. 이들은 `SitemapStream` 생성자에 직접 전달됩니다. 자세한 내용은 [`sitemap` 문서](https://www.npmjs.com/package/sitemap#options-you-can-pass)를 참조하세요. 예시:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  sitemap: {
    hostname: 'https://example.com',
    lastmodDateOnly: false
  }
})
```

## `transformItems` 훅

`sitemap.transformItems` 훅을 사용하여 `sitemap.xml` 파일에 기록되기 전에 사이트맵 항목을 수정할 수 있습니다. 이 훅은 사이트맵 항목 배열로 호출되며, 사이트맵 항목 배열이 반환되기를 기대합니다. 예시:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  sitemap: {
    hostname: 'https://example.com',
    transformItems: (items) => {
      // 새 항목 추가 또는 기존 항목 수정/필터링
      items.push({
        url: '/extra-page',
        changefreq: 'monthly',
        priority: 0.8
      })
      return items
    }
  }
})
```
