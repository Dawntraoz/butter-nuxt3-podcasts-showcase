<template>
  <section :id="$props.fields.scroll_anchor_id" class="container mx-auto p-6 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <header class="sm:py-4">
      <h2 class="pb-4">{{ $props.fields.headline }}</h2>
      <p class="text-xs">{{ $props.fields.subheadline }}</p>
    </header>
    <div
      v-for="feature in $props.fields.features"
      tabindex="0"
      class="flex flex-col items-start p-6 bg-gray-50 hover:bg-white focus:bg-white rounded-lg"
    >
      <figure class="p-1 bg-indigo-900 rounded-full">
        <atom-image
          :srcUrl="feature.icon"
          :alt="`${feature.headline} icon`"
          width="40"
          height="40"
          class="filter invert-100"
          loading="lazy"
        />
      </figure>
      <h3 class="pt-3 pb-2">{{ feature.headline }}</h3>
      <p class="text-xs">{{ feature.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['fields']
}
</script>