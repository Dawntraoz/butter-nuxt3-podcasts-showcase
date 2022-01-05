<template>
  <section
    :id="$props.fields.scroll_anchor_id"
    class="container mx-auto px-6 pb-12 grid md:grid-cols-2 gap-12 items-center"
  >
    <header
      class="flex flex-col items-center text-center md:items-start md:text-left"
      :class="{ 'md:order-last': $props.fields.image_position === 'left' }"
    >
      <h2 class="h1">{{ $props.fields.headline }}</h2>
      <div v-html="$props.fields.subheadline" class="pb-6 md:pb-8"></div>
      <atom-button
        :url="$props.fields.button_url"
        :label="$props.fields.button_label"
      />
    </header>
    <figure>
      <atom-image
        :srcUrl="$props.fields.image"
        :alt="`${$props.fields.headline} image`"
        width="700"
        height="500"
        class="mx-auto w-full"
        loading="lazy"
      />
    </figure>
  </section>
</template>

<script>
export default {
  props: ['fields']
}
</script>