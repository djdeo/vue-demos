<template>
    <figure class="hoverblur">
        <img :src="imgSrc"  @mouseenter="imgSrc=enterImg"  @mouseleave="imgSrc=url">
    </figure>
</template>

<script>
export default {
    name:'Hoverblur',
    props:['url', 'enterImg'],
    data(){
        return{
            imgSrc: this.url
        }
    }
}
</script>

<style>
.hoverblur{
    max-width: 960px;
    margin: 0 auto;
}
</style>


