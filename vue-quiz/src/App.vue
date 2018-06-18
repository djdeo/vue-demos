<template>
  <div id="app" class="container text-center">
    <img src="./assets/logo.png">
    <components :is="subComp" @changeComp="subComp= $event"></components>
  </div>
</template>
<script>
import Formula from './components/Formula'
import Result from './components/Result'
export default {
  name: 'app',
  components: {
    Formula,
    Result
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      subComp: ''
    }
  },
  created() {
    this.subComp = 'Formula'
  }
}

</script>
<style>


</style>
