<template>
  <p v-bind="$attrs">
    <slot name="key"></slot> :
    <span class="text-gray-900/60 dark:text-white/60">
      <slot name="val"></slot>
    </span>
  </p>
</template>
