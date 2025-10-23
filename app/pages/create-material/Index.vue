<template>
    <UiContainer>
        <ClientOnly>
            <LazyMaterialEditor :material="{}" />
        </ClientOnly>
    </UiContainer>
</template>

<script setup lang="ts">

definePageMeta({
    title: 'Создание материала'
})

</script>