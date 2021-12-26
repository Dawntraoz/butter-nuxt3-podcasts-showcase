<template>
  <img
    :src="transformImage()"
    :width="$props.width"
    :height="$props.height"
  />
</template>

<script>
export default {
  props: {
    srcUrl: String,
    width: String,
    height: String
  },
  setup(props) {
    const transformImage = () => {
      const imageParts = props.srcUrl.split('/');
      const imageId = imageParts[imageParts.length - 1];
      const resize = !props.width && !props.height ? '' : `/resize=w:${props.width},h:${props.height}`;

      return `https://fs.buttercms.com/output=format:webp,quality:100${resize}/${imageId}`;
    }

    return {
      transformImage
    }
  }
}
</script>
