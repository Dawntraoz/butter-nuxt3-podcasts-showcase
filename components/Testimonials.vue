<template>
  <section :id="$props.fields.scroll_anchor_id" class="container mx-auto p-6 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <header class="sm:py-4">
      <h2>{{ $props.fields.headline }}</h2>
    </header>
    <div
      v-for="testimonial in $props.fields.testimonial"
      tabindex="0"
      class="flex flex-col justify-between items-start p-6 bg-gray-50 hover:bg-white focus:bg-white rounded-lg"
    >
      <p class="text-lg pb-2">
        <span class="text-3xl text-pink-500">❝</span>
        {{ testimonial.quote }}
      </p>
      <p class="text-sm">
        <span class="text-pink-500">{{ testimonial.name }}</span>
        <br />{{ testimonial.title }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['fields']
}
</script>