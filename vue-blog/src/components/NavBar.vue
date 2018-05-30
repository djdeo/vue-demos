<template>
    <nav class="navbar navbar-dark bg-warning mb-3">
      <div class="container">
        <a href="/" class="navbar-brand text-white">Server Articles</a>
        <router-link :to=" {name: 'AddNew'} " class="btn btn-default">Add New</router-link>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'NarBar'
}
</script>

