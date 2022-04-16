<script>
import { defineComponent } from 'vue';
import VueAIcarousel from '@/VueAIcarousel.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueAIcarousel
  }
});
</script>

<template>
  <div id="app">
    <VueAIcarousel :Property="{ID: 'One'}">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </VueAIcarousel>
  </div>
</template>
