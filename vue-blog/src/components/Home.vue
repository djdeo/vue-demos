<template>
  <div id="app" class="container">
    <PostsList />
    <router-view/>
  </div>
</template>

<script>
import PostsList from './PostsList'
export default {
  name: 'App',
  components: {
    PostsList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
