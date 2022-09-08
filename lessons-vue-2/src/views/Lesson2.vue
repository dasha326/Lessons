<template>
  <div class="container">
    <h2>Урок номер 2</h2>
    <section class="sample mt-5">
      <div class="form-group mb-4">
        <label for="input" class="form-label">Я найду тебя</label>
        <input id="input" type="text" class="form-control" @input="coincidenceCounter($event.target.value)">
      </div>
      <p>Всего имен: {{ names.length }}</p>
      <p>Совпадения: {{ coincidence }}</p>
      <p v-for="name in currentNames" :key="name.id">{{ name }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Lesson-2',
  data() {
    return {
      names: ["Василий", "Петр", "Григорий", "Инокентий"],
      currentNames: ["Василий", "Петр", "Григорий", "Инокентий"],
      coincidence: 4
    }
  },
  methods: {
    coincidenceCounter(val){
      this.currentNames = this.names.filter(item => item.toLowerCase().includes(val.toLowerCase()));
      this.coincidence = this.names.filter(item => item.toLowerCase().includes(val.toLowerCase())).length
    }
  }
}
</script>
