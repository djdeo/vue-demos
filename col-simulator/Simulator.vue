<template>
  <div>
    <button class="btn" @click="addPar">+ Add Primary</button>
    <button class="btn" @click="addFree">+ Add Success</button>
    <button class="btn" @click="reset">&times; Reset</button>
    <button class="btn" @click="showSugg" :disabled="disable">Show Suggestions</button>
    <div class="row">
      <div class="col" v-for="(col, i) in cols" :key="i" :class="col.bg"> {{ col.tp }} </div>
    </div>
    <!-- <p :class="'text-danger':textDanger" >{{ feedback }}</p> -->
    <p>{{ feedback }}</p>
    <div v-if="generalCon">
      <ol>
        <li v-for="(info, i) in extendInfo" :key="i">{{ info }}</li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cols: [{ tp: "init Col", bg: "col-pri" }],
      feedback: null,
      textDanger: false,
      generalCon: false,
      disable: false,
      extendInfo: [
        "Suggestion 1",
        "Suggestion 2, or 1 if conditions match",
        "Suggestion 3，or 2 if conditions match"
      ]
    };
  },
  methods: {
    addPar() {
      if (this.cols.length > 4) {
        this.showWarn("Sorry, I've reached my Maximum length...");
      } else {
        this.cols.push({ tp: "new col", bg: "col-pri" });
      }
    },
    addFree() {
      if (this.cols.length > 5) {
        this.showWarn("Sorry, I've reached my Maximum length...");
      } else {
        this.cols.push({ tp: "success col", bg: "col-succ" });
      }
    },
    reset() {
      Object.assign(this.$data, this.$options.data())
    },
    showWarn(msg) {
      this.feedback = msg;
      this.textDanger = true;
      setTimeout(() => (this.feedback = null), 3000);
    },
    showSugg() {
      if (this.cols.length <= 1) {
        this.showWarn("Please add a primary col or success col to start");
      } else {
        this.disable = true;
        this.generalCon = true;
        if ((this.cols[1].tp == "new col")) {
          this.extendInfo
        } else {
          this.extendInfo = this.extendInfo.slice(1);
        }
      }
    }
  }
};
</script>
<style scoped>
.btn {
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  border-radius: 2px;
  margin: 0.25rem;
  padding: 0.45rem;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
}

button:disabled,
button[disabled] {
  border: 1px solid #999;
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}

.row {
  display: flex;
  background-color: hsl(210, 20%, 96%);
  padding: 0.75rem;
}

.col {
  padding: 0.65rem;
  margin: 0.25rem;
  border-radius: 3px;
  color: hsl(0, 0%, 100%);
  text-align: center;
}

.col-pri {
  width: 15%;
  background-color: hsl(204, 86%, 53%);
}

.col-succ {
  width: 20%;
  background-color: hsl(141, 71%, 48%);
}

.text-danger {
  color: #cd2122;
}
</style>