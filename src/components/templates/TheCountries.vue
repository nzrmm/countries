<template>
  <IconLoading v-if="isLoading" />
  <div v-else>
    <div v-if="countries.length" class="flex flex-wrap -mx-3">
      <BaseCountryCard
        v-for="country in countries"
        :key="country.name.common"
        :country="country"
      />
    </div>

    <BaseNotFound v-else />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();

    const countries = computed(() => {
      return store.getters.countries;
    });

    const isLoading = computed(() => {
      return store.state.isLoading;
    });
    return {
      countries,
      isLoading,
    };
  },
};
</script>
