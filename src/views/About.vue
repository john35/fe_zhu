<template>
  <div class="about">
    <div class="city-box">
      <div class="l">城市：</div>
      <div class="r" @click="cityFn">
        <span
          v-for="(item,index) in cities"
          :key="index"
          :class="city_active===item?'active':''"
        >{{item}}</span>
      </div>
    </div>
    <div class="type-box">
      <div class="l">分类：</div>
      <div class="r" @click="typeFn">
        <span
          v-for="(item,index) in types"
          :key="index"
          :class="type_active==item.value?'active':''"
          :data-value="item.value"
        >{{item.name}}</span>
      </div>
    </div>
    <el-table
      :data="price"
      :span-method="objectSpanMethod"
      border
      style="width: 1024px; margin: 40px auto 0"
    >
      <!-- <el-table-column prop="province" label="省市" width="180"></el-table-column> -->
      <el-table-column prop="city" label="市"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="unit" label="单位"></el-table-column>
      <el-table-column prop="day" label="日期"></el-table-column>
    </el-table>
    <div class="pag">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-count="total_page"
        :current-page.sync="currentPage1"
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
      total_page: 1,
      currentPage1:1,
      cities: [
        "河北省",
        "山西省",
        "辽宁省",
        "吉林省",
        "黑龙江省",
        "江苏省",
        "浙江省",
        "安徽省",
        "福建省",
        "江西省",
        "山东省",
        "台湾省",
        "河南省",
        "湖北省",
        "湖南省",
        "广东省",
        "海南省",
        "四川省",
        "贵州省",
        "云南省",
        "陕西省",
        "甘肃省",
        "青海省"
      ],
      city_active: "河南省",
      types: [
        { name: "生猪", value: 1 },
        { name: "猪肉", value: 2 },
        { name: "母猪", value: 3 },
        { name: "小猪", value: 4 },
        { name: "玉米", value: 5 },
        { name: "豆粕", value: 6 }
      ],
      type_active: 1
    };
  },
  mounted() {
    this.getData(1, 1, "河南省");
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
    getData(page, type, region) {
      //page:第几页；type:类型；region：省
      this.$store
        .dispatch("pigPrice_", { page, type, region, page_size: 10 })
        .then(res => {
          let num = 0,
            price = [];
          res.data.list.forEach(item => {
            price[num] = {};
            price[num].province = item.province;
            price[num].city = item.city;
            price[num].unit = item.unit;
            price[num].price = item.price;
            price[num].type = item.type;
            price[num].day = item.day;
            num++;
          });

          this.price = price;

          this.total_page = res.data.total_page;
          // console.log("pri", this.price);
          // console.log(this.total_page);
        });
    },
    page_change(page) {
      this.getData(page,this.type_active,this.city_active);
    },
    cityFn(e) {
      let target_ = e.target;
      if (target_.tagName === "SPAN") {
        this.currentPage1=1;
        this.city_active = target_.innerText;
        this.getData(1, this.type_active, target_.innerText);
      }
    },
    typeFn(e) {
      let target_ = e.target;
      if (target_.tagName === "SPAN") {
        this.currentPage1=1;
        let val = target_.dataset.value;
        this.type_active = val;
        this.getData(1, val, this.city_active);
      }
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
  .city-box {
    width: 1024px;
    margin: 40px auto 0;
    text-align: left;
    display: flex;
    align-items: flex-start;
    font-size: 15px;
    .l {
      width: 68px;
      font-weight: bold;
    }
    .r {
      flex: 1;
      span {
        display: inline-block;
        width: 74px;
        cursor: pointer;
        &.active {
          color: #179df2;
        }
      }
    }
  }
  .type-box {
    width: 1024px;
    margin: 20px auto 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 15px;
    text-align: left;
    .l {
      width: 68px;
      font-weight: bold;
      text-align: left;
    }
    .r {
      flex: 1;
      span {
        display: inline-block;
        width: 74px;
        cursor: pointer;
        &.active {
          color: #179df2;
        }
      }
    }
  }
}
</style>
