<script lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems
  }
}
</script>

<template>
  <div class="flex items-center justify-center py-12">
    <div class="text-5xl font-semibold select-none">
      <span class="days-one-regular bg-clip-text text-transparent bg-gradient-to-tr from-emerald-500/70 to-emerald-600">CrACK</span>
      <span class="days-one-regular text-base text-emerald-600">y.be</span>
      <div class="text-base text-white/20 font-light text-center"><i class="fa-solid fa-code"></i></div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');

.days-one-regular {
  font-family: "Days One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
