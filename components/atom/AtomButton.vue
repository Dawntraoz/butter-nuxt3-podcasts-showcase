<template>
  <a
    :href="$props.url"
    class="bg-light-blue-900 font-bold text-white py-4 px-8 rounded-full"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ $props.label }}
  </a>
</template>

<script>
export default {
  props: ['url', 'label']
}
</script>
