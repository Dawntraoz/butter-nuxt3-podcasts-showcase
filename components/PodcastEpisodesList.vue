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
      <h3 class="col-start-2 col-end-5 pb-2">
        <a :href="episode.url" target="_blank" rel="noopener noreferrer" class="text-indigo-800">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V14.75"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 9.25V4.75H14.75"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 5L11.75 12.25"></path>
          </svg>
          {{ episode.title }}
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
