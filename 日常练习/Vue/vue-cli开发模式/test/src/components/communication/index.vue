<template>
  <div class="app">
    <!--    组件通讯测试-->
    <!--    <div class="basics">-->
    <!--      <h1>我是祖先</h1>-->
    <!--      <father v-bind="$attrs" v-on="$listeners"></father>-->
    <!--    </div>-->
    <!--    <div>computedNum：{{tellNum}}</div>-->
    <!--    <div>watchNum：{{watchNum}}</div>-->
    <!--      <div>methods：{{getNum()}}</div>-->
    <!--      <button @click="test($event)">按钮</button>-->
    <!--    <div>{{newNum}}</div>-->
    <!--    组件深入-->
    <!-- <h1>组件深入</h1>
    {{age}}-->
    <!--    <com_son :post="post" @tell="age+=$event"></com_son>-->
    <!-- <com_son v-bind="$attrs">
          <h1>测试插槽{{age}}</h1>
    </com_son>-->
    <input type="text" :value="value" />
  </div>
</template>

<script>
import Father from "@/components/communication/father";
import com_son from "@/components/communication/com_son";
export default {
  data() {
    return {
      post: {
        age: 18,
        name: "zhongyufan",
        title: "我是子组件",
      },
      age: 17,
      msg: "我是msg",
      num: 123,
      watchNum: 123,
      newNum: 1,
      value: "123",
    };
  },
  methods: {
    tell() {
      alert("我是父亲触发的");
    },
    test(event) {
      console.log(event);
      this.num++;
    },
    getNum() {
      console.log("我变了");
      return this.newNum;
    },
  },
  watch: {
    num: function (val) {
      this.watchNum = val;
      console.log("触发watch");
    },
  },
  computed: {
    tellNum() {
      console.log("触发computed");
      return this.num;
    },
  },
  components: {
    Father,
    com_son,
  },
  // beforeCreate() {
  //   console.log("祖先--beforeCreate");
  // },
  // created() {
  //   console.log("祖先--created");
  // },
  // beforeMount() {
  //   console.log("祖先--beforeMount");
  // },
  // mounted() {
  //   console.log("祖先--mounted");
  // },
  // beforeUpdate() {
  //   console.log("祖先--beforeUpdate");
  // },
  // updated() {
  //   console.log("祖先--updated");
  // },
  // beforeDestroy() {
  //   console.log("祖先--beforeDestroy");
  // },
  // destroyed() {
  //   console.log("祖先--destroyed");
  // }
};
</script>

<style lang="scss" scoped>
@import url("../../scss/basics.scss");
.app {
  height: 100vh;
}
</style>