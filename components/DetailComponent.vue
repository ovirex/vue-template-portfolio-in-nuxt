
<template>
  <div>
    <div class="row">
      <div class="col-lg-7">
        <h1>{{ projectData.title }}</h1>
        <p class="text-muted mb-5">{{ projectData.short_description }}</p>
      </div>
    </div>
    <div class="row mb-5">
      <lightbox-component
        :title="projectData.title"
        :images="projectData.images"
      ></lightbox-component>
      <detail-description
        :desc="projectData.long_description"
        :tags="projectData.tags"
      ></detail-description>
    </div>
  </div>
</template>
<script>
import LightboxComponent from './detail-components/LightboxComponent.vue'
export default {
  name: 'DetailComponent',
  components: { LightboxComponent },
  data: () => ({
    projectData: {
      id: null,
      title: '',
      short_description: '',
      long_description: '',
      tags: [],
      thumbnail: '',
      images: {
        web: [],
        rrss: [],
      },
    },
  }),
  async fetch() {
    try {
      const projectsFetched = await this.$content('projects').fetch()
      const projectToShow = projectsFetched.filter(
        (project) => project.id === this.$route.params.id
      )
      this.projectData = projectToShow[0]
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  },
}
</script>

