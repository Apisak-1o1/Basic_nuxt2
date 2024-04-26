.<template>
  <div>
    <nuxt-child />
    <h1>videos List</h1>
    <div v-for="video in videos" :key="video.id">
      <nuxt-link :to="`/videos/${video.id}`">
        {{ video.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videos: []
    }
  },
  async fetch () {
    await this.getItem()
  },
  head: {
    title: 'Video List'
  },
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
