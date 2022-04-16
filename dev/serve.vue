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
      <div class="cards">1</div>
    </VueAIcarousel>
  </div>
</template>

