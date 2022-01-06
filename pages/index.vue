<template>
  <div>
    <client-only>
      <masonry-wrapper></masonry-wrapper>
    </client-only>
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
