<template>
  <div id="video-img">
    <div class="block">
      <el-carousel height="60vh">
        <el-carousel-item v-for="item in imgList" :key="item">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="video-body">
      <div class="video-content">
        <h1>非遗映象</h1>
        <p ref="prompt"></p>
        <div class="video-down">
          <div class="down-bg">
            <img src="../assets/img/arrow_down.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <VideoList
      :videoModuleTitle="this.videoModuleTitle"
      :videoIntro="this.videoIntro"
      :videoList="this.videoList"
    />
    <VideoList
      :videoModuleTitle="this.videoModuleTitle2"
      :videoIntro="this.videoIntro2"
      :videoList="this.videoList2"
    />

    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer";
import VideoList from "../components/VideoList";
export default {
  components: {
    Footer,
    VideoList,
  },
  data() {
    return {
      videoModuleTitle: "匠人故事",
      videoModuleTitle2: "非遗传承",
      videoIntro: "薪火相传，匠人匠心",
      videoIntro2: "非遗文化，众赏非遗",
      videoList: [
        {
          id: 1,
          builderImg:
            "http://www.sxfycc.com/upload/portal/20201019/ca4c9aab7bf385eb279157a2650ed991.png",
          videoTitle: "民歌——苏文",
          videoTime: "2020-10-3",
          views: 8,
          videoUrl:
            "http://www.sxfycc.com/upload/portal/20201017/ab5328bd75676e3fb1b4d98b2381daec.mp4",
        },
        {
          id: 2,
          builderImg:
            "http://www.sxfycc.com/upload/portal/20200814/d0318e3dafbb0393b0f633f9ad9b5f4c.jpg",
          videoTitle: "剪纸——杨梅英",
          videoTime: "2020-08-14",
          views: 60,
          videoUrl:
            "http://www.sxfycc.com/upload/portal/20200814/5cfa84a7f2012e052816cb2780aad4f8.mp4",
        },
        {
          id: 3,
          builderImg:
            "http://www.sxfycc.com/upload/portal/20190923/ae5e68929525c55d95371736fa41cfe4.jpg",
          videoTitle: "社火脸谱绘制技艺——曹彦云",
          videoTime: "2019-09-23",
          views: 12,
          videoUrl:
            "http://www.sxfycc.com/upload/portal/20190923/03d6c9a3f6e3a2eec3a7312f6d5cc117.mp4",
        },
        {
          id: 4,
          builderImg:
            "http://www.sxfycc.com/upload/portal/20200330/507b6e75970efabe03029edb036952f1.jpg",
          videoTitle: "陕北道情——白明理",
          videoTime: "2020-03-23",
          views: 45,
          videoUrl:
            "http://www.sxfycc.com/upload/portal/20200330/4fe5bd8fdf839af3cbe661b71b72d382.mp4",
        },
        {
          id: 5,
          builderImg:
            "http://www.sxfycc.com/upload/portal/20200309/eee6c27404ee4d71324e3633e10338dd.jpg",
          videoTitle: "秦腔——康少易",
          videoTime: "2019-09-23",
          views: 62,
          videoUrl:
            "http://www.sxfycc.com/upload/portal/20200313/d90a6fc032be7ac887649d26d10067fa.mp4",
        },
        {
          id: 6,
          builderImg:
            "http://www.sxfycc.com/upload/default/20190401/4421ab1244060f2c7c2718217ce6a45e.jpg",
          videoTitle: "澄城刺绣——刘秀花",
          videoTime: "2019-04-01",
          views: 37,
          videoUrl:
            "http://www.sxfycc.com/upload/portal/20190401/721cbbc2eca1a6028b292c7e1e9d5475.mp4",
        },
        {
          id: 7,
          builderImg:
            "http://www.sxfycc.com/upload/portal/20200411/46ad3a13437213523181849a1ee46770.jpg",
          videoTitle: "汉调桄桄——李天明",
          videoTime: "2019-04-11",
          views: 39,
          videoUrl:
            "http://www.sxfycc.com/upload/portal/20200411/0bd11cb629e5246f6988fcf40f68e4b5.mp4",
        },
        {
          id: 8,
          builderImg:
            "http://www.sxfycc.com/upload/default/20190408/3d7f60ba1244fa456f0bbe5f391f6064.jpg",
          videoTitle: "安康花鼓子——李龙茂",
          videoTime: "2019-04-08",
          views: 33,
          videoUrl:
            "http://www.sxfycc.com/upload/portal/20190408/57930338f09f1f58fd60f121e7def611.mp4",
        },
      ],
      videoList2: [
        {
          id: 1,
          builderImg:
            "http://www.sxfycc.com/upload/portal/20201105/59e5490a6fb1fa4b5157ad64dc954757.jpg",
          videoTitle: "秦巴深处紫阳民歌",
          videoTime: "2020-11-05",
          views: 88,
          videoUrl:
            "http://www.sxfycc.com/upload/portal/20201122/64815dda630aa0533dff67c6ef846761.mp4",
        },
        {
          id: 2,
          builderImg:
            "http://www.sxfycc.com/upload/portal/20200302/9afe68aac9efd771f4dc66c6594783a8.jpg",
          videoTitle: "隔门贤",
          videoTime: "2020-07-14",
          views: 69,
          videoUrl:
            "http://www.sxfycc.com/upload/default/20200302/328de67a4091b2017ae5f823b157ddb1.mp4",
        },
        {
          id: 3,
          builderImg:
            "http://www.sxfycc.com/upload/portal/20190318/65cfd49e825d97ec93490fb12a6f9499.jpg",
          videoTitle: "秦风意韵",
          videoTime: "2019-01-23",
          views: 82,
          videoUrl:
            "http://www.sxfycc.com/upload/portal/20190923/03d6c9a3f6e3a2eec3a7312f6d5cc117.mp4",
        },
        {
          id: 4,
          builderImg:
            "http://www.sxfycc.com/upload/portal/20190807/e14e915907940f26ed458d020ae6d99e.jpg",
          videoTitle: "朱王秧歌",
          videoTime: "2020-03-23",
          views: 45,
          videoUrl:
            "http://www.sxfycc.com/upload/portal/20200330/4fe5bd8fdf839af3cbe661b71b72d382.mp4",
        },
        {
          id: 5,
          builderImg:
            "http://www.sxfycc.com/upload/portal/20201014/7a91e5a2fb53ef09d2c488fe511f68ed.jpg",
          videoTitle: "剪纸",
          videoTime: "2018-09-23",
          views: 42,
          videoUrl:
            "http://www.sxfycc.com/upload/portal/20200313/d90a6fc032be7ac887649d26d10067fa.mp4",
        },
        {
          id: 6,
          builderImg:
            "http://www.sxfycc.com/upload/portal/20201014/55fafc79315ab5f3576a92115a66b061.jpg",
          videoTitle: "凤翔木板年画",
          videoTime: "2017-04-01",
          views: 37,
          videoUrl:
            "http://www.sxfycc.com/upload/portal/20190401/721cbbc2eca1a6028b292c7e1e9d5475.mp4",
        },
        {
          id: 7,
          builderImg:
            "http://www.sxfycc.com/upload/portal/20201013/dfb94466ac8c3e55a1aa1cefd00adf18.jpg",
          videoTitle: "安塞腰鼓",
          videoTime: "2015-04-11",
          views: 39,
          videoUrl:
            "http://www.sxfycc.com/upload/portal/20200411/0bd11cb629e5246f6988fcf40f68e4b5.mp4",
        },
        {
          id: 8,
          builderImg:
            "http://www.sxfycc.com/upload/portal/20201013/93f2689338991825a5f797cd810d10d5.jpg",
          videoTitle: "华阴老腔",
          videoTime: "2017-04-08",
          views: 33,
          videoUrl:
            "http://www.sxfycc.com/upload/portal/20190408/57930338f09f1f58fd60f121e7def611.mp4",
        },
      ],

      imgList: [
        "http://www.sxfycc.com/upload/admin/20201112/333cf30a4fe9fe2efcd4a8c4a61d24c7.jpg",
        "http://www.sxfycc.com/upload/admin/20201219/55ab09169b4d59e5d217df3a27a867f4.jpg",
        "http://www.sxfycc.com/upload/admin/20201106/f06a3c9cfad6a71bb84c73570279e866.jpg",
      ],
      maxSpeed: 60, //最大输入速度
      minSpeed: 20, //最小输入速度
      textList: [
        "很高心你能来到非遗印象页",
        "点击下边的箭头能查看更多有的内容哦",
      ], //输入文字集合
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
#video-img {
  width: 100vw;
  height: 100vh;
  min-width: 1276px;
  box-sizing: border-box;
  position: relative;
  // overflow-y: scroll;
  // overflow-x: hidden;
  //   background: #ccc;
  .block {
    height: 60%;
    img {
      width: 100%;
      cursor: pointer;
    }
  }
  .video-body {
    width: 100%;
    height: 40vh;
    position: relative;
    h1 {
      margin: 0 auto;
      padding-top: 70px;
      // padding-left: 50px;
      font-size: 2em;
      text-align: center;
      letter-spacing: 10px;
    }
    p {
      position: absolute;
      width: 100%;
      padding: 20px 0;
      // padding-right: 10px;
      margin-left: -10px;
      text-align: center;
      color: #888888;
      margin-bottom: 30px;
    }
    .video-down {
      background: url("../assets/img/s5da048b1840e2.jpg");
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 14.5vh;
      position: absolute;
      bottom: 0;
      .down-bg {
        background: #000000c2;
        height: 100%;
        width: 100%;
        position: relative;
        img {
          width: 100px;
          position: absolute;
          top: 30%;
          left: calc(50% - 50px);
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          &:hover {
            transform: scale(1.5);
          }
        }
      }
    }
  }
}
</style>