<script setup lang="ts">
import Container from "@/components/Container.vue"
import projects from "@/data/projects.json"
import {ref} from "vue"

const Projects = ref<Project[]>(projects)

</script>

<template>

  <Container>
    <div class="text-4xl text-blue-500 font-semibold drop-shadow-lg mt-10">
      Projekty
    </div>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-0 lg:gap-6 my-10">
      <router-link v-for="projekt in Projects" class="group xxs:p-4 md:p-6 scale-100 md:hover:scale-105 transition" :to="{ name: 'project', params: { key: projekt.key } }">
        <div class="mb-4 px-3 flex justify-between items-center">
          <div class="text-base md:text-lg scale-100 md:group-hover:scale-110 transition font-medium text-blue-400 text-center max-w-full truncate">
            {{ projekt.name }}
          </div>
          <div class="ms-auto text-gray-700 font-medium text-xs md:text-sm">{{ projekt.type }}</div>
        </div>
        <img v-if="projekt.gallery.length" :src="`${projekt.key}/${projekt.gallery[0].image}`" :alt="projekt.name" class="rounded-xl group-hover:rounded-2xl group-hover:shadow-xl transition duration-500">
      </router-link>
    </div>

    <div class="text-4xl text-blue-500 font-semibold drop-shadow-lg mb-6">
      Balíky
    </div>
    <div class="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
      <a href="https://github.com/CrACK000/easy-python-backend-app" target="_blank" class="bg-gray-950 border border-gray-900 rounded-xl p-6 hover:text-blue-500 hover:border-blue-600 transition">
        <div class="flex items-center gap-x-3 md:text-lg">
          <i class="fa-brands fa-github fa-xl"></i>
          Python Authentication API starter
        </div>
        <div class="text-sm opacity-75 mt-4">
          Python Flask API for user management including registration, login, authentication, and profile update.
        </div>
      </a>
    </div>

  </Container>

</template>