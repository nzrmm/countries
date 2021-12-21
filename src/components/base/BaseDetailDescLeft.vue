<template>
  <div class="w-12/12 md:w-6/12">
    <Information class="mb-3">
      <template v-slot:key>Official Name</template>
      <template v-slot:val>{{ officialName }}</template>
    </Information>
    <Information class="mb-3">
      <template v-slot:key>Population</template>
      <template v-slot:val>{{ population }}</template>
    </Information>
    <Information class="mb-3">
      <template v-slot:key>Region</template>
      <template v-slot:val>{{ region }}</template>
    </Information>
    <Information class="mb-3">
      <template v-slot:key>Sub Region</template>
      <template v-slot:val>{{ subregion }}</template>
    </Information>
    <Information class="mb-3">
      <template v-slot:key>Capital</template>
      <template v-slot:val>
        <template v-for="cap in capital">
          {{ cap }} {{ capital.length - 1 ? ', ' : '' }}
        </template>
      </template>
    </Information>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const detailDescLeft = computed(() => {
      return store.getters.detailDescLeft;
    });

    const { officialName, population, region, subregion, capital } =
      detailDescLeft.value;
    return { officialName, population, region, subregion, capital };
  },
};
</script>
