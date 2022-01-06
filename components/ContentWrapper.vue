<template>
  <div class="px-4 py-5">
    <div class="container-fluid">
      <transition name="fade" appear>
        <Nuxt :key="$route.path" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentWrapper',
  watch: {
    $route(to, from) {
      this.backToTop()
    },
  },
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>
