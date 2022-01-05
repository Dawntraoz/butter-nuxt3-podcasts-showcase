<template>
  <section :id="$props.fields.scroll_anchor_id" class="bg-indigo-800 py-12 md:pt-24 mb-24 md:mb-32">
    <div class="container mx-auto px-6 flex flex-wrap text-white">
      <header
        class="w-full md:w-1/2 lg:w-2/5 flex flex-col items-center text-center md:items-start md:text-left"
      >
        <h1>{{ $props.fields.headline }}</h1>
        <p class="pb-6 md:pb-8">
          {{ $props.fields.subheadline }}
        </p>
        <atom-button
          :url="$props.fields.button_url"
          :label="$props.fields.button_label"
        />
      </header>
      <figure class="w-full md:w-1/2 lg:w-3/5 z-2 -mb-24 md:-mb-32 pt-8 md:pl-12">
        <atom-image
          :srcUrl="$props.fields.image"
          :alt="`${$props.fields.headline} image`"
          width="800"
          height="460"
          class="mx-auto w-full h-full object-cover rounded-xl shadow"
        />
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  props: ['fields']
}
</script>