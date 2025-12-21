import { version as projVersion } from './public/version.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt',
  ],

  // 禁用自动字体加载
  fonts: {
    providers: {
      google: false,
      googleicons: false,
    },
  },

  // devServer: {
  //   host: '0.0.0.0',
  // },

  runtimeConfig: {
    public: {
      version: projVersion,
      serverMode: process.env.NUXT_PUBLIC_SERVER_MODE === 'true',
      // Server mode configuration - exposed to frontend
      aiProvider: process.env.NUXT_PUBLIC_AI_PROVIDER || 'openai-compatible',
      aiModel: process.env.NUXT_PUBLIC_AI_MODEL || 'gpt-4o-mini',
      aiContextSize: parseInt(process.env.NUXT_PUBLIC_AI_CONTEXT_SIZE || '128000'),
      webSearchProvider: process.env.NUXT_PUBLIC_WEB_SEARCH_PROVIDER || 'tavily',
      webSearchConcurrencyLimit: parseInt(process.env.NUXT_PUBLIC_WEB_SEARCH_CONCURRENCY_LIMIT || '2'),
      webSearchSearchLanguage: process.env.NUXT_PUBLIC_WEB_SEARCH_SEARCH_LANGUAGE || 'en',
      tavilyAdvancedSearch: process.env.NUXT_PUBLIC_TAVILY_ADVANCED_SEARCH === 'true',
      tavilySearchTopic: process.env.NUXT_PUBLIC_TAVILY_SEARCH_TOPIC || 'general',
      googlePseId: process.env.NUXT_PUBLIC_GOOGLE_PSE_ID,
      searxngApiUrl: process.env.NUXT_PUBLIC_SEARXNG_API_URL,
      browserlessApiUrl: process.env.NUXT_PUBLIC_BROWSERLESS_API_URL,
      webSearchServerMode: process.env.NUXT_PUBLIC_WEB_SEARCH_SERVER_MODE === 'true',
    },
    // Private server-only configuration
    aiApiKey: process.env.NUXT_AI_API_KEY,
    aiApiBase: process.env.NUXT_AI_API_BASE,
    webSearchApiKey: process.env.NUXT_WEB_SEARCH_API_KEY,
    webSearchApiBase: process.env.NUXT_WEB_SEARCH_API_BASE,
  },

  routeRules: {
    '/version.json': {
      cors: true,
      cache: false,
    },
  },

  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'no_prefix',
    locales: ['en', 'zh', 'nl'],
    detectBrowserLanguage: {
      alwaysRedirect: true,
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  colorMode: {
    preference: 'system',
    dataValue: 'theme',
    classSuffix: '',
    storage: 'cookie',
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('js-tiktoken')) {
              return 'tiktoken'
            }
          },
        },
      },
    },
    // 开发环境允许所有主机访问（适合 CNB 云环境）
    // server: {
    //   allowedHosts: 'all'
    // }
  },

  nitro: {
    compressPublicAssets: { brotli: true, gzip: true },
  },

  typescript: {
    // Customize app/server TypeScript config
    tsConfig: {
      compilerOptions: {
        strict: true,
      },
    },
    // Customize build-time TypeScript config
    nodeTsConfig: {
      compilerOptions: {
        strict: true,
      },
    },
  },

  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-29',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Deep Research - AI Research Assistant',
      short_name: 'DeepResearch',
      description: 'AI-powered deep research assistant with recursive web search',
      theme_color: '#555555',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait-primary',
      scope: '/',
      start_url: '/',
      categories: ['education', 'productivity', 'ai'],
      lang: 'en',
      dir: 'ltr',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icon-512x512.maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,json,png,svg,ico}'],
      maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10 MB
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'external-resources',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 // 1 day
            }
          }
        }
      ]
    },
    devOptions: {
      enabled: true,
      type: 'module',
      navigateFallback: '/'
    },
    client: {
      installPrompt: true
    }
  },
})
