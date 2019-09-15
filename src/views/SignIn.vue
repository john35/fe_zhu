<template>
  <div id="sign-in">我是登录</div>
</template>
<script>
export default {
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch("getData_", name).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="less" scoped>
</style>
      