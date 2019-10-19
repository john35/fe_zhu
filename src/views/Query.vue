<template>
  <div class="query">
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
    <div id="query-main" :style="{width: '1200px', height: '500px',margin:'40px auto'}"></div>
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
      types: [
        { name: "生猪", value: 1 },
        { name: "玉米", value: 3 },
        { name: "豆粕", value: 4 }
      ],
      type_active: 1
    };
  },
  methods: {
    getFenShi() {
      this.$store
        .dispatch("pigFenShi_", {
          region: this.city_active,
          // pig_type: "外三元",
          type: this.type_active,
          day_type: "年"
        })
        .then(res => {
          console.log(res);
          // this.days = res.data[0].days;
          // this.prices = res.data[0].prices;
          let myChart = this.$echarts.init(
            document.getElementById("query-main")
          );
          let title = res.data[0].region + res.data[0].name + "价格";
          let upColor = "#ec0000";
          let upBorderColor = "#8A0000";
          let downColor = "#00da3c";
          let downBorderColor = "#008F28";
          let legendData = [];
          let seriesData = [];
          for (let i = 0; i < res.data.length; i++) {
            legendData.push(res.data[i].type);
            seriesData.push({
              name: res.data[i].type,
              type: "line",
              data: res.data[i].prices,
              smooth: true,
              lineStyle: {
                normal: { opacity: 0.5 }
              }
            });
          }
          // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)

          let option = {
            title: {
              text: title,
              left: 0
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross"
              }
            },
            legend: {
              data: legendData
            },
            grid: {
              left: "10%",
              right: "10%",
              bottom: "15%"
            },
            xAxis: {
              type: "category",
              data: res.data[0].days,
              scale: true,
              boundaryGap: false,
              axisLine: { onZero: false },
              splitLine: { show: false },
              splitNumber: 20,
              min: "dataMin",
              max: "dataMax"
            },
            yAxis: {
              scale: true,
              splitArea: {
                show: true
              }
            },
            dataZoom: [
              {
                type: "inside",
                start: 50,
                end: 100
              },
              {
                show: true,
                type: "slider",
                y: "90%",
                start: 50,
                end: 100
              }
            ],
            series: seriesData
          };
          myChart.setOption(option, true);
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
        let val = target_.dataset.value;
        console.log(val);
        this.type_active = val;
        this.getFenShi();
      }
    }
  },
  mounted() {
    this.getFenShi();
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
        &.active {
          color: #179df2;
        }
      }
    }
  }
}
</style>