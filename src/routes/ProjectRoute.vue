<script setup lang="ts">
import { useRoute } from "vue-router"
import projects from "@/data/projects.json"
import {onBeforeMount, ref} from 'vue'
import Container from "@/components/Container.vue";

const project = ref<Project | null>(null)

let currentIndex = ref(0);

const nextImage = () => {
  if (project.value) {
    if(currentIndex.value < project.value?.gallery.length - 1) {
      currentIndex.value ++;
    } else {
      currentIndex.value = 0;
    }
  }
}

const previousImage = () => {
  if (project.value) {
    if(currentIndex.value > 0) {
      currentIndex.value --;
    } else {
      currentIndex.value = project.value.gallery.length - 1;
    }
  }
}

onBeforeMount(() => {
  const key = useRoute().params.key
  project.value = projects.find((p: Project) => p.key === key) || null
})
</script>

<template>
  <div v-if="project">
    <div class="max-w-full">
      <Container width="md">

        <div class="mb-12 flex justify-between items-center">
          <div>
            <div class="py-6 text-blue-400 text-3xl font-medium">
              {{ project.name }}
            </div>
            <div class="flex flex-wrap gap-x-8">
              <a :href="project.web" target="_blank" class="flex items-center gap-x-1.5 font-medium text-blue-400/75 hover:text-blue-400 transition">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M8.6 4.7A8 8 0 0 1 19 8h-.7c-.7 0-1.2.3-1.2 1 0 .2 0 2-2 2s-2-1.8-2-2c0-1.5-.8-1.7-1.7-2L10 6.6c-1-.5-1.3-1.2-1.5-1.9ZM6 4a10 10 0 0 0-2.8 3.3A10 10 0 0 0 12.5 22 10 10 0 1 0 6 4Zm13.4 11.1-.8-.1h-.2a3.4 3.4 0 0 0-3.4 3.4v1a8 8 0 0 0 4.4-4.3ZM12 20A8 8 0 0 1 5.1 8c1 .5 1.4 1.5 1.8 2.4l.7 1.1c.5.7 1 1 1.6 1.4.5.3 1 .6 1.6 1.3 1.4 1.8 1.4 4.3 1.3 5.8Z" clip-rule="evenodd"/>
                </svg>
                Web
              </a>
              <a :href="project.git.frontend" target="_blank" class="flex items-center gap-x-1.5 font-medium text-blue-400/75 hover:text-blue-400 transition">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clip-rule="evenodd"/>
                </svg>
                frontend
              </a>
              <a :href="project.git.backend" target="_blank" class="flex items-center gap-x-1.5 font-medium text-blue-400/75 hover:text-blue-400 transition">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clip-rule="evenodd"/>
                </svg>
                backend
              </a>
            </div>
          </div>
          <div class="opacity-50">
            <div class="mb-3 text-end text-sm">{{ project.version }}</div>
            <div class="mb-3 flex gap-x-3 items-center justify-end">
              <svg v-if="project.resolution.mobile" class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M5 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clip-rule="evenodd"/>
              </svg>
              <svg v-if="project.resolution.tablet" class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 18h2M5.9 3H18c.5 0 .9.4.9 1v16c0 .6-.4 1-.9 1H6c-.5 0-.9-.4-.9-1V4c0-.6.4-1 .9-1Z"/>
              </svg>
              <svg v-if="project.resolution.desktop" class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v9c0 .6.4 1 1 1Z"/>
              </svg>
            </div>
            <div class="flex gap-x-3 items-center justify-end" v-if="project.darkmode">
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.3 5A1 1 0 0 0 5 6.2l1.4 1.5a1 1 0 0 0 1.5-1.5L6.3 5Zm12.8 1.3A1 1 0 0 0 17.7 5l-1.5 1.4a1 1 0 0 0 1.5 1.5L19 6.3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.8 17.7a1 1 0 1 0-1.5-1.5L5 17.7A1 1 0 1 0 6.3 19l1.5-1.4Zm9.9-1.5a1 1 0 0 0-1.5 1.5l1.5 1.4a1 1 0 0 0 1.4-1.4l-1.4-1.5ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd"/>
              </svg>
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-18v0A9 9 0 0 0 20 15h.5a9 9 0 0 1-8.5 6Z"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="mb-12 border-s-4 border-blue-500 ps-4 py-2">
          {{ project.description }}
        </div>

        <div class="mb-12 flex flex-col gap-y-6">
          <div>
            <div class="text-blue-400 font-medium mb-2.5">Frontend</div>
            <div class="flex flex-wrap gap-x-2">
              <div v-for="item in project.packages.frontend" class="bg-black/20 px-3 py-1.5 rounded-lg">{{ item }}</div>
            </div>
          </div>
          <div>
            <div class="text-blue-400 font-medium mb-2.5">Backend</div>
            <div class="flex flex-wrap gap-x-2">
              <div v-for="item in project.packages.backend" class="bg-black/20 px-3 py-1.5 rounded-lg">{{ item }}</div>
            </div>
          </div>
          <div>
            <div class="text-blue-400 font-medium mb-2.5">Databáza</div>
            <div class="flex flex-wrap gap-x-2">
              <div v-for="item in project.packages.database" class="bg-black/20 px-3 py-1.5 rounded-lg">{{ item }}</div>
            </div>
          </div>
        </div>

        <div v-if="project.gallery.length" class="relative mb-16">
          <div class="text-2xl mb-6 text-center">Prezentácia</div>

          <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut" mode="out-in">
            <div class="aspect-video relative" :key="project.gallery[currentIndex].image">
              <img :src="`/${project.key}/${project.gallery[currentIndex].image}`" :alt="project.name" class="w-full h-full shadow-2xl shadow-blue-900/25 rounded-2xl">
              <div class="absolute bottom-0 w-full p-6 bg-blue-600/5 backdrop-blur-xl rounded-b-2xl">
                <div class="text-blue-300 font-medium text-lg">{{ project.gallery[currentIndex].title }}</div>
                {{ project.gallery[currentIndex].description }}
              </div>
            </div>
          </transition>

          <div class="absolute top-0 w-full h-full flex items-center justify-between">
            <button type="button" @click="previousImage" class="w-12 h-12 rounded-full flex items-center justify-center lg:-ms-20 bg-blue-400/25 hover:bg-blue-400/50 text-blue-300 hover:text-blue-50 shadow-xl transition">
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
              </svg>
            </button>
            <button type="button" @click="nextImage" class="w-12 h-12 rounded-full flex items-center justify-center lg:-me-20 bg-blue-400/25 hover:bg-blue-400/50 text-blue-300 hover:text-blue-50 shadow-xl transition">
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

      </Container>
    </div>
  </div>
  <div v-else class="w-full h-96 flex items-center justify-center">
    <div class="text-4xl text-blue-600">
      <span class="font-bold text-5xl me-3">404</span> Niekde nastala chyba bro..
    </div>
  </div>
</template>

<style>
:root {
  --animate-duration: 200ms;
  --animate-delay: 0.2s;
}
</style>