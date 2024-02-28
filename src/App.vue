<script>
import Header from "@/components/Header.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";

export default {
  components: {
    Projects,
    Header,
    Skills
  }
}
</script>

<template>

  <Header />

  <div class="bg-gradient-to-tr from-emerald-500/30 to-emerald-600/80 text-center text-white font-medium p-14 w-full md:w-11/12 lg:w-10/12 xl:w-6/12 rounded-3xl my-10 mx-auto">
    <span class="text-2xl font-semibold">
      <span class="text-4xl">Hey!</span>
    </span>
  </div>

  <projects class="py-16 lg:py-32" />

  <skills class="py-16 lg:py-32" />

  <div class="w-10/12 lg:w-7/12 mx-auto py-6 mt-12 text-center opacity-50 text-sm border-t border-emerald-200/5">
    cracky.be <span class="opacity-25 inline-block mx-2">|</span> 2024
  </div>

</template>
