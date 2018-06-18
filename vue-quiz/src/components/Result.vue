<template>
  <div class="result">
    <div class="row justify-content-md-center">
      <div class="col-md-6">
      	<h1 class="text-success">That's Right!</h1>
        <button @click="tryNew" class="btn btn-info">Try Another</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Result',
  data() {
    return {

    }
  },
  methods: {
    tryNew() {
      this.$emit('changeComp', 'Formula')
    }
  }
}

</script>
