<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="calculator">
        <Display :value="displayValue" @onclick="addDigit"/>
        <Button label="AC" triple @onclick="clearMemory"/>
        <Button label="/" operation @onclick="setOperation"/>
        <Button label="7" @onclick="addDigit"/>
        <Button label="8" @onclick="addDigit"/>
        <Button label="9" @onclick="addDigit"/>
        <Button label="*" operation @onclick="setOperation" />
        <Button label="4" @onclick="addDigit"/>
        <Button label="5" @onclick="addDigit"/>
        <Button label="6" @onclick="addDigit"/>
        <Button label="-" operation @onclick="setOperation" />
        <Button label="1" @onclick="addDigit"/>
        <Button label="2" @onclick="addDigit"/>
        <Button label="3" @onclick="addDigit"/>
        <Button label="+" operation @onclick="setOperation" />
        <Button label="." @onclick="addDigit"/>
        <Button label="0" double @onclick="addDigit"/>
        <Button label="=" operation @onclick="setOperation" />
    </div>
</template>

<script>

import Button from '../components/Button.vue';
import Display from '../components/Display.vue';

export default {
    data: function(){
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values:[0,0],
            current: 0
        }
    },
    methods: {

        clearMemory(){

            Object.assign(this.$data,this.$options.data());

        },

        setOperation(operacao){

            if(this.current === 0){

                this.operation = operacao;
                this.current = 1;
                this.clearDisplay = 1;

            } else {

                const equals = operacao === '=';
                const currentOperation = this.operation;

                try {

                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    );

                } catch(e){
                    this.$emit('onError',e);
                }

                this.values[1] = 0;
                this.displayValue = this.values[0];
                this.operation = equals ? null:operacao;
                this.current = equals ? 0:1;
                this.clearDisplay = !equals;

            } 

        },

        addDigit(n){
            
            if(n === '.' && this.displayValue.includes('.')){
                return;
            }

            const clearDisplay = this.displayValue === '0' ||
                this.clearDisplay;

            const currentValue = clearDisplay ? "" : this.displayValue;    

            const displayValue = currentValue + n;

            this.displayValue = displayValue;
            this.clearDisplay = false;
            this.values[this.current] = displayValue;

        }
    },
    components: { Button, Display }
}
</script>

<style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#calculator {
    z-index: 1;
    width: 300px;
    height: 350px;
    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: 0.8fr repeat(5,50px);
}

</style>