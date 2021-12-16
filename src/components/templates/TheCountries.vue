<template>
  <div v-if="isLoading">
    <IconLoading />
  </div>
  <div v-else>
    <div v-if="countries.length" class="flex flex-wrap -mx-3">
      <template v-for="country in countries" :key="country.name.common">
        <BaseCountryCard :country="country" />
      </template>
    </div>
    <div v-else class="flex flex-col items-center h-full text-gray-900 dark:text-white">
      <h1 class="mt-12 mb-8 font-semibold text-5xl">No Result 😥</h1>
      <p class="w-6/12 text-gray-900/80 dark:text-white/80 text-center">We couldn’t find country name with the keyword <span class="p-1 rounded-md text-white bg-rose-500">{{ keyword }}</span>. Please try another keyword.</p>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();

    // Get countries from state management
    const countries = computed(() => {
      return store.getters.countries;
    });

    // Get keyword from state management
    const keyword = computed(() => {
      return store.getters.keyword;
    })

    // Get isLoading from state management
    const isLoading = computed(() => {
      return store.getters.isLoading
    })
    return {
      countries, keyword, isLoading
    };
  },
};
</script>
