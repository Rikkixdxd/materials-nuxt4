<template>
    <UiContainer>
        <WysiwygEditor :modelValue="material" />
    </UiContainer>
</template>

<script setup lang="ts">
const useMaterial = UseMaterial();
const Router = useRouter();
const material = ref(useMaterial.getMaterialById(parseInt(Router.currentRoute.value.params.id as string)));
definePageMeta({
    title: 'Редактирование материала'
})

</script>

<style scoped lang="sass">

</style>