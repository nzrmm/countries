<template>
  <div class="flex flex-col items-center h-full text-gray-900 dark:text-white">
    <h1 class="mt-12 mb-8 font-semibold text-5xl">No Result 😥</h1>
    <p class="w-6/12 text-gray-900/80 dark:text-white/80 text-center">
      We couldn’t find country name with the keyword
      <span class="p-1 rounded-md text-white bg-rose-500">{{ keyword }}</span
      >. Please try another keyword.
    </p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const keyword = computed(() => {
      return store.state.keyword;
    });

    return {
      keyword,
    };
  },
};
</script>
