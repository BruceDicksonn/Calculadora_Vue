<template>
  <div id="app">
      <h1>My Calculator</h1>
      <Calculator/>
      <AnimatedBackground/>    
  </div>
</template>

<script>

import Calculator from './main/Calculator.vue'
import AnimatedBackground from './components/AnimatedBackground.vue'

export default {
     components: {Calculator,AnimatedBackground}
    /* components: {Calculator,AnimatedBackground}       */
    //components: {AnimatedBackground}      
}

</script>

<style>

@font-face {
  font-family: 'RobotoMono';
  src: url(fonts/RobotoMono-VariableFont_wght.ttf);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  font-family: 'RobotoMono', monospace;
  color: #fff;
}

#app {
    width: 100vw;
    height:100vh;
    background: #4e54c8;  
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
    display: flex; 
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
}

</style>
