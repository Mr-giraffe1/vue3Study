<template>
  <section class="header flex flex-ai-c flex-js-b screen-width-v">
    <div class="logo">
      <img src="@/assets/images/logo.png"/>
    </div>
    <div class="navbar flex">
      <router-link class="margin-right-sm" to="/">
        <span>首页</span>
      </router-link>
      <router-link class="margin-right-sm" to="/describe">
        <span>工厂介绍</span>
      </router-link>
      <router-link class="margin-right-sm" to="/case">
        <span>定制案例</span>
      </router-link>
      <router-link class="margin-right-sm" to="/news">
        <span>新闻中心</span>
      </router-link>
      <router-link to="/about">
        <span>关于我们</span>
      </router-link>
    </div>
  </section>
  <router-view/>
</template>

<script lang="ts" setup>
  console.log()

</script>

<style lang="scss">
  .router-link-active {
    color: $color-main!important;
    border-bottom: 2px solid $color-main;
  }
  .header {
    position: fixed;
    height: 120px;
    padding: 20px 80px;
    box-sizing: border-box;
    background-image: radial-gradient(transparent 1px, #fff 1px);
    background-size: 1px 1px;
    backdrop-filter: saturate(50%) blur(4px);
    border-bottom: 1px solid #ccc;
    z-index: 999;
    .logo {
      img {
        height: 70px;
      }
    }
    .navbar {
      a {
        padding: 20px 0;
        width: 80px;
        text-align: center;
        color: #000;
        &:hover {
          @extend .router-link-active;
        }
      }
    }
  }

  /*滚动动画相关*/
  .default-animate {
    opacity: 0;
    filter: blur(5px);
    transition: all 1s;
    transform: translateX(100%);
  }
  .scroll-animate {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
</style>
