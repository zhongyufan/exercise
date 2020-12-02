<template>
  <div class="box">
    我是第一层
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "",
  provide() {
    return {
      info: this.$attrs.data,
    };
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped>
.box {
  width: 800px;
  height: 800px;
  border: 1px solid;
}
</style>
