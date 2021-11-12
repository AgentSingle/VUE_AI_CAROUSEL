<template>
  <div class="home">
    
  <AICarousel/>

  <div class="Slider_Holder">
    <div class="Slider_Wrapper">
      <div class="content_Wrapper_Holder">
        <div class="Content_Wrapper">
          <div class="card">1</div>
          <div class="card">2</div>
          <div class="card">3</div>
          <div class="card">4</div>
          <div class="card">5</div>
          <!-- <div class="card">6</div>
          <div class="card">7</div> -->
        </div>
      </div>
    </div>
  </div>

    <div class="Slider_Holder">
      <div class="Slider_Wrapper">
        <div class="content_Wrapper_Holder">
          <div class="Content_Wrapper">
            <div class="card_Two">1</div>
            <div class="card_Two">2</div>
            <!-- <div class="card_Two">3</div> -->
            <!-- <div class="card">4</div>
            <div class="card">5</div>
            <div class="card">6</div>
            <div class="card">7</div> -->
          </div>
        </div>
      </div>
    </div>

    <div>
      <button v-on:click="DisplayNextCarouse">click me</button>
    </div>

    <div v-if="display==true">
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
    </div>

  </div>
</template>

<script>
// import AICarousel from "@/components/Carousel/AI_Carousel.vue";
import AICarousel from "@/components/Carousel/aiCarousel.vue";

export default {
  name: "Home",
  components:{
    AICarousel,
  },
  data(){
    return{
      display: false,
    }
  },
  methods:{
    DisplayNextCarouse(){
      if (this.display==true){
        this.display = false
      }else{
        this.display = true
      }
      console.warn('display')
    }
  }
};
</script>

<style scoped>
.WidthIs {
  max-width: 400px;
}
.card_Two{
    width: 25rem;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    background-color: #004149;
    margin-left: 5px;
    margin-right: 5px;
    position: relative;
    z-index: 1;
    border-radius: 5%;
    color: #fff;
}


.card_Two:first-child{
    margin-left: 0;
}
.card_Two:last-child{
    margin-right: 0;
}
</style>
