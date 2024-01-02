<template>
<!--    <section class="container">
    &lt;!&ndash; <span>工厂介绍</span> &ndash;&gt;
    <div style="width:1902px;height: 100%; overflow-x: hidden;">
    <div>
      <div class="head_image">
      </div>
      <div class="about_me" flex>
        <div class="about_me_body default-animate" v-scrollAnimation="'scroll-animate'">
          <div class="title">
              <div style="font-size: 16px; color: rgb(204, 204, 204);padding-top: 65px;">
                Our Service
              </div>
              <div style="font-size: 30px; color: rgb(47, 47, 47); font-weight: bold; padding-top: 5px;">
                关于我们
              </div>
              <div class="subline"></div>
      
          </div>
          <div class="txt">
            <p>公司始创于1997年，自主创立服装定制、运动服套装品牌品牌。从成立之初就专注于运动服定做、运动服团购、服装定制等运动服套装 <br>
              的订制，为无数的团体提供团体服装定制服务，立志生产团体运动服套装，做服装定制生产厂家。多年来，一直专<br>
              注于运动服定做行业，建立了运动服团购网站，为更多的消费者提供团体服装团购服务。
            </p>
          </div>
         
          <div class="images">
            <div> <img src="../../assets/images/image01.webp" alt="" width="369" height="281"></div>
            <div> <img src="../../assets/images/image02.webp" alt=""  width="369" height="281"></div>
            <div> <img src="../../assets/images/image03.webp" alt=""  width="369" height="281"></div>
          </div>
        </div>

      </div>
      <div class="relation_me">
        <div class="relation_me_body default-animate" v-scrollAnimation="'scroll-animate'">
          <div class="title" style="font-size: 36px;color: white;font-weight: bold;">专业设计团队为您量身打造好的团队形象</div>
          <div class="subtitle" style="font-size: 16px;color: white">PROFESSIONAL DESIGN TEAM FOR YOUR BODY TO CREAT THE BEAST TEAM IMAGE</div>
          <div class="but" >联系我们</div>
        </div>

      </div>
      <div class="plant_env default-animate" v-scrollAnimation="'scroll-animate'">
        <div class="plant_env_body">
          <div class="title">
            <div>工厂环境</div>
            <div class="subline" ></div>
        </div>
        <div class="images">
          <div><img src="../../assets/images/image05.webp" alt=""></div>
          <div class="image_item"><img src="../../assets/images/image06.webp" alt=""><div></div><div style="margin-top: 35px;"><img src="../../assets/images/image08.webp" alt=""></div></div>
          <div class="image_item"><div><img src="../../assets/images/image07.webp" alt=""></div><div style="margin-top: 35px;"></div><img src="../../assets/images/image09.webp" alt=""></div>
        </div>
        </div>
       
      </div>
    </div>

    </div>
  </section>-->
  <section class="container">
    <div class="head_image">
    </div>
    <!-- 关于我们 -->
    <div class="service-content overflow-hidden margin-top-xl">
      <div
          class="title flex flex-dir flex-ai-c margin-bottom-m default-animate"
          v-scrollAnimation="'scroll-animate'">
        <span style="font-size: 16px; color: #CCCCCC; margin-bottom: -15px">Our Service</span>
        <h2 class="margin-bottom-s">关于我们</h2>
        <div class="sub_line margin-top-sm"></div>
      </div>
      <p class="sub-title font-size-sm font-color-lightGray flex flex-js-c default-animate" v-scrollAnimation="'scroll-animate'">
        公司始创于1997年，自主创立服装定制、运动服套装品牌品牌。从成立之初就专注于运动服定做、运动服团购、服装定制等运动服套装 <br>
        的订制，为无数的团体提供团体服装定制服务，立志生产团体运动服套装，做服装定制生产厂家。多年来，一直专<br>
        注于运动服定做行业，建立了运动服团购网站，为更多的消费者提供团体服装团购服务。
      </p>
      <div class="default-animate margin-top-m flex flex-js-c" v-scrollAnimation="'scroll-animate'">
        <template v-for="item in AboutOurImgList">
          <div class="margin-right-l">
            <div class="item-image margin-bottom-m">
              <img :src="item" alt="">
            </div>
            <div v-show="false" class="item-title flex flex-ai-c">
<!--         <img src="../../assets/images/image17.webp" alt="" width="31" height="32">-->
              <img :src="item" alt="" width="31" height="32">
              <div class="title">衣服定制</div>
            </div>
            <p v-show="false" class="item-content flex flex-js-c font-size-sm font-color-lightGray" style="width: 300px">
              8年专注个性化运动服装定制。全国质量诚信优秀示范企业，国内知名服装团购/消费者信得过品牌。8年专注个性化运动服装定制。全国质量诚信优秀示范企业。
            </p>
          </div>
        </template>
      </div>
    </div>

    <!--  工厂环境  -->
    <div class="case-content overflow-hidden margin-top-xl" v-scrollAnimation="'scroll-animate'">
      <div class="title flex flex-dir flex-ai-c margin-bottom-m default-animate" v-scrollAnimation="'scroll-animate'">
        <h2 class="margin-bottom-s">工厂环境</h2>
        <div class="sub_line margin-top-sm"></div>
      </div>
      <div class="content flex flex-js-c default-animate" v-scrollAnimation="'scroll-animate'">
        <template v-for="url in factory">
          <img :src="url" alt="" />
        </template>
      </div>
    </div>

    <!--  专业设计  -->
    <div class="team-content overflow-hidden margin-top-xl">
      <div class="content flex flex-dir flex-ai-c default-animate" v-scrollAnimation="'scroll-animate'">
        <h2 class="title margin-bottom-s" style="font-size: 36px;color: white;">
          专业设计团队为您量身打造好的团队形象
        </h2>
        <p class="subtitle" style="font-size: 16px;color: white">
          PROFESSIONAL DESIGN TEAM FOR YOUR BODY TO CREAT THE BEAST TEAM IMAGE
        </p>
        <div class="but margin-top-m cursor-pointer"
             @click="Router.push({ name: 'about' })">
          联系我们</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Swiper from '@/components/Swiper/index.vue';
import { getApp } from '@/common/hooks';
  export default defineComponent({
    name: "describe",
    components: {
      Swiper

    },
    setup() {
      const pageData = reactive({
        factory: [],
        AboutOurImgList: []
      });
      const { Router } = getApp(['Router']);
      const initPage = async () => {
        const map = await getApp().System.Common.getImgAll();
        pageData.factory = map.get(getApp().System.Enum.ImgTypeCode.Factory) || [];
        pageData.AboutOurImgList = map.get(getApp().System.Enum.ImgTypeCode.AboutOur) || []

        console.log('pageData.AboutOurImgList--->',pageData.AboutOurImgList)
      }
     
      (() => {
        initPage();
      })();
      return {
        ...toRefs(pageData),
        Router
      }
    }
  })
</script>

<style lang="scss" scoped>
.container {

  .head_image{
    max-width: 100%;
    height: 300px;
    cursor: default;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    overflow: hidden;
    display: block;
    outline: none;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    background-size: cover;
    background-image: url("../../assets/images/head01.webp")
  }

  .service-content {
    .sub-title {
      text-align: center;
      line-height: 33px;
    }

    .item-image {
      width: 369px;
      height: 281px;
      box-shadow: 0 0 10px #8d8b8b;
      img {
        max-width: 100%;
        height: 100%;
      }
    }

    .title {
      font-size: 18px;
      color: black;
      font-weight: bold;
    }

    .item-content {
      line-height: 30px;
    }
  }

  .case-content {
    .content {
      flex-wrap: wrap;
      gap: 20px;  img {
      height: 250px;
      width: 25%;
    }
    }
  }

  .team-content {
    height: 490px;
    background-image: url("../../assets/images/image04.webp");
    background-repeat: no-repeat;
    background-size: cover;

    .content {
      padding-top: 170px;
      .but {
        text-align: center;
        font-size: 16px;
        width: 200px;
        height: 60px;
        color: white;
        border:1px solid white;
        border-radius: 20px;
        line-height: 60px;
      }
    }
  }
}

</style>