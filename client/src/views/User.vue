<template>
  <div id="user">
    <div class="user-nav">
      <div class="user-info">
        <div class="user-img">
          <!-- <img :src="userImg" alt="" /> -->
        </div>
        <div class="user-content">
          <span>{{ userName }} <i class="iconfont icon-male-01"></i></span>
          <input
            type="text"
            placeholder="编辑个性签名"
            @input="handleQianm"
            v-model="qianming"
          />
        </div>
      </div>
      <div class="user-bottom-nav">
        <div class="user-nav-left">
          <ul>
            <router-link :to="{ name: 'Uhome' }"
              ><li>
                <i class="iconfont icon-zhuye first"></i>主页
              </li></router-link
            >
            <router-link :to="{ name: 'Dynamic' }"
              ><li class="second-li">
                <i class="iconfont icon-dongtai second"></i>动态<span>{{ dyNum }}</span>
              </li></router-link
            >
            <router-link :to="{ name: 'Conttribute' }"
              ><li>
                <i class="iconfont icon-shipin third"></i>投稿
              </li></router-link
            >
          </ul>
        </div>
        <div class="user-nav-right">
          <!-- <ul>
            <li>
              获赞数
              <p>3</p>
            </li>
            <li>
              播放数
              <p>4</p>
            </li>
          </ul> -->
        </div>
      </div>
    </div>
    <div class="user-body">
      <router-view></router-view>
    </div>
    <div class="user-footer"></div>
  </div>
</template>
<script>
import * as videoService from '../service/video';
export default {
  data() {
    return {
      qianming: "",
      // userImg: require("../../../public" + this.$store.state.userInfo.userImg),
      userName: this.$store.state.userInfo.userName,
      dyNum: null,
    };
  },
  mounted() {
    videoService.getVideos().then( res => {
      this.dyNum = res.data.length;
    })
  },
  methods: {
    handleQianm(e) {
      // 数据库中提取
      console.log(e);
    },
  },
  // beforeRouteEnter(to, from, next) {
  //   const token = localStorage.getItem("token");
  //   if(token) {
  //     next()
  //   }else {
  //     let flag = window.confirm("您需要登录后访问，是否现在登录");
  //     if(flag) {
  //       next()
  //       console.log(Vue)
  //     }else {
  //       next(false);
  //     }
  //   }
  // },
  beforeRouteLeave(to, from, next) {
    this.$parent.closeNav();
    next();
  },
};
</script>
<style lang="less" scoped>
#user {
  width: 100%;
  height: 100vh;

  color: #000;
  font-size: 2em;
  padding: 0 100px;
  box-sizing: border-box;
  // background: rgb(240, 240, 240);
  // box-shadow: 0 -5px 10px rgb(207, 207, 207);
  min-width: 1400px;
  // overflow-y: scroll;
  .user-nav {
    width: 100%;
    // margin-top: 18px;
    height: 40vh;
    min-height: 300px;
    // border: 1px solid #000;
    background: #fff;
    box-shadow: 0 0 3px #ccc;
    .user-info {
      width: 100%;
      height: 80%;
      background: url("../assets/img/user-bg.png") no-repeat;
      background-size: cover;
      position: relative;
      .user-img {
        width: 80px;
        height: 80px;
        position: absolute;
        bottom: 20%;
        left: 3%;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid #ccc;
        }
      }
      .user-content {
        color: #fff;
        height: 50%;
        position: absolute;
        bottom: 0%;
        left: 12%;

        span {
          i {
            color: rgb(80, 146, 245);
            font-size: 0.7em;
            position: relative;
            top: -10px;
            left: -3px;
          }
        }

        input {
          display: block;
          margin-top: 10px;
          width: 300%;
          height: 30px;
          font-size: 0.5em;
          color: #fff;
          background: transparent;
          border: none;
          border-radius: 5px;
          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          box-sizing: border-box;
          &::-webkit-input-placeholder {
            color: #fff;
          }
          &:hover {
            border: 1px solid #ccc;
            background: rgba(226, 226, 226, 0.466);
          }
          &:focus {
            border: 1px solid #fff;
            background: #fff;
            padding-left: 10px;
            color: #888888;
            outline: none;
          }
        }
      }
    }
    .user-bottom-nav {
      font-size: 0.55em;
      color: #222222;
      height: 20%;
      display: flex;
      .user-nav-left {
        width: 50%;
        ul {
          display: flex;
          height: 100%;
          a {
            margin-right: 5px;
            &:hover {
              // border: 3px solid #f0f;
              text-decoration: none;
              color: rgb(65, 158, 245);
              border-bottom: 3px solid rgba(99, 178, 243, 0.582);
              box-sizing: border-box;
            }
            li {
              line-height: 42px;
              padding: 7px;
              text-align: center;
              cursor: pointer;
              margin-right: 5px;
              box-sizing: border-box;
              transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
              i {
                padding: 0 7px;
                color: rgb(139, 235, 95);
                font-size: 1.3em;
              }
              .second {
                color: rgb(245, 235, 104);
                font-size: 2em;
                padding: 0 5px;
                position: relative;
                top: 5px;
              }
              .third {
                color: rgb(69, 175, 236);
              }
              .fourth {
                color: rgb(249, 53, 53);
              }
              span {
                padding-left: 5px;
                color: #888888;
                font-size: 0.8em;
              }
            }
            .second-li {
              line-height: 26px;
              padding: 11px;
            }
          }
          .router-link-active {
            color: rgb(65, 158, 245);
            border-bottom: 3px solid rgb(76, 166, 240);
            box-sizing: border-box;
          }
        }
      }
      .user-nav-right {
        padding-left: 300px;
        ul {
          display: flex;
          li {
            padding: 10px 10px;
            text-align: center;
            font-size: 0.9em;
            color: #888888;

            p {
              padding-top: 5px;
              color: rgb(1, 19, 10);
            }
          }
          .li-1,
          .li-2 {
            cursor: pointer;
            transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover {
              color: rgb(38, 138, 231);
            }
            &:hover p {
              color: rgb(38, 138, 231);
            }
          }
        }
      }
    }
  }
  .user-footer {
    width: 100%;
    height: 50px;
  }
}
</style>