<template>
  <div class="post">
    <div class="container">
      <div class="row g-5">
        <div class="col-md-8">
          <article class="blog-post">
            <h1 class="blog-post-title mb-1">{{post.title}}</h1>
            <p class="blog-post-meta">January 1, 2021 by </p>
            <div class="blog-post-text" v-html="post.body"></div>
            <div class="btn btn-outline-primary mt-3">Понравилось: </div>
          </article>
        </div>

        <div class="col-md-4">
          <Sidebar/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";

export default {
  name: 'PostView',
  components: {
    Sidebar
  },
  // data() {
  //   return {
  //     post: {}
  //   }
  // },
  computed: {
    // post() {
    //   const globalPost = this.$store.getters.getPosts.find(el => el.id === parseInt(this.$route.params.id));
    //   if (globalPost) {return globalPost;}
    // }
  },
  created() {
    this.$store.dispatch('loadPosts');
  }
}
</script>
