var vm = new Vue({
  el: "#paged",
  data: {
    current: 0,
    originalList: [],
    rows: 3
  },
  created: function() {
    var e = new XMLHttpRequest();
    e.open("GET", "fakedata.json");
    e.onload = function() {
      var data = JSON.parse(this.response);
      vm.originalList = data;
    };
    e.send();
  },
  computed: {
    pageCount: function() {
      let length = this.originalList.length,
        size = this.rows;
      return Math.floor(length / size);
    },
    pagedData: function() {
      const start = this.current * this.rows;
      end = start + this.rows;
      return this.originalList.slice(start, end);
    }
  }
});
