
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
  // props: ['id'],
  data: () => ({
    projectData: {
      id: 0,
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
  created() {
    this.fetchProject()
  },
  methods: {
    fetchProject() {
      fetch('/projects.json')
        .then((data) => data.json())
        .then((projectsJson) => {
          const projectInfo = projectsJson.projects.filter(
            (project) => project.id === parseInt(this.$route.params.id)
          )
          this.projectData = projectInfo[0]
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err)
        })
    },
  },
}
</script>

