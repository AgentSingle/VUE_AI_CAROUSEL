<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
#nav {
  padding: 30px;
  font-size: 1.6rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media (max-width: 1440px) {
  html {
    font-size: 60%;
  }
}
@media (max-width: 1080px) {
  html {
    font-size: 55%;
  }
}
/* TO STOP ROTATION SCREEN IN MOBILE DEVICE */
/* @media only screen and (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {
  body {
    width: 100vh;

    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
} */
</style>
