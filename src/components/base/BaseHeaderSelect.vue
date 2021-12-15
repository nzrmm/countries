<template>
  <select
    @change="getRegionCountries($event)"
    class="px-4 py-4 rounded-lg bg-white dark:bg-dark-d-blue text-gray-900 dark:text-white text-sm focus:ring-2 ring-dark-vd-blue/10 dark:ring-white/10 outline-none"
  >
    <option value="" disabled>Select Region</option>
    <option value="all">All Country</option>
    <option value="africa">Africa</option>
    <option value="america">America</option>
    <option value="asia">Asia</option>
    <option value="europe">Europe</option>
    <option value="oceania">Oceania</option>
  </select>
</template>

<script>
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const getRegionCountries = (e) => {
      store.dispatch('getRegionCountries', e.target.value);
    };

    return {
      getRegionCountries,
    };
  },
};
</script>
