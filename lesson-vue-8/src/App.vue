<template>
  <Header/>
  <main>
    <router-view/>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'MainApp',
  components: {
    Header
  }
}
</script>
<style>
</style>
