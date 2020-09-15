<template>
  <div>
    el-input双向绑定的msg{{msg}}
    <!-- <el-input v-model="msg"></el-input> -->
    <!-- <el-input v-model="msg" :value="msg" @input="input"></el-input> -->
    <el-input v-model="msg" :value="msg" @input="input"></el-input>
    <button @click="msg =''">el清除msg</button>
  </div>
</template>

<script>
import ElInput from "./el-input";

export default {
  //   model: { prop: "msg", event: "input" },
  props: ["msg"],
  data() {
    return {
      //   msg: "22",
    };
  },
  components: {
    ElInput,
  },
  computed: {},
  watch: {},
  methods: {
    // input($event) {
    //   this.$emit("update:msg", $event.target.value);
    // },
    input(val) {
      this.$emit("update:msg", val);
    },
    // input(val) {
    //   this.$emit("input", val);
    // },
  },
};
</script>

<style lang='scss' scoped>
</style>
