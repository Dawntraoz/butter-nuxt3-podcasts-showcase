<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
const { $butter } = useNuxtApp();

const { data: { data: story } } = await $butter.page.retrieve('*','landing-page-with-components');
console.log(story);
</script>
