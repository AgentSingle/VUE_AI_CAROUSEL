<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <div class="Slider_Holder">
    <div class="Slider_Wrapper">
      <div class="content_Wrapper_Holder">
        <div class="Content_Wrapper">
          <div v-for="obj in objIs" v-bind:key="obj" class="card">{{obj}}</div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h1>This is an about page</h1>
  </div>
  <AICarousel />
</template>

<script>
import AICarousel from "@/components/Carousel/AI_Carousel.vue";
export default {
  components: {
    AICarousel,
  },
  data(){
    return{
      objIs: ['1', '2', '3', '4', '5']
    }
  }
};
</script>
