<template>
  <div class="home">
    <AICarousel/>

    <div class="Slider_Holder">
      <div class="Slider_Wrapper">
        <div class="content_Wrapper_Holder">
          <div class="Content_Wrapper">
            <!-- CONTENT -->
            <div v-for="obj in objIs" v-bind:key="obj" class="card">{{obj}}</div>

          </div>
        </div>
      </div>
    </div>

    <div class="Slider_Holder">
      <div class="Slider_Wrapper">
        <div class="content_Wrapper_Holder">
          <div class="Content_Wrapper">
            <!-- CONTENT -->
            <div v-for="obj in cardsTwo" v-bind:key="obj" class="card_Two">{{obj}}</div>

          </div>
        </div>
      </div>
    </div>

    <div class="Slider_Holder">
      <div class="Slider_Wrapper">
        <div class="content_Wrapper_Holder">
          <div class="Content_Wrapper">
            <!-- CONTENT -->
            <div v-for="obj in objIs" v-bind:key="obj" class="card_Three">{{obj}}</div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import AICarousel from "@/components/Carousel/AI_Carousel.vue";

export default {
  name: "Home",
  components: {
    AICarousel,
  },
  data() {
    return {
      carouselMethod: '',
      objIs: ['1', '2', '3', '4', '5'],
      cardsTwo: ['1', '2', '3', '4', '5']
    };
  },
};
</script>

<style scoped>
.WidthIs {
  max-width: 400px;
}
.card_Two{
    min-width: 10rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    background-color: #ffdcf1;
    color: #330000;
    margin-left: 5px;
    margin-right: 5px;
    position: relative;
    z-index: 1;
    border-radius: 20rem;
    border: 2px solid #8f0000;
    box-sizing: border-box;
}

.card_Two:first-child{
    margin-left: 0;
}
.card_Two:last-child{
    margin-right: 0;
}

.card_Three{
    width: 30rem;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    background-color: #ffdfdfb0;
    color: orangered;
    margin-left: 5px;
    margin-right: 5px;
    position: relative;
    z-index: 1;
    border-radius: 5%;
}
.card_Three:first-child{
    margin-left: 0;
}
.card_Three:last-child{
    margin-right: 0;
}
</style>
