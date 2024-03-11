<script setup lang="ts">
import Container from "@/components/Container.vue"
import {useRoute} from "vue-router"

const route = useRoute()

</script>

<template>
  <Container>
    <div class="flex flex-col lg:flex-row items-center justify-between gap-y-8 py-12">
      <div class="text-4xl text-blue-500 font-bold">
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
      <div class="flex gap-x-6 lg:gap-x-10 items-center">
        <router-link :to="{ name: 'index' }" :class="`menu-item ${route.name === 'index' && 'active'}`">
          Ja
        </router-link>
        <router-link :to="{ name: 'projects' }" :class="`menu-item ${route.name === 'projects' && 'active'}`">
          Moje projekty
        </router-link>
        <router-link :to="{ name: 'skills' }" :class="`menu-item ${route.name === 'skills' && 'active'}`">
          Skills
        </router-link>
      </div>
    </div>
  </Container>
</template>

