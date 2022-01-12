<template>
  <div class="col-lg-7 project-images">
    <div v-for="(data, index) in imagesData" :key="index">
      <h3>{{ data.title }}</h3>
      <div v-if="Array.isArray(data.images)">
        <a
          v-for="(image, indexImg) in data.images"
          :key="indexImg"
          :href="image"
          :data-gallery="`${joinTitle(data.title)}-gallery`"
          class="glightbox is-loading"
        >
          <img class="img-fluid mb-4" :src="image" alt="image" />
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
      <div v-else>
        <a
          :href="data.images"
          :data-gallery="`${joinTitle(data.title)}-gallery`"
          class="glightbox is-loading"
        >
          <img class="img-fluid mb-4" :src="data.images" alt="image" />
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
  </div>
</template>

<script>
export default {
  name: 'LightboxComponent',
  props: {
    imagesData: {
      type: Array,
      default() {
        return [
          {
            title: 'No images to display',
            images: '',
          },
        ]
      },
    },
  },
  data: () => ({
    lightbox: {},
  }),
  mounted() {
    this.addGLightbox()
  },
  updated() {
    this.addGLightbox()
  },
  destroyed() {
    if (document.body.classList.contains('glightbox-open')) {
      this.lightbox.close()
    }
  },
  methods: {
    addGLightbox() {
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
    joinTitle(title) {
      return title.toLowerCase().split(' ').join('-')
    },
  },
}
</script>

