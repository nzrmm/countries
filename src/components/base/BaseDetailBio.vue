<template>
  <div class="w-6/12 text-gray-900 dark:text-white">
    <h1 class="mb-8 text-3xl font-semibold">{{ name.common }}</h1>

    <div class="mb-12 flex space-x-6">
      <BaseDetailDescLeft />
      <BaseDetailDescRight />
    </div>
    <div class="flex items-center text-gray-900 dark:text-white">
      <p class="mr-2">Border Countries :</p>
      <div>
        <ButtonSmall
          v-if="borders"
          v-for="(border, index) in borders"
          :key="index"
        >
          {{ border }}
        </ButtonSmall>
        <span v-else>None</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const detailBio = computed(() => {
      return store.getters.detailBio;
    });

    const { name, borders } = detailBio.value;

    return {
      name,
      borders,
    };
  },
};
</script>
