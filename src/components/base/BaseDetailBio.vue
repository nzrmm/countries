<template>
  <div class="w-6/12 text-gray-900 dark:text-white">
    <h1 class="mb-8 text-3xl font-semibold">{{ name.common }}</h1>

    <div class="mb-12 flex">
      <BaseDetailDescLeft :detail="detailDescLeft" />
      <BaseDetailDescRight :detail="detailDescRight" />
    </div>
    <div class="flex items-center text-gray-900 dark:text-white">
      <p class="mr-2">Border Countries :</p>
      <ButtonSmall
        v-if="borders"
        v-for="(border, index) in borders"
        :key="index"
      >
        {{ border }}
      </ButtonSmall>
      <span v-else>None</span>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  props: ['country'],
  setup(props) {
    const {
      name,
      population,
      region,
      subregion,
      capital,
      tld,
      currencies,
      languages,
      borders,
    } = props.country;

    const detailDescLeft = reactive({
      officialName: name.official,
      population: population,
      region: region,
      subregion: subregion,
      capital: capital ? capital[0] : '-',
    });

    const detailDescRight = reactive({
      tld: tld ? tld[0] : '-',
      currencies: currencies,
      languages: languages,
    });

    return {
      name,
      borders,
      detailDescLeft,
      detailDescRight,
    };
  },
};
</script>
