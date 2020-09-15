<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ more}}</h2>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  computed: {
    ...mapMutations(["getMoreMsg"]),
    msg() {
      return this.$store.state.msg;
    },
    more() {
      console.log(this.getMoreMsg);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
