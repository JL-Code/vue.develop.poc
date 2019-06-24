<template>
  <div>
    参数测试：
    query:{{query}}
    <router-link to="/about?param1=22&param2=33">跳转about</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return { query: {} };
  },
  mounted() {
    this.query = this.$route.query;
  }
};
</script>

<style>
</style>
