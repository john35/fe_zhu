<template>
  <div class="query">
    <div class="city-box">
      <span>河北省</span>
      <span>山西省</span>
      <span>辽宁省</span>
      <span>吉林省</span>
      <span>黑龙江省</span>
      <span>江苏省</span>
      <span>浙江省</span>
      <span>安徽省</span>
      <span>福建省</span>
      <span>江西省</span>
      <span>山东省</span>
      <span>台湾省</span>
      <span class="active">河南省</span>
      <span>湖北省</span>
      <span>湖南省</span>
      <span>广东省</span>
      <span>海南省</span>
      <span>四川省</span>
      <span>贵州省</span>
      <span>云南省</span>
      <span>陕西省</span>
      <span>甘肃省</span>
      <span>青海省</span>
    </div>
    <div id="query-main" :style="{width: '600px', height: '300px',margin:'40px auto'}"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      days: [],
      prices: []
    };
  },
  methods: {
    getFenShi() {
      this.$store
        .dispatch("pigFenShi_", {
          region: "河南省",
          pig_type: "外三元",
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
    margin: 40px auto;
    text-align: left;
    span {
      font-size: 15px;
      display: inline-block;
      width: 74px;
      cursor: pointer;
      &.active {
       color: #179df2;
    
      }
    }
  }
}
</style>