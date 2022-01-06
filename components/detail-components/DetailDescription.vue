<template>
  <div class="col-lg-5 position-sticky">
    <h2>Idea</h2>
    <p class="text-muted">{{ desc }}</p>
    <div class="p-4 bg-light mb-5">
      <ul class="list-unstyled mb-0">
        <li class="d-flex mb-2">
          <h6 class="mb-0">Category:</h6>
          <p class="ml-3 text-muted mb-0">Creative</p>
        </li>
        <li class="d-flex mb-2">
          <h6 class="mb-0">Date:</h6>
          <p class="ml-3 text-muted mb-0">23 Dec 2019</p>
        </li>
        <li class="d-flex">
          <h6 class="mb-0">Tags:</h6>
          <p class="ml-3 text-muted mb-0">
            <component :is="joinTags" />
          </p>
        </li>
      </ul>
    </div>
    <h2 class="h3 mb-4">Share</h2>
    <ul class="list-inline space-below">
      <li class="list-inline-item">
        <a class="reset-anchor social-share-link facebook" href="#"
          ><i class="fab fa-facebook-f mr-2"></i>Share</a
        >
      </li>
      <li class="list-inline-item">
        <a class="reset-anchor social-share-link twitter" href="#"
          ><i class="fab fa-twitter mr-2"></i>Tweet</a
        >
      </li>
      <li class="list-inline-item">
        <a class="reset-anchor social-share-link instagram" href="#"
          ><i class="fab fa-instagram mr-2"></i>Share</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'DetailDescription',
  props: {
    desc: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    joinTags() {
      // eslint-disable-next-line no-console
      let tagsButtonsTemplate = this.tags
        .map((tag) => {
          /**
           * The link variable has to match with the paths available in the routes
           */
          const link = this.tagLink(tag)
          const isLinkValid = this.verifyRoutes(`/${link}`)

          return `<NuxtLink class="reset-anchor" to="/${
            isLinkValid ? link : ''
          }">${tag}</NuxtLink>`
        })
        .join(', ')

      tagsButtonsTemplate = `<span>${tagsButtonsTemplate}</span>`

      return {
        name: 'TagsComponent',
        template: tagsButtonsTemplate,
      }
    },
  },
  methods: {
    tagLink(tagString) {
      return tagString.toLowerCase().split(' ').join('-')
    },
    verifyRoutes(link) {
      return this.$router.options.routes.some((route) => {
        return route.path === link
      })
    },
  },
}
</script>
