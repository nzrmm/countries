<template>
  <div class="w-12/12 lg:w-5/12 mb-8 lg:mb-0">
    <div
      class="p-3 h-60 md:h-72 lg:h-96 bg-light-d-gray/50 dark:bg-dark-d-blue rounded-xl"
    >
      <img :src="flags.png" class="w-full h-full rounded-lg" alt="flag-image" />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();
    const flags = computed(() => {
      return store.getters.detailFlag;
    });

    return {
      flags,
    };
  },
};
</script>
