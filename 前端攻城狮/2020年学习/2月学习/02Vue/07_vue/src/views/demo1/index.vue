<template>
    <div>
        hello world
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        alert(this.$route.params.userId)
    }
}
</script>
