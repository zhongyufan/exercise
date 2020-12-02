<template>
  <div class="box">
    我是第三层
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
  width: 600px;
  height: 600px;
  border: 1px solid;
  border-left: none;
}
</style>

