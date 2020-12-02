<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>show:{{ show }}</h1>
    <button @click="btn">+'1'</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  render: function (createElement, context) {
    return createElement("div", {
      style: {
        width: "100px",
        height: "100px",
        border: "1px solid red",
        background: "red",
      },
    });
  },
  props: {
    msg: String,
  },
  computed: {
    show: {
      get() {
        return this.msg;
      },
      set(val) {
        this.$emit("update:msg", val);
      },
    },
  },
  methods: {
    btn() {
      this.show += "1";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
