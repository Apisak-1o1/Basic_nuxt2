.<template>
  <div>
    <nuxt-child />
    <h1>videos List</h1>
    <!-- <input v-model="getKeyword" type="text" placeholder="Looking for something?">
    {{ getKeyword }} -->
    <div v-for="video in videos" :key="video.id">
      <nuxt-link :to="`/videos/${video.id}`">
        <div>{{ video.title }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videos: []
      // getKeyword: ''
    }
  },
  async fetch () {
    await this.getItem()
    // await this.searchVideos()
  },
  head: {
    title: 'Video List'
  },
  // computed: {
  //   searchVideos () {
  //     return this.videos.filter((video) => {
  //       const searchLowercase = this.getKeyword.toLowerCase()
  //       const videoTitle = video.title.toLowerCase()
  //       return videoTitle.include(searchLowercase)
  //     })
  //   }
  // },
  methods: {
    async getItem () {
      try {
        const response = await this.$axios.$get('/')
        this.videos = response
        // eslint-disable-next-line no-console
        // console.log(response)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error', error)
        this.videos = []
      }
    }
  }
}
</script>

<style>

</style>
