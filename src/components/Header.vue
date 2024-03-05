<script setup lang="ts">

import Container from "@/components/Container.vue";
</script>

<template>
  <Container>
    <div class="flex items-center justify-between py-12">
      <div class="text-4xl text-blue-600 font-bold">
        <router-link :to="{ name: 'index' }">
          <div class="flex items-center">
            CrACK
            <i class="fa-solid fa-code text-base"></i>
          </div>
          <div class="text-blue-100/30 text-sm font-normal">
            Patrik Fejfár
          </div>
        </router-link>
      </div>
      <div class="flex gap-x-10 items-center">
        <router-link :to="{ name: 'index' }" class="menu-item">Home</router-link>
        <router-link :to="{ name: 'projects' }" class="menu-item">Projects</router-link>
        <router-link :to="{ name: 'skills' }" class="menu-item">Skills</router-link>
        <router-link to="/contact" class="menu-item">Contact</router-link>
      </div>
    </div>
  </Container>
</template>

