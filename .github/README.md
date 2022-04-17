<h1 align="center">
  Welcome To "Vue Advance Infinite Carousel"
</h1>

<h2 align="center">🔆FETURES🔆</h2>

🔆**1.** USE ANY NUMBER OF CONTENTS IN YOUR CAROUSEL NO LIMIT:

🔆**2.** IT's WORK BOTH CAROUSEL ALONG SIDE CARDS ACCORDING TO THE SCREEN SIZE:

🔆**3.** ON RESIZE PAGE IT WILL ADJUST CONTENT CENTER ITSELF:

🔆**4.** SMART COUNTER BUTTONS SUPPORT [auto increase according to content number increase]:

🔆**5.** AUTO DETECT CHANGES OF DYNAMIC DATA & ADJUST ITSELF AUTOMETICALLY:

🔆**6.** LEFT AND RIGHT DIRECTION CONTROL BUTTONS [NAVIGATION BUTTONS]:

🔆**7.** MOUSE DOWN AND UP DILAY:

🔆**8.** TOUCH SUPPORT LEFT AND RIGHT MOVEMENT:

🔆**9.** CHANGE STYLE AS YOU CHOOSE:
<h2 align="center"></h2>

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
<!-- You can use any number of Content -->
<div>1</div>
<div>2</div>
<div>3</div>
</VueAIcarouse>
```

<<<<<<< HEAD
<h3>☸**EXAMPLE PROJECTE**☸</h3>
=======
<h3>☸**EXAMPLE PROJECT**☸</h3>
>>>>>>> a0a232935ec5de2bdc38cc0f794edc64444bc888
THEN IN YOUR COMPONENT SECTION, write: VueAIcarousel, as shown below::

```
<template>
    <VueAIcarousel :Property="{ID: 'One'}">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </VueAIcarousel>
    
    <VueAIcarousel :Property="{ID: 'Two', Dlay:1000}">
      <div class="cards">1</div>
      <div class="cards">2</div>
      <div class="cards">3</div>
      <div class="cards">4</div>
    </VueAIcarousel>
    
    <VueAIcarousel 
      :Property="{
        ID: 'ShouldBe_Unique', 
        NavBtn: 'naveBtnStyle',
        CountPos: 'CounterPosition',
        CounterStyle: 'counterNewStyle',
        CounterActiveStyle: 'CAnewStyle',
        }"
    >
      <div class="cards">1</div>
      <div class="cards">2</div>
      <div class="cards">3</div>
      <div class="cards">4</div>
    </VueAIcarousel>
</template>

<script>
import VueAIcarousel from "vue-ai-carousel"
//import { defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'MyHome',
  components: {
    VueAIcarousel,
    //VueAIcarousel: defineAsyncComponent(() =>import(/*webpackChunkName: "VueAIcarousel" */ 'vue-ai-carousel')),
  }
});
</script>

<style scoped>
.cards{
  background: #94fc86;
  height: 8rem;
  width: 12rem;
}
</style>

<style >
.naveBtnStyle{
  height: 50px;
  width: 50px;
  background: orange;
}
.CounterPosition{
  margin-top: -30px;
}
.counterNewStyle{
  background: red;
}
.CAnewStyle{
  background: purple;
}
</style>
```
<h3>☸**CHANGE DELAY TIME**☸</h3>

```
  <VueAIcarousel :Property="{ID: 'unique_id', Dlay:1000}">
  </VueAIcarousel>
  // Dlay:chose your delay time in miliseconds
```

<h3>☸**STYLE CHANGE**☸</h3>

```
<VueAIcarousel 
  :Property="{
    ID: 'ShouldBe_Unique', 
    NavBtn: 'naveBtnStyle',   <!--  TO CHANGE STYLE OF LEFT RIGHT NEVIGATION BUTTONS [ GIVE A UNIQUECALSS NAME ] -->
    CountPos: 'CounterPosition',  <!--  TO CHANGE POSTION OF COUNTER BUTTONS [ GIVE A UNIQUECALSS NAME ] -->
    CounterStyle: 'counterNewStyle', <!--  TO CHANGE POSTION OF COUNTER BUTTONS [ GIVE A UNIQUECALSS NAME ] -->
    CounterActiveStyle: 'CAnewStyle', <!--  TO CHANGE STYLE OF COUNTER ACTIVE BUTTON [ GIVE A UNIQUECALSS NAME ] -->
    }"
>

[** Create a new style Section & don't use scoped **]
<style >
/* YOUR STYLE GOSE HERE */
/* WE ALREADY GIVE AN EXAMPLE ON THE ABOVE */
</style>
```

🔆 **bundle-size** size**(6kb)**.
🔆 **unpack-size** size**(65.3 kB)**.
