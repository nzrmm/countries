<template>
  <router-link
    :to="{ name: 'Home' }"
    class="px-8 py-2 relative rounded-lg bg-white dark:bg-dark-d-blue text-gray-900 dark:text-white inline-flex items-center shadow-md shadow-dark-vd-blue/10 dark:shadow-none group"
  >
    <div
      class="absolute left-0 group-hover:left-3 opacity-0 group-hover:opacity-100 transition-all duration-500"
    >
      <IconBack />
    </div>
    <span class="group-hover:translate-x-3 transition-all duration-500">
      Back
    </span>
  </router-link>
</template>
