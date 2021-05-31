<template>
  <div class="directory">
    <div class="title">
      <h1>{{ theme }}</h1>
      <div class="line"></div>
      <div class="introduction">
        <div>{{ introduction }}</div>
      </div>
    </div>

    <div class="show">
      <div class="show-wrapper">
        <div class="show-content" v-for="item in showList" :key="item.title">
          <div class="img-box" @click="drawer = true">
            <img :src="item.showImg" alt="" />
            <div class="mask" ref="mask"><i class="el-icon-thumb"></i></div>
          </div>
          <h6>{{ item.title }}</h6>
          <span>{{ item.time }}</span>
          <div class="content">
            {{ item.content }}
          </div>
          <div class="more" @click="drawer = true">阅读更多</div>

          <el-drawer
            title="安康非物质文化遗产"
            :visible.sync="drawer"
            size="70%"
          >
            <div>
              <div
                class="intro-pancel"
                v-for="draw in item.drawerList"
                :key="draw.drawerSpecialty"
              >
                <div class="intro-wrapper">
                  <div class="intro-content" @click="innerDrawer = true">
                    <p>{{ draw.drawerTitle }}</p>
                    <p class="last-p">{{ draw.drawerSpecialty }}</p>
                    <div class="line"></div>
                  </div>
                  <div class="picture-show" @click="innerDrawer = true">
                    <img :src="draw.drawerImg" alt="" />
                    <div class="intro-img">
                      <div class="intro-title">
                        {{ draw.drawerImgTitle }}
                      </div>
                      <div class="intro-article">
                        {{ draw.drawerImgCon }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <el-drawer
                title="欢迎欣赏，你想了解的这里都有👍"
                :append-to-body="true"
                :before-close="handleClose"
                :visible.sync="innerDrawer"
                size="50%"
              >
                <div class="picture-list">
                  <el-carousel :interval="3000" arrow="always" height="700px">
                    <el-carousel-item
                      v-for="pict in item.pictShowList"
                      :key="pict.imgSrc"
                    >
                      <img :src="pict.imgSrc" alt="" />
                      <h1 class="img-title">{{ pict.title }}</h1>
                      <p class="img-p">{{ pict.introP }}</p>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </el-drawer>
            </div>
          </el-drawer>
        </div>
      </div>
    </div>

    <!-- 更多部分多组件面板 -->
  </div>
</template>

<script>
export default {
  props: {
    theme: String,
    introduction: String,
    showList: Array,
    // drawerList: Array,
  },

  // 弹出面板
  data() {
    return {
      drawer: false,
      innerDrawer: false,
    };
  },
  mounted() {
    // console.log(this.showList[0].drawerList);
  },
  methods: {
    handleClose(done) {
      this.$confirm("现在就要走吗？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
<style lang="less" scoped>
.directory {
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.753);
  min-width: 1400px;

  .title {
    width: 100%;
    height: 20%;
    position: relative;
    h1 {
      font-size: 1.7em;
      color: rgb(0, 0, 0);
      position: relative;
      top: 30%;
      // word-spacing: 1em;
      letter-spacing: 10px;
      text-align: center;
    }
    .line {
      width: 70px;
      height: 3px;
      background: rgba(13, 142, 182, 0.89);
      position: absolute;
      top: 60%;
      left: calc(50% - 43px);
    }
    .introduction {
      width: 700px;
      height: 50px;
      margin: 0 auto;
      line-height: 20px;
      color: #888888;
      position: absolute;
      left: calc(50% - 350px);
      text-indent: 2em;
      top: 80%;
    }
  }
  .show {
    margin-top: 30px;
    width: 100%;
    height: 55%;

    .show-wrapper {
      width: 70%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      .show-content {
        width: 30%;
        height: 100%;
        position: relative;
        background: rgb(235, 233, 233);
        box-shadow: 3px 3px 5px #ccc;
        overflow: hidden;
        .img-box {
          width: 100%;
          height: 45%;
          cursor: pointer;
          &:hover .mask {
            transform: translateY(0);
          }
          img {
            width: 100%;
            height: 100%;
          }
          .mask {
            position: absolute;
            width: 100%;
            height: 45%;
            top: 0;
            background: rgba(255, 255, 255, 0.349);
            transform: translateY(-100%);
            transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
            i {
              font-size: 1.8em;
              color: rgb(255, 255, 255);
              width: 45px;
              height: 45px;
              background: rgba(0, 0, 0, 0.904);
              text-align: center;
              line-height: 45px;
              position: absolute;
              top: calc(50% - 22.5px);
              left: calc(50% - 22.5px);
              cursor: pointer;
            }
          }
        }
        h6 {
          color: #000;
          margin: 10px 0 10px 5px;
          cursor: pointer;
          transition: color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          &:hover {
            color: #575757;
          }
        }
        span {
          display: block;
          color: #888888;
          font-size: 0.8em;
          margin: 0 0 20px 5px;
        }
        .content {
          line-height: 1.5em;
          color: rgb(95, 95, 95);
          margin-left: 5px;
        }
        .more {
          position: absolute;
          bottom: 3%;
          color: rgb(37, 80, 223);
          margin: 0px 0 0 5px;
          transition: color 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
          cursor: pointer;
          &:hover {
            color: rgb(37, 37, 37);
          }
        }
      }
    }
  }
  .intro-pancel {
    .intro-wrapper {
      width: 100%;
      height: 28vh;
      display: flex;
      justify-content: space-around;
      div {
        width: 50%;
        padding: 10px;
      }
      .intro-content {
        // width: 100%;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;

        &:hover .line {
          width: 30%;
        }
        p {
          font-size: 1.3em;
          padding: 10px;
          padding-left: 70px;
          padding-top: 30px;
        }
        .last-p {
          font-size: 1em;
          padding-top: 10px;
          color: #575757;
        }
        .line {
          margin-left: 70px;
          width: 5%;
          background: #cc590c;
          transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        div {
          font-size: 2em;
        }
      }
      .picture-show {
        cursor: pointer;
        margin-right: 70px;
        overflow: hidden;
        &:hover .intro-img {
          transform: translateY(0);
        }
        img {
          width: 100%;
          height: 100%;
        }
        .intro-img {
          width: calc(100% - 20px);
          height: 40%;
          background: rgba(0, 0, 0, 0.692);
          position: relative;
          top: -53%;
          transform: translateY(100%);
          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          color: #fff;
          .intro-article {
            font-size: 0.7em;
            width: 100%;
            padding: 0;
            text-indent: 2em;
          }
        }
      }
    }
  }
  .more-pic {
    color: #888888;
    width: 90%;
    text-align: right;
    padding: 5px;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      color: #f38841;
    }
  }
}
</style>

<style>
.picture-list {
  position: relative;
}
.picture-list img {
  width: 100%;
  height: 80%;
  max-height: 550px;
}
.picture-list .img-title {
  width: 100%;
  padding: 10px;
  font-size: 1.5em;
  /* top: 100%; */
  text-align: center;
}
.picture-list .img-p {
  text-indent: 2em;
  padding: 10px;
}
</style>
