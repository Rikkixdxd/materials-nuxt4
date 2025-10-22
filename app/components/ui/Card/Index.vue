<template>
    <component :is="as" class="ui-card" :class="{ 'ui-card--hover': hover }">
        <slot />
    </component>
</template>

<script setup lang="ts">
const props = defineProps({
    as: {type: String, default: 'div' },
    hover: { type: Boolean, default: true }
})
</script>

<style scoped lang="sass">
.ui-card
    background-color: $color-surface
    border-radius: $card-border-radius
    padding: $card-padding
    display: flex
    flex-direction: column
    gap: 20px
    transition: all 0.1s ease

.ui-card--hover
    &:hover
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)
</style>