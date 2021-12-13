<template>
  <router-link
    :to="{ name: 'Home' }"
    class="px-8 py-2 relative rounded-lg bg-dark-d-blue text-white inline-flex items-center group"
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
