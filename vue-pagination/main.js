Vue.component("paginated-list", {
  data() {
    return {
      current: 0
    };
  },
  props: {
    listData: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 10
    }
  },
  methods: {
    nextPage() {
      this.current++;
    },
    prevPage() {
      this.current--;
    }
  },
  computed: {
    pageCount() {
      let l = this.listData.length,
        s = this.size;
      return Math.floor(l / s);
    },
    paginatedData() {
      const start = this.current * this.size,
        end = start + this.size;
      return this.listData.slice(start, end);
    }
  },
  template: `<div>
                 <ul>
                    <li v-for="p in paginatedData">
                      {{p.first}} 
                      {{p.last}}  
                      {{p.suffix}}
                    </li>
                 </ul>
                <button 
                    :disabled="current === 0" 
                    @click="prevPage">
                    Previous
                </button>
                <button 
                    :disabled="current >= pageCount -1" 
                    @click="nextPage">
                    Next
                </button>
               </div>
    `
});

function createFakeData() {
  let data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      first: "John",
      last: "Doe",
      suffix: "#" + i
    });
  }
  return data;
}

new Vue({
  el: "#app",
  data: {
    people: createFakeData()
  }
});
