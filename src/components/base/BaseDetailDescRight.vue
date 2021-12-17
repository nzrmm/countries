<template>
  <div class="1/2">
    <p class="mb-3">
      Top Level Domain:
      <span class="text-gray-900/60 dark:text-white/60">{{ tld }}</span>
    </p>
    <p class="mb-3">
      Currencies:
      <span class="text-gray-900/60 dark:text-white/60">
        {{ currencies }}
      </span>
    </p>
    <p class="mb-3">
      Languages:
      <span class="text-gray-900/60 dark:text-white/60">
        {{ languages }}
      </span>
    </p>
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
