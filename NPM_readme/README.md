<h1 align="center">
  Welcome To "Vue Advance Infinite Carousel"
</h1>

<h2 align="center">
  🔆<a href="https://github.com/AtaOta/VUE_AI_CAROUSEL#fetures" target="_blank">**FEATURES**</a>🔆
</h2>

<h2 align="center">**HOW TO USE: "vue-ai-carousel"**</h2>

☸**1.** ADD PLUGIN INTO YOUR PROJECT [latest version]:

  ```
  npm i vue-ai-carousel
  ```

☸**2.** IMPORT vue-ai-carousel INTO YOUR WORKING FILE (Eg. my_home.vue):

```
import VueAIcarousel from "vue-ai-carousel"
```
THEN IN YOUR COMPONENT SECTION REGISTER: VueAIcarousel, as shown below::
```
VueAIcarousel,
```
OR
```
import { defineAsyncComponent } from 'vue';
```
THEN IN YOUR COMPONENT SECTION REGISTER: VueAIcarousel, as shown below::
```
VueAIcarousel: defineAsyncComponent(() =>import(/*webpackChunkName: "VueAIcarousel" */ 'vue-ai-carousel')),
```


☸**3.** USE AS A COMPONENT OR COMPONENTS [WARNING: ID should be unique for each carousel]:

```
<VueAIcarousel :Property="{ID: 'Unique_id'}">
<!-- You can use any number of Content [ID is important] -->
<div>1</div>
<div>2</div>
<div>3</div>
</VueAIcarouse>
```

<h3>☸**AN EXAMPLE PROJECT**☸</h3>
<h2>
  <a href="https://github.com/AtaOta/VUE_AI_CAROUSEL#example-projecte" target="_blank">**EXAMPLE PROJECT**</a>
</h2>

<h3>☸**TO CHANGE DELAY TIME**☸</h3>
<h2>
  <a href="https://github.com/AtaOta/VUE_AI_CAROUSEL#change-delay-time" target="_blank">**CHANGE DELAY TIME**</a>
</h2>

<h3>☸**TO STYLE CHANGE**☸</h3>
<h2>
  <a href="https://github.com/AtaOta/VUE_AI_CAROUSEL#change-delay-time" target="_blank">**CHANGE STYLE**</a>
</h2>

🔆 **bundle-size** size**(12kb)**.
🔆 **unpack-size** size**(65 kB)**.
