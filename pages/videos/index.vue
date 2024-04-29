.<template>
  <div>
    <nuxt-child />
    <h1>videos List</h1>
    <input v-model="getKeyword" type="text" placeholder="Looking for something?" @keyup="searchVideos()">
    {{ getKeyword }}
    <div v-for="video in $store.state.videos" :key="video.id">
      <div style="visibility: visible;">
        <div v-if="searchVideos()">
          <nuxt-link :to="`/videos/${video.id}`">
            <h3>
              {{ video.title }}
            </h3>
          </nuxt-link>
        </div>
        <div v-else style="visibility: hidden;" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      getKeyword: ''
    }
  },
  head: {
    title: 'Video List'
  },
  async mounted () {
    await this.listVDO()
  },
  methods: {
    ...mapActions({
      listVDOStore: 'listVDO'
    }),
    async listVDO () {
      try {
        const resp = await this.$axios.$get('/')
        this.listVDO = resp
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
      if (this.listVDO) {
        this.$store.commit('SET_VIDEOS', this.listVDO)
        this.videos = this.listVDO
        this.listVDO = ''
      }
    },
    searchVideos () {
      if (this.getKeyword.length > 0) {
        return this.videos.filter((video) => {
          const searchLowercase = this.getKeyword.toLowerCase()
          const videoTitle = video.title.toLowerCase()
          // eslint-disable-next-line no-console
          console.log(videoTitle.includes(searchLowercase))
          return videoTitle.includes(searchLowercase)
        })
      }
    }
  }
}
</script>

<style>

</style>
