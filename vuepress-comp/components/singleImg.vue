<template>
  <div>
    <img :src="link" @click="showImgModal = true">
    <div class="modal" @click="showImgModal=false" v-show="showImgModal">
      <div class="modal-content">
        <p class="image"><img :src="link"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'singleImg',
  props: ["link"],
  data() {
    return {
      showImgModal: false
    };
  }
};
</script>
<style scoped>

img {
  cursor: pointer;
}

.modal {
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  z-index: 40;
  background-color: rgba(10, 10, 10, 0.7);
}

.modal-content {
  margin: 0 auto;
  width: 940px;
  overflow: auto;
  position: relative;
}

</style>