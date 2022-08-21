<template>
  <div class="main-wrapper">
    <Lesson1/>
    <hr class="mt-5 mb-5">
    <Lesson2/>
    <hr class="mt-5 mb-5">
    <Lesson3/>
    <hr class="mt-5 mb-5">
    <Lesson4 @currentText="showText"/>
    <hr class="mt-5 mb-5">
    <Lesson5/>
  </div>
</template>

<script>
import Lesson1 from './components/Lesson1.vue'
import Lesson2 from './components/Lesson2.vue'
import Lesson3 from './components/Lesson3.vue'
import Lesson4 from './components/Lesson4.vue'
import Lesson5 from './components/Lesson5.vue'

export default {
  name: 'App',
  components: {
    Lesson1,
    Lesson2,
    Lesson3,
    Lesson4,
    Lesson5
  },
  methods: {
    showText(value){
      console.log(value);
    }
  }
}
</script>
<style>
  body{
    margin-top: 50px;
    margin-bottom: 50px;
  }
</style>

