<template>
    <header class="app-header">
        <UiContainer>
            <NuxtLink to="/" class="app-header__logo"><Logo /></NuxtLink>
            <div class="app-header__actions">
                <NuxtLink v-if="Button.link" :to="Button.link">
                    <UiButton>
                        <span>{{ Button.text }}</span>
                        <Add />
                    </UiButton>
                </NuxtLink>
                <UiButton v-else @click="handleClick">
                    <span>{{ Button.text }}</span>
                    <Save />
                </UiButton>
            </div>
        </UiContainer>
    </header>
</template>

<script setup lang="ts">
import Logo from '~/assets/svgs/Logo.svg'
import Add from '~/assets/svgs/Add.svg'
import Save from '~/assets/svgs/Save.svg'

const Router = useRouter();
const useMaterial = UseMaterial();
const handleClick = async () => {
    await useMaterial.saveMaterial(useMaterial.editingMaterial!)
    Router.push('/');
}
const Button = computed(() => {
    if(Router.currentRoute.value.path === '/create-material') {
        return {
            text: 'Сохранить',
            link: null
        };
    }

    return {
        text: 'Создать материал',
        link: '/create-material'
    };
}); 

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