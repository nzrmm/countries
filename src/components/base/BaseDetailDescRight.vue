<template>
  <div class="1/2">
    <Information class="mb-3">
      <template v-slot:key>Top Level Domain</template>
      <template v-slot:val>{{ tld }}</template>
    </Information>

    <Information class="mb-3">
      <template v-slot:key>Currencies</template>
      <template v-slot:val>
        <span v-for="currency in currencies">
          {{ currency.name }} ({{ currency.symbol }})
        </span>
      </template>
    </Information>

    <Information class="mb-3">
      <template v-slot:key>Languages</template>
      <template v-slot:val>
        <span v-for="language in languages"> {{ language }}, </span>
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
