<template>
    <AppHeader/>
    <main>
      <UiContainer>
        <div v-if="Router.currentRoute.value.path !== '/'" class="back">
          <NuxtLink to="/"><Arrow /> Назад</NuxtLink>
        </div>
        <h1>{{ Router.currentRoute.value.meta.title }}</h1>
      </UiContainer>
      <slot />
    </main>
</template>
<script setup lang="ts">  
import Arrow from '~/assets/svgs/Arrow.svg'
const Router = useRouter();
const useMaterial = UseMaterial();
</script>

<style scoped lang="sass">
h1
    margin-bottom: 48px
    @media(max-width: 768px)
        margin-bottom: 32px
main
  padding-top: 48px
  @media(max-width: 768px)
    padding-top: 32px
.back
    margin-bottom: 30px
    font-weight: 500
    svg
        padding-right: 8px
</style>