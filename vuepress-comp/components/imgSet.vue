<template>
  <div>
    <div class="row">
      <div class="column">
          <singleImg :link="link1"></singleImg>
      </div>
      <div class="column">
          <singleImg :link="link2"></singleImg>
      </div>
    </div>
  </div>
</template>
<script>
import singleImg from './singleImg';


export default {
  props: ["link1", "link2"],
  components: {singleImg},
  data() {
    return {
      showImgModal: false,
    };
  }
};
</script>
<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 45%;
  max-width: 50%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
}


@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>