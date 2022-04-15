<template>
  <div class="about">
    <h1>This IS ABOUT PAGE <br>
    [ AIcarousel's is ID-IMPORTANT ]</h1>
  </div>
  <div style="font-size: 16px">
    <u>EXAMPLE OF DYNAMICALLY IMPORTED DATA</u>
  </div>
  <AIcarousel :Property="{ID: 'one'}">
    <div v-for="obj in objIs" v-bind:key="obj" class="card">{{obj}}</div>
  </AIcarousel>
  <div style="font-size: 16px">
    <br>
    <u>EXAMPLE OF SINGLE CARDS</u>
  </div>
  <AIcarousel :Property="{ID: 'TWO'}">
    <div >1</div>
  </AIcarousel>
  <div style="font-size: 16px">
    <br>
    <u>EXAMPLE OF DIFFREN DILAY TIME</u>
  </div>
  <AIcarousel :Property="{ID: 'thrEE', Dlay: 10000}">
    <div v-for="obj in objIs2" v-bind:key="obj" class="card">{{obj}}</div>
  </AIcarousel>
  <div style="font-size: 16px">
    <br>
    <u>EXAMPLE OF TWO CARDS</u>
  </div>
  <AIcarousel :Property="{ID: 'FoUr4'}">
    <div >1</div>
    <div >2</div>
  </AIcarousel>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    AIcarousel: defineAsyncComponent(
        () =>import(/*webpackChunkName: "AIcarousel" */ '@/components/Carousel/AI_Carousel.vue')
    ),
  },
  data(){
    return{
      // objIs: ['1', '2', '3', '4', '5']
      // objIs: ['1', '2', '3', '4', '5']
      objIs: [],
      objIs2: ['1', '2', '3', '4']
      // objIs: []
    }
  },
  mounted(){
    setTimeout(() => {
      this.objIs = ['1', '2']
    }, 3000);
    setTimeout(() => {
      this.objIs.push('3', '4', '5')
    }, 5000);
  }
};
</script>

<style scoped>
/* .card{
  width: 15rem;
} */
</style>
