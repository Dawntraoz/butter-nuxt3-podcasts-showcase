<template>
  <component
    :is="component.type"
    :fields="component.fields"
    v-for="component in story.fields.body"
  />
</template>

<script setup>
const { $butter } = useNuxtApp();
const { data: { data: story } } = await $butter.page.retrieve('*','landing-page-with-components');

useMeta({
  htmlAttrs: {
    lang: 'en-US',
  },
  title: story.fields.seo.title,
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'description',
      content: story.fields.seo.description,
    },
  ],
})
</script>

<style>
body {
  @apply bg-cool-gray-200;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-bold pb-6;
}

h1,
.h1 { @apply text-3xl md:text-5xl md:leading-tight; }
h2 { @apply text-xl md:text-2xl; }
h3 { @apply text-lg md:text-xl; }
h4,
h5,
h6 {
  @apply text-md md:text-lg;
}
</style>
