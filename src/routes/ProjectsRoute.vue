<script setup lang="ts">
import Container from "@/components/Container.vue"
import projects from "@/data/projects.json"
import {ref} from "vue"

const Projects = ref<Project[]>(projects)

</script>

<template>

  <Container>
    <div class="grid grid-cols-3">
      <router-link v-for="projekt in Projects" class="group p-6 scale-100 hover:scale-105 transition" :to="{ name: 'project', params: { key: projekt.key } }">
        <div class="mb-4 px-3 flex justify-between items-center">
          <div class="text-lg scale-100 group-hover:scale-105 transition font-medium text-blue-400 text-center">
            {{ projekt.name }}
          </div>
          <div class="ms-auto text-gray-700 font-medium text-sm">{{ projekt.type }}</div>
        </div>
        <img v-if="projekt.gallery.length" :src="`${projekt.key}/${projekt.gallery[0].image}`" :alt="projekt.name" class="rounded-xl group-hover:shadow-xl transition">
      </router-link>
    </div>
  </Container>

</template>