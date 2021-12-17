<template>
  <div
    class="w-3/12 px-3 pb-6 hover:scale-105 transition-all duration-700 ease-in-out"
  >
    <div
      class="p-3 bg-white dark:bg-dark-d-blue rounded-xl shadow-lg shadow-dark-vd-blue/10 dark:shadow-dark-vd-blue/50"
    >
      <img :src="flags.png" class="w-full h-40 rounded-lg" alt="Image" />

      <BaseCountryCardDesc :countryDesc="countryDesc" />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  props: ['country'],
  setup(props) {
    const { flags, name, population, region, capital } = props.country;

    const countryDesc = reactive({
      name: name,
      population: population,
      region: region,
      capitals: capital, // Because capital is array
    });

    return {
      flags,
      countryDesc,
    };
  },
};
</script>
