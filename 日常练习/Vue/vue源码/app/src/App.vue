<template>
  <div id="app">
    <one :data="info">
      <two>
        <three>
          <four></four>
        </three>
      </two>
    </one>
  </div>
</template>

<script>
import one from "./components/one";
import two from "./components/two";
import three from "./components/three";
import four from "./components/four";
export default {
  name: "App",
  components: {
    one,
    two,
    three,
    four,
  },
  data() {
    return {
      info: {
        name: "zyf",
        age: 18,
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
