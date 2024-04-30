<template class="whole-web">
  <div>
    <div id="navbar">
      <div class="navbar-links">
        <nuxt-link to="/">
          Home
        </nuxt-link>
        <nuxt-link to="/videos">
          Videos
        </nuxt-link>
        <nuxt-link to="/theatre">
          Theatre
        </nuxt-link>
      </div>
    </div>
    <div id="default-body">
      <nuxt />
    </div>
  </div>
</template>

<style>
#navbar {
  height: 40px;
  width: 100%;
  background-color: #383838;
}
#navbar .navbar-links {
  max-width: 800px;
  margin: auto;
}
#navbar a {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}
#default-body {
  max-width: 800px;
  margin: auto;
}
.whole-web{
  width:100%;
  height: auto;
}
</style>
