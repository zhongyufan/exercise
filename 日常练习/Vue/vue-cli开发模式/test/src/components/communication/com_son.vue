<template>
    <div>
        <h1>我是组件一</h1>
        <h2>{{title}}</h2>
        大家好，我是{{name}}，今年我{{age}}
        <button @click="test">点我触发告诉你</button>
        <slot>submit</slot>
    </div>
</template>

<script>
    export default {
        name: "com_som.vue",
        props:['age','title','name'],
        data(){
            return{
                // age:18
            }
        },
        methods:{
            test(){
                alert('我是组件一，我是自己触发的');
                this.$emit('tell',this.age);
            }
        }
    }
</script>

<style scoped>

</style>