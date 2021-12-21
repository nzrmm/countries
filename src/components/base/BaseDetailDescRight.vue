<template>
  <div class="w-12/12 md:w-6/12">
    <Information class="mb-3">
      <template v-slot:key>Top Level Domain</template>
      <template v-slot:val>
        <template v-for="tld in tlds">
          {{ tld }}
        </template>
      </template>
    </Information>

    <Information class="mb-3">
      <template v-slot:key>Currencies</template>
      <template v-slot:val>
        <template v-for="currency in currencies">
          {{ currency.name }} ({{ currency.symbol }})
        </template>
      </template>
    </Information>

    <Information class="mb-3">
      <template v-slot:key>Languages</template>
      <template v-slot:val>
        <template v-for="language in languages"> {{ language }}, </template>
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

    const detailDescRight = computed(() => {
      return store.getters.detailDescRight;
    });

    const { tlds, currencies, languages } = detailDescRight.value;
    return { tlds, currencies, languages };
  },
};
</script>
