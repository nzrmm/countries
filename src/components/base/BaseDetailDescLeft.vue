<template>
  <div class="w-1/2">
    <p class="mb-3">
      Official Name:
      <span class="text-gray-900/60 dark:text-white/60">
        {{ officialName }}
      </span>
    </p>
    <p class="mb-3">
      Population:
      <span class="text-gray-900/60 dark:text-white/60">
        {{ population }}
      </span>
    </p>
    <p class="mb-3">
      Region:
      <span class="text-gray-900/60 dark:text-white/60">
        {{ region }}
      </span>
    </p>
    <p class="mb-3">
      Sub Region:
      <span class="text-gray-900/60 dark:text-white/60">
        {{ subregion }}
      </span>
    </p>
    <p class="mb-3">
      Capital:
      <span class="text-gray-900/60 dark:text-white/60">
        {{ capital }}
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
