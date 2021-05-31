<template>
  <div class="dynamic">
    <!-- <div class="no-dynamic" 　v-show="!showDynamic">你还没有发布动态,请前往投稿页发布属于与你的动态</div> -->
    <div
      class="dynamic-wrapper"
      v-for="(item, index) in videoIntroList"
      :key="index"
    >
      <div class="dynamic-user">
        <div class="user-img">
          <img :src="require('../../../public' + userImg)" alt="" />
        </div>
        <div class="user-name">
          <p>{{ userName }}</p>
          <span>{{ item.createTime }}</span>
        </div>
      </div>
      <div class="dynamic-content">
        <p>{{ item.describe }}</p>
        <div class="dontent-video">
          <video
            :src="require('../../../public' + item.videoUrl)"
            @click="videoShow"
          ></video>

          <div class="video-intro">
            <h6>{{ item.title }}</h6>
            <p>
              {{ item.introduction }}
            </p>
            <!-- <div class="video-num">
              <span ref="zan"><i class="iconfont icon-bofang"></i> 36万</span>
              <span><i class="iconfont icon-pinglun"></i> 2636</span>
            </div> -->
          </div>
        </div>
      </div>
      <div class="video-show">
        <div class="close-btn" @click="videoListClose">
          <i class="el-icon-error"></i>
        </div>
        <video
          :src="require('../../../public' + item.videoUrl)"
          controls="controls"
          id="videoPlayer"
        ></video>
      </div>
      <div class="video-dianzan">
        <!-- <el-button tag="span" :plain="true"
          ><i class="iconfont icon-zhuanfa"></i>转发</el-button
        > -->
        <!-- <el-button tag="span" :plain="true" @click="openCom"
          ><i class="iconfont icon-pinglun1"></i>66</el-button
        > -->
        <el-button tag="span" :plain="true" @click="dianZan"
          ><i class="iconfont icon-zan"></i>赞</el-button
        >
      </div>
    </div>

    <el-divider></el-divider>
    <!-- <div class="dynamic-comments" v-show="isShowCom">
      <div class="comment-user">
        <div class="com-img">
          <img src="../assets/img/thirty.jpeg" alt="" />
        </div>
        <div class="com-input">
          <textarea type="text" placeholder="发一条友善的评论" id="emijo" />
          <div class="com-send" @click="sendCom">发表</div>
        </div>
      </div>

      <div class="com-emijo">
        <VueEmojiBox target-id="emijo" label="😊表情" className="emijo-box" />
      </div>
      <el-divider></el-divider>
      <div class="dynamic-wrapper">
        <div class="dynamic-user">
          <div class="user-img">
            <img src="../assets/img/thirty.jpeg" alt="" />
          </div>
          <div class="user-name">
            <p>Thirty</p>
            <span>03-30</span>
          </div>
        </div>
        <div class="dynamic-content">
          <p>米其林系列</p>
          <div class="replay-time">2021-03-31</div>
          <div class="com-reply" @click="handleReplay">回复</div>
          <div class="com-replay-wra dynamic-replay1" v-show="replay">
            <div class="comment-user">
              <div class="com-img">
                <img src="../assets/img/thirty.jpeg" alt="" />
              </div>
              <div class="com-input">
                <textarea
                  type="text"
                  placeholder="发一条友善的评论"
                  id="emijo-replay1"
                />
                <div class="com-send">发表</div>
              </div>
            </div>

            <div class="com-emijo">
              <VueEmojiBox
                target-id="emijo-replay1"
                label="😊表情"
                className="emijo-box"
              />
            </div>
          </div>
        </div>

        <div class="dynamic-wrapper dynamic-replay">
          <div class="dynamic-user">
            <div class="user-img">
              <img :src="require('../../../public' + this.userImg)" alt="" />
            </div>
            <div class="user-name">
              <p>Thirty</p>
              <span>{{ time }}</span>
            </div>
          </div>
          <div class="dynamic-content">
            <p>米其林系列</p>
            <div class="replay-time">2021-03-31</div>
            <div class="com-reply" @click="handleReplay">回复</div>
            <div class="com-replay-wra" v-show="replay">
              <div class="comment-user">
                <div class="com-img">
                  <img src="../assets/img/thirty.jpeg" alt="" />
                </div>
                <div class="com-input">
                  <textarea
                    type="text"
                    placeholder="发一条友善的评论"
                    id="emijo-replay2"
                  />
                  <div class="com-send">发表</div>
                </div>
              </div>

              <div class="com-emijo">
                <VueEmojiBox
                  target-id="emijo-replay2"
                  label="😊表情"
                  className="emijo-box"
                />
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import VueEmojiBox from "vue-emoji-box";
import { renewHtml } from "vue-emoji-box";
import * as videoService from '../service/video';
export default {
  data() {
    return {
      videoIntroList: null,
      showDynamic: true,
      zanNum: null,
      //   是否展示评论区
      isShowCom: false,
      // 回复
      replay: false,

      userImg: null,
      uerName: null,
    };
  },
  mounted() {
    videoService.getVideos().then(res => {
      this.videoIntroList = res.data;

      console.log(res.data)
      this.userImg = this.$store.state.userInfo.userImg;
      this.userName = this.$store.state.userInfo.userName;
    })
    // let dynamicStore = this.$store.state.userDynamic.dynamic;
    // console.log(dynamicStore);
    // if (dynamicStore.length != 0) {
    //   this.videoIntroList = dynamicStore;
    // } else {
    //   return;
    // }
  },
  components: {
    VueEmojiBox,
  },
  methods: {
    renewHtml,
    dianZan() {
      this.$message({
        message: "点赞成功",
        type: "success",
      });
      console.log(this.$refs.zan);
    },
    videoShow() {
      const videoDom = document.querySelector(".video-show");
      const videoPlayer = document.querySelector("#videoPlayer");
      videoDom.style.transform = "translateX(0)";
      videoDom.style.opacity = "1";
      videoPlayer.play();
    },
    videoListClose() {
      const videoDom = document.querySelector(".video-show");
      videoDom.style.transform = "translateX(-100%)";
      videoDom.style.opacity = "0.1";
      const videoPlayer = document.querySelector("#videoPlayer");
      videoPlayer.pause();
    },
    openCom() {
      console.log(this.isShowCom);
      this.isShowCom = !this.isShowCom;
    },
    handleReplay() {
      this.replay = !this.replay;
    },
    sendCom() {},
  },
};
</script>

<style lang="less" scoped>
.dynamic {
  width: 75%;
  box-shadow: 0 0 3px #ccc;
  margin-top: 10px;
  font-size: 14px;
  //   margin: 0 10px;
  // color: rgba(48, 48, 48, 0.747);
  .no-dynamic {
    width: 100%;
    height: 170px;
    padding: 70px 30px;
    font-size: 1.3em;
    color: #888888;
  }
  .dynamic-wrapper {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    .video-show {
      position: absolute;
      z-index: 888;
      width: 100vw;
      height: 100vh;
      background: #0e0e0e91;
      top: 0;
      left: 0;
      transform: translateX(-150%);
      transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
      .close-btn {
        position: absolute;
        right: 300px;
        top: 50px;
        color: #fff;
        font-size: 2em;
        cursor: pointer;
      }
      video {
        position: relative;
        left: 300px;
        top: 100px;
        width: 900px;
        // height: 630px;
      }
    }
    .dynamic-user {
      width: 100%;
      position: relative;
      .user-img {
        width: 55px;
        img {
          width: 100%;
          border-radius: 50%;
          border: 1px solid #ccc;
        }
      }
      .user-name {
        position: absolute;
        top: 0px;
        left: 8%;
        p {
          cursor: pointer;
          font-size: 1.5em;
          padding: 10px;
          transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
          &:hover {
            color: rgb(56, 120, 238);
          }
        }
        span {
          padding: 0 10px;
          color: rgba(94, 94, 94, 0.788);
        }
      }
    }
    .dynamic-content {
      padding: 5px 70px;
      .replay-time {
        padding-left: 10px;
        display: inline-block;
        color: rgb(133, 133, 133);
      }
      .com-reply {
        display: inline-block;
        width: 30px;
        font-size: 0.8em;
        padding: 5px 10px;
        text-align: center;
        margin-left: 10px;
        border: 1px solid #ccc;
        color: rgb(116, 116, 116);
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          color: rgb(40, 131, 236);
          border-color: rgb(40, 131, 236);
        }
      }
      .com-replay-wra {
        padding-top: 20px;
      }
      p {
        padding: 10px 10px;
        padding-bottom: 20px;
      }
      .dontent-video {
        width: 70%;
        box-shadow: 0 0 3px rgb(126, 126, 126);
        display: flex;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover {
          transform: scale(1.2);
          box-shadow: 0 0 5px rgb(134, 134, 134);
        }

        video {
          width: 47.6%;
          //   height: 100%;
          border-radius: 10px;
        }
        .video-intro {
          padding: 7px 12px;
          h6 {
            font-size: 1.2em;
            padding-left: 10px;
            // width: 43%;
          }
          p {
            padding: 0;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 10px;
            margin-bottom: 13px;
            letter-spacing: 1px;
            height: 50%;
            // width: 45%;
            // height: px;
            // white-space: nowrap;

            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            font-size: 0.9em;
            color: rgba(34, 34, 34, 0.788);
          }
          .video-num {
            span {
              padding-left: 10px;
              padding-right: 20px;
              //  line-height: 14px;
              color: rgba(34, 34, 34, 0.747);
            }
          }
        }
      }
      .dynamic-replay1 {
        .com-img {
          width: 55px;
        }
        .com-send {
          position: absolute;
          right: 50px;
        }
        .com-input {
          textarea {
            min-width: 500px;
            min-height: 70px;
            max-width: 500px;
            max-height: 200px;
          }
        }
      }
    }

    .video-dianzan {
      padding: 20px 70px;
      color: rgb(155, 155, 155);
      font-size: 1em;
      span {
        padding-right: 50px;
        cursor: pointer;
        &:hover {
          color: rgb(55, 153, 245);
        }
        i {
          padding-right: 5px;
        }
      }
    }
  }
  .dynamic-replay {
    width: 100%;
    font-size: 10px;
    padding-left: 70px;
    .dynamic-content {
      p {
        padding-top: 20px;
        // padding-left: 0;
      }
      .com-replay-wra {
        .comment-user {
          .com-img {
            width: 55px;
          }
          .com-input {
            textarea {
              min-width: 430px;
            }
          }
        }
      }
    }

    .dynamic-user {
      .user-img {
        width: 35px;
      }
      .user-name {
        position: absolute;
        left: 50px;
        p {
          padding: 5px;
        }
      }
    }
    .dynamic-content {
      p {
        position: relative;
        left: -10px;
        padding: 5px 0;
      }
      .replay-time {
        padding-left: 0;
        position: relative;
        left: -10px;
      }
    }
  }
  .el-divider--horizontal {
    margin: 20px 20px;
    width: 95%;
    box-sizing: border-box;
  }
  .dynamic-comments {
    padding: 20px;
    position: relative;
    .comment-user {
      display: flex;
      justify-content: space-between;
      .com-img {
        width: 6%;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .com-input {
        width: 90%;
        position: relative;
        textarea {
          min-width: 600px;
          min-height: 70px;
          max-width: 600px;
          max-height: 200px;
          font-size: 0.5em;
          padding: 5px;
          box-sizing: border-box;
          background: rgba(231, 231, 231, 0.514);
          border: 1px solid #ccc;
          border-radius: 5px;
          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          &:hover,
          &:focus {
            border: 1px solid rgba(45, 133, 247, 0.705);
            outline: none;
            background: #fff;
          }
        }
        .com-send {
          width: 70px;
          // height: 30px;
          height: 95%;
          border-radius: 10px;
          background: rgb(32, 123, 241);
          color: #fff;
          box-sizing: border-box;
          // padding: 11px;
          letter-spacing: 5px;
          text-align: center;
          line-height: 70px;
          font-size: 0.8em;
          display: inline-block;
          position: absolute;
          right: 130px;

          cursor: pointer;
          box-shadow: 0 0 3px rgba(25, 132, 219, 0.897),
            inset 0 0 3px rgba(25, 132, 219, 0.897);
        }
      }
    }

    .com-emijo {
      //   width: 80%;
      padding: 10px;
      .emijo-box {
        padding: 5px;
        margin-left: 85px;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>