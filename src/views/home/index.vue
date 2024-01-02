<template>
  <section class="container">
    <Swiper :list="banner"></Swiper>

    <!--  关于我们  -->
    <div class="about-content flex flex-ai-c flex-js-c overflow-hidden">
      <div class="default-animate" v-scrollAnimation="'scroll-animate'">
        <img src="../../assets/images/image12.webp" alt="">
      </div>
      <div class="default-animate margin-left-m" v-scrollAnimation="'scroll-animate'">
        <p class="font-size-sm font-color-white">IN GOOD FAITH TO WIN THE MARKET, IS COMMITTED TO CREATING HIGH-QUALITY MARKET</p>
        <p class="font-size-m font-color-white">以诚信赢得市场，致力于高品质服装市场</p>
      </div>
      <div
          @click="Router.push({ name: 'case' })"
          class="more-but default-animate cursor-pointer"
          v-scrollAnimation="'scroll-animate'">
          查看更多
      </div>
      <div
          @click="Router.push({ name: 'about' })"
          class="call-but default-animate cursor-pointer"
          v-scrollAnimation="'scroll-animate'">
          联系我们
      </div>
    </div>

    <!--  服务模块  -->
    <div class="service-content overflow-hidden margin-top-xl">
      <div
          class="title flex flex-dir flex-ai-c margin-bottom-m default-animate"
          v-scrollAnimation="'scroll-animate'">
        <h2 class="margin-bottom-s">我们的服务</h2>
        <div class="sub_line margin-top-sm"></div>
      </div>
      <p class="sub-title font-size-sm font-color-lightGray flex flex-js-c default-animate" v-scrollAnimation="'scroll-animate'">
        “芮竹”牌男女工作服造型高雅、做工精良、面料考究，深受广大企业的喜爱。
        行政装，<br>秉承意大利西装的高品质定位，从进入中国市场以来，业绩稳步增长，<br>
        服务和品质得到客户的高度认可。
      </p>
      <div class="default-animate margin-top-m flex flex-js-c" v-scrollAnimation="'scroll-animate'">
        <template v-for="(item, index) in serve">
          <div :class="index !== 0 && 'margin-left-l'">
            <div class="item-image margin-bottom-m">
              <img src="../../assets/images/image14.webp" alt="">
            </div>
            <div class="item-title flex flex-ai-c">
              <img src="../../assets/images/image17.webp" alt="" width="31" height="32">
              <div class="title margin-left-s">{{ item.title }}</div>
            </div>
            <p class="item-content flex flex-js-c font-size-sm font-color-lightGray" style="width: 300px">
              {{ item.content }}
            </p>
          </div>
        </template>
      </div>
    </div>

    <!--  案例模块  -->
    <div class="case-content overflow-hidden margin-top-xl">
      <div class="title flex flex-dir flex-ai-c margin-bottom-m default-animate" v-scrollAnimation="'scroll-animate'">
        <h2 class="margin-bottom-s">我们的案例</h2>
        <div class="sub_line margin-top-sm"></div>
      </div>
      <div class="content default-animate" v-scrollAnimation="'scroll-animate'">
        <template v-for="url in caseList">
          <img :src="url" alt="" />
        </template>
      </div>
    </div>

    <!--  健康的原材料  -->
    <div class="material-content overflow-hidden margin-top-xl">
      <div class="title flex flex-dir flex-ai-c margin-bottom-m default-animate" v-scrollAnimation="'scroll-animate'">
        <h2 class="margin-bottom-s">健康的原材料</h2>
        <div class="sub_line margin-top-sm"></div>
      </div>
      <div class="content flex flex-js-a default-animate" v-scrollAnimation="'scroll-animate'">
        <div>
          <div class="item-image">
            <img src="@/assets/images/image22.webp" alt="" width="152" height="153">
          </div>
          <div class="item-title">面料环保</div>
          <p class="item-content"> 服装定制面料采用进口原材料天然环保，无任何添加剂，气味清新，贴身安全健康</p>
        </div>
        <div>
          <div class="item-image">
            <img src="@/assets/images/image23.webp" alt="" width="152" height="153">
          </div>
          <div class="item-title">柔软亲肤</div>
          <p class="item-content"> 亲肤柔和，柔韧度及细度更佳舒适贴身的服装定制设计，给肌肤带来超自然触感</p>
        </div>
        <div>
          <div class="item-image">
            <img src="@/assets/images/image24.webp" alt="" width="152" height="153">
          </div>
          <div class="item-title">吸汗透气</div>
          <p class="item-content"> 透气良好，特殊网状结构比普通服装定制面料更易干爽透气给您运动后清爽感觉</p>
        </div>
        <div>
          <div class="item-image">
            <img src="@/assets/images/image25.webp" alt="" width="152" height="153">
          </div>
          <div class="item-title">防护性能高</div>
          <p class="item-content"> 对抗恶劣环境，防水保暖抗紫外线、静电，夜间反光材料让出行安全</p>
        </div>
        <div>
          <div class="item-image">
            <img src="@/assets/images/image26.webp" alt="" width="152" height="153">
          </div>
          <div class="item-title">耐牢性能高</div>
          <p class="item-content"> 高弹面料，伸缩性良好，耐磨性，耐晒性，适应各种幅度较大的动作</p>
        </div>
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
        <div
            @click="Router.push({ name: 'about' })"
            class="but margin-top-m cursor-pointer">
            联系我们
        </div>
      </div>
    </div>

    <!--  资讯类容  -->
    <div class="news-content overflow-hidden margin-top-xl margin-bottom-xl">
      <div
          class="title flex flex-dir flex-ai-c margin-bottom-m default-animate"
          v-scrollAnimation="'scroll-animate'">
        <h2 class="margin-bottom-s">资讯内容</h2>
        <div class="sub_line margin-top-sm"></div>
      </div>
      <div class="default-animate margin-top-m flex flex-js-c" v-scrollAnimation="'scroll-animate'">
        <div class="margin-right-l">
          <div class="item-image margin-bottom-m">
            <img src="../../assets/images/image14.webp" alt="">
          </div>
          <div class="title">{{ news[0]?.title }}</div>
          <p class="item-content flex flex-js-c font-size-sm font-color-lightGray" style="width: 300px">
            {{ news[0]?.content }}
          </p>
        </div>
        <div class="margin-right-l">
          <div class="item-image margin-bottom-m">
            <img src="../../assets/images/image15.webp" alt="">
          </div>
          <div class="title">{{ news[1]?.title }}</div>
          <p class="item-content flex flex-js-c font-size-sm font-color-lightGray" style="width: 300px">
            {{ news[1]?.content }}
          </p>
        </div>
        <div>
          <div class="item-image margin-bottom-m">
            <img src="../../assets/images/image16.webp" alt="">
          </div>
          <div class="title">{{ news[2]?.title }}</div>
          <p class="item-content flex flex-js-c font-size-sm font-color-lightGray" style="width: 300px">
            {{ news[2]?.content }}
          </p>
        </div>
      </div>
    </div>

    <!--  产品优势  -->
<!--    <div class="product-content overflow-hidden margin-top-xl">
      <div class="content default-animate" v-scrollAnimation="'scroll-animate'">
        <div class="title">
          <div class="top-title">PRODUCT ADVANTAGE</div>
          <div class="title-content">产品优势</div>
          <div class="subline_"></div>
        </div>
        <div class="product-advantage-items">
          <div  class="product-advantage-main">
            <div>
              <img src="../../assets/images/image29.webp" alt="">
            </div>
            <div class="item-title">
              精选原料优势
            </div>
            <div class="subline-min">
            </div>
            <div class="item-content">
              面料环保，零污染零添加，安全健康
            </div>

          </div>
          <div  class="product-advantage-main">
            <div>
              <img src="../../assets/images/image29.webp" alt="">
            </div>
            <div class="item-title">
              精选原料优势
            </div>
            <div class="subline-min">
            </div>
            <div class="item-content">
              面料环保，零污染零添加，安全健康
            </div>

          </div>
          <div  class="product-advantage-main">
            <div>
              <img src="../../assets/images/image29.webp" alt="">
            </div>
            <div class="item-title">
              精选原料优势
            </div>
            <div class="subline-min">
            </div>
            <div class="item-content">
              面料环保，零污染零添加，安全健康
            </div>

          </div>
          <div  class="product-advantage-main">
            <div>
              <img src="../../assets/images/image29.webp" alt="">
            </div>
            <div class="item-title">
              精选原料优势
            </div>
            <div class="subline-min">
            </div>
            <div class="item-content">
              面料环保，零污染零添加，安全健康
            </div>

          </div>
        </div>
      </div>
    </div>-->
  </section>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  import Swiper from '@/components/Swiper/index.vue';
  import { getApp } from '@/common/hooks';

  export default defineComponent({
    name: "home",
    components: {
      Swiper
    },
    setup() {
      const { Router } = getApp(['Router']);

      const pageData = reactive({
        banner: [],
        caseList: [],
        factory: [],
        serve: [],
        news: []
      });

      const initPage = async () => {
        const map = await getApp().System.Common.getImgAll();
        pageData.banner = map.get(getApp().System.Enum.ImgTypeCode.Banner) || [];
        pageData.factory = map.get(getApp().System.Enum.ImgTypeCode.Factory) || [];
        pageData.caseList = map.get(getApp().System.Enum.ImgTypeCode.Case) || [];
        pageData.serve = map.get(getApp().System.Enum.ImgTypeCode.Serve) || [];
        pageData.news = map.get(getApp().System.Enum.ImgTypeCode.News) || [];
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

    .title {

      .sub_line {

        background-color: $color-main;
        height: 4px;
        width: 56px;

      }

    }

    .case-content {
      .content {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(3, 400px);
        grid-gap: 20px;
        img {
          height: 250px;
          width: 100%;
        }
      }
    }

    .about-content {
      height: 200px;
      background-color: $color-main;

      .more-but {
        margin-left: 40px;
        background-color: white;
        border-radius: 20px;
        color: $color-main;
        width: 202px;
        height: 62px;
        text-align: center;
        line-height: 62px;
      }

      .call-but {
        margin-left: 20px;
        border: 2px solid white;
        border-radius: 20px;
        color: white;
        width: 202px;
        height: 62px;
        text-align: center;
        line-height: 62px;
      }
    }

    .service-content {
      .sub-title {
        text-align: center;
        line-height: 33px;
      }

      .item-image {
        width: 369px;
        height: 281px;
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

    .material-content {

      .content {

        .item-image {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .item-title {
          text-align: center;
          font-size:16px;
          color: #2b2b2b;
          margin-bottom: 20px;
        }

        .item-content {
          text-align: center;
          width: 169px;
          font-size: 13px;
          color: #666666;
          line-height: 30px;
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

    .news-content {

      .item-image {
        width: 369px;
        height: 281px;
      }

      .title {
        font-size: 15px;
        color: black;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .item-content {
        line-height: 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        line-clamp: 3;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .product-content {
      background-image: url("../../assets/images/image28.webp");
      height: 800px;

      .content {
        color: white;
        margin-left: 54%;
        padding-top: 120px;

        .title {
          color: white;
          font-size: 13px;

          .top-title {
            line-height: 30px;
          }
        }

        .title-content {
          color: white;
          font-size: 30px;
          font-weight: bold;
        }

        .subline_ {
          width: 65px;
          height: 5px;
          background-color: white;
          margin: 20px 0px 20px 0px;
        }

        .product-advantage-items {
          width: 500px;
          display: flex;
          flex-wrap: wrap;

          .product-advantage-main {
            margin-left: 20px;
            margin-top: 40px;

            .item-title {
              color: white;
              font-size: 16px;
              font-weight: bold;
              line-height: 50px;
            }

            .subline-min {
              width: 17px;
              height: 2px;
              background-color: white;
            }

            .item-content {
              color: white;
              font-size: 14px;
              line-height: 40px;
            }
          }
        }
      }
    }
  }
</style>