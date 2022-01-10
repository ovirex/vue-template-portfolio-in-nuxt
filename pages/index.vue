<template>
  <div>
    <masonry-wrapper></masonry-wrapper>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'CustomLayout',
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
