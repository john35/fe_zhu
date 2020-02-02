<template>
  <div id="postDetail">我是帖子详情id为{{id}}</div>
</template>
<script>
export default {
  name: "postDetail",
  data() {
    return {
      id: this.$route.query.id||""
    };
  },
  mounted() {

  }
};
</script>
<style lang="less" scoped>
#postDetail {
}
</style>