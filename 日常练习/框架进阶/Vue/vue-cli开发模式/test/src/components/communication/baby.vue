<template>
  <div class="app">
    <div class="basics">
      <h1>我是baby</h1>
      {{loading}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: "我是loading"
    };
  },
  beforeCreate() {
    console.log("baby--beforeCreate");
  },
  created() {
    console.log("baby--created");
  },
  beforeMount() {
    console.log("baby--beforeMount");
  },
  mounted() {
    console.log("baby--mounted");
  },
  beforeUpdate() {
    console.log("baby--beforeUpdate");
  },
  updated() {
    console.log("baby--updated");
  },
  beforeDestroy() {
    console.log("baby--beforeDestroy");
  },
  destroyed() {
    console.log("baby--destroyed");
  }
};
</script>

<style lang="scss" scoped>
@import url("../../scss/basics.scss");
.app {
  height: 100vh;
}
</style>