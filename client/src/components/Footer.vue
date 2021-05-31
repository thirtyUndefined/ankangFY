<template>
  <div id="footer">
    <div class="footer-top">
      <h1>安康市非物质文化遗产数字地图</h1>
      <span ref="prompt">一天很短开心就笑，不开心了一会在笑</span>
    </div>
    <div class="footer-wrapper">
      <div class="footer-content">
        <div class="footer-main">
          <div class="left">
            <h4>Author: Thirty<i class="iconfont icon-30"></i></h4>
            <el-button @click="handleRouterMine" type="primary">关于本站</el-button>
          </div>
          <div class="center">
            <h4>成长</h4>
            <ul class="timer">
              <li><i class="iconfont icon-xuexiao"></i> 毕业院校：安康学院</li>
              <li><i class="iconfont icon-time"></i>毕业时间：2021-07-01</li>
              <li><i class="iconfont icon-laoshi"></i>指导老师：张超</li>
            </ul>
          </div>
          <div class="right">
            <h4>联系我</h4>
            <ul class="concat">
              <ul>
                <li>
                  <i class="iconfont icon-youxiang"></i>邮箱：2602756824@qq.com
                </li>
                <li><i class="iconfont icon-weixin"></i>微信：thirty</li>
                <li>
                  <i class="iconfont icon-GitHub"></i>GitHub:thirtyUndefined
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="copyright">
            Copyright@2021 thirty's Graduation
            design_安康市非物质文化遗产数字地图
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxSpeed: 60, //最大输入速度
      minSpeed: 20, //最小输入速度
      textList: ["一天很短开心就笑，不开心了一会在笑"], //输入文字集合
      listIndex: 0, //列表的索引
      indexes: 0, //光标索引
      delSpeed: 10, //删除文字速度
      cursorText: "_", //光标文字
      text: "", //当前显示的句子文字
      tempText: "", //临时句子截取文字
      wait: 2000, //文子输入完成后等待时间删除
      waitInput: 800, //等待n毫秒后开始输入
      timer: null, //定时器
      isStop: true, //是否停止
      cacheFun: null, //停止时函数记录
    };
  },
  computed: {
    el() {
      return this.$refs.prompt;
    },
  },
  methods: {
    handleRouterMine() {
      this.$router.push({
        name: "Mine",
      });
    },

    cleanTimer() {
      //清除定时器
      if (this.timer) return;
      clearTimeout(this.timer);
      this.timer = null;
    },
    getRanSpeed() {
      //获取随机停止时间
      return (
        Math.floor(Math.random() * (this.maxSpeed - this.minSpeed + 1)) +
        this.minSpeed
      );
    },
    getNowText(i) {
      //设置并获取当前文字
      this.indexes = typeof i == "number" ? i : this.indexes;
      this.tempText = this.text.substr(0, this.indexes);
      return this.tempText;
    },
    waiting(ms) {
      //等待函数
      return new Promise((resolve, reject) => {
        this.cleanTimer();
        this.timer = setTimeout(resolve, ms);
      });
    },
    render(hc) {
      //设置 ‘el’的显示文字
      this.el.innerHTML /*innerText*/ =
        this.getNowText() + (hc ? "" : this.cursorText);
    },
    backspace() {
      //循环删除
      if (this.indexes > 0) {
        this.waiting(this.delSpeed).then(() => {
          //删除
          // typing.getNowText(typing.indexes -1);
          this.indexes--;
          this.render();
          this.backspace();
        });
      } else {
        //删除完成
        if (this.listIndex >= this.textList.length) this.listIndex = 0;
        this.text = this.textList[this.listIndex];
        this.listIndex++;
        this.waiting(this.waitInput).then(this.loop); //等待输入
      }
    },
    loop() {
      if (this.text.length <= this.indexes) {
        //是显示完成
        this.render(true); //输出完成
        this.waiting(this.wait).then(this.backspace); //等待删除
      } else {
        // this.getNowText(this.indexes + 1);
        this.indexes++; //设置下一次显示的文字索引
        this.render(); //显示到页面
        this.waiting(this.getRanSpeed()).then(this.loop); //等待删除
      }
    },
    start() {
      //开始
      this.backspace();
    },
  },
  created() {
    this.start();
  },
};
</script>

<style lang="less" scoped>
#footer {
  width: 100%;
  height: 40vh;
  margin-top: 100px;
  min-width: 1400px;
  .footer-top {
    width: 100%;
    height: 40%;
    text-align: center;
    background: rgb(255, 255, 255);
    h1 {
      color: #000;
      font-size: 1.7em;
      margin: 20px;
    }
  }
  .footer-wrapper {
    width: 100%;
    height: 60%;
    background-image: url("../assets/img/default-bg.jpeg");
    background-position: bottom;
    background-size: cover;
    color: #fff;
    .footer-content {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.808);
      .footer-main {
        width: 70%;
        height: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        div {
          width: 33%;
        }
        .left,
        .center,
        .right {
          text-align: left;
          line-height: 1.7em;
        }
        .left {
          h4 {
            font-size: 1.5em;
            margin: 30px 0 30px 0;
          }
        }
        .center,
        .right {
          h4 {
            font-size: 1.3em;
            margin: 20px 0 10px 0;
          }
          i {
            padding-right: 10px;
          }
        }
      }
      .footer-bottom {
        text-align: center;
        margin-top: 30px;
        margin-left: 130px;
      }
    }
  }
}
</style>