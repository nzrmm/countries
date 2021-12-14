<template>
  <div class="flex items-center space-x-3">
    <button
      @click.prevent="toggleMode()"
      class="w-10 h-10 flex justify-center items-center rounded-xl border border-light-d-gray/40 hover:bg-light-d-gray/20"
    >
      <span v-if="themeMode === 'Dark'"><IconMoon /></span>
      <span v-else><IconSun /></span>
    </button>
    <span class="text-gray-900 dark:text-white text-sm hidden md:inline"
      >{{ themeMode }} Mode</span
    >
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const themeMode = ref('Light');

    const toggleMode = () => {
      const html = document.documentElement;

      // Set Dark Mode
      html.classList.toggle('dark');
      const theme = html.classList.contains('dark') ? 'Dark' : 'Light';

      // Set to change icon
      themeMode.value = theme;
    };

    return {
      themeMode,
      toggleMode,
    };
  },
};
</script>
