<template>
  <div class="container">
    <TheHeader />
    <TheCountries />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted } from 'vue';

export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('getCountries');
    });
  },
};
</script>
