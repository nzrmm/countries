<template>
  <div v-if="isLoading">
    <IconLoading />
  </div>
  <div v-else>
    <div
      v-if="country"
      class="mt-12 w-full text-center md:text-left flex flex-col lg:flex-row justify-between items-center"
    >
      <BaseDetailFlag />
      <BaseDetailBio />
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
      return store.state.isLoading;
    });

    const country = computed(() => {
      return store.state.country;
    });

    return {
      isLoading,
      country,
    };
  },
};
</script>
