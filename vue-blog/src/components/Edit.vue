<template>
    <div class="container">
        <h1>Edit Post {{ id }}</h1>
        <form @submit.prevent="editPost(id)" class="form-group">
            <label for="title"></label>
            <input type="text" v-model.lazy="title" placeholder="title">
            <br>
            <textarea v-model.lazy="text" name="text" id="text" cols="30" rows="10"></textarea>
            <br>
            <button>Update Post</button>
        </form>
        <p class="text-success">{{ feedback }}</p>
        <div class="preview">
            <h2>Preview</h2>
            <h3>Title: {{ title }}</h3>
            <p>Content: {{ text }}</p>
        </div>
    </div>
</template>

<script>
const axios = require('axios')

export default {
    name: 'Edit',
    data(){
        return{
            id: this.$route.params.id,
            title: this.$route.params.title,
            text: this.$route.params.body,
            feedback:null
        }
    },
    methods:{
        editPost(id){
            axios.put(`http://localhost:3000/posts/${id}`,{
                title: this.title,
                body: this.text,
                id
            })
            .then(data => {
                this.title = null,
                this.text = null,
                this.feedback = 'Post Updated'
            })
        }
    }

}
</script>
