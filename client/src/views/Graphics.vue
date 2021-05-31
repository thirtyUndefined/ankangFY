<template>
  <div id="graphics">
    <div class="graphics-wrapper">
      <div class="left-wrapper">
        <div class="left-content">
          <h4><i class="el-icon-s-data"></i> 安康市非物质文化遗产统计</h4>
          <img src="../assets/img/arrow_down.png" alt="" @click="scrollDown" />
        </div>
      </div>
      <div class="right-wrapper">
        <div class="right-content">
          <h6>清单</h6>
          <p>安康市非物质文化遗产代表性项目名录</p>
          <p>安康市非物质文化遗产代表性项目代表性传承人</p>
        </div>
      </div>
    </div>
    <div class="count-province">
      <div class="province-title">
        <h6>安康市各地非物质文化遗产占比统计</h6>
        <p>对保护对象予以确认，以便集中有限资源</p>
      </div>
      <div id="province"></div>
    </div>
    <div class="count-province marginTop">
      <div class="province-title">
        <h6>安康市各地各非物质文化项目数量统计及对比</h6>
        <p>对保护对象予以确认，以便集中有限资源</p>
      </div>
      <div id="provinceCount"></div>
    </div>
    <div class="count-province marginTop">
      <div class="province-title">
        <h6>安康市非物质文化遗产近年数量增长情况</h6>
        <p>对保护对象予以确认，以便集中有限资源</p>
      </div>
      <div id="ankangCount"></div>
    </div>
    <div class="count-countrl marginTop">
      <div class="province-title">
        <h6>安康市非物质文化遗产代表性项目名录</h6>
        <p class="content-P">
          建立非物质文化遗产代表性项目名录，对保护对象予以确认，以便集中有限资源，对体现中华民族优秀传统文化，具有历史、文学、艺术、科学价值的非物质文化遗产项目进行重点保护，是非物质文化遗产保护的重要基础性工作之一。联合国教科文组织《保护非物质文化遗产公约》（以下简称《公约》）要求“各缔约国应根据自己的国情”拟订非物质文化遗产清单。建立国家级非物质文化遗产名录，是我国履行《公约》缔约国义务的必要举措。《中华人民共和国非物质文化遗产法》明确规定：“国家对非物质文化遗产采取认定、记录、建档等措施予以保存，对体现中华民族优秀传统文化，具有历史、文学、艺术、科学价值的非物质文化遗产采取传承、传播等措施予以保护。”“国务院建立国家级非物质文化遗产代表性项目名录，将体现中华民族优秀传统文化，具有重大历史、文学、艺术、科学价值的非物质文化遗产项目列入名录予以保护。
          国家级名录将非物质文化遗产分为十大门类，其中五个门类的名称在2008年有所调整，并沿用至今。十大门类分别为：民间文学，传统音乐，传统舞蹈，传统戏剧，曲艺，传统体育、游艺与杂技，传统美术，传统技艺，传统医药，民俗。每个代表性项目都有一个专属的项目编号。编号中的罗马数字代表所属门类，如传统音乐类国家级项目“侗族大歌”的项目编号为“Ⅱ-28”。
        </p>
      </div>
      <div id="countrl-count">
        <el-table
          :data="
            tableData.filter(
              (data) =>
                !search ||
                data.name.toLowerCase().includes(search.toLowerCase())
            )
          "
          style="width: 100%"
        >
          <el-table-column label="序号" prop="id"> </el-table-column>
          <el-table-column label="名称" prop="name"> </el-table-column>
          <el-table-column label="时间" prop="date"> </el-table-column>
          <el-table-column label="项目类型" prop="type"> </el-table-column>
          <el-table-column label="申报单位" prop="report"> </el-table-column>
          <el-table-column label="保护单位" prop="pretect"> </el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                :ref="scope"
                placeholder="输入关键字搜索"
              />
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
// "echarts": "^5.0.2", 不支持import 引入
const echarts = require("echarts");
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: "安康童谣",
          type: "民间文学",
          date: "2012-05-02",
          report: "汉滨区文化馆",
          pretect: "安康市汉滨区",
        },
        {
          id: 2,
          name: "香溪洞传说",
          type: "民间文学",
          date: "2018-07-02",
          report: "汉滨区文化馆",
          pretect: "安康市汉滨区",
        },
        {
          id: 3,
          name: "红军老祖传传说",
          type: "民间文学",
          date: "2016-09-23",
          report: "旬阳县文化馆",
          pretect: "安康市旬阳县",
        },
        {
          id: 4,
          name: "紫阳风物传说",
          type: "民间文学",
          date: "2006-05-02",
          report: "紫阳县文化馆",
          pretect: "安康市紫阳县",
        },
        {
          id: 5,
          name: "古盐道上的文化遗存",
          type: "民间文学",
          date: "2018-05-02",
          report: "镇坪县文化馆",
          pretect: "安康市镇坪县",
        },

        {
          id: 6,
          name: "月儿潭绿松石传说",
          type: "民间文化学",
          date: "2010-05-02",
          report: "白河县文化馆",
          pretect: "安康市白河县",
        },
        {
          id: 7,
          name: "唐老爷的传说",
          type: "民间文学",
          date: "2011-05-02",
          report: "汉阴县文化馆",
          pretect: "安康市汉阴县",
        },
        {
          id: 8,
          name: "南宫山肉身传说",
          type: "民间文学",
          date: "2019-05-02",
          report: "岚皋县文化馆",
          pretect: "安康市岚皋县",
        },
        {
          id: 9,
          name: "安康“七夕”传说",
          type: "民间文学",
          date: "2016-06-02",
          report: "汉滨区文化馆",
          pretect: "安康市汉滨区",
        },
        {
          id: 10,
          name: "汉滨金州八景故事传说",
          type: "民间文学",
          date: "2015-05-02",
          report: "汉滨区文化馆",
          pretect: "安康市汉滨区",
        },
        {
          id: 11,
          name: "鸡心岭传说",
          type: "民间文学",
          date: "2017-05-02",
          report: "镇坪县文化馆",
          pretect: "安康市镇坪县",
        },
        {
          id: 12,
          name: "宦姑与贡茶的传说",
          type: "民间文学",
          date: "2006-05-02",
          report: "紫阳县文化馆",
          pretect: "安康市紫阳县",
        },
        {
          id: 13,
          name: "镇坪五句子歌",
          type: "民间文学",
          date: "2011-07-02",
          report: "镇坪县文化馆",
          pretect: "安康市镇坪县",
        },

        {
          id: 14,
          name: "汉阴短管",
          type: "民间文学",
          date: "2018-05-02",
          report: "汉阴县文化馆",
          pretect: "安康市汉阴县",
        },
        {
          id: 15,
          name: "二郎庙传说",
          type: "民间文学",
          date: "2016-05-02",
          report: "石泉县文化馆",
          pretect: "安康市石泉县",
        },
        {
          id: 16,
          name: "关门石传说",
          type: "民间文学",
          date: "2013-05-02",
          report: "石泉县文化馆",
          pretect: "安康市石泉县",
        },
        {
          id: 17,
          name: "平利民间传说",
          type: "民间文学",
          date: "2016-08-22",
          report: "平利县文化馆",
          pretect: "安康市平利县",
        },
        {
          id: 18,
          name: "汉滨鼓吹乐",
          type: "传统音乐",
          date: "2017-08-02",
          report: "汉滨区文化馆",
          pretect: "安康市汉滨区",
        },
        {
          id: 19,
          name: "汉滨孝歌",
          type: "传统音乐",
          date: "2019-08-22",
          report: "汉滨区文化馆",
          pretect: "安康市汉滨区",
        },
        {
          id: 20,
          name: "旬阳大太司",
          type: "传统音乐",
          date: "2013-09-09",
          report: "旬阳县文化馆",
          pretect: "安康市旬阳县",
        },
        {
          id: 21,
          name: "平利女娲山唢呐曲牌",
          type: "传统音乐",
          date: "2017-08-23",
          report: "平利县文化馆",
          pretect: "安康市平利县",
        },
        {
          id: 22,
          name: "平利民歌",
          type: "传统音乐",
          date: "2018-08-23",
          report: "平利县文化馆",
          pretect: "安康市平利县",
        },
        {
          id: 23,
          name: "晓道竹马",
          type: "传统音乐",
          date: "2017-05-02",
          report: "岚皋县文化馆",
          pretect: "安康市岚皋县",
        },
        {
          id: 24,
          name: "平利民间舞蹈",
          type: "传统舞蹈",
          date: "2017-08-22",
          report: "平利县文化馆",
          pretect: "安康市平利县",
        },
        {
          id: 25,
          name: "百合彩莲船",
          type: "传统舞蹈",
          date: "2010-05-02",
          report: "白河县文化馆",
          pretect: "安康市白河县",
        },
        {
          id: 26,
          name: "白河鹬蚌舞",
          type: "传统舞蹈",
          date: "2017-08-02",
          report: "白河县文化馆",
          pretect: "安康市白河县",
        },
        {
          id: 27,
          name: "旬阳板凳龙",
          type: "传统舞蹈",
          date: "2013-09-09",
          report: "旬阳县文化馆",
          pretect: "安康市旬阳县",
        },
        {
          id: 28,
          name: "旬阳道教祭祀舞蹈",
          type: "传统舞蹈",
          date: "2017-09-09",
          report: "旬阳县文化馆",
          pretect: "安康市旬阳县",
        },
        {
          id: 29,
          name: "旬阳地箩舞",
          type: "传统舞蹈",
          date: "2013-09-09",
          report: "旬阳县文化馆",
          pretect: "安康市旬阳县",
        },
        {
          id: 30,
          name: "平利民间书画",
          type: "传统美术",
          date: "2017-08-22",
          report: "平利县文化馆",
          pretect: "安康市平利县",
        },
        {
          id: 31,
          name: "平利民间剪纸",
          type: "传统美术",
          date: "2018-08-29",
          report: "平利县文化馆",
          pretect: "安康市平利县",
        },
        {
          id: 32,
          name: "紫阳板石雕刻技艺",
          type: "传统美术",
          date: "2017-08-22",
          report: "紫阳县文化馆",
          pretect: "安康市紫阳县",
        },
         {
          id: 33,
          name: "十字挑花绣",
          type: "传统美术",
          date: "2014-09-02",
          report: "安康市群艺馆",
          pretect: "安康市汉滨区",
        },
         {
          id: 36,
          name: "汉滨轧纸技艺",
          type: "传统技艺",
          date: "2017-08-22",
          report: "汉滨区文化馆",
          pretect: "安康市汉滨区",
        },
         {
          id: 37,
          name: "汉滨泥雕技艺",
          type: "传统技艺",
          date: "2019-08-22",
          report: "汉滨区文化馆",
          pretect: "安康市汉滨区",
        },
         {
          id: 38,
          name: "汉滨木雕技艺",
          type: "传统技艺",
          date: "2017-04-12",
          report: "汉滨区文化馆",
          pretect: "安康市汉滨区",
        },
         {
          id: 39,
          name: "安康土漆技艺",
          type: "传统技艺",
          date: "2018-08-22",
          report: "汉滨区文化馆",
          pretect: "安康市汉滨区",
        },
         {
          id: 40,
          name: "汉滨脸谱制作技艺",
          type: "传统技艺",
          date: "2017-08-22",
          report: "汉滨区文化馆",
          pretect: "安康市汉滨区",
        },
         {
          id: 41,
          name: "汉滨竹编技艺",
          type: "传统技艺",
          date: "2019-08-22",
          report: "汉滨区文化馆",
          pretect: "安康市汉滨区",
        },
      ],
      search: "",
    };
  },
  mounted() {
    // console.log(echarts);
    this.echartsProvince();
    this.provinceCount();
    this.ankangCount();
    document.addEventListener("scroll", this.Scroll, true);
  },
  methods: {
    // 占比统计图扇形图
    echartsProvince() {
      echarts.init(document.getElementById("province")).setOption({
        title: {
          text: "安康市各地数量占比图",
          subtext: "数据来源于陕西省非物质文化遗产网（不含国家级和省级）",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "安康市各地",
            type: "pie",
            radius: [40, 230],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 5,
            },
            data: [
              { value: 78, name: "石泉县" },
              { value: 47, name: "汉滨区" },
              { value: 40, name: "旬阳县" },
              { value: 13, name: "紫阳县" },
              { value: 10, name: "平利县" },
              { value: 10, name: "白河县" },
              { value: 10, name: "汉阴县" },
              { value: 7, name: "镇坪县" },
              { value: 3, name: "岚皋县" },
              { value: 3, name: "宁陕县" },
            ],
          },
        ],
      });
    },
    // 数量对比柱形图
    provinceCount() {
      echarts.init(document.getElementById("provinceCount")).setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {
          data: [
            "民间文学",
            "传统音乐",
            "传统舞蹈",
            "传统戏剧",
            "曲艺",
            "传统体育与技艺",
            "传统美术",
            "传统技艺",
            "传统医药",
            "民俗",
          ],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          data: [
            "汉滨区",
            "旬阳县",
            "紫阳县",
            "白河县",
            "平利县",
            "岚皋县",
            "镇坪县",
            "汉阴县",
            "石泉县",
            "宁陕县",
          ],
        },
        series: [
          {
            name: "民间文学",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [17, 4, 3, 1, 2, 1, 3, 2, 13, 0],
          },
          {
            name: "传统音乐",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [4, 8, 1, 0, 2, 1, 1, 0, 11, 1],
          },
          {
            name: "传统舞蹈",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [3, 12, 2, 0, 1, 0, 0, 1, 4, 1],
          },
          {
            name: "传统戏剧",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [2, 3, 0, 1, 0, 0, 0, 1, 5, 0],
          },
          {
            name: "曲艺",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [0, 2, 2, 0, 0, 0, 0, 0, 3, 0],
          },
          {
            name: "传统体育与技艺",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [0, 1, 0, 0, 0, 0, 0, 0, 5, 0],
          },
          {
            name: "传统美术",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [3, 1, 3, 0, 2, 0, 0, 1, 4, 0],
          },
          {
            name: "传统技艺",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [18, 6, 2, 6, 2, 1, 2, 5, 24, 1],
          },
          {
            name: "传统医药",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "民俗",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [0, 2, 0, 1, 1, 0, 0, 0, 9, 0],
          },
        ],
      });
    },
    // 数量涨幅曲线图
    ankangCount() {
      echarts.init(document.getElementById("ankangCount")).setOption({
        xAxis: {
          type: "category",
          data: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 155, 155, 160, 180, 200, 230],
            type: "line",
            smooth: true,
          },
        ],
      });
    },
    // 名录统计列表
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },

    // down 点击事件
    /**
     *   有问题
     */
    scrollDown() {
      const scrollTop = document.body.offsetHeight;
      console.log(scrollTop);
      // window.scrollTo = scrollTop;
      document.documentElement.scrollTo = 100;
      // console.log(document.documentElement.scrollTo)
    },
  },
  components: {
    Footer,
  },
  beforeRouteLeave(to, from, next) {
    this.$parent.closeNav();
    next();
  },
};
</script>
<style lang="less" scoped>
#graphics {
  width: 100%;
  height: 100vh;
  .graphics-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .left-wrapper {
      width: 50%;
      height: 100%;
      min-width: 350px;
      background: url("../assets/img/qingdan.jpg");
      .left-content {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.637);
        color: #ffff;
        h4 {
          position: relative;
          width: 60%;
          top: 30%;
          left: 30%;
          font-size: 2em;
        }
        img {
          position: relative;
          top: 80%;
          left: 40%;
          width: 10%;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          &:hover {
            transform: scale(1.5);
          }
        }
      }
    }
    .right-wrapper {
      width: 50%;
      height: 100%;
      min-width: 700px;
      background: url("../assets/img/img88.jpg");
      background-size: cover;
      .right-content {
        width: 100%;
        height: 100%;
        color: rgba(243, 243, 243, 0.452);
        position: relative;
        h6 {
          font-size: 1.5em;
          width: 1.5em;
          color: #ffff;
          position: absolute;
          top: 40%;
          left: 5%;
          text-align: center;
          padding: 20px;
          &::before {
            content: "";
            display: block;
            width: 1.5em;
            height: 1em;
            background: url("../assets/img/png17.png") no-repeat;
          }
          &::after {
            content: "";
            display: block;
            width: 1.5em;
            height: 1em;
            background: url("../assets/img/png17.png") no-repeat;
            background-position: bottom right;
            // background-size: cover;
          }
        }
        p {
          width: 1em;
          position: absolute;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          &:first-of-type {
            left: 20%;
            top: 20%;
          }
          &:last-of-type {
            left: 40%;
            top: 30%;
          }
          &:hover {
            color: #ffff;
          }
        }
      }
    }
  }
  .count-province {
    width: 100%;
    height: 100%;
    min-height: 800px;
    min-width: 1200px;
    .province-title {
      padding: 50px 100px 0 100px;
      padding-bottom: 20px;
      h6 {
        width: 100%;
        font-size: 1.5em;
        text-align: center;
        padding: 10px;
        letter-spacing: 5px;
      }
      p {
        text-align: center;
        color: #888888;
      }
    }
    #province {
      height: 80%;
      padding: 0 100px 50px 100px;
    }
    #provinceCount {
      height: 80%;
      padding: 0 100px 50px 100px;
    }
    #ankangCount {
      height: 80%;
      padding: 0 100px 50px 100px;
    }
  }
  .marginTop {
    margin-top: 50px;
  }
  .count-countrl {
    width: 100%;
    min-height: 800px;
    min-width: 1200px;
    .province-title {
      padding: 50px 100px 0 100px;
      padding-bottom: 20px;
      h6 {
        width: 100%;
        font-size: 1.5em;
        text-align: center;
        padding: 10px;
        letter-spacing: 5px;
      }
      .content-P {
        width: 100%;
        text-align: left;
        padding: 30px;
        letter-spacing: 1px;
        text-indent: 2em;
        height: 100%;
        overflow: hidden;
        color: #888888;
      }
    }
    #countrl-count {
      height: 80%;
      padding: 0 100px 50px 100px;
      position: relative;
      // top: 23%;
      left: 2%;
    }
  }
}
</style>