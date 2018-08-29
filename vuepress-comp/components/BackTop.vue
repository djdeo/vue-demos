<template>
    <div v-if="scrolled">
        <a href="#" class="top" title="Back to Top">&#8673;</a>
    </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false
    };
  },
  created() {
    window.addEventListener("scroll", this.showLink);
  },
  destroyed() {
    window.removeEventListener("scroll", this.showLink);
  },
  methods: {
    showLink() {
      this.scrolled = window.scrollY > 0;
    }
  }
};
</script>

<style scoped>
.top {
  position: fixed;
  top: 90%;
  right: 100px;
  opacity: 0.5;
  z-index: 3;
  font-size: 2rem;
}
</style>