<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>

  <Header />

  <RouterView v-slot="{ Component }">
    <transition enter-active-class="animate__animated animate__fadeIn animate__" leave-active-class="animate__animated animate__fadeOut" mode="out-in">
      <component :is="Component"/>
    </transition>
  </RouterView>

  <Footer/>

</template>