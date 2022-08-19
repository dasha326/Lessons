<template>
  <div class="container">
    <h2>Урок номер 1</h2>
    <section class="sample mt-5">
      <div class="form-group">
        <label for="input" class="form-label">Выберите количество продуктов</label>
        <div class="input-group mb-3">
          <button type="button" class="input-group-text"
                  @click="count >0 ? count-- : 0">-</button>
          <input id="input" type="number" class="form-control" v-model="count">
          <button type="button" class="input-group-text"
                  @click="count++">+</button>
        </div>
      </div>
      <p>Кол-во: {{count}}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Lesson-1',
  data() {
    return {
      count: 0
    }
  },
}
</script>

<style scoped>
  .input-group{
    max-width: 150px;
  }
</style>
