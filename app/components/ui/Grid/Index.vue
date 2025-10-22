<template>
  <div class="ui-grid" 
    :style="gridStyles"
    :class="gridClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  columns: { 
    type: Object as PropType<{
      mobile?: number;
      tablet?: number;
      desktop?: number;
    }>, 
    default: 3 
  },
  gap: { type: Number, default: 20 },
});

const gridStyles = computed(() => {
  return `gap: ${props.gap}px;`;
});

const gridClasses = computed(() => {
  
  const classes: string[] = [];
  const cols = props.columns;
    
  if (cols.mobile) classes.push(`ui-grid--cols-mobile-${cols.mobile}`);
  if (cols.tablet) classes.push(`ui-grid--cols-tablet-${cols.tablet}`);
  if (cols.desktop) classes.push(`ui-grid--cols-desktop-${cols.desktop}`);
  
  return classes.join(' ');
});
</script>

<style scoped lang="sass">
.ui-grid
    display: grid
                
    @for $i from 1 through 12
        &--cols-mobile-#{$i}
            grid-template-columns: repeat(#{$i}, minmax(0, 1fr))

    @media (min-width: 768px)
        @for $i from 1 through 12
            &--cols-tablet-#{$i}
                grid-template-columns: repeat(#{$i}, minmax(0, 1fr))

    @media (min-width: 1200px)
      @for $i from 1 through 12
          &--cols-desktop-#{$i}
              grid-template-columns: repeat(#{$i}, minmax(0, 1fr))

</style>
