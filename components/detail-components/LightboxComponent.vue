
<template>
  <div class="col-lg-7 project-images">
    <div v-if="images.rrss.length > 0">
      <h3>Social Media Design</h3>
      <a
        v-for="(image, index) in images.rrss"
        :key="index"
        :href="require(`~/assets/img${image}`)"
        data-gallery="rrss-gallery"
        class="glightbox is-loading"
      >
        <img
          class="img-fluid mb-4"
          :src="require(`~/assets/img${image}`)"
          alt="image"
        />
        <!-- Loading spinner -->
        <div class="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <!-- End of Loading spinner -->
      </a>
    </div>
    <div v-if="images.web.length > 0">
      <h3>Web Design</h3>
      <a
        v-for="(image, index) in images.web"
        :key="index"
        :href="require(`~/assets/img${image}`)"
        data-gallery="web-gallery"
        class="glightbox is-loading"
      >
        <img
          class="img-fluid mb-4"
          :src="require(`~/assets/img${image}`)"
          alt="image"
        />
        <!-- Loading spinner -->
        <div class="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <!-- End of Loading spinner -->
      </a>
    </div>
  </div>
</template>

<script>
// import GLightbox from 'glightbox'
export default {
  name: 'LightboxComponent',
  props: {
    /* eslint-disable vue/require-default-prop */
    title: { type: String },
    images: {
      type: Object,
    },
  },
  data: () => ({
    lightbox: {},
  }),
  updated() {
    this.addGLightbox()
  },
  destroyed() {
    this.lightbox.close()
  },
  methods: {
    addGLightbox() {
      // eslint-disable-next-line no-undef
      // eslint-disable-next-line prefer-const
      let GLightbox = require('glightbox')
      this.lightbox = GLightbox({
        zoomable: false,
      })
      const $projectImagesContainer = $('.project-images')

      $projectImagesContainer
        .imagesLoaded()
        .progress(function (imgLoad, image) {
          const $item = $(image.img).parent()
          $item.removeClass('is-loading')
          if (!image.isLoaded) {
            $item.addClass('is-broken')
          }
        })
    },
  },
}
</script>

