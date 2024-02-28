<script lang="ts">
export default {
  data() {
    return {
      projects: [
        {
          img: '/fkbranyweb.png',
          title: 'FKbrány.sk',
          frontend: 'Vue 3, TailwindCSS',
          backend: 'Laravel',
          description: 'Web + Admin panel + Design',
          responsive: {
            'desktop': 'fa-desktop',
            'tablet': 'fa-tablet-screen-button',
            'mobile': 'fa-mobile-screen'
          }
        },
        {
          img: '/ibestweb.png',
          title: 'iBest.sk Affiliate shop',
          frontend: 'Bootstrap',
          backend: 'Laravel',
          description: 'Web + Admin panel + Design',
          responsive: {
            'desktop': 'fa-desktop',
            //'tablet': 'fa-tablet-screen-button',
            'mobile': 'fa-mobile-screen'
          }
        }
      ]
    }
  }
}
</script>

<template>
  <div class="w-10/12 lg:w-7/12 mx-auto py-14 h-full">
    <div>
      <span class="text-4xl bg-clip-text text-transparent bg-gradient-to-b from-green-600 to-emerald-600 font-semibold">Projects</span>
    </div>
    <div class="mt-6">
      <div class="flex flex-col gap-8">
        <div v-for="project in projects" class="bg-black/20 p-4 lg:p-6 rounded-2xl shadow-xl flex flex-col md:flex-row gap-4 lg:gap-6">
          <img :src="project.img" class="w-full md:w-52 lg:w-80 rounded-xl" :alt="project.title">
          <div class="flex flex-col w-full">
            <div class="text-xl font-semibold mb-2 flex items-center w-full">
              {{ project.title }}
              <div class="ms-auto flex gap-3 opacity-10 text-sm md:text-base">
                <i v-for="(key) in project.responsive" class="fa-solid" :class="key"></i>
              </div>
            </div>
            <div class="text-sm mb-2">
              <div>
                <span class="font-semibold text-emerald-500/70">Frontend:</span> {{ project.frontend }}
              </div>
              <div>
                <span class="font-semibold text-emerald-500/70">Backend:</span> {{ project.backend }}
              </div>
            </div>
            <div>
              {{ project.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>