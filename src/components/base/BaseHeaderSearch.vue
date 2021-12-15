<template>
  <div class="relative">
    <input
      type="text"
      @keyup="searchCountries"
      v-model.trim="search"
      class="w-[480px] pl-14 px-6 py-4 rounded-lg bg-white dark:bg-dark-d-blue text-sm text-gray-900 dark:text-white placeholder:text-gray-900 dark:placeholder:text-white focus:ring-2 ring-dark-vd-blue/10 dark:ring-white/10 outline-none shadow-md shadow-dark-vd-blue/10 dark:shadown-none bg-search"
      placeholder="Search for a country..."
    />
    <div class="absolute top-4 left-6">
      <IconSearch />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const search = ref('');

    // Search Handler
    const searchCountries = () => {
      store.commit('handleSearchKeyword', search.value);
    };

    return {
      search,
      searchCountries,
    };
  },
};
</script>
