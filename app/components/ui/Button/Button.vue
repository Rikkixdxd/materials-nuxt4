<template>
    <div class="ui-button">
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
.ui-button
    padding: $button-padding
    background-color: $button-bg-color
    color: $button-text-color
    border: $button-border
    border-radius: $button-border-radius
    cursor: pointer
    font-size: $button-font-size
    transition: background-color 0.1s ease
    text-align: center
    width: fit-content
    line-height: 1

    &:hover
        background-color: darken($button-bg-color, 5%)
</style>