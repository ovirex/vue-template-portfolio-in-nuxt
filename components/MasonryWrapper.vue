<template>
  <div class="masonry-wrapper">
    <grid-item
      v-for="project in projectsToShow"
      :key="project.id"
      :project="project"
    ></grid-item>
  </div>
</template>
<script>
export default {
  name: 'MasonryWrapper',
  data: () => ({
    projects: [],
    projectsToShow: [],
    path: '',
  }),
  async fetch() {
    try {
      this.projects = await this.$content('projects').fetch()
      this.filterProjectsAccordingToPath()
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  },

  watch: {
    $route(to, from) {
      // react to route changes...
      this.path = to.path.replace('/', '')
      this.filterProjectsAccordingToPath()
    },
  },

  updated() {
    this.masonryDistribution(true)
  },

  methods: {
    masonryDistribution(reload = false) {
      $(document).ready(function () {
        const $grid = $('.masonry-wrapper')
        if (!reload) {
          $grid.masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-item',
            percentPosition: true,
            transitionDuration: 300,
          })
          $grid.imagesLoaded().progress(function (imgLoad, image) {
            const $item = $(image.img).parent()
            $item.removeClass('is-loading')
            if (!image.isLoaded) {
              $item.addClass('is-broken')
            }

            $grid.masonry()
          })
        } else {
          $grid.masonry('reloadItems')
        }
      })
    },

    // eslint-disable-next-line require-await
    filterProjectsAccordingToPath() {
      this.path = this.$route.path.replace('/', '')

      const tag = this.capitalizePathName(this.path)

      if (tag === null) {
        this.projectsToShow = this.projects
      } else {
        this.projectsToShow = this.projects.filter((project) => {
          return project.tags.includes(tag)
        })
      }
      this.masonryDistribution()
    },
    capitalizePathName(path) {
      /**
       * This function make the current path to have a format similar to the
       * Strings in the tags Array of the projects.json
       */
      if (path === '') {
        return null
      }
      return path
        .split('-')
        .map((word) => {
          return `${word[0].toUpperCase() + word.slice(1)}`
        })
        .join(' ')
    },
  },
}
</script>
