<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button class="button" 
          :class="{double,triple,operation}"
          @click="$emit('onclick',label)">
        {{ label }}
  </button>
</template>

<script>
export default {
    props: {
        label:{},
        double:{type: Boolean},
        triple:{type: Boolean},
        operation:{type: Boolean}
    }
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg-button: #f0f0f0;
    --border-button: 2px solid black;
}

.button {
    font-size: 1.6em;
    border: none;
    background-color: var(--bg-button);
    outline: var(--border-button);
}

.button.double{
    grid-column: span 2;
}

.button.triple{
    grid-column: span 3;
}

.button.operation{
    background-color: hsl(24, 95%, 59%);
    color: white;
}

.button:nth-child(16){
    border-bottom-left-radius: 5px;
}

.button:last-child{
    border-bottom-right-radius: 5px;
}

.button:active {
    background-color: #c7c7c7;
}

.button.operation:active {
    background-color: hsl(24, 66%, 46%);
}

</style>