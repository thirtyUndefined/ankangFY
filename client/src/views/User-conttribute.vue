<template>
  <div class="conttribute">
    <div class="conttri-nav">
      <router-link tag="div" :to="{ name: 'Postvideo' }"
        >视频 <i class="iconfont icon-shipin1"></i
      ></router-link>
      <!-- <router-link tag="div" :to="{ name: 'Postpicture' }"
        >相薄 <i class="iconfont icon-xiangce"></i
      ></router-link> -->
    </div>
    <div class="contribute">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.conttribute {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 14px;
  .conttri-nav {
    width: 20%;
    box-shadow: 0 0 3px rgb(155, 155, 155);
    div {
      width: 100%;
      text-align: center;
      padding: 20px 0;
      font-size: 1.2em;
      cursor: pointer;
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      i {
        padding-left: 50%;
      }
      &:hover {
        background: rgba(27, 121, 243, 0.432);
        color: aliceblue;
      }
    }
    .router-link-exact-active {
      background: rgb(27, 121, 243);
      color: aliceblue;
      &:hover {
        background: rgb(27, 121, 243);
        color: aliceblue;
      }
    }
  }
  .contribute {
    width: 79%;
    box-shadow: 0 0 3px rgb(153, 153, 153);
  }
}
</style>