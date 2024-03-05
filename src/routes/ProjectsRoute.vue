<script setup lang="ts">
import Container from "@/components/Container.vue"
import projects from "@/data/projects.json"
import {ref} from "vue"

const Projects = ref<Project[]>(projects)

</script>

<template>

  <Container>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6 my-10">
      <router-link v-for="projekt in Projects" class="group xxs:p-4 md:p-6 scale-100 hover:scale-105 transition" :to="{ name: 'project', params: { key: projekt.key } }">
        <div class="mb-4 px-3 flex justify-between items-center">
          <div class="text-lg scale-100 group-hover:scale-110 transition font-medium text-blue-400 text-center">
            {{ projekt.name }}
          </div>
          <div class="ms-auto text-gray-700 font-medium text-sm">{{ projekt.type }}</div>
        </div>
        <img v-if="projekt.gallery.length" :src="`${projekt.key}/${projekt.gallery[0].image}`" :alt="projekt.name" class="rounded-xl group-hover:rounded-2xl group-hover:shadow-xl transition duration-500">
      </router-link>
    </div>
  </Container>

</template>