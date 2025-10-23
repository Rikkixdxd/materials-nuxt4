<template>
    <UiContainer>
        <ClientOnly>
            <LazyMaterialEditor :material="{}" />
        </ClientOnly>
    </UiContainer>
</template>

<script setup lang="ts">

useHead(() => ({
  title: 'Создание материала'
}))

</script>