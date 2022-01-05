<template>
  <section class="container mx-auto px-6 pb-12 md:pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <header class="col-span-full">
      <h2 class="h1 pb-2">Latest podcast episodes</h2>
    </header>
    <div
      v-for="episode in $props.fields.podcast_episodes"
      tabindex="0"
      class="grid grid-cols-4 gap-4 p-6 rounded-md bg-white"
    >
      <figure>
        <atom-image
          :srcUrl="episode.cover_image"
          :alt="`${episode.title} icon`"
          width="90"
          height="90"
          class="col-1 rounded-md"
          loading="lazy"
        />
      </figure>
      <h3 class="col-start-2 col-end-5 pt-3 pb-2">
        <a :href="episode.url" target="_blank" rel="noopener noreferrer" class="text-indigo-800">
          {{ episode.title }} ↗
        </a>
      </h3>
      <p class="col-span-full text-sm line-clamp-2">{{ episode.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['fields']
}
</script>