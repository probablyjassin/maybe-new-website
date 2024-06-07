<template>
    <div>
        <UContainer>
        <UCard class="mt-10">
          <template #header>
            <div class="flex justify-between">
              <h1>Welcome to Nuxt UI Starter</h1>
              <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
            </div>
          </template>
          <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</UButton>
        </UCard>
        <UCard class="mt-10">
            <h1>Including:</h1>
            <p>Nuxt Pages set up</p>
            <p>Nuxt Ui</p>
            <p> &lt;p class="text-red-600"&gt;<span class="text-red-600">Tailwindcss</span>&lt;/p&gt; </p>
            <p>full color scheme</p>
        </UCard>
      </UContainer>
    </div>
</template>
