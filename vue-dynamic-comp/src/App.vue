<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <button class="btn btn-info" v-for="(btn, i) in btns" :key="i" @click="chooseMethod(btn)">
      {{ btn }}
    </button>
    <transition enter-active-class="animated bounceInRight">
      <component :is="method"></component>
    </transition>
  </div>
</template>

<script>
import Management from "./components/Management";
import Diskpart from "./components/Diskpart";
import Expert from "./components/Expert";
import Extender from "./components/Extender";

export default {
  name: "app",
  components: {
    Management,
    Diskpart,
    Expert,
    Extender
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      btns: ["Management", "Diskpart", "Expert", "Extender"],
      method: null
    };
  },
  methods: {
    chooseMethod: function(way) {
      this.method = way;
      console.log(way);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
