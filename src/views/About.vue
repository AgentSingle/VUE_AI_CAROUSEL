<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  

  <div class="Slider_Holder">
    <div class="Slider_Wrapper">
      <div class="content_Wrapper_Holder">
        <div class="Content_Wrapper">
          <div class="card">1</div>
          <div class="card">2</div>
          <div class="card">3</div>
          <div class="card">4</div>
          <div class="card">5</div>
          <div class="card">6</div>
          <div class="card">7</div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h1>This is an about page</h1>
  </div>
  <AICarousel/>
</template>


<script>
// import AICarousel from "@/components/Carousel/AI_Carousel.vue";
import AICarousel from "@/components/Carousel/aiCarousel.vue";
export default {
  components:{
    AICarousel,
  }

}
</script>
