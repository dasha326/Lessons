<template>
  <div class="container">
    <h2>Урок номер 4</h2>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Поиск" aria-label="Поиск" aria-describedby="button-addon2" v-model="inputText">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="currentText()">Button</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lesson-4',
  emits: ['currentText'],
  data() {
    return {
      inputText: ''
    }
  },
  methods: {
    currentText(){
      this.$emit('currentText', this.inputText)
    }
  }
}
</script>