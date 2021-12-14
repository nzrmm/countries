<template>
  <div class="px-4 py-6 text-gray-900 dark:text-white">
    <router-link
      :to="{ name: 'Detail', params: { name: 'indonesia' } }"
      class="text-xl font-semibold"
      >Germany</router-link
    >

    <div class="mt-6">
      <p class="mb-1.5">
        Population:
        <span class="text-gray-900/60 dark:text-white/60">81.770.900</span>
      </p>
      <p class="mb-1.5">
        Region:
        <span class="text-gray-900/60 dark:text-white/60">Europe</span>
      </p>
      <p class="mb-1.5">
        Capital: <span class="text-gray-900/60 dark:text-white/60">Berlin</span>
      </p>
    </div>
  </div>
</template>
