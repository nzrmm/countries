<template>
  <div class="px-4 py-6 text-gray-900 dark:text-white">
    <router-link
      :to="{ name: 'Detail', params: { name: name.common.toLowerCase() } }"
      class="text-xl font-semibold"
      >{{ name.common }}</router-link
    >

    <div class="mt-6">
      <Information class="mb-1.5">
        <template v-slot:key>Population</template>
        <template v-slot:val>{{ population }}</template>
      </Information>

      <Information class="mb-1.5">
        <template v-slot:key>Region</template>
        <template v-slot:val>{{ region }}</template>
      </Information>

      <Information class="mb-1.5">
        <template v-slot:key>Capital</template>
        <template v-slot:val>
          <template v-for="cap in capital">
            {{ cap }} {{ capital.length - 1 ? ', ' : '' }}
          </template>
        </template>
      </Information>
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue';

export default {
  props: ['countryDesc'],
  setup(props) {
    return { ...toRefs(props.countryDesc) };
  },
};
</script>
