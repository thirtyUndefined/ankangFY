<template>
  <div id="app">
    <div class="btn"><i class="el-icon-s-unfold" @click="openNav"></i></div>
    <div id="nav" ref="nav">
      <div class="btn"><i class="el-icon-error" @click="closeNav"></i></div>
      <div class="nav-box">
        <div class="nav-list">
          <router-link to="/">首页</router-link>
          <router-link :to="{name: 'MapGl'}">地图</router-link>
          <router-link :to="{name: 'Video'}">映像</router-link>
          <router-link :to="{name: 'Appreciate'}">众赏</router-link>
          <router-link :to="{name: 'Graphics'}">总览</router-link>
          <router-link :to="{name: 'Knowledge'}">百科</router-link>
          <router-link :to="{name: 'User'}">个人空间</router-link>
          <router-link :to="{name: 'Mine'}">关于本站</router-link>
        </div>
        <div class="logo">
          <img src="./assets/img/ankang.png" alt="" />
          <span>安康市非物质文化遗产数字地图</span>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="animated animate__backInLeft"
      leave-active-class="animated animate__backOutDown"
    >
      <!-- <keep-alive> -->
      <router-view />
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    closeNav() {
      this.$refs.nav.style.transform = "translateX(100%)";
      this.$refs.nav.style.opacity = "0.1";
    },
    openNav() {
      this.$refs.nav.style.transform = "translateX(0)";
      this.$refs.nav.style.opacity = "1";
    },
  },
  beforeRouteLeave(to, from, next) {
    if (confirm("确定离开吗？") == true) {
      next(); //跳转到另一个路由
    } else {
      next(false); //不跳转
    }
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  .btn {
    position: fixed;
    z-index: 9999;
    right: 3%;
    font-weight: bold;
    color: #b8b8b8;
    font-size: 3em;
    margin: 10px;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      color: #fc4f0a8f;
      transform: rotate(180deg);
      cursor: pointer;
    }
  }

  // 组件过渡动画
}

#nav {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9999;
  background: #000000c9;
  opacity: 1;
  transform: translateX(100%);
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  .nav-box {
    position: fixed;
    right: 0;
    height: 0;
    width: 25%;
    border-bottom: 100vh solid rgb(255, 255, 255);
    border-left: 15vw solid transparent;
    .nav-list {
      text-align: center;
      position: absolute;
      right: 5%;
      top: 20vh;
      .router-link-exact-active {
        color: #fc4f0a8f;
      }
      a {
        text-decoration: none;
        color: #686967;
        display: block;
        font-size: 1.3em;
        padding: 15px 30px;
        transition: all 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        border: 1px solid transparent;
        &::before {
          content: "";
          display: inline-block;
          position: relative;
          top: -5px;
          width: 0px;
          height: 1px;
          background: #fc4f0a8f;
          transition: all 0.5s ease-in;
        }
        &:hover {
          color: #fc4f0a8f;
        }
        &:hover::before {
          width: 60px;
        }
      }
    }
    .logo {
      position: absolute;
      top: 87vh;
      left: -10vw;
      min-width: 970px;
      img {
        width: 77px;
        background-color: #000;
        border-radius: 50%;
      }
      span {
        color: #0c2c28;
        font-size: 1.4em;
        margin-left: 30px;
        vertical-align: 30px;
        white-space: nowrap;
      }
    }
  }
}
</style>
