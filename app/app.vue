<template>
  <UApp :locale="zh_cn">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
  import { zh_cn } from '@nuxt/ui/locale'

  // TODO
  useHead({
    title: 'Deep Research Web UI',
    meta: [
      { name: 'theme-color', content: '#555555' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Deep Research' }
    ],
    link: [
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
    ],
    script: [
      // Anonymous analytics
      {
        defer: true,
        src: 'https://umami.ataw.top/script.js',
        'data-website-id': '8479d775-7ce4-4300-a8bb-6d83b2579e41',
        'data-tag': useRuntimeConfig().public.version,
      },
    ],
  })
</script>
