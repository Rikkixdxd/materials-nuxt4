<template>
    <header class="app-header">
        <UiContainer>
            <NuxtLink to="/" class="app-header__logo"><Logo /></NuxtLink>
            <div class="app-header__actions">
                <NuxtLink to="/create-material"><UiButton><span>Создать материал</span><Add /></UiButton></NuxtLink>
            </div>
        </UiContainer>
    </header>
</template>

<script setup lang="ts">
import Logo from '~/assets/svgs/Logo.svg'
import Add from '~/assets/svgs/Add.svg'
</script>

<style scoped lang="sass">
// TODO: сделать стики
.app-header
    padding: 20px 0
    background-color: $color-surface
    @media(max-width: 768px)
        padding: 8px 0

    .ui-container
        display: flex
        justify-content: space-between
        align-items: center

    &__logo
        display: inline-flex
        
    .ui-button 
        @media(max-width: 768px)
            padding: 0
            width: 48px
            height: 48px
            display: flex
            justify-content: center
            align-items: center
        svg
            display: none
            font-size: 48px
            @media(max-width: 768px)
                display: block
        span
            @media(max-width: 768px)
                display: none

</style>