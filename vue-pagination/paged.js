var vm = new Vue({
    el: '#paged',
    data: {
        current: 0,
        originalList: [
            {title: 'title 1', body: 'body 1'},
            {title: 'title 2', body: 'body 2'},
            {title: 'title 3', body: 'body 3'},
            {title: 'title 4', body: 'body 4'},
            {title: 'title 5', body: 'body 5'},
            {title: 'title 6', body: 'body 6'},
            {title: 'title 7', body: 'body 7'}
        ],
        itemNum: 3
    },
    computed:{
        pageCount: function() {
            let length = this.originalList.length,
                size = this.itemNum
            return Math.floor(length / size)
        },
        pagedData: function() {
            const start = this.current * this.itemNum
                end = start + this.itemNum
            return this.originalList.slice(start, end)
        }
    }
})