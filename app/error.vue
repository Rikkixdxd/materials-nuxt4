<template>
    <NuxtLayout>
        <UiContainer style="margin-top: 48px;">
            <UiCard style="text-align: center" :hover="false">
                <template v-if="error?.statusCode === 404">
                    <h1>
                    Ой! Вы похоже потерялись...
                    </h1>
                    <p>
                    Извините, но запрашиваемая вами страница не существует.
                    </p>
                </template>
                <template v-else-if="error?.statusCode === 500">
                    <h1>
                    Упс! Что-то поломалось...
                    </h1>
                    <p>
                    Произошла внутренняя ошибка сервера. Попробуйте еще раз.
                    </p>
                </template>
                <NuxtLink style="margin: 0 auto; max-width: fit-content;" to="/"><UiButton >Вернуться на главную</UiButton></NuxtLink>
            </UiCard>
        </UiContainer>
    </NuxtLayout>
</template>

<script setup lang="ts">
const error = useError()

</script>

<style scoped>

</style>