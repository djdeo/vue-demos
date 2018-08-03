<template>
    <img :src="imgSrc" alt="lock data" @mouseenter="mousein" @mouseleave="mouseout" >
</template>

<script>
export default {
  name: "img-hover",
  props: ["default", "enter"],
  data() {
    return {
      imgSrc: this.default,
      enterImg: this.enter
    };
  },
  methods: {
    mousein() {
      this.imgSrc = this.enter;
    },
    mouseout() {
      this.imgSrc = this.default;
    }
  }
};
</script>
