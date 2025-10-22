<template>
    <component :is="as" class="ui-card__title">
        <slot />
    </component>
</template>

<script setup lang="ts">
const props = defineProps({
    as: {type: String, default: 'h2' }
})
</script>
