<template>
  <div class="container">
    <h2>Урок номер 5</h2>
    <FormGroup v-for="(fieldValue, fieldLabel, id) in formFields" :key="id+1" :label="fieldLabel" :value="fieldValue" :id="id+1"/> <!--Todo: можно ли передать то что в key-->
    <div class="add">
      <!--<FormGroup label="Добавить поле" id="add" :value="addFieldText"/>-->
      <div class="form-group mb-3">
        <label for="form-input-add">Добавить поле</label>
        <input id="form-input-add" type="text" class="form-control" v-model="addFieldText">
      </div>
      <button class="btn btn-info" @click="addField">Добавить инпут</button>
    </div>
  </div>
</template>

<script>
import FormGroup from './form-group.vue'

export default {
  name: 'Lesson-5',
  components: {
    FormGroup
  },
  data(){
    return {
      formFields: {
        'Имя': '',
        'Фамилия': 'Иванов'
      },
      addFieldText: ''
    }
  },
  methods: {
    addField(){
      this.formFields[this.addFieldText] = ''; //Todo: Цифры в начале
    }
  }
}
</script>
<style scoped>
</style>