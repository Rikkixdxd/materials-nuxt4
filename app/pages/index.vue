<template>
    <UiContainer>
        <template v-if="useMaterial.materials.length">
            <UiGrid :columns="{ mobile: 1, tablet: 3, desktop: 4 }" :gap="40" >
                <NuxtLink v-for="material in useMaterial.materials" :key="material.id" :to="`/material/${material.id}`">
                    <UiCard >
                        <UiCardHeader class="header"><Calendar class="icon"/>{{ convertDate(material.createdAt) }}</UiCardHeader>
                        <UiCardTitle>{{ material.title }}</UiCardTitle>
                        <UiCardText v-if="material.description" class="text" :truncate="true">
                            {{ material.description }}
                        </UiCardText>
                    </UiCard>
                </NuxtLink>
            </UiGrid>
        </template>
        <UiCard v-else style="text-align: center;" :hover="false">
            <div v-if="isFetching"><UiSpinner /></div>
            <div v-else>
                Тут пока ничего нет :(<br> Но вы можете добавить первый материал!<br>
                Используйте кнопку "Создать материал" в правом верхнем углу.
            </div>
        </UiCard>
    </UiContainer>
</template>

<script setup lang="ts">
import Calendar from '@/assets/svgs/Calendar.svg'
import { UseMaterial } from '~/stores/UseMaterial';
import { Utilities } from '~/composables/Utility';
definePageMeta({
    title: 'Материалы'
})
const { convertDate } = Utilities();
const useMaterial = UseMaterial();
const isFetching = ref(true);
onMounted(async () => {
    await useMaterial.fetchAllMaterials()
    isFetching.value = false;
});
</script>

<style scoped lang="sass">
.ui-card
    height: 100%
    svg
        margin-right: 10px
    &__header
        color: $color-text-muted
        font-size: 16px
    &__text
        color: $color-text-muted
        font-size: 16px
        font-weight: 300
</style>