<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="content">
      <List @change="onchange">
        <h1 class="slot" @click="slot">插槽</h1>
        {{reverse}} |
        {{msg}}
        <button @click="test">修改msg</button>
      </List>
    </div>-->
    <Communit :loading="loading"></Communit>
<!--    <button @click="loading=!loading">点击我修改{{loading}}</button>-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import List from "@/components/list.vue";
import Communit from "@/components/communication/index.vue";

export default {
  name: "Home",
  data() {
    return {
      msg: "123",
      loading: true
    };
  },
  computed: {
    reverse: {
      get: function(param) {
        return this.msg
          .split("")
          .reverse()
          .join("");
      },
      set: function(param) {
        this.msg = "999";
      }
    }
  },
  watch: {
    msg(val) {
      alert(val);
    }
  },
  components: {
    HelloWorld,
    List,
    Communit
  },
  methods: {
    test() {
      this.msg = "1234";
    },
    slot() {
      alert("fuck");
    },
    onchange() {
      alert("我是你爸爸👨");
    },
    test() {
      alert("点我干啥？");
    }
  }
  // beforeCreate() {
  //   console.log("----beforeCreate----");
  //   console.log("访问data：" + this.msg);
  //   console.log("访问挂载点：" + this.$el);
  //   console.log("访问根节点：" + this.$root);

  //   console.log(">>>>>>>>");
  // },
  // created() {
  //   console.log("----created----");
  //   console.log("访问data：" + this.msg);
  //   console.log("访问挂载点：" + this.$el);
  //   console.log("访问根节点：" + this.$root);

  //   console.log(">>>>>>>>");
  // },
  // beforeMount() {
  //   console.log("----beforeMount----");
  //   console.log("访问挂载点：" + this.$el);
  //   console.log("访问根节点：" + this.$root);
  //   console.log(">>>>>>>>");
  // },
  // mounted() {
  //   console.log("----mounted----");
  //   console.log("访问挂载点：" + this.$el);
  //   console.log("访问根节点：" + this.$root);
  //   console.log(">>>>>>>>");
  // },
  // beforeUpdate() {
  //   console.log("----beforeUpdate----");
  //   console.log(">>>>>>>>");
  // },
  // updated() {
  //   console.log("----updated----");
  //   console.log(">>>>>>>>");
  // },
  // beforeDestroy() {
  //   console.log("----beforeDestroy----");
  //   console.log(">>>>>>>>");
  // },
  // destroyed() {
  //   console.log("----destroyed----");
  //   console.log(">>>>>>>>");
  // }
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.slot {
  color: orange;
}
button {
  position: absolute;
  top: 0;
}
</style>
