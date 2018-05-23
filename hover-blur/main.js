Vue.component('hover-blur', {
    props:['static', 'enter'],
    data () {
        return {
            imgSrc: this.static
        }
    },
    template: `
    <img :src="imgSrc" alt="lock data" @mouseenter="mousein()" @mouseleave="mouseout()">
    `,
    methods:{
        mousein(){
            this.imgSrc = this.enter
        },
        mouseout(){
            this.imgSrc = this.static
        }
    }
})

new Vue({ el: '#hover'})