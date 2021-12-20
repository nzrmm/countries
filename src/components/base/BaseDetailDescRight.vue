<template>
  <div class="1/2">
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
import { toRefs } from 'vue';

export default {
  props: ['detail'],
  setup(props) {
    return { ...toRefs(props.detail) };
  },
};
</script>
