<template>
  <div class="video-main-content">
    <div class="video-list-wrapper">
      <div class="video-list">
        <h4>{{ videoModuleTitle }}</h4>
        <p>{{ videoIntro }}</p>
      </div>
      <div class="list-wrapper" v-for="video in videoList" :key="video.id">
        <div class="list" @click="videoListShow">
          <div class="img-wrapper"><i class="el-icon-video-play"></i></div>
          <img :src="video.builderImg" alt="" />
          <div class="list-content">
            <h6>{{ video.videoTitle }}</h6>
            <span><i class="el-icon-time"></i>{{ video.videoTime }}</span>
            <span><i class="el-icon-view"></i>{{ video.views }}</span>
          </div>
        </div>
        <div class="video">
          <div class="close-btn" @click="videoListClose">
            <i class="el-icon-error"></i>
          </div>
          <div class="share">
            <el-col :span="12">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <i class="el-icon-more"></i>
                </span>

                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    icon="el-icon-plus"
                    @click.native="isShowShare = !isShowShare"
                    >分享</el-dropdown-item
                  >
                  <el-dropdown-item
                    icon="el-icon-circle-plus"
                    @click.native="isShowPay = !isShowPay"
                    >支持</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </div>

          <video id="videoPlayer" controls="controls">
            <source type="video/mp4" />
          </video>
          <div class="video-msg">
            <span>发布时间: {{ video.videoTime }}</span>
            <span>浏览次数: {{ video.views }}</span>
          </div>
          <div class="share-me" v-show="isShowShare">
            <h6>
              分享<i
                class="el-icon-circle-close"
                @click="isShowShare = false"
              ></i>
            </h6>
            <div class="kind">
              <span><i class="iconfont icon-weixin"></i></span>
              <span><i class="iconfont icon-qq-copy"></i></span>
              <span><i class="iconfont icon-weibo"></i></span>
              <span><i class="iconfont icon-GitHub"></i></span>
            </div>
          </div>
          <div class="pay-me" v-show="isShowPay">
            <h6>
              感谢您的支持<i
                class="el-icon-circle-close"
                @click="isShowPay = false"
              ></i>
            </h6>
            <div class="kind">
              <img :src="payImg" alt="" />
              <el-button class="pay-btn" type="primary" @click="changeImgZ"
                >支付宝</el-button
              >
              <el-button type="success" @click="changeImgW">微信</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    videoModuleTitle: String,
    videoIntro: String,
    videoList: Array,
  },
  data() {
    return {
      // 是否展示分享
      isShowShare: false,
      isShowPay: false,
      payImg: require("../assets/img/wechact.jpg"),
    };
  },
  methods: {
    changeImgZ() {
      this.payImg = require("../assets/img/zhifubao.jpg");
    },
    changeImgW() {
      this.payImg = require("../assets/img/wechact.jpg");
    },
    videoListShow() {
      const videoDom = document.querySelector(".video");
      videoDom.style.transform = "translateX(0)";
      videoDom.style.opacity = "1";
      const videoPlayer = document.querySelector("#videoPlayer");
      for (let i = 0; i < this.videoList.length; i++) {
        this.videoList[i].views += 1;
        videoPlayer.src = this.videoList[7].videoUrl;
        videoPlayer.play();
      }
    },
    videoListClose() {
      const videoDom = document.querySelector(".video");
      videoDom.style.transform = "translateX(-100%)";
      videoDom.style.opacity = "0.1";
      const videoPlayer = document.querySelector("#videoPlayer");
      videoPlayer.pause();
    },
  },
};
</script>
<style lang="less" scoped>
.video-main-content {
  width: 100vw;
  height: 100vh;
  min-width: 1530px;
  .video-list-wrapper {
    width: 100%;
    height: 100%;
    padding: 50px;
    box-sizing: border-box;
    // padding-right: 100px;
    padding-top: 100px;
    .video-list {
      width: 100%;
      height: 20%;
      h4 {
        // padding-right: 100px;
        text-align: center;
        font-size: 1.5em;
      }
      p {
        text-align: center;
        padding: 20px 0;
        font-size: 0.9em;
        color: #888888;
        // padding-right: 100px;
      }
    }
    .list-wrapper {
      width: 24%;
      height: 45%;
      display: inline-block;
      .list {
        margin: 20px;

        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        cursor: pointer;

        &:hover .img-wrapper {
          transform: translateY(0);
        }
        img {
          display: inline-block;
          width: 100%;
          min-width: 325.25px;
          max-height: 210.9px;
          min-height: 210.9px;
          // max-width: 357.7px;
          text-align: center;
        }
        .img-wrapper {
          background: #00000098;
          height: 81%;
          width: 100%;
          position: absolute;
          box-sizing: border-box;
          transform: translateY(-100%);
          transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
          i {
            position: absolute;
            font-size: 3em;
            color: aliceblue;
            position: absolute;
            top: calc(50% - 0.5em);
            left: calc(50% - 0.5em);
          }
        }
        .list-content {
          padding-left: 5px;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          h6 {
            padding: 5px 0 7px 0;
            &:hover {
              color: rgb(202, 116, 17);
            }
          }
          span {
            padding-right: 30px;
            font-size: 0.7em;
            color: #888888;
            i {
              padding-right: 5px;
            }
          }
        }
      }
      .video {
        width: 100%;
        height: 100%;
        // border: 1px solid #cccc;
        background: #1a1a1ad3;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 888;
        transform: translateX(-100%);
        opacity: 0.1;
        transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
        .close-btn {
          position: absolute;
          color: #fff;
          font-size: 30px;
          right: 380px;
          top: 93px;
          cursor: pointer;
          &:hover {
            color: #e05b0e;
          }
        }
        .share-me {
          width: 20%;
          height: 300px;
          // background: rgba(255, 255, 255, 0.959);
          margin-top: 150px;
          margin-left: 30px;
          // background: #888888;
          border-radius: 20px 10px 30px 5px;
          background: #fff;
          box-shadow: 0 0 5px #c5c5c5;
          h6 {
            // width: 100%;
            padding: 10px 0;
            padding-left: 30px;
            font-size: 1.3em;
            position: relative;
            i {
              position: absolute;
              left: 80%;
              padding: 5px;
              cursor: pointer;
              transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
              &:hover {
                color: #e05b0e;
                transform: rotate(360deg);
              }
            }
          }
          .kind {
            span {
              position: relative;
              top: 70px;
              left: 8px;
              i {
                font-size: 3em;
                padding: 15px;
                cursor: pointer;
                &:hover {
                  color: yellowgreen;
                }
              }
            }
          }
        }
        .pay-me {
          width: 20%;
          height: 300px;
          // background: rgba(255, 255, 255, 0.959);
          // background: #888888;
          border-radius: 30px 5px 20px 10px;
          box-shadow: 0 0 5px #888888;
          background: #fff;
          position: absolute;
          left: 78%;
          top: 20%;
          h6 {
            // width: 100%;
            padding: 10px 0;
            padding-left: 30px;
            font-size: 1.3em;
            position: relative;
            i {
              position: absolute;
              left: 80%;
              padding: 5px;
              cursor: pointer;
              transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
              &:hover {
                color: #e05b0e;
                transform: rotate(360deg);
              }
            }
          }
          .kind {
            img {
              width: 65%;
              margin-left: 55px;
            }
            .pay-btn {
              margin-left: 75px;
            }
          }
        }
        video {
          width: 50%;
          position: absolute;
          left: 25%;
          top: 19%;
          min-width: 650px;
        }
        .share {
          font-size: 1.5em;
          // width: 50px;
          position: fixed;
          left: 74%;
          padding: 5px;
          cursor: pointer;

          .el-dropdown-link {
            i {
              color: #fff;
              position: absolute;
              top: 70px;
              left: -80px;
              font-size: 30px;
            }
          }
        }
        .video-msg {
          position: absolute;
          bottom: 100px;
          width: 100%;
          color: #fff;

          text-align: center;
          span {
            padding: 0 50px;
          }
        }
      }
    }
  }
}
</style>

<style>
/* .el-drawer {
  min-width: 1200px;
} */
</style>