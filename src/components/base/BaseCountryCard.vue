<template>
  <div
    class="w-3/12 px-3 pb-6 hover:scale-105 transition-all duration-700 ease-in-out"
  >
    <div
      class="p-3 bg-white dark:bg-dark-d-blue rounded-xl shadow-lg shadow-dark-vd-blue/10 dark:shadow-dark-vd-blue/50"
    >
      <img
        :src="country.flags.png"
        class="w-full h-40 rounded-lg"
        alt="Image"
      />

      <BaseCountryCardDesc :countryDesc="countryDesc" />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  props: ['country'],
  setup(props) {
    const country = props.country;

    const countryDesc = reactive({
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital ? country.capital[0] : '-',
    });

    return {
      countryDesc,
    };
  },
};
</script>
