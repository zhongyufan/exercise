<template>
  <div class="app">
    <div class="basics">
      <h1>我是儿子/父亲</h1>
      <son v-bind="$attrs" v-on="$listeners"></son>
    </div>
  </div>
</template>

<script>
import Son from "@/components/communication/son";
export default {
  components: {
    Son
  },
  beforeCreate() {
    console.log("father--beforeCreate");
  },
  created() {
    console.log("father--created");
  },
  beforeMount() {
    console.log("father--beforeMount");
  },
  mounted() {
    console.log("father--mounted");
  },
  beforeUpdate() {
    console.log("father--beforeUpdate");
  },
  updated() {
    console.log("father--updated");
  },
  beforeDestroy() {
    console.log("father--beforeDestroy");
  },
  destroyed() {
    console.log("father--destroyed");
  }
};
</script>

<style lang="scss" scoped>
@import url("../../scss/basics.scss");
.app {
  height: 100vh;
}
</style>