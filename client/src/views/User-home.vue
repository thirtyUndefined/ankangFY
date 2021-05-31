<template>
  <div class="user-home">
    <div class="user-video">
      <h4>我的视频<i class="iconfont icon-shipin1"></i></h4>
      <div class="user-video-flex">
        <div class="user-show-video" v-for="item,index in videoList" :key="index">
          <div class="video-src">
            <video
              :src="require('../../../public' + item.videoUrl)"
              @click="handleRouteNewPage"
            ></video>
            <!-- <span>04:50</span> -->
          </div>
          <div class="user-video-intro">
            <p>{{ item.title }}</p>
            <div class="video-views">
              <span><i class="iconfont icon-bofang"></i>9.6万</span>
              <span><i class="iconfont icon-shijian"></i>1-30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="user-video user-video-wrapper">
      <h4>我的相册<i class="iconfont icon-xiangce"></i></h4>
      <div class="user-video-flex">
        <div class="user-show-video" v-for="item in 7" :key="item">
          <div class="video-src">
            <img src="../assets/img/xiqu.jpg" alt="" />
          </div>
          <div class="user-video-intro">
            <p>陕北民歌--你值得看看</p>
            <div class="video-views">
              <span><i class="iconfont icon-bofang"></i>9.6万</span>
              <span><i class="iconfont icon-shijian"></i>1-30</span>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import * as videoService from '../service/video';
export default {
  data() {
    return {
      videoList: null,
    }
  },
  methods: {
    handleRouteNewPage() {
      let routeUrl = this.$router.resolve({
        path: "/User/Uhome/Video",
      });
    },
  },
  mounted() {
    videoService.getVideos().then(res => {
      this.videoList = res.data;
    })
  }
};
</script>

<style lang="less" scoped>
.user-home {
  margin-top: 10px;
  font-size: 0.6em;
  color: rgba(48, 48, 48, 0.747);
  width: 75%;
  background: #fff;
  .user-video {
    width: 100%;
    box-shadow: 0 0 3px #ccc;
    h4 {
      padding: 25px 15px;
      i {
        padding: 10px;
        font-size: 1em;
        color: rgb(69, 169, 236);
      }
    }
    .user-video-flex {
      display: flex;
      flex-wrap: wrap;
      .user-show-video {
        width: 20%;
        padding: 0 20px;
        padding-bottom: 20px;
        padding-top: 5px;
        .video-src {
          width: 100%;
          position: relative;
          cursor: pointer;
          video {
            width: 100%;
            border-radius: 5px;
          }
          span {
            position: absolute;
            padding: 5px 10px;
            border-radius: 5px;
            color: #fff;
            background: rgba(0, 0, 0, 0.568);
            bottom: 5px;
            right: 0px;
          }
        }
        .user-video-intro {
          p {
            color: rgba(22, 22, 22, 0.918);
            font-size: 0.5em;
            padding-top: 10px;
          }
          .video-views {
            padding-top: 10px;
            span {
              font-size: 0.5em;
              padding: 0px 20px 5px 0px;
              i {
                padding: 3px;
                font-size: 0.4em;
                color: rgb(94, 94, 94);
              }
            }
          }
        }
      }
    }
  }
  .user-video-wrapper {
    img {
      width: 100%;
      border-radius: 5px;
      box-shadow: 4px 4px rgb(233, 233, 233), 8px 8px rgb(204, 204, 204),
        12px 12px rgb(161, 161, 161);
    }
  }
}
</style>