<template>
    <div class="postlist">
    <h1>All Posts from Json Server</h1>
    <div class="row">
        <div class="col-md-4" v-for="post in posts" :key="post.id">
            <div class="card mb-3">
                <div class="card-body">
                <h4 class="card-title"> {{post.title}} </h4>
                <p class="card-text"> {{post.body}} </p>
                <router-link :to=" { name: 'Edit', params: { id: post.id, title: post.title, body:post.body }}" class="edit btn btn-sm btn-warning">Edit</router-link>
                <button class="del btn btn-sm btn-danger" @click="deletePost(post.id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
        <p class="text-success text-center">{{ feedback }}</p>
    </div>
    
</template>

<script>
const axios = require("axios")

export default {
    name: 'PostsList',
    data(){
        return{
            posts:[],
            feedback:null
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
        },
        deletePost(id){
            let confirmDel = confirm(`Delete Post ${id}?`)
            if (confirmDel) {
                axios.delete(`http://localhost:3000/posts/${id}`)
                .then(data => {
                    this.feedback = `Post ${id} successfully deleted`
                    this.getPost()
                    })
            }
        }
    }
}
</script>

<style>
.edit, .del {
    display: none;
}
.card-body:hover .edit, .card-body:hover .del {
    display: inline-block;
}
</style>


