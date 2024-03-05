<script setup lang="ts">
import { ref, withDefaults } from "vue"

interface ContainerProps {
  width: 'xxl' | 'xl' | 'lg'| 'md'
}

const props = withDefaults(defineProps<ContainerProps>(), {
  width: 'lg'
})

const setWidth = ref<any>({
  "xxl": "w-full md:w-10/12 mx-auto",
  "xl": "w-full md:w-10/12 lg:w-9/12 mx-auto",
  "lg": "w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto",
  "md": "w-full md:w-10/12 lg:w-8/12 xl:w-7/12 mx-auto",
})
</script>

<template>
  <div class="px-4 md:px-0" :class="setWidth[props.width]">
    <slot/>
  </div>
</template>