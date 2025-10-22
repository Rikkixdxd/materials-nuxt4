<template>
  <component
    :is="as"
    class="ui-card__text"
    :class="{ 'ui-card__text--truncated': truncate }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps({
  as: { type: String, default: "p" },
  truncate: { type: Boolean, default: false }, // true -> 4 строки
});
</script>

<style scoped lang="sass">
.ui-card__text--truncated
  display: -webkit-box
  -webkit-box-orient: vertical
  -webkit-line-clamp: 4
  overflow: hidden
</style>
