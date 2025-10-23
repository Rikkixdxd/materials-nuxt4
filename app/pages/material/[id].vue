<template>
    <UiContainer>
        <UiCard :hover="false">
            <div v-if="isFetching" style="text-align: center;">
                <UiSpinner />
            </div>
            <template v-else-if="material">
                <UiCardHeader><Calendar class="icon"/> {{ convertDate(material.createdAt) }}</UiCardHeader>
                <UiCardTitle as="h1">{{ material.title }}</UiCardTitle>
                <UiCardText style="font-weight: 500;">{{ material.description }}</UiCardText>
                <div v-html="material.html">
                </div>
            </template>
            <div v-else style="text-align: center;"> 
                <h1>
                    Ой! Похоже такого нет...
                </h1>
                <p>
                    Извините, но запрашиваемая вами материал не существует.
                </p>
            </div>
        </UiCard>
    </UiContainer>
</template>

<script setup lang="ts">
import type { Material } from '~/types/Material';
import { Utilities } from '~/composables/Utility';
import Calendar from '@/assets/svgs/Calendar.svg'
const { convertDate } = Utilities();
const Router = useRouter();

const useMaterial = UseMaterial();
const material = ref<Material | null>(null);
const isFetching = ref(true);

onMounted(async () => {
    const id = Number(Router.currentRoute.value.params.id);
    material.value = await useMaterial.getMaterialById(id);
    isFetching.value = false;
    
});

useHead(() => ({
    title: material.value?.title ?? 'Материал'
}))

</script>

<style scoped lang="sass">
.ui-card
    padding: 64px
    @media(max-width: 768px)
        padding: 24px 16px
    svg
        margin-right: 10px
</style>