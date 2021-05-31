<template>
  <div class="contribute-video">
    <div class="contribute-video-wrapper" v-show="isShowUpload">
      <div class="post-video">
        <div>
          <i class="el-icon-upload"></i>
          <p>点击下边按钮上传图片</p>
        </div>
        <div class="input">
          <input type="file" id="videofile" multiple accept="image/*" />
        </div>
        <el-button
          type="danger"
          ref="upload"
          class="post-btn"
          @click="handlePostUpload"
          >点击上传</el-button
        >
      </div>
      <div class="post-video-rule">
        <div class="post-rule">
          <div>
            <span>禁止发布的图片内容</span>
            <span>上传的图片可在个人主页中查看</span>
          </div>
          <div>
            <span
              >上传视频，即表示您已同意使用本站协议 与 本站创作公约
              ，请勿上传色情，反动等违法图片。</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="upload-show-page" v-show="isShowUpPage">
      <div class="upload-title">
        <h4>文件上传</h4>
        <div>
          <span>{{ filesNames }}</span>
          <el-progress :percentage="100" class="progress"></el-progress>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="upload-content">
        <h4>基本信息</h4>
        <div class="video-title">
          <h6>标题</h6>
          <input
            type="text"
            placeholder="为你的视频起个标题吧"
            v-model="videoTitle"
          />
        </div>
        <div class="biaoqian">
          <h6>标签</h6>
          <input
            type="text"
            placeholder="为你的视频加个标签吧"
            v-model="videoBq"
          />
          <div class="tuijian">
            <div>推荐标签</div>
            <div class="type-biaoqian">
              <el-button round ref="biaoqian" @click="chooseBq"
                >民间文学</el-button
              ><el-button round ref="biaoqian" @click="chooseBq"
                >传统音乐</el-button
              >
              <el-button round ref="biaoqian3" @click="chooseBq"
                >传统舞蹈</el-button
              >
              <el-button round ref="biaoqian4" @click="chooseBq"
                >传统戏剧</el-button
              >
              <el-button round ref="biaoqian5" @click="chooseBq"
                >曲艺</el-button
              >
              <el-button round ref="biaoqian6" @click="chooseBq"
                >传统体育与杂技</el-button
              >
              <el-button round ref="biaoqian7" @click="chooseBq"
                >传统美术</el-button
              >
              <el-button round ref="biaoqian8" @click="chooseBq"
                >传统技艺</el-button
              >
              <el-button round ref="biaoqian9" @click="chooseBq"
                >传统医药</el-button
              >
              <el-button round ref="biaoqian10" @click="chooseBq"
                >民俗</el-button
              >
              <el-button round ref="biaoqian11" @click="chooseBq"
                >其它</el-button
              >
            </div>
          </div>
          <div class="jianjie">
            <h6>简介</h6>
            <textarea
              placeholder="为你的视频做一段介绍吧"
              v-model="videoIntro"
            ></textarea>
          </div>
          <div class="dongtai">
            <h6>动态描述</h6>
            <textarea
              placeholder="发布一段有趣的动态描述吧"
              v-model="videoDynamic"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="upload-dyncmic-btn">
        <el-button type="primary" @click="sendDynamic">发布动态</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import * as uploadService from "../service/uploadService";
import * as videoService from "../service/video";
export default {
  data() {
    return {
      isShowUpload: true,
      isShowUpPage: false,
      filesNames: "",
      videoTitle: "",
      videoBq: "",
      videoIntro: "",
      videoDynamic: "",
      videoUrl:null,
    };
  },
  mounted() {
    this.chooseBiaoQ();
  },
  methods: {
    handlePostUpload(e) {
      e.preventDefault();
      this.upload();

      // inputObj.files;
      // this.upload();
      // console.log( inputObj.value);
      // this.isShowUpload = false;
      // this.isShowUpPage = true;
    },
    upload() {
      const inpFile = document.querySelector("#videofile");
      const formdata = new FormData(); // 构建form-data消息格式体
      formdata.append("img", inpFile.files[0], inpFile.files[0].name);

      uploadService.upload(formdata).then((res) => {
        if (res) {
          console.log(res.data.data)
          this.isShowUpload = false;
          this.isShowUpPage = true;
          let urlN = res.data.data;
          this.filesNames = urlN.slice(8);
          this.videoTitle = this.filesNames;
          this.videoUrl = res.data.data;
        }
      });
    },
    chooseBiaoQ() {
      const wrapper = document.querySelector(".type-biaoqian");
      const biaoQList = wrapper.children;
      for (let item of biaoQList) {
        item.addEventListener("click", () => {
          this.videoBq = item.innerText;
        });
      }
    },
    sendDynamic() {
      // console.log(this.videoTitle)
      // console.log(this.videoBq)
      // console.log(this.videoIntro)
      // console.log(this.videoDynamic)
      // console.log(this.$store.state.userDynamic.dynamic.push({
      //   a: this.videoTitle,
      // }), this.$store.state.userDynamic.dynamic)

      //  获取仓库
      let dynamicStore = this.$store.state.userDynamic.dynamic;
      dynamicStore.push({
        title: this.videoTitle,
        biaoqian: this.videoBq,
        intro: this.videoIntro,
        miaoshu: this.videoDynamic,
        videoUrl:this.videoUrl,
      });
      videoService.sendVideo({
        title: this.videoTitle,
        biaoqian: this.videoBq,
        introduction: this.videoIntro,
        describe: this.videoDynamic,
        videoUrl:this.videoUrl,
      }).then(res => {
        console.log(res)
      });
      console.log(dynamicStore);
      this.$router.push({ name: "Dynamic" });
    },
    chooseBq() {},
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
  },
};
</script>
<style lang="less" scoped>
.contribute-video {
  .contribute-video-wrapper {
    height: 500px;
    box-sizing: border-box;
    padding: 20px 100px;
    .post-video {
      height: 60%;
      border: 2px dashed #ccc;
      border-radius: 10px;
      .post-btn {
        position: relative;
        left: 43%;
        top: 25%;
      }

      div {
        font-size: 3em;
        position: relative;
        //   left: 45%;
        top: 20%;
        text-align: center;
        color: #888888;
        p {
          font-size: 0.3em;
          color: #888888;
          padding: 5px 0;
        }
      }
      .input {
        left: 7%;
      }
    }
    .post-video-rule {
      padding: 20px 100px;
      font-size: 0.8em;
      color: #888888;
      text-align: center;
      .post-rule {
        div {
          padding: 20px 0;
          span {
            padding: 0 10px;
          }
        }
      }
    }
  }
  .upload-show-page {
    padding: 20px 100px;
    .upload-title {
      height: 170px;
      h4 {
        font-size: 1.4em;
        span {
          font-size: 0.7em;
          color: #888888;
        }
      }
      div {
        padding: 30px 0;
      }
    }
    .upload-content {
      h4 {
        font-size: 1.4em;
        padding-bottom: 20px;
      }
      .video-title,
      .biaoqian {
        h6 {
          padding-top: 10px;
          padding-bottom: 10px;
          font-size: 1.2em;
        }
        input {
          width: 90%;
          height: 45px;
          font-size: 1.1em;
          padding-left: 16px;
          border-radius: 7px;
          border: 1px solid #ccc;
          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          &:focus {
            border: 1px solid rgb(29, 158, 218);
            outline: none;
          }
          &:hover {
            border: 1px solid rgb(110, 204, 248);
          }
        }
        .tuijian {
          div {
            padding-top: 20px;
          }
          .type-biaoqian {
            .el-button.is-round {
              margin: 10px;
            }
          }
        }
        .jianjie,
        .dongtai {
          h6 {
            padding: 20px 0;
          }
          textarea {
            width: 60%;
            height: 170px;
            min-width: 60%;
            min-height: 170px;
            max-width: 60%;
            max-height: 600px;
            border-radius: 5px;
            padding: 5px;
            &:focus {
              border: 1px solid rgb(29, 158, 218);
              outline: none;
            }
            &:hover {
              border: 1px solid rgb(110, 204, 248);
            }
          }
        }
      }
    }
  }
  .upload-dyncmic-btn {
    width: 500px;
    text-align: center;
    padding: 20px 0;
  }
}
</style>