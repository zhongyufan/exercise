<template>
    <div>
        <p>{{msg}}</p>
        <button @click="change">change</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'123'
        }
    },
    methods:{
        change(){
            // 获取公共数据
            // this.msg = this.$store.state.count
            // 修改公共数据
            this.$store.dispatch('inc',10000);
            this.msg = this.$store.state.num;

        }
    }
}
</script>