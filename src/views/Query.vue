<template>
  <div class="query">
    <!-- <div class="city-box">
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
          :class="type_active===item?'active':''"
        >{{item}}</span>
      </div>
    </div>
    <div id="query-main" :style="{width: '600px', height: '300px',margin:'40px auto'}"></div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      days: [],
      prices: [],
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
      types: ["生猪", "猪肉", "母猪", "玉米", "豆粕"],
      type_active: "生猪"
    };
  },
  methods: {
    getFenShi() {
      this.$store
        .dispatch("pigFenShi_", {
          region: this.city_active,
          // pig_type: "外三元",
          type:this.type_active,
          day_type: "年"
        })
        .then(res => {
          console.log(res);
          this.days = res.data.days;
          this.prices = res.data.prices;
          let myChart = this.$echarts.init(
            document.getElementById("query-main")
          );
          let option = {
            xAxis: {
              type: "category",
              data: this.days
            },
            yAxis: {
              type: "value"
            },
            series: [
              {
                data: this.prices,
                type: "line",
                smooth: true
              }
            ]
          };
          myChart.setOption(option);
        });
    },
    cityFn(e) {
      let target_ = e.target;
      if (target_.tagName === "SPAN") {
        this.city_active = target_.innerText;
        this.getFenShi();
      }
    },
    typeFn(e) {
      let target_ = e.target;
      if (target_.tagName === "SPAN") {
        this.type_active = target_.innerText;
        this.getFenShi();
      }
    }
  },
  mounted() {
   // this.getFenShi();
  }
};
</script>
<style lang="less" scoped>
.query {
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
        &.active{
          color: #179df2;
        }
      }
    }
  }
}
</style>