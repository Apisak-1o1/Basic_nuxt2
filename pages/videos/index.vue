<!-- eslint-disable no-console -->
<template>
  <div class="section">
    <nuxt-child />
    <h1>videos List</h1>
    <input v-model="keyword" type="text" placeholder="Looking for something?">
    {{ keyword }}
    <div v-for="video in filteredVideos" :key="video.id" class="outside2">
      <div v-if="!hideVideo(video)" class="outside1">
        <nuxt-link :to="`/videos/${video.id}`" class="card">
          <div>
            <img :src="video.cover_image ? video.cover_image : 'https://cdn4.iconfinder.com/data/icons/picture-sharing-sites/32/No_Image-1024.png'" alt="image">
            <h3>{{ video.title }}</h3>
          </div>
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
.loop{
  display: flex;
  align-content: space-between;
  justify-content: space-between;
}
.section{
  width: 100%;
  text-align: center;
  height: auto;
}
.card{
    display: flex;
    width: 50vh;
    height: 32vh;
    text-align: center;
    border-radius: 1vh 1vh 1vh 1vh;
    margin: 4.2vh;
    box-shadow: 1vh 1vh 0.5vh;
    border: solid grey 0.2px;
}
.card img{
    overflow: hidden;
    object-fit: cover;
    width: 50vh;
    height: 20vh;
}
.outside1{
  width:50vh;
  height: 32vh;
  margin: 1rem;
  display: flex;
}
.outside2{
  width:50vh;
  height: 32vh;
}
</style>
