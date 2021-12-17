<template>
  <div v-if="isLoading">
    <IconLoading />
  </div>
  <div v-else>
    <div v-if="country" class="my-12 w-full flex justify-between items-center">
      <BaseDetailFlag :country="country" />
      <BaseDetailBio :country="country" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const isLoading = computed(() => {
      return store.getters.isLoading;
    });

    const country = computed(() => {
      return store.getters.country;
    });

    return {
      isLoading,
      country,
    };
  },
};
</script>
