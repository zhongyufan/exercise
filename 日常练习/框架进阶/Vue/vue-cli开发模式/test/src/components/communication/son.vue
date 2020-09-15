<template>
  <div class="app">
    <div class="basics">
      <h1>我是儿子/孙子</h1>
      <!-- {{$attrs.loading}} -->
      <button @click="change">点我获取baby</button>
      <baby class="baby" ref="top" :data="$attrs.loading"></baby>
      <!-- <baby class="baby"></baby> -->
    </div>
  </div>
</template>

<script>
import Baby from "@/components/communication/baby";

export default {
  mounted() {
    console.log("mounted了");
    this.change();
    console.log(this.$refs.top);
  },
  beforeUpdate() {
    this.change();
    this.$refs.top.loading = this.$attrs.loading;
  },
  data() {
    return {
      msg: this.$attrs.loading
    };
  },
  methods: {
    change(event) {
      this.$refs.top.loading = this.$attrs.loading;
      this.$emit("talk");
    }
  },
  components: {
    Baby
  }
  // beforeCreate() {
  //   console.log("son--beforeCreate");
  // },
  // created() {
  //   console.log("son--created");
  // },
  // beforeMount() {
  //   console.log("son--beforeMount");
  // },
  // mounted() {
  //   console.log("son--mounted");
  // },
  // beforeUpdate() {
  //   console.log("son--beforeUpdate");
  // },
  // updated() {
  //   this.$refs.top.loading = this.$attrs.loading;
  //   console.log("son--updated");
  // },
  // beforeDestroy() {
  //   console.log("son--beforeDestroy");
  // },
  // destroyed() {
  //   console.log("son--destroyed");
  // }
};
</script>

<style lang="scss" scoped>
@import url("../../scss/basics.scss");
.app {
  height: 100vh;
  .baby {
    height: 300px;
  }
}
</style>