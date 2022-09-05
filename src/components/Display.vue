<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="display">
        {{ value }}
    </div>
</template>

<script>
export default {
    props: ['value']
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.display {
    display: flex;
    background-color: rgba(0, 0, 0, 0.646);
    color: white;
    padding: 10px;
    grid-column: span 4;
    justify-content: right;
    align-items: center;
    overflow: hidden;
    outline: 2px solid black;
    font-size: 1.6em;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

</style>