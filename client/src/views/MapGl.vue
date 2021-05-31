<template>
  <div id="mapGlWraper">
    <div id="mapGl"></div>
  </div>
</template>

<script>
let echarts = require("echarts");
require("../assets/china-map/china");
export default {
  mounted() {
    this.drawChinaMap();
  },
  data() {
    return {
      dataValue: [
        { name: "乌鲁木齐", value: [87.68, 43.77] },
        { name: "西安", value: [108.95, 34.27] },
      ],
      option: {
        tooltip: {
          show: false,
        },
        geo: {
          map: "china",
          roam: false, // 一定要关闭拖拽
          zoom: 1.23,
          center: [105, 36], // 调整地图位置
          label: {
            normal: {
              show: true, //关闭省份名展示
              fontSize: "12",
              color: "rgba(0,0,0,1)",
            },
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              areaColor: "#2707e3",
              borderColor: "#1cdc17",
              borderWidth: 1, //设置外层边框
              shadowBlur: 5,
              shadowOffsetY: 8,
              shadowOffsetX: 0,
              shadowColor: "#133d18",
            },
            emphasis: {
              areaColor: "#bd8f35",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 5,
              borderWidth: 0,
              shadowColor: "rgba(104,83,22,0.5)",
            },
          },
        },
        series: [
          {
            name: "",
            type: "scatter", // 小圆圈
            coordinateSystem: "geo",
            data: this.dataValue,
            symbol: "circle",
            symbolSize: 8,
            hoverSymbolSize: 10,
            tooltip: {
              formatter(value) {
                return value.data.name;
              },
              show: true,
            },
            encode: {
              value: 2,
            },
            label: {
              formatter: "{b}",
              position: "right",
              show: false,
            },
            itemStyle: {
              color: "#0efacc",
            },
            emphasis: {
              label: {
                show: false,
              },
            },
          },
          {
            name: "Top 5",
            type: "effectScatter", // 波浪圆圈
            coordinateSystem: "geo",
            data: this.dataValue,
            symbolSize: 15,
            tooltip: {
              formatter(value) {
                return value.data.name;
              },
              show: true,
            },
            encode: {
              value: 2,
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
              color: "#0efacc",
              period: 9,
              scale: 5,
            },
            hoverAnimation: true,
            label: {
              formatter: "{b}",
              position: "right",
              show: true,
            },
            itemStyle: {
              color: "#0efacc",
              shadowBlur: 2,
              shadowColor: "#333",
            },
            zlevel: 1,
          },
        ],
      },
    };
  },
  methods: {
    drawChinaMap() {
      // 获取要渲染的元素
      let myCharts = echarts.init(document.querySelector("#mapGl"));
      // 配置项
      let option = {
        tooltip: {
          show: false,
        },
        geo: {
          map: "china",
          roam: false, // 一定要关闭拖拽
          zoom: 1.23,
          center: [105, 36], // 调整地图位置
          label: {
            normal: {
              show: true, //关闭省份名展示
              fontSize: "12",
              color: "rgba(0,0,0,1)",
            },
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              areaColor: "#2707e3",
              borderColor: "#1cdc17",
              borderWidth: 1, //设置外层边框
              shadowBlur: 5,
              shadowOffsetY: 8,
              shadowOffsetX: 0,
              shadowColor: "#133d18",
            },
            emphasis: {
              areaColor: "#bd8f35",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 5,
              borderWidth: 0,
              shadowColor: "rgba(104,83,22,0.5)",
            },
          },
        },
      };
      myCharts.setOption(option);
    },
  },
  beforeRouteLeave(to, from, next) {
    this.$parent.closeNav();
    next();
  },
};
</script>

<style lang="less" scoped>
#mapGlWraper {
  width: 100%;
  height: 100vh;
  #mapGl {
    width: 100%;
    height: 100%;
  }
}
</style>