<template>
  <div>
    <h1> Editting {{ videos.title }}</h1>
    <nuxt-link :to="`/videos/${videos.id}`">
      <button>Go back to the show</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: {
    videos: {
      type: Object,
      default: () => {}
    }
  },
  head: {
    title: 'Edit - '
  }
}
</script>

<style scoped>

</style>
