<template>
  <div class="container">
    <h2>Урок номер 3</h2>
    <div class="row">
      <div class="col-6">
        <div class="picture img-thumbnail">
          <img src="../assets/cat.jpeg" class="img-fluid" alt="..."
               v-show="isImgActive"
               :class="imgFilters"
               :style="imgStyles"
          >
        </div>
      </div>
      <div class="col-6">
        <h3>Это котик</h3>
        <hr>
        <h5>Фильтры</h5>
        <div class="btn-group mt-3" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-outline-danger"
                  @click="imgFilters.sepia = !imgFilters.sepia"
                  @class="imgFilters.sepia ? 'active' : ''"
          >Сепия</button>
          <button type="button" class="btn btn-outline-danger"
                  @click="imgFilters.border = !imgFilters.border"
                  @class="imgFilters.border ? 'active' : ''"

          >Рамка</button>
          <button type="button" class="btn btn-outline-danger"
                  @click="imgFilters.shadow = !imgFilters.shadow"
                  @class="imgFilters.shadow ? 'active' : ''"

          >Тень</button>
        </div>
        <hr>
        <h5>Размер</h5>
        <div class="form-group">
          <label for="customRange1" class="form-label">Ширина: {{ imgSizes.currentWidth }}%</label>
          <input type="range" class="form-range" id="customRange1"
                 :min="imgSizes.minWidth"
                 :max="imgSizes.maxWidth"
                 :value="imgSizes.currentWidth"
                 @input="imgSizes.currentWidth = $event.target.value"
          >
        </div>
        <div class="form-group">
          <label for="customRange2" class="form-label">Высота: {{ imgSizes.currentHeight }}%</label>
          <input type="range" class="form-range" id="customRange2"
                 :min="imgSizes.minHeight"
                 :max="imgSizes.maxHeight"
                 :value="imgSizes.currentHeight"
                 @input="imgSizes.currentHeight = $event.target.value"
          >
        </div>
        <hr>
        <h5>Поворот</h5>
        <div class="form-group">
          <label for="customRange3" class="form-label">Угол: {{ imgSizes.currentRotate }}</label>
          <input type="range" class="form-range" id="customRange3" min="0" max="360" step="1"
                 :value="imgSizes.currentRotate"
                 @input="imgSizes.currentRotate = $event.target.value"
          >
        </div>
        <hr>
        <button type="button" class="btn btn-danger" @click="isImgActive = !isImgActive">{{isImgActive ? 'Спрятать' : 'Показать'}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lesson-3',
  data() {
    return {
      isImgActive: true,
      imgSizes: {
        minWidth: 20,
        maxWidth: 100,
        minHeight: 20,
        maxHeight: 100,
        currentWidth: 100,
        currentHeight: 100,
        currentRotate: 0
      },
      imgFilters: {
        sepia: false,
        border: false,
        shadow: false
      }
    }
  },
  computed: {
    imgStyles() {
      return  {
        width: `${this.imgSizes.currentWidth}%`,
        height: `${this.imgSizes.currentHeight}%`,
        transform: `rotate(${this.imgSizes.currentRotate}deg)`
      }
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