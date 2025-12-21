import { skipHydrate } from 'pinia'
import { getApiBase } from '~~/shared/utils/ai-model'
import type { Config } from '~~/shared/types/config'

function validateConfig(config: Config) {
  const ai = config.ai
  if (ai.provider !== 'ollama' && !ai.apiKey) return false
  if (typeof ai.contextSize !== 'undefined' && ai.contextSize < 0) return false

  const ws = config.webSearch
  if (ws.provider === 'tavily' && !ws.apiKey) return false
  // Either apiBase or apiKey is required for firecrawl
  if (ws.provider === 'firecrawl' && !ws.apiBase && !ws.apiKey) return false
  if (ws.provider === 'google-pse' && (!ws.apiKey || !ws.googlePseId)) return false // Require API Key and PSE ID
  if (ws.provider === 'searxng' && !ws.apiBase) return false
  if (typeof ws.concurrencyLimit !== 'undefined' && ws.concurrencyLimit! < 1) return false
  return true
}

// Special validation for web search config - doesn't require apiKey when using server mode
function validateWebSearchConfig(ws: Config['webSearch']) {
  // Don't check apiKey because it's not controlled by frontend in server mode
  if (ws.provider === 'firecrawl' && !ws.apiBase && !ws.apiKey) return false
  if (ws.provider === 'google-pse' && !ws.googlePseId) return false // Don't require apiKey
  if (ws.provider === 'searxng' && !ws.apiBase) return false
  if (typeof ws.concurrencyLimit !== 'undefined' && ws.concurrencyLimit! < 1) return false
  return true
}

export const useConfigStore = defineStore('config', () => {
  const runtimeConfig = useRuntimeConfig()
  const isServerMode = computed(() => runtimeConfig.public.serverMode)
  const isWebSearchServerMode = computed(() => runtimeConfig.public.webSearchServerMode)

  // Server mode configuration
  const serverConfig = computed(() => ({
    aiProvider: runtimeConfig.public.aiProvider,
    aiModel: runtimeConfig.public.aiModel,
    aiContextSize: runtimeConfig.public.aiContextSize,
    webSearchProvider: runtimeConfig.public.webSearchProvider,
    webSearchConcurrencyLimit: runtimeConfig.public.webSearchConcurrencyLimit,
    webSearchSearchLanguage: runtimeConfig.public.webSearchSearchLanguage,
    tavilyAdvancedSearch: runtimeConfig.public.tavilyAdvancedSearch,
    tavilySearchTopic: runtimeConfig.public.tavilySearchTopic,
    googlePseId: runtimeConfig.public.googlePseId,
    browserlessApiUrl: runtimeConfig.public.browserlessApiUrl,
  }))

  const localConfig = useLocalStorage<Config>('deep-research-config', {
    ai: {
      provider: 'openai-compatible',
      model: '',
      contextSize: 128_000,
    },
    webSearch: {
      provider: 'tavily',
      concurrencyLimit: 2,
      useServer: false,
    },
  } satisfies Config)

  const serverConfigRef = computed(
    () =>
      ({
        ai: {
          provider: serverConfig.value.aiProvider as any,
          model: serverConfig.value.aiModel,
          contextSize: serverConfig.value.aiContextSize,
          apiKey: '******',
          apiBase: undefined,
        },
        webSearch: {
          provider: serverConfig.value.webSearchProvider as any,
          concurrencyLimit: serverConfig.value.webSearchConcurrencyLimit,
          searchLanguage: serverConfig.value.webSearchSearchLanguage as any,
          tavilyAdvancedSearch: serverConfig.value.tavilyAdvancedSearch,
          tavilySearchTopic: serverConfig.value.tavilySearchTopic as any,
          googlePseId: serverConfig.value.googlePseId,
          browserlessApiUrl: serverConfig.value.browserlessApiUrl,
          apiKey: '******',
          apiBase: undefined,
          useServer: true, // Server mode always uses server
        },
      }) satisfies Config,
  )

  const config = computed(() => {
    return isServerMode.value ? serverConfigRef.value : localConfig.value
  })
  // The version user dismissed the update notification
  const dismissUpdateVersion = useLocalStorage<string>('dismiss-update-version', '')

  // In server mode, config is always valid since it's handled by the server
  const isConfigValid = computed(() => {
    if (isServerMode.value) return true
    return validateConfig(config.value)
  })

  const aiApiBase = computed(() => {
    if (isServerMode.value) return '' // Not used in server mode
    return getApiBase(config.value.ai)
  })
  const webSearchApiBase = computed(() => {
    if (isServerMode.value) return '' // Not used in server mode

    const { webSearch } = config.value
    if (webSearch.provider === 'tavily') {
      return
    }
    if (webSearch.provider === 'firecrawl') {
      return webSearch.apiBase || 'https://api.firecrawl.dev'
    }
  })

  // Web Search independent validation
  const isWebSearchConfigValid = computed(() => {
    if (isWebSearchServerMode.value) {
      return true // Server mode is always valid
    }
    return validateWebSearchConfig(config.value.webSearch)
  })

  const showConfigManager = ref(false)

  return {
    config: isServerMode.value ? config : skipHydrate(localConfig),
    isConfigValid,
    isWebSearchServerMode,
    isWebSearchConfigValid,
    aiApiBase,
    webSearchApiBase,
    showConfigManager,
    dismissUpdateVersion: skipHydrate(dismissUpdateVersion),
  }
})
