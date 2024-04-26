.<template>
  <div>
    <h1>we're in video {{ videos.title }}</h1>
    <nuxt-link :to="`/videos/${videos.id}/edit`">
      <button>Edit</button>
    </nuxt-link>
    <div>
      <img :src="videos.cover_image">
      <h3 v-html="videos.body_html" />
    </div>
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
    title: 'Watch - '
  }
}
</script>

<style>

</style>
