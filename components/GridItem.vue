<template>
  <div class="col-lg-4 col-md-6 grid-item mb-4">
    <div class="listing-item">
      <div class="position-relative">
        <ul class="list-inline listing-tags m-0">
          <li class="list-inline-item">
            <NuxtLink
              class="reset-anchor font-weight-normal text-gray text-small"
              :to="'/works/' + project.id"
              >Creative</NuxtLink
            >
          </li>
        </ul>
        <NuxtLink
          class="reset-anchor d-block listing-img-holder is-loading"
          :to="'/works/' + project.id"
        >
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

          <img class="img-fluid" :src="project.thumbnail" alt="" />
          <p
            class="
              mb-0
              text-primary
              small
              d-flex
              align-items-center
              listing-btn
            "
          >
            <span>Look inside</span>
            <svg class="svg-icon text-primary svg-icon-sm ml-2">
              <use xlink:href="#arrow-right-1"></use>
            </svg>
          </p>
        </NuxtLink>
      </div>
      <div class="py-3">
        <NuxtLink class="reset-anchor" :to="'/works/' + project.id">
          <h2 class="h5 listing-item-heading">{{ project.title }}</h2>
        </NuxtLink>
        <p class="text-small mb-0 listing-item-description">
          {{ project.short_description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridItem',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>
