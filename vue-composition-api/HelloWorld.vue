<template>
  <div class="hello">
    <p>click the button below to show/hide p</p>
    <button @click="togglePara">Click Me</button>
    <button @click="toggleVis">Visible Me</button>
    <p v-if="pVisible.show">Now you see me</p>
    <p v-if="visible">Now you see visible</p>
    <hr />
    <p>now: {{ comTime }}</p>
    <p>{{ count }} <button @click="addCount">+1</button></p>
    <div class="form-area">
      <input type="text" v-model="bookname" />
      <br />
      <input type="text" v-model="bookprice" />
      <br />
      <button @click="submit">提交</button>
    </div>

    <ul class="render-list">
      <li v-for="(li, i) in list" :key="i">{{ li.name }}-{{ li.price }}$</li>
    </ul>
  </div>
</template>

<script>
import { reative, ref, reactive, watchEffect, onMounted, computed } from "@vue/composition-api";
import { useCount } from "@/comp-components/count";

export default {
  props: {
    msg: String
  },
  setup() {
    let { count, addCount } = useCount(); // 分模块引入
    let bookname = ref("A b book");
    let bookprice = ref(43);
    let visible = ref(true);
    let pVisible = reactive({
      show: true
    });

    const list = reactive([
      {
        name: "book1",
        price: 20
      }
    ]);

    function togglePara() {
      pVisible.show = !pVisible.show; // 在对象中的show，不用使用.value
      console.log(pVisible);
    }

    function toggleVis() {
      visible.value = !visible.value; // ref() 中的boolean，需要通过.value来访问
    }

    const submit = () => {
      const obj = {
        name: bookname.value,
        price: bookprice.value
      };
      list.push(obj);
    };

    watchEffect(() => {
      if (count.value) {
        console.log("watch=>", count.value);
      } else {
        console.log("count 的值是", count.value);
      }
    });

    // computed
    const comTime = computed(() => new Date());

    onMounted(() => {
      console.log("mounted!");
    });

    return {
      bookname,
      bookprice,
      list,
      togglePara,
      pVisible,
      visible,
      toggleVis,
      comTime,
      submit,
      count,
      addCount
    };
  }
};
</script>

<style lang="scss">
li {
  border: 1px solid teal;
  padding: 10px;
  width: 100px;
}
</style>
