<template>
  <div>
    <nuxt-child :videos="video" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      video: {
        type: Object,
        default: () => {}
      }
    }
  },
  head () {
    return {
      titleTemplate: '%s' + (this.video.title)
    }
  },
  async mounted () {
    await this.getItem()
  },

  methods: {
    async getItem () {
      try {
        const idarticle = this.$route.params.id
        const resp = await this.$axios.$get('https://dev.to/api/articles/' + idarticle)
        this.video = resp
        // eslint-disable-next-line no-console
        console.log(resp)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error:', error)
        this.video = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
