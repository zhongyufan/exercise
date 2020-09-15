<template>
  <div>
    <slot></slot>
    <ul @click="$emit('change')">
      <li v-for="(item,index) in arr" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["hahaha", "xixixi", "lalala"]
    };
  }
};
</script>

<style lang="scss" scoped>
ul {
  width: 400px;
  height: auto;
  border: 1px solid red;
  border-radius: 10px;
}
</style>