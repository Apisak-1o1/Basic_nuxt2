<!-- eslint-disable no-console -->
<template>
  <div>
    <nuxt-child />
    <h1>videos List</h1>
    <input v-model="keyword" type="text" placeholder="Looking for something?">
    {{ keyword }}
    <div v-for="video in filteredVideos" :key="video.id">
      <div v-if="!hideVideo(video)">
        <nuxt-link :to="`/videos/${video.id}`">
          <h3>{{ video.title }}</h3>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      keyword: ''
    }
  },
  head: {
    title: 'Video List'
  },
  computed: {
    ...mapState(['videos']),
    filteredVideos () {
      if (this.keyword === '') {
        return this.videos
      } else {
        const searchLowercase = this.keyword.toLowerCase()
        return this.videos.filter(video =>
          video.title.toLowerCase().includes(searchLowercase)
        )
      }
    }
  },
  async mounted () {
    await this.listVDO()
  },
  methods: {
    ...mapActions(['listVDO']),
    async listVDO () {
      try {
        const resp = await this.$axios.$get('/')
        this.$store.commit('SET_VIDEOS', resp)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err)
      }
    },
    hideVideo (video) {
      if (this.keyword === '') {
        return false
      } else {
        const searchLowercase = this.keyword.toLowerCase()
        return !video.title.toLowerCase().includes(searchLowercase)
      }
    }
  }
}
</script>

<style>

</style>
