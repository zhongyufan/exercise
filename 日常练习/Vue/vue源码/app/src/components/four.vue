<template>
  <div class="box">
    我是第四层
    <br />
    来自第一层的{{ info }}
    <br />
    <button @click="call">呼叫第一层</button>
  </div>
</template>

<script>
export default {
  name: "",
  inject: ["info"],
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    call() {
      console.log("呼叫首层");
      this.$parent.$emit("accept", { msg: "你好" });
    },
  },
};
</script>

<style scoped>
.box {
  width: 500px;
  height: 500px;
  border: 1px solid;
  border-left: none;
}
</style>
