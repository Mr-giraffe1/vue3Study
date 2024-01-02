<template>
  <section class="container">
    <div>
      <div class="top-content"></div>
    </div>
    <div class="about-content margin-top-m flex flex-dir flex-ai-c">
      <h2 class="margin-top-s margin-bottom-sm">咨询内容</h2>
      <span class="line"></span>
    </div>
    <div class="material-content overflow-hidden margin-top-xl">
      <div class="news-content default-animate" v-scrollAnimation="'scroll-animate'">
        <div class="list default-animate" v-scrollAnimation="'scroll-animate'">
          <div class="item flex" v-for="item in news" :key="item?.id">
            <div class="left margin-right-sm flex flex-dir flex-ai-c flex-js-c">
              <span class="font-size-m font-color-lightGray">30</span>
              <span class="font-size-s">{{ item.createTime?.slice(0,7) }}</span>
            </div>
            <div class="right">
              <p class="margin-bottom-m">{{item?.title}}</p>
              <p class="padding-right-m">
                {{ item?.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="ts">
  import {defineComponent, reactive, ref, toRefs} from 'vue';
  import Popup from '@/components/Popup/index.vue';
  import { getApp } from '@/common/hooks';
  import Swiper from "@/components/Swiper/index.vue";
export default defineComponent({
  name: "about",
  components: {
    Swiper,
    Popup,
  },
  setup() {
    const pageData = reactive({
      banner: [],
      caseList: [],
      factory: [],
      serve: [],
      news: []
    });
    const toggleChange = ref<boolean>(false);

    const open = () => toggleChange.value = !toggleChange.value;
    const initPage = async () => {
      /*const map = await getApp().System.Common.getImgAll();
      pageData.news = map.get(getApp().System.Enum.ImgTypeCode.News) || [];*/
    }

    getApp().System.Common.getImg(getApp().System.Enum.ImgTypeCode.News)
        .then((res) => {
          console.log("news数据来了");
          console.log(res);
          pageData.news = res
        });

    (() => {
      initPage();
    })();
    return {
      ...toRefs(pageData),
      toggleChange,
      open
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  .top-content {
    height: 300px;
    background: url("../../assets/images/image27.webp") no-repeat;
    background-size: cover;
  }
  .news-content {
    display: flex;
    justify-content: center;
    .list {
      width: 960px;
      //margin: 0 auto;
      .item {
        padding: 30px 0;
        border-bottom: #FFC001 1px dashed;
        .left {
          background-color: #F2F2F2;
          height: 84px;
          width: 84px;
          border-radius: 5px;
        }
        .right {
          flex: 1;
          .padding-right-m {
          display: -webkit-box;
          line-height: 26px;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          white-space: normal;
          text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>