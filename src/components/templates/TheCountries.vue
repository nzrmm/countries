<template>
  <div class="flex flex-wrap -mx-3">
    <template v-for="(country, index) in countries" :key="index">
      <BaseCountryCard :country="country" />
    </template>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();
    const countries = computed(() => {
      return store.state.countries;
    });

    return {
      countries,
    };
  },
};
</script>
