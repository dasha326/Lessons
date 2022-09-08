<template>
  <div class="container">
    <h2>Урок номер 5+6</h2>
    <form action="">
      <div class="form-group mb-3">
        <label for="name" class="form-label">Имя</label>
        <input id="name" type="text" class="form-control" v-model="formFields.login">
      </div>
      <div class="form-group mb-3">
        <label for="password" class="form-label">Пароль</label>
        <input id="password" type="password" class="form-control" v-model="formFields.password">
      </div>

      <div class="form-group mt-3">
        <label for="select" class="form-label">Страна</label>
        <select id="select" class="form-select" v-model="formFields.country">
          <option v-for="country in countries" :key="country.id" :value="country.value">{{country.label}}</option>
        </select>
      </div>
      <div class="form-group mt-3">
        <label for="select-2" class="form-label">Страна</label>
        <select id="select-2" class="form-select" multiple v-model="formFields.theme" >
          <option v-for="theme in themes" :key="theme.id" :value="theme.value">{{theme.label}}</option>
        </select>
      </div>
      <hr>
      <div class="add">
        <h6>Доп инфа</h6>
        <Input v-for="(fieldValue, fieldLabel, id) in addFields" :key="id+1" :label="fieldLabel" :value="fieldValue" :id="id+1" v-model="formFields[fieldLabel]"/>
        <!--Todo: почему v-model не работает?-->
        <!--<FormGroup label="Добавить поле" id="add" :value="addFieldText"/>-->
        <div class="form-group mb-3">
          <label for="form-input-add">Добавить поле</label>
          <input id="form-input-add" type="text" class="form-control" v-model="addFieldText">
        </div>
        <button class="btn btn-info" @click="addField">Добавить инпут</button>
      </div>
      <button type="submit" class="btn btn-danger">Сохранить</button>
    </form>
  </div>
</template>

<script>
import Input from '../components/input.vue';
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: 'Lesson-5',
  setup () {
    return { v$: useVuelidate() }
  },
  components: {
    Input
  },
  data(){
    return {
      addFields: {
        'Цвет волос': ''
      },
      formFields: {
        login: '',
        password: '',
        country: 'Russia',
        theme: [],
      },
      countries: [
        {
          label: 'Россия',
          value: 'Russia'
        },
        {
          label: 'Украина',
          value: 'Ukraine'
        },
        {
          label: 'США',
          value: 'USA'
        }
      ],
      themes: [
        {
          label: 'Технологии',
          value: 'IT'
        },
        {
          label: 'Языки',
          value: 'languages'
        },
        {
          label: 'Математика',
          value: 'mathematics'
        }
      ],
      addFieldText: '',
      validations() {
        return {
          formFields: {
            login: {required}
          }
        }
      }
    }
  },
  methods: {
    addField(){
      if(this.addFieldText === '') return
      this.addFields[this.addFieldText] = '';
      this.addFieldText = ''
    },
    async submit () {
      const result = await this.v$.$validate()
      if (!result) {
        // notify user form is invalid
        return
      }
      // perform async actions
    }
  }
}
</script>
<style scoped>
</style>