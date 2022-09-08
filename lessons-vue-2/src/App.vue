<template >
  <div class="main-wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
                active-class="active"
                to="/"
                class="nav-link">Home</router-link>
          </li>
          <li v-for="(item, index) in Array.from({length:5})" :key="index" class="nav-item">
            <router-link
                active-class="active"
                :to="{name: `Lesson${index+1}`}"
                class="nav-link">Lesson{{index+1}}</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {

    showText(value){
      console.log(value);
    }
  }
}
</script>
<style>
  body, .navbar{
    margin-bottom: 50px;
  }
</style>