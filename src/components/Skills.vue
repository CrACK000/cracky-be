<script>
export default {
  data() {
    return {
      skills: [
        {
          name: 'Languages',
          items: [
            {name: 'PHP', icon: 'fa-brands fa-php', level: 1},
            {name: 'SQL', icon: '', level: 1},
            {name: 'HTML', icon: 'fa-brands fa-html5', level: 1},
            {name: 'CSS', icon: 'fa-brands fa-css3-alt', level: 1},
            {name: 'SASS', icon: 'fa-brands fa-sass', level: 2},
            {name: 'JavaScript', icon: 'fa-brands fa-square-js', level: 2},
            {name: 'Python', icon: 'fa-brands fa-python', level: 3},
          ],
        },
        {
          name: 'Frameworks / libraries',
          items: [
            {name: 'Node.js', icon: 'fa-brands fa-node-js', level: 1},
            {name: 'Laravel', icon: 'fa-brands fa-laravel', level: 1},
            {name: 'Vue', icon: 'fa-brands fa-vuejs', level: 1},
            {name: 'TailwindCSS', icon: '', level: 1},
            {name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', level: 1},
            {name: 'UIkit', icon: 'fa-brands fa-uikit', level: 1},
            {name: 'jQuery', icon: '', level: 2},
            {name: 'React', icon: 'fa-brands fa-react', level: 3},
          ],
        },
        {
          name: 'Software',
          items: [
            {name: 'PhpStorm', icon: '', level: 0},
            {name: 'Adobe Photoshop', icon: '', level: 0},
            {name: 'Git', icon: 'fa-brands fa-github', level: 0},
            {name: 'npm', icon: 'fa-brands fa-npm', level: 0},
          ]
        }
      ],
      levels: {
        1: 'bg-green-600',
        2: 'bg-orange-500',
        3: 'bg-red-600'
      }
    }
  }
}
</script>

<template>
  <div class="w-10/12 lg:w-7/12 mx-auto py-14 h-full">
    <div>
      <span class="text-4xl bg-clip-text text-transparent bg-gradient-to-b from-green-600 to-emerald-600 font-semibold">Skills &amp; Tools</span>
    </div>
    <div>
      <template v-for="skill in skills">
        <div class="font-medium text-lg py-6 text-emerald-200/40">{{ skill.name }}</div>
        <div class="flex flex-row flex-wrap gap-3">
          <template v-for="item in skill.items">
            <div class="relative select-none bg-black/25 hover:bg-white/5 shadow-xl backdrop-blur-lg py-1.5 px-3 font-medium text-gray-100 hover:text-white rounded-lg transition duration-200 flex items-center gap-2" :class="{ 'pe-5': item.level }">
              <i v-if="item.icon" :class="item.icon" class="text-xl"></i>
              {{ item.name }}
              <div v-if="item.level" class="absolute m-1 top-0 end-0 w-2 h-2 rounded-full" :class="levels[item.level]"></div>
            </div>
          </template>
        </div>
      </template>
      <div class="flex flex-col lg:flex-row gap-6 my-10 justify-center lg:items-center text-sm">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-green-600"></div> Experienced
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-orange-500"></div> Basic understanding
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-red-600"></div> Minimum knowledge
        </div>
      </div>
    </div>
  </div>
</template>