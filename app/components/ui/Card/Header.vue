<template>
    <component :is="as" class="ui-card__header">
        <slot />
    </component>
</template>

<script setup lang="ts">
const props = defineProps({
    as: {type: String, default: 'div' }
})
</script>

<style scoped lang="sass">
.ui-card__header
    display: flex
    align-items: center
</style>