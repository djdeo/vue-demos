<template>
  <div class="formula">
    <h2>Try to answer this quiz</h2>
    <h3> What's {{ bigNum }} - {{ smallNum }} ? </h3>
    <br>
    <div class="row justify-content-md-center">
    <h3>The answer is: </h3>
      <div class="col" v-for="num in fourOptions" :key="num">
        <button class="btn btn-info" @click="checkAnswer(num)"> {{ num }} </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      runNum: Number,
      bigNum: Number,
      smallNum: Number,
      corretAnswer: Number,
      fourOptions: [],
    }
  },
  created() {
    this.tryNew()
  },
  methods: {
    generateOptions(length, max) {
      return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
      });
    },
    checkAnswer(ans) {
      if (ans != this.corretAnswer) {
        alert('No, wrong answer, try again')
      } else {
        this.$emit('changeComp', 'Result')
      }
    },
    tryNew() {
      this.runNum = Math.floor(Math.random() * 10 + 1)
      this.bigNum = this.runNum * 49
      this.smallNum = this.runNum * 11
      this.corretAnswer = this.bigNum - this.smallNum
      this.fourOptions = this.generateOptions(3, this.corretAnswer - 1)
      this.fourOptions.push(this.corretAnswer)
      this.fourOptions.sort()
    }
  }
}

</script>
