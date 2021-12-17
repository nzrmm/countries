<template>
  <div class="px-4 py-6 text-gray-900 dark:text-white">
    <router-link
      :to="{ name: 'Detail', params: { name: name.common.toLowerCase() } }"
      class="text-xl font-semibold"
      >{{ name.common }}</router-link
    >

    <div class="mt-6">
      <Information>
        <template v-slot:key>Population</template>
        <template v-slot:val>{{ population }}</template>
      </Information>

      <Information>
        <template v-slot:key>Region</template>
        <template v-slot:val>{{ region }}</template>
      </Information>

      <Information>
        <template v-slot:key>Capital</template>
        <template v-for="capital in capitals" v-slot:val>
          {{ capital }}
        </template>
      </Information>
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue';
import Information from '../atoms/Information.vue';

export default {
  props: ['countryDesc'],
  setup(props) {
    return { ...toRefs(props.countryDesc) };
  },
};
</script>
