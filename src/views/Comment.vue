<template>
  <div id="comment">
    <div class="top">
      <div class="all">全部帖子</div>
      <div class="start">
        <el-button>发起帖子</el-button>
      </div>
    </div>
    <div class="content clearfix">
      <div class="item" v-for="(item,index) in info" :key="index"> <router-link :to="'/postDetail?id='+index">{{item}}</router-link></div>
      <div class="page-wrap">
        <el-pagination layout="prev, pager, next" :total="info.length"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "comment",
  data() {
    return {
      info: [
        "帖子1",
        "帖子2",
        "帖子3",
        "帖子4",
        "帖子5",
        "帖子6",
        "帖子7",
        "帖子8",
        "帖子9",
        "帖子10",
        "帖子11"
      ]
    };
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
#comment {
  width: 1000px;
  margin: 20px auto;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .all {
      font-size: 18px;
    }
  }
  .content {
    .item {
      text-align: left;
      font-size: 16px;
      padding: 30px 19px;
      border-bottom: 1px solid #e6e7eb;
    }
    .page-wrap{
        margin-top: 20px;
        float: right;
    }
  }
}
</style>