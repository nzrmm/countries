<template>
  <select
    @change="getRegion($event)"
    class="w-4/12 lg:w-2/12 px-4 py-4 rounded-lg bg-white dark:bg-dark-d-blue text-gray-900 dark:text-white text-sm focus:ring-2 ring-dark-vd-blue/10 dark:ring-white/10 outline-none shadow-md shadow-dark-vd-blue/10 dark:shadown-none"
  >
    <option value="" disabled>Select Region</option>
    <option v-for="region in regions" :value="region.value">
      {{ region.name }}
    </option>
  </select>
</template>

<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const regions = reactive([
      {
        name: 'All Country',
        value: 'all',
      },
      {
        name: 'Africa',
        value: 'africa',
      },
      {
        name: 'Americas',
        value: 'americas',
      },
      {
        name: 'Asia',
        value: 'asia',
      },
      {
        name: 'Europe',
        value: 'europe',
      },
      {
        name: 'Oceania',
        value: 'oceania',
      },
    ]);

    const getRegion = (e) => {
      store.dispatch('getRegion', e.target.value);
    };

    return {
      regions,
      getRegion,
    };
  },
};
</script>
