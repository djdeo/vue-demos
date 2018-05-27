<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>{{ descrip }}</p>
    <Hoverblur url="../static/slogo.png" enterImg="../static/rev.png" />
  </div>
</template>

<script>
import Hoverblur from './Hoverblur'
export default {
  name: 'app',
  components: {
    Navbar,
    Blogs,
    Hoverblur
  },
  data () {
    return {
      title: 'no support local img, but online img works fine',
      descrip:'see more info here: https://github.com/vuejs/Discussion/issues/202'
    }
  }
}
</script>

<style>
h1, p{
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>