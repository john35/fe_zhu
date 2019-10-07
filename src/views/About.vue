<template>
  <div class="about">
    <el-table
      :data="price"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column prop="region" label="省市" width="180"></el-table-column>
      <el-table-column prop="pig_type" label="类型"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="day" label="日期"></el-table-column>
    </el-table>
    <div class="pag">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-count="total_page"
        @current-change="page_change"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      price: [],
      total_page: 1
    };
  },
  mounted() {
    this.getData(1);
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // if (columnIndex === 0) {
      //   if (rowIndex % 2 === 0) {
      //     return {
      //       rowspan: 2,
      //       colspan: 1
      //     };
      //   } else {
      //     return {
      //       rowspan: 0,
      //       colspan: 0
      //     };
      //   }
      // }
    },
    getData(page) {
      this.$store.dispatch("pigPrice_", { page }).then(res => {
        let num = 0,
          price = [];
        res.data.list.forEach(item => {
          price[num] = {};
          price[num].region = item.region;
          price[num].price = item.price;
          price[num].pig_type = item.pig_type;
          price[num].day = item.day;
          num++;
        });

        this.price = price;

        this.total_page = res.data.total_page;
        console.log("pri", this.price);
        console.log(this.total_page);
      });
    },
    page_change(page) {
      this.getData(page);
    }
  }
};
</script>
<style lang="less" scoped>
.about {
  width: 1100px;
  margin: 0 auto;
  .pag {
    margin-top: 0.43rem;
  }
}
</style>
