<template>
  <div class="container">
    <BaseDetailBackButton />
    <TheDetail />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  props: ['name'],
  setup(props) {
    const store = useStore();

    onMounted(() => {
      store.dispatch('getCountryByName', props.name);
    });
  },
};
</script>
