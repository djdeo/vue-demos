<template>
    <div class="container">
        <h1>AddNew</h1>
        <form @submit.prevent="addNew()" class="form-group">
            <label for="title"></label>
            <input type="text" v-model.lazy="title" placeholder="title">
            <br>
            <textarea v-model.lazy="text" name="text" id="text" cols="30" rows="10"></textarea>
            <br>
            <button>Add New</button>
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
    name: 'AddNew',
    data(){
        return{
            title:null,
            text:null,
            id:null,
            feedback:null
        }
    },
    methods:{
        addNew(){
            const postData = {
                title: this.title,
                body: this.text,
                id: this.id
            }
            axios.post('http://localhost:3000/posts', postData)
            .then(response => {
                this.title = null,
                this.text = null,
                this.feedback = 'New Post Added to Server'
            })
        }
    }

}
</script>
