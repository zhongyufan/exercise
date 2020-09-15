<template>
  <div class="hello">
    <div>
      <h1>自定义组件v-model</h1>
      {{msg}}
      <!-- <v-m-input></v-m-input> -->
      <!-- <v-m-input v-model="msg"></v-m-input> -->
      <v-m-input :msg.sync="msg"></v-m-input>
      <button @click="msg =''">清除msg</button>
    </div>
    <!-- <div>
      <h1>纯粹测试</h1>
      {{msg}}
      <input type="text" v-model="msg" />
      <button @click="msg =''">清除msg</button>
    </div>-->
  </div>
</template>

<script>
import VMInput from "./input";
export default {
  name: "HelloWorld",
  // model: {
  //   prop: "val",
  //   event: "input",
  // },
  // props: ["val"],
  components: {
    VMInput,
  },
  data() {
    return {
      msg: "123",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
