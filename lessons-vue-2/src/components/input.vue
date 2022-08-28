<template>
  <div class="form-group mb-3">
    <label :for="'form-input-'+ id" class="form-label">{{label}}</label>
    <input :id="'form-input-'+ id" type="text" class="form-control" :placeholder="value">
  </div>
</template>

<script>
export default {
  name: 'form-group',
  props: {
    id: Number,
    label: {
      type: String,
      default: 'Новый инпут'
    },
    value: {
      type: String,
      default: ''
    }

  }
}
</script>
<style scoped>
  .sepia{
    filter: sepia(100%);
  }
  .border{
    border-width: 3px !important;
  }
  .picture{
    width: 100%;
    aspect-ratio: 236/147
  }
</style>