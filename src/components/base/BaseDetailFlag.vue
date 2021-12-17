<template>
  <div class="w-5/12">
    <div class="p-3 h-96 bg-light-d-gray/50 dark:bg-dark-d-blue rounded-xl">
      <img :src="flags.png" class="h-full rounded-lg" alt="flag-image" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['country'],
  setup(props) {
    const { flags } = props.country;

    return {
      flags,
    };
  },
};
</script>
