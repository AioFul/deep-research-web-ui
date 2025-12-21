export default defineNuxtPlugin(() => {
  const { $pwa } = useNuxtApp()

  if ($pwa) {
    // Listen to service worker events
    $pwa.$on('offlineReady', () => {
      console.log('✅ App ready to work offline')
    })

    $pwa.$on('registered', (registration) => {
      console.log('✅ Service worker registered', registration)
    })

    $pwa.$on('registerError', (error) => {
      console.error('❌ Service worker registration error', error)
    })

    $pwa.$on('updatefound', (registration) => {
      console.log('🔄 New content available, please refresh')
      // Optionally, you can show a notification to the user here
    })

    $pwa.$on('needRefresh', () => {
      console.log('🔄 App needs refresh to update')
    })
  }

  // Note: $pwa is already provided by @vite-pwa/nuxt, we just listen to events
})
