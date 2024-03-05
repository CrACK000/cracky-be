<script setup lang="ts">
import Container from "@/components/Container.vue"
</script>

<template>
  <Container>
    <div class="grid lg:grid-cols-2 gap-8 items-center my-16 lg:my-24">
      <div>
        <div class="max-w-sm mx-auto">
          <div class="max-w-80 aspect-square mx-auto">
            <img src="/ja.jpg" class="max-w-full w-80 h-full rounded-full shadow-2xl" alt="Photo">
          </div>
          <div class="flex justify-around items-center mt-8">
            <a href="https://github.com/CrACK000" target="_blank" class="text-blue-200/50 hover:text-white p-4 hover:scale-125 transition">
              <i class="fa-brands fa-github text-4xl"></i>
            </a>
            <a href="https://www.youtube.com/@crack_developer" target="_blank" class="text-blue-200/50 hover:text-white p-4 hover:scale-125 transition">
              <i class="fa-brands fa-youtube text-4xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/patrik-fejf%C3%A1r" target="_blank" class="text-blue-200/50 hover:text-white p-4 hover:scale-125 transition">
              <i class="fa-brands fa-linkedin text-4xl"></i>
            </a>
            <a href="https://www.instagram.com/patrikfejfar" target="_blank" class="text-blue-200/50 hover:text-white p-4 hover:scale-125 transition">
              <i class="fa-brands fa-instagram text-4xl"></i>
            </a>
          </div>
          <div class="text-center opacity-75">
            <a href="mailto:me@cracky.be">me@cracky.be</a>
          </div>
        </div>
      </div>
      <div class="text-center text-xl">
        <p class="text-end mb-2 italic text-sm text-blue-200/40">Patrik CrACK Fejfár</p>
        Ahoj som veľký fanúšik programovania v rôznych jazykoch.
        Venujem sa tvorbe webových aplikácii.
        Mám skúsenosti s prácou na obidvoch stranách vývojového stacku - frontend aj backend.
        Prvé riadky v PHP som napísal v 13 rokoch.
        Od tej doby programujem do dnešného dňa.
      </div>
    </div>
  </Container>
</template>