<script setup lang="ts">
import {ref} from "vue"
import skills from "@/data/skills.json"
import Container from "@/components/Container.vue"

const Skills = ref<Skills[]>(skills)

const levels = ref<any>({
  1: 'bg-green-600',
  2: 'bg-blue-500',
  3: 'bg-orange-500',
  4: 'bg-red-600'
})
</script>

<template>
  <Container>
    <div class="text-4xl text-blue-500 font-semibold text-center drop-shadow-lg mt-10">
      Skills &amp; Tools
    </div>
    <div class="flex flex-col lg:flex-row gap-6 my-10 justify-center lg:items-center text-sm">
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 rounded-full bg-green-600"></div> Experienced
      </div>
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 rounded-full bg-blue-500"></div> Advanced knowledge
      </div>
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 rounded-full bg-orange-500"></div> Basic understanding
      </div>
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 rounded-full bg-red-600"></div> Minimum knowledge
      </div>
    </div>
    <div>
      <template v-for="skill in Skills">
        <div class="font-medium text-lg pt-10 pb-6 text-blue-300/60">{{ skill.name }}</div>
        <div class="flex flex-row flex-wrap gap-4">
          <template v-for="item in skill.items">
            <div class="relative select-none bg-gray-700/25 hover:bg-gray-700/50 shadow-xl py-3 px-5 font-medium text-blue-100/75 hover:text-white rounded-xl transition flex items-center gap-3" :class="{ 'pe-5': item.level }">
              <i v-if="item.icon" :class="item.icon" class="text-xl"></i>
              {{ item.name }}
              <div v-if="item.level" class="absolute m-1 top-0 end-0 w-2 h-2 rounded-full" :class="levels[item.level]"></div>
            </div>
          </template>
        </div>
      </template>
    </div>

    <div class="mt-28">
      <div class="flex flex-col md:flex-row justify-around items-center gap-10">
        <a href="https://railway.app?referralCode=77Ydvt" target="_blank" class="opacity-65 hover:opacity-100 transition">
          <img src="https://railway.app/brand/logotype-light.svg" class="w-80" alt="Railway">
        </a>
        <a href="https://www.websupport.sk/?ref=NToiHls4" target="_blank" class="opacity-65 hover:opacity-100 transition">
          <img src="https://www.websupport.sk/app/uploads/sites/5/2021/08/websupport-logo-450x190-1.png" class="w-60" alt="Websupport">
        </a>
      </div>
    </div>

  </Container>
</template>