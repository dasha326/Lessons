<template>
  <article class="blog-post mt-5">
    <h2 class="blog-post-title mb-1">{{ post.title }}</h2>

    <div class="blog-post-text">
      {{post.body}}
    </div>
    <router-link :to="{name: `post`, params:{id: post.id}}" class="btn btn-danger mt-3">Читать статью</router-link>
    <br>
    <div class="btn btn-outline-primary mt-3">Понравилось: </div>
  </article>
</template>

<script>
export default {
  name: 'blog-post',
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
