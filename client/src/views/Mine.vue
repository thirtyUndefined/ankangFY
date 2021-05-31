<template>
  <div id="mine">
    <div class="mine-header">
      <div class="mine-header-wrapper">
        <div class="mine-header-content">
          <h4>关于本站关于我<i class="iconfont icon-30"></i></h4>
          <p>你还年轻，不要被生活束缚，世界远比你想象的要精彩</p>
        </div>
        <p>Said do you dream or wanna,follow you heart</p>
        <img src="../assets/img/arrow_down.png" alt="" />
      </div>
    </div>
    <div class="mine-main">
      <div class="main-content">
        <div class="baout-web-site-1">
          <h6>非遗数据可视化</h6>
          <p>全方位了解安康市非物质文化遗产具体情况</p>
          <div class="line"></div>
          <span @click="handleRouterGra"
            >安康市非遗数据占比统计图<i class="el-icon-pie-chart"></i
          ></span>
          <span @click="handleRouterGra"
            >安康市非遗增长情况曲线图<i class="el-icon-s-marketing"></i
          ></span>
          <span @click="handleRouterGra"
            >各县非遗数据统计图<i class="el-icon-s-data"></i
          ></span>
        </div>
        <div class="baout-web-site-2">
          <h6>有趣的展示效果</h6>
          <p>在您欣赏非物质文化遗产的同时带给您不一样的页面交互体验</p>
          <div class="line"></div>
          <li>体现在每一个您操作的细节中<i class="el-icon-ice-drink"></i></li>
        </div>
        <div class="baout-web-site-3">
          <h6>非遗视图欣赏</h6>
          <p>尽本站最大努力为您带来不一样全面的视频图片欣赏</p>
          <div class="line"></div>
          <span @click="handleRouter"
            >匠人精神<i class="el-icon-position"></i
          ></span>
          <span @click="handleRouterApp"
            >非遗项目展览<i class="el-icon-view"></i
          ></span>
          <span @click="handleRouterApp"
            >各县区收录<i class="el-icon-folder-add"></i
          ></span>
        </div>
        <div class="baout-web-site-4">
          <h6>用户互动体验</h6>
          <p>用交流的方式发表您对安康市非遗的感受</p>
          <div class="line"></div>
          <li>分享脑海中的每一想法<i class="el-icon-star-off"></i></li>
          <li>当地人真是体验<i class="el-icon-view"></i></li>
          <span class="about-login" @click="handleRouterHome"
            >注册登录后立即体验<i class="el-icon-arrow-right"></i
          ></span>
        </div>
      </div>
    </div>
    <div class="mine-aboutme">
      <div class="aboutme-content">
        <div class="content-wrapper-1">
          <div class="aboutme-box-1">
            <div class="aboutme-box-1-wrapper">
              <h6>专业特长</h6>
              <div class="about-me-text-1">
                <p>
                  大学专业数字媒体技术专业，学习过很多类型课程，印象最深的大一竟然有一门专业课画画，
                  当时买花花工具可花了不少钱，画画水平一塌糊涂，哈哈哈；之后就是学习了许多软件开发类的技术
                  c++， java,
                  php，js这些语言，后来发现挺喜欢做前端的就重点学习了js，所以嘛其他语言就soso,哈哈哈
                  学习前端的过程中，完全自学还是同困难的，需要找很多资源，水很深，到现在学了一年多，感觉还是个菜鸟，
                  直到在大四第一学期的在公司实习过程中，那段时间对我国帮助特别大，独立开发能力也提高很多；
                </p>
              </div>
            </div>
          </div>
          <div class="aboutme-box-2">
            <div class="aboutme-box-2-wrapper">
              <h6>兴趣爱好</h6>
              <div class="about-me-text-2">
                <p>
                  喜欢开发，并设计特别酷炫的页面互动效果，无聊的时候喜欢阅读一些技术博客，看电影，打游戏，运动，比较喜欢篮球（虽然很菜）
                  比较喜欢看动漫，尤其喜欢一拳超人，一个人坐车的时候喜欢听音乐，看风景；
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="content-wrapper-2">
          <div class="aboutme-box-1">
            <div class="aboutme-box-1-wrapper">
              <h6>最近喜欢的音乐</h6>
              <div class="about-me-text-1">
                <p>
                  最近在听的音乐有，沉沦与遐想，阿司匹林，晚风（还是挺喜欢这种旋律说唱的，痛着特别舒服）；
                </p>
              </div>
            </div>
          </div>
          <div class="aboutme-box-2">
            <div class="aboutme-box-2-wrapper">
              <h6>最近喜欢的电影</h6>
              <div class="about-me-text-2">
                <p>
                  最近看了几部电影，开年贺新《你好，李焕英》，《唐人街探案三》，《新神榜：哪吒重生》（不得不说国产动漫越来越好了）
                </p>
              </div>
            </div>
          </div>
          <div class="aboutme-box-3">
            <div class="aboutme-box-3-wrapper">
              <h6>最近喜欢的游戏</h6>
              <div class="about-me-text-3">
                <p>不知道年龄大了，还是咋了越来越玩不动了，也不太喜欢玩了；</p>
              </div>
            </div>
          </div>
        </div>
        <div class="content-wrapper-3">
          <div class="aboutme-box-1">
            <div class="aboutme-box-1-wrapper">
              <h6>Dream or wanna</h6>
              <div class="about-me-text-1">
                <p>
                  To defeat oneself is the most lamentable failure. To defeat
                  oneself is the most precious victory.
                </p>
              </div>
            </div>
          </div>
          <div class="aboutme-box-2">
            <div class="aboutme-box-2-wrapper">
              <h6>You can do it</h6>
              <div class="about-me-text-2">
                <p>
                  The world is not in the hands of those who laugh at, but
                  precisely in the hands of those who can withstand ridicule and
                  criticism keep moving forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
              <el-button type="primary" @click="handleRouterMine"
                >关于本站</el-button
              >
            </div>
            <div class="center">
              <h4>成长</h4>
              <ul class="timer">
                <li>
                  <i class="iconfont icon-xuexiao"></i> 毕业院校：安康学院
                </li>
                <li><i class="iconfont icon-time"></i>毕业时间：2021-07-01</li>
                <li><i class="iconfont icon-laoshi"></i>指导老师：张超</li>
              </ul>
            </div>
            <div class="right">
              <h4>联系我</h4>
              <ul class="concat">
                <ul>
                  <li>
                    <i class="iconfont icon-youxiang"></i
                    >邮箱：2602756824@qq.com
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
    handleRouter() {
      this.$router.push({
        name: "Video",
      });
    },
    handleRouterApp() {
      this.$router.push({
        name: "Appreciate",
      });
    },
    handleRouterGra() {
      this.$router.push({
        name: "Graphics",
      });
    },
    handleRouterHome() {
      this.$router.push({
        name: "Home",
      });
    },
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
  beforeRouteLeave(to, from, next) {
    this.$parent.closeNav();
    next();
  },
};
</script>

<style lang="less" scoped>
#mine {
  width: 100%;
  height: 100vh;
  .mine-header {
    width: 100%;
    height: 100%;
    background: url("../assets/img/s5da048b1840e2.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    min-width: 1400px;

    .mine-header-wrapper {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.315);
      padding-top: 130px;
      box-sizing: border-box;
      position: relative;
      .mine-header-content {
        width: 50%;
        height: 40%;
        border: 2px solid transparent;
        border-radius: 5% 10% / 30% 30%;
        margin: 0 auto;
        box-shadow: 0 0 5px rgb(0, 0, 0);
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        color: rgba(110, 110, 110, 0.8);
        h4 {
          font-size: 2em;
          color: rgba(110, 110, 110, 0.8);
          transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
          text-align: center;
          padding-top: 50px;
          letter-spacing: 10px;
          position: relative;
          i {
            position: absolute;
            top: 60%;
          }
        }
        p {
          text-align: center;
          font-size: 0.8em;
          padding-top: 100px;
        }
        &:hover {
          transform: scale(1.1);
        }
        &:hover h4 {
          color: #fff;
        }
        &:hover p {
          color: #fff;
        }
      }
      p {
        width: 100%;
        text-align: center;
        padding-top: 230px;
        color: #888888;
      }
      img {
        width: 3%;
        position: absolute;
        top: 95%;
        left: calc(50% - 1.5%);
        transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        cursor: pointer;
        &:hover {
          transform: scale(1.5);
        }
      }
    }
  }
  .mine-main {
    width: 100%;
    height: 100%;
    padding: 100px 150px 0 150px;
    box-sizing: border-box;
    background: url("../assets/img/mine-bg.png") no-repeat;
    background-size: cover;
    background-position: center;
    .main-content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        width: 50%;
        height: 50%;
        text-align: center;
        box-sizing: border-box;
        color: #fff;
        transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        h6 {
          font-size: 1.5em;
          margin-top: 50px;
        }
        p {
          font-size: 0.9em;
          margin-top: 10px;
          color: #ffffff;
          letter-spacing: 2px;
        }
        .line {
          width: 70px;
          height: 1px;
          background: #fff;
          margin: 0 auto;
          margin-top: 20px;
        }
        li {
          padding-top: 20px;
          font-size: 1.1em;
          color: #5e5e5e;
          i {
            padding-left: 10px;
          }
        }
        .about-login {
          background: rgba(0, 0, 0, 0.541);
          margin-top: 70px;
          color: rgb(255, 255, 255);
        }
        span {
          display: block;
          padding: 10px;
          font-size: 1.1em;
          color: #5e5e5e;
          // border-bottom: 1px solid #fff;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          i {
            padding-left: 20px;
          }
          &:hover {
            color: rgb(31, 119, 192);
          }
        }
        &:hover {
          transform: scale(1.1);
          box-shadow: 1px 1px 3px rgb(0, 0, 0);
        }
      }
      .baout-web-site-1 {
        background: url("../assets/img/world.png");
        background-position: center;
        background-size: cover;
      }
      .baout-web-site-2 {
        color: #000;
        .line {
          background: #000;
        }
        p {
          color: #000000;
        }
      }
      .baout-web-site-3 {
        color: #000;
        .line {
          background: rgba(0, 0, 0, 0.808);
        }
        p {
          color: #000000;
        }
      }
      .baout-web-site-4 {
        background: url("../assets/img/juli.png");
        background-position: center;
        background-size: cover;
      }
    }
  }
  .mine-aboutme {
    width: 100%;
    height: 100%;
    margin-top: 200px;
    box-sizing: border-box;
    .aboutme-content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      color: #ffffff;
      div {
        width: 100%;
      }
      .content-wrapper-1 {
        display: flex;
        justify-content: space-between;
        .aboutme-box-1 {
          width: 70%;
          background: url("../assets/img/QQ图片20210305205536.png");
          background-size: cover;
          background-position: center;

          .aboutme-box-1-wrapper {
            width: 100%;
            height: 100%;
            background: rgba(23, 72, 206, 0.705);
            overflow: hidden;
            position: relative;
            h6 {
              position: absolute;
              z-index: 10;
              top: 10%;
              left: 7%;
              letter-spacing: 10px;
              font-size: 1.5em;
            }
            &:hover .about-me-text-1 {
              transform: translateY(0);
            }
            .about-me-text-1 {
              width: 100%;
              height: 100%;
              background: rgba(23, 72, 206);
              transform: translateY(-100%);
              transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              p {
                text-indent: 2em;
                // padding-top: 100px;
                padding: 30px;
                padding-top: 0;
                position: absolute;
                top: 30%;
              }
            }
          }
        }
        .aboutme-box-2 {
          width: 30%;
          background: url("../assets/img/QQ图片20210305205454.png");
          background-size: cover;
          background-position: center;
          .aboutme-box-2-wrapper {
            width: 100%;
            height: 100%;
            background: rgba(13, 187, 115, 0.705);
            position: relative;
            overflow: hidden;
            h6 {
              position: absolute;
              z-index: 10;
              top: 7%;
              left: 10%;
              letter-spacing: 10px;
              font-size: 1.5em;
            }
            &:hover .about-me-text-2 {
              transform: translateY(0);
            }
            .about-me-text-2 {
              width: 100%;
              height: 100%;
              background: rgba(13, 187, 115);
              transform: translateY(-100%);
              transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
              p {
                text-indent: 2em;
                // padding-top: 100px;
                padding: 30px;
                padding-top: 0;
                position: absolute;
                top: 30%;
              }
            }
          }
        }
      }
      .content-wrapper-2 {
        display: flex;
        justify-content: space-between;
        div {
          width: 33.33%;
        }

        .aboutme-box-1 {
          background: url("../assets/img/QQ图片20210305205547.jpg");
          background-size: cover;
          background-position: center;
          .aboutme-box-1-wrapper {
            width: 100%;
            height: 100%;
            background: rgba(231, 7, 7, 0.575);
            position: relative;
            overflow: hidden;
            h6 {
              position: absolute;
              z-index: 10;
              top: 7%;
              left: 10%;
              letter-spacing: 10px;
              font-size: 1.5em;
            }
            &:hover .about-me-text-1 {
              transform: translateX(0);
            }
            .about-me-text-1 {
              width: 100%;
              height: 100%;
              background: rgba(243, 31, 31);
              transform: translateX(-100%);
              transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
              p {
                text-indent: 2em;
                // padding-top: 100px;
                padding: 30px;
                padding-top: 0;
                position: absolute;
                top: 30%;
              }
            }
          }
        }
        .aboutme-box-2 {
          background: url("../assets/img/QQ图片20210305205536.png");
          background-size: cover;
          background-position: center;
          .aboutme-box-2-wrapper {
            width: 100%;
            height: 100%;
            background: rgba(23, 72, 206, 0.705);
            position: relative;
            overflow: hidden;
            h6 {
              position: absolute;
              z-index: 10;
              top: 7%;
              left: 10%;
              letter-spacing: 10px;
              font-size: 1.5em;
            }
            &:hover .about-me-text-2 {
              transform: translateY(0);
            }
            .about-me-text-2 {
              width: 100%;
              height: 100%;
              background: rgba(23, 72, 206);
              transform: translateY(100%);
              transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
              p {
                text-indent: 2em;
                // padding-top: 100px;
                padding: 30px;
                padding-top: 0;
                position: absolute;
                top: 30%;
              }
            }
          }
        }
        .aboutme-box-3 {
          background: url("../assets/img/QQ图片20210305205338.png");
          background-size: cover;
          background-position: center;
          .aboutme-box-3-wrapper {
            width: 100%;
            height: 100%;
            background: rgba(238, 95, 28, 0.493);
            position: relative;
            overflow: hidden;
            h6 {
              position: absolute;
              z-index: 10;
              top: 7%;
              left: 10%;
              letter-spacing: 10px;
              font-size: 1.5em;
            }
            &:hover .about-me-text-3 {
              transform: translateX(0);
            }
            .about-me-text-3 {
              width: 100%;
              height: 100%;
              background: rgba(238, 95, 28);
              transform: translateX(100%);
              transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
              p {
                text-indent: 2em;
                // padding-top: 100px;
                padding: 30px;
                padding-top: 0;
                position: absolute;
                top: 30%;
              }
            }
          }
        }
      }
      .content-wrapper-3 {
        display: flex;
        justify-content: space-between;
        .aboutme-box-1 {
          width: 30%;
          background: url("../assets/img/QQ图片20210305205512.png");
          background-size: cover;
          background-position: center;
          .aboutme-box-1-wrapper {
            width: 100%;
            height: 100%;
            background: rgba(174, 104, 202, 0.753);
            position: relative;
            overflow: hidden;
            h6 {
              position: absolute;
              z-index: 10;
              top: 7%;
              left: 10%;
              letter-spacing: 10px;
              font-size: 1.5em;
            }
            &:hover .about-me-text-1 {
              transform: translateX(0);
            }
            .about-me-text-1 {
              width: 100%;
              height: 100%;
              background: rgba(174, 104, 202);
              transform: translateY(100%);
              transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
              p {
                text-indent: 2em;
                // padding-top: 100px;
                padding: 30px;
                padding-top: 0;
                position: absolute;
                top: 30%;
              }
            }
          }
        }
        .aboutme-box-2 {
          width: 70%;
          background: url("../assets/img/139246CFEBE989D9B42ED1C5EA56FDAD.png");
          background-size: cover;
          background-position: center;
          .aboutme-box-2-wrapper {
            width: 100%;
            height: 100%;
            background: rgba(94, 12, 12, 0.712);
            position: relative;
            overflow: hidden;
            h6 {
              position: absolute;
              z-index: 10;
              top: 7%;
              left: 10%;
              letter-spacing: 10px;
              font-size: 1.5em;
            }
            &:hover .about-me-text-2 {
              transform: translateX(0);
            }
            .about-me-text-2 {
              width: 100%;
              height: 100%;
              background: rgba(94, 12, 12);
              transform: translateY(100%);
              transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
              p {
                text-indent: 2em;
                // padding-top: 100px;
                padding: 30px;
                padding-top: 0;
                position: absolute;
                top: 30%;
              }
            }
          }
        }
      }
    }
  }
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
      background-image: url("../assets/img/s5da048b1840e2.jpg");
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
}
</style>