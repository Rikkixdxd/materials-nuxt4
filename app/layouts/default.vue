<template>
    <AppHeader/>
    <main>
      <slot />
    </main>
</template>
<script setup lang="ts">

</script>

<style scoped lang="sass">
main
  padding-top: 48px
  @media(max-width: 768px)
    padding-top: 32px
</style>