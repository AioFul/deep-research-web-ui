<template>
  <div
    v-if="$pwa?.showInstallPrompt"
    class="fixed bottom-4 left-4 right-4 md:right-auto z-50"
  >
    <UCard class="max-w-md">
      <template #header>
        <h3 class="font-semibold">{{ $t('install.title', 'Install Deep Research') }}</h3>
      </template>

      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ $t('install.description', 'Install the app for a better experience and offline access') }}
      </p>

      <template #footer>
        <div class="flex items-center justify-between gap-2 w-full">
          <UButton
            color="white"
            @click="$pwa?.cancelInstall()"
          >
            {{ $t('install.cancel', 'Maybe later') }}
          </UButton>
          <UButton
            color="primary"
            @click="$pwa?.install()"
          >
            {{ $t('install.confirm', 'Install') }}
          </UButton>
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const { $pwa } = useNuxtApp()
</script>
