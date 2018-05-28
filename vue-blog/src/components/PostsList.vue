<template>
    <div class="postlist">
    <h1>All Posts from Json Server</h1>
    <div class="row">
        <div class="col-md-4" v-for="post in posts" :key="post.id">
            <div class="card mb-3">
                <div class="card-body">
                <h4 class="card-title"> {{post.title}} </h4>
                <p class="card-text"> {{post.body}} </p>
                </div>
            </div>
        </div>
    </div>
    </div>
    
</template>

<script>
const axios = require("axios")

export default {
    name: 'PostsList',
    data(){
        return{
            posts:[]
        }
    },
    created(){
        this.getPost()
    },
    methods:{
        getPost(){
            axios.get('http://localhost:3000/posts')
            .then(data => (this.posts = data.data))
            .catch(error => console.log(error))
        }
    }
}
</script>

