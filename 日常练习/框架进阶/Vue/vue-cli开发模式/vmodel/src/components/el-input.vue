<template>
  <div>
    <h3>el-input</h3>
    {{msg}}
    <input type="text" :value="msg" @input="input" />
  </div>
</template>

<script>
export default {
  model: {
    prop: "msg",
    event: "input",
  },
  props: ["msg"],
  name: "",
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    input($event) {
      this.$emit("input", $event.target.value);
    },
  },
};
</script>

<style lang='scss' scoped>
</style>
