.<template>
  <div class="top-panels">
    <h1>We're in videos.vue</h1>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: 'Videos - %s'
  }
}
</script>

<style>
.top-panels{
  widows: 40vh;
  height: auto;
}
</style>
