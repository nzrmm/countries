<template>
  <router-link
    :to="{ name: 'Home' }"
    class="flex items-center text-gray-900 dark:text-white font-bold space-x-3 group"
  >
    <div
      class="w-10 h-10 flex justify-center items-center rounded-xl bg-light-d-gray/50 dark:bg-dark-vd-blue group-hover:-rotate-45 transition-all duration-700"
    >
      <span class="group-hover:rotate-45 duration-700">C</span>
    </div>
    <h1>Countries</h1>
  </router-link>
</template>
