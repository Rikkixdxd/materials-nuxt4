<template>
    <UiContainer>
        <h1>
            Материалы
        </h1>

        <UiGrid v-if="Materials.materials.length" :columns="{ mobile: 1, tablet: 3, desktop: 4 }" :gap="40" >
            <UiCard v-for="value in Materials.materials" :key="value.id">
                <UiCardHeader class="header"><Calendar class="icon"/>21 сентября</UiCardHeader>
                <UiCardTitle>Как у сов получается поворачивать голову на 270 градусов?</UiCardTitle>
                <UiCardText class="text" :truncate="true">
                    Известно, что совы — превосходные хищники. Причем они одинаково видят как днем, так и ночью. Известно, что совы — превосходные хищники. Причем они одинаково видят как днем, так и ночью. 
                </UiCardText>
            </UiCard>
        </UiGrid>
        <UiCard v-else style="text-align: center;" :hover="false">
            <div>
                Тут пока ничего нет :(<br> Но вы можете добавить первый материал!<br>
                Используйте кнопку "Создать материал" в правом верхнем углу.
            </div>
        </UiCard>
    </UiContainer>
</template>

<script setup lang="ts">
import Calendar from '@/assets/svgs/Calendar.svg'
import { UseMaterial } from '~/stores/UseMaterial';
const Materials = UseMaterial();
onBeforeMount(() => {
    Materials.getAllMaterials();
});
</script>

<style scoped lang="sass">
h1
    margin-bottom: 48px
    @media(max-width: 767px)
        margin-bottom: 32px
.ui-card
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