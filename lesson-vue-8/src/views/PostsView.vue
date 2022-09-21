<template>
  <div class="posts">
    <div class="container">
      <div class="row g-5">
        <div class="col-md-8">
          <h3 class="pb-4 mb-4 fst-italic border-bottom">Наши статьи</h3>
          <BlogPost v-for="(item, i) in posts" :key="i" :post="item"/>

          <nav class="blog-pagination mt-4" aria-label="Pagination">
            <a class="btn btn-outline-primary rounded-pill" href="#">Older</a>
            <a class="btn btn-outline-secondary rounded-pill disabled">Newer</a>
          </nav>

        </div>

        <div class="col-md-4">
          <Sidebar/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BlogPost from "@/components/BlogPost";
  import Sidebar from "@/components/Sidebar";

  export default {
    name: 'PostsView',
    components: {BlogPost, Sidebar},
    computed: {
      posts() {
        return this.$store.getters.getPosts
      }
    },
    created() {
      this.$store.dispatch('loadPosts');
    }
  }
</script>