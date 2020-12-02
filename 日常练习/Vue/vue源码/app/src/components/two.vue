<template>
  <div class="box">
    我是第二层
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "",
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
  width: 700px;
  height: 700px;
  border: 1px solid;
  border-left: none;
}
</style>
