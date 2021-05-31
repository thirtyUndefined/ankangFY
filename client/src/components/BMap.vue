<template>
  <div id="module-map">
    <div class="map-top">
      <h4>我和我的家乡</h4>
      <div class="line"></div>
      <span>你有多就没关注过自己的家乡了，这里有那么多我们值得关注的东西，就在这里我们停下脚步，看看自己的家乡</span>
    </div>
    <div id="allmap"></div>
    <div class="map-content-wrapper">
      <div class="map-content">
        <div class="ankang-map">
          <img src="../assets/img/ankangmap.png" alt="" />
        </div>
        <div class="ankang-num">
          <div class="ankang-num-top">
            <h4>安康市</h4>
          </div>
          <div class="ankang-num-center">
            <div class="center-header">
              <span
                @click="handleShowProject"
                :class="{ isChooseCloor: isChoose1 }"
                >安康市非遗项目</span
              >
              <span
                @click="handleShowPerson"
                :class="{ isChooseCloor: isChoose2 }"
                >安康市非遗传承代表人</span
              >
            </div>
            <transition-group>
              <div class="center-main" v-show="isShowProject" key="project">
                <div class="main-top">
                  <div>
                    <p>75</p>
                    <span>传统技艺</span>
                  </div>
                  <div>
                    <p>11</p>
                    <span>传统美术</span>
                  </div>
                  <div>
                    <p>20</p>
                    <span>传统舞蹈</span>
                  </div>
                </div>
                <div class="main-center">
                  <div class="main-top">
                    <div>
                      <p>12</p>
                      <span>传统戏剧</span>
                    </div>
                    <div>
                      <p>2</p>
                      <span>曲艺</span>
                    </div>
                    <div>
                      <p>2</p>
                      <span>传统体育与杂技</span>
                    </div>
                  </div>
                </div>
                <div class="main-bottom">
                  <div class="main-top">
                    <div>
                      <p>2</p>
                      <span>传统医药</span>
                    </div>
                    <div>
                      <p>16</p>
                      <span>传统音乐</span>
                    </div>
                    <div>
                      <p>35</p>
                      <span>民间文学</span>
                    </div>
                    <div>
                      <p>13</p>
                      <span>民俗</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="center-main trans"
                v-show="isShowPerson"
                key="person"
              >
                <div class="main-top">
                  <div>
                    <p>12</p>
                    <span>民间文学</span>
                  </div>
                  <div>
                    <p>10</p>
                    <span>传统音乐</span>
                  </div>
                  <div>
                    <p>18</p>
                    <span>传统舞蹈</span>
                  </div>
                </div>
                <div class="main-center">
                  <div class="main-top">
                    <div>
                      <p>78</p>
                      <span>传统戏剧</span>
                    </div>
                    <div>
                      <p>46</p>
                      <span>曲艺</span>
                    </div>
                    <div>
                      <p>20</p>
                      <span>传统体育与杂技</span>
                    </div>
                  </div>
                </div>
                <div class="main-bottom">
                  <div class="main-top">
                    <div>
                      <p>30</p>
                      <span>传统美术</span>
                    </div>
                    <div>
                      <p>10</p>
                      <span>传统技艺</span>
                    </div>
                    <div>
                      <p>2</p>
                      <span>传统医药</span>
                    </div>
                    <div>
                      <p>10</p>
                      <span>民俗</span>
                    </div>
                  </div>
                </div>
              </div>
            </transition-group>
          </div>
          <div class="ankang-num-bottom">
            <p>注：数据来自安康市政府公开信息；</p>
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
      isShowProject: true,
      isShowPerson: false,
      isChoose1: true,
      isChoose2: false,
    };
  },
  methods: {
    // 展示项目点击事件
    handleShowProject() {
      this.isShowProject = true;
      this.isShowPerson = false;
      this.isChoose1 = true;
      this.isChoose2 = false;
    },
    handleShowPerson() {
      this.isShowPerson = true;
      this.isShowProject = false;
      this.isChoose2 = true;
      this.isChoose1 = false;
    },
    createMap() {
      // GL版命名空间为BMapGL
      var map = new BMapGL.Map("allmap"); // 创建Map实例
      map.centerAndZoom(new BMapGL.Point(118.5, 27.5), 5); // 初始化地图,设置中心点坐标和地图级别
      map.enableScrollWheelZoom(false); //开启鼠标滚轮缩放
      map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
      //   map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
      map.enableKeyboard(); //启用键盘上下左右键移动地图
      map.setMapType(BMAP_EARTH_MAP); // 设置地图类型为地球模式
    },
  },
  mounted() {
    this.createMap();
  },
};
</script>

<style lang="less" scoped>
#module-map {
  min-width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  .map-top {
    width: 100%;
    height: 20%;
    box-sizing: border-box;
    h4 {
      font-size: 2em;
      width: 100%;
      text-align: center;
      letter-spacing: 10px;
      margin-top: 70px;
      margin-left: 5px;
    }
    .line {
      width: 70px;
      height: 3px;
      background: rgba(13, 142, 182, 0.89);
      margin: 20px auto;
    }
    span {
      width: 100%;
      display: inline-block;
      text-align: center;
      font-size: 1em;
      color: #888888;
    }
  }

  #allmap {
    min-height: 70%;
    width: 40%;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgb(46, 46, 46);
  }
  .map-content-wrapper {
    width: 60%;
    // border: 1px solid #000;
    position: absolute;
    top: 29.5%;
    left: 40%;
    height: 70%;
    margin-left: 10px;
    box-sizing: border-box;
    background: url("../assets/img/mapbg.jpg");
    background-position: 100%;
    background-size: cover;
    .map-content {
      background: rgba(0, 0, 0, 0.438);
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      box-shadow: 0 0 10px rgba(39, 39, 39, 0.884);

      .ankang-map {
        width: 50%;
        box-sizing: border-box;
        img {
          width: 100%;
          height: 100%;
          margin: 0 10px 0px 10px;
        }
      }
      .ankang-num {
        width: 50%;
        padding: 10px;
        padding-right: 0;
        // margin: 1px;
        margin-left: 20px;
        background: #f8f6f63b;
        box-sizing: border-box;
        box-shadow: 0 0 3px #000;
        color: #fff;
        .ankang-num-top {
          font-size: 1.5em;
          width: 100%;
          height: 8%;
          margin-top: 20px;
          h4 {
            text-align: center;
            line-height: 100%;
          }
        }
        .ankang-num-center {
          width: 100%;
          height: 80%;
          box-sizing: border-box;
          position: relative;
          .v-enter {
            transform: translateX(100%);
          }
          .v-enter-active {
            transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .v-enter-to {
            transform: translateX(0);
          }
          .v-leave {
            transform: translateX(0);
          }
          .v-leave-active {
            transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .v-leave-to {
            transform: translateX(100%);
          }

          .center-header {
            text-align: center;
            .isChooseCloor {
              color: #f7882e;
            }
            span {
              display: inline-block;
              padding: 20px;
              border-bottom: 1px solid #ccc;
              cursor: pointer;
              transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              &:hover {
                color: #919191;
              }
            }
          }
          .center-main {
            margin: 10px;
            box-sizing: border-box;
            // overflow: hidden;
            position: absolute;
            left: 5%;
            width: 88%;
            .main-top {
              display: flex;
              justify-content: space-between;
              margin-right: 20px;
              div {
                width: 30%;
                text-align: center;
                margin: 3px;
                height: 100px;
                background: #888888;
                box-sizing: border-box;
                cursor: pointer;
                // box-shadow: 0 0 10px rgb(211, 211, 211);
                transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                &:hover {
                  color: #eb842fb2;
                }
                p {
                  height: 50%;
                  line-height: 50px;
                  font-size: 1.8em;
                }
                span {
                  display: inline-block;
                  padding: 10px;
                  font-size: 0.5em;
                }
              }
            }
          }
        }
      }
      .ankang-num-bottom {
        padding: 10px;
        padding-left: 20px;
      }
    }
  }
}
</style>
<style>
.BMap_cpyCtrl {
  display: none;
}
.anchorBL {
  display: none;
}
</style>