<template>
    <div>
        <div>Router</div>
        <router-link to="../demo1">demo1</router-link> |
        <router-link :to="{name:'demo1',params:{userId:456}}">:to - demo1</router-link> |
        <!-- <router-link :to="{name:'demo1',params:{userId:456},query:{plan:'wocao'}}">:query - demo1</router-link> |
        <button @click="toUrl">跳转</button> -->
    </div>
</template>
// <script>
// export default {
//     data(){
//         return
//     },
//     methods:{
//         toUrl(){
//             this.$router.push({path:'/about'})
//             this.$router.push({name:'demo1',params:{userId:456})
//             this.$router.push({name:'demo1',params:{userId:456},query:{plan:'wocao'})
//         }
//     }
// }
// </script>