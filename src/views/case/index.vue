<template>
  <section class="container">
    <!-- <span>定制案例</span> -->
    <div class="head-image">
      <!-- <img src="../../assets/images/image10.webp" alt=""> -->
    </div>
    <div class="case">

      <div class="case-body">
        <div class="nuem">


          <div v-for="(item, index) in items" :key="index"
            :class="{ 'nuem-item': true, 'nuem-item-active': activeIndex === index }" @click="getItemImages(index)">
            {{ item }}
          </div>
        </div>
        <div class="nuem-images">
          <div class="image-item" v-for="(imageurl, index) in images.banner">
            <img :src="imageurl" alt="" width="278" height="285" @click="open(index)">
          </div>
        </div>
      </div>

    </div>
    <popup v-model:show="toggleChange" prop="" :data="isActive" ref="popup"></popup>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref} from 'vue';
import { getApp } from '@/common/hooks';
import Popup from '@/components/Popup/index.vue';
export default defineComponent({
  name: "case",
  components: {
    Popup,
  },
  setup() {
    const toggleChange = ref<boolean>(false);
    const isActive = ref(false);
    const items = ref([]);
    let activeIndex = ref(0);
    let images = reactive({
      banner: []
    });
    let productMessage = ref();
    const popup = ref()
    const initData = async () => {
      await getApp().System.Case.initData();
    }

    function open(index:number){
      toggleChange.value = !toggleChange.value;
      popup.value.setData(activeIndex.value,index);
    }

    function getItemImages(index:number) {
      images.banner = getApp().System.Case.getItemImages(index);
      activeIndex.value = index;
    }

    (async () => {
      await initData()
      items.value=getApp().System.Case.getItemTitle();
      getItemImages(0);
    })();

    return {
      images,
      isActive,
      items,
      activeIndex,
      productMessage,
      toggleChange,
      popup,
      open,
      getItemImages,
    }
  }



})

</script>

<style lang="scss" scoped>
.head-image {
  width: 1903px;
  height: 300px;
  cursor: default;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  outline: none;
  margin: 0px auto;
  position: relative;
  z-index: 1;
  background-size: cover;
  background-image: url("../../assets/images/head01.webp");
}

.case {
  display: flex;
  justify-content: center;

  .case-body {
    width: 1200px;
    height: 800px;
    padding-top: 90px;

    .nuem-item-active {
      margin: 0px 10px 0px 10px;
      background-color: $color-main;
      border-radius: 20px;
      width: 146px;
      height: 40px;
      line-height: 40px;
      color: white;
      text-align: center;
    }

    .nuem {
      display: flex;
      justify-content: center;
      margin-bottom: 60px;

      .nuem-item {
        margin: 0px 10px 0px 10px;
        font-size: 16px;
        color: #666666;
        width: 146px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        cursor: pointer;

        &:active {
          @extend .nuem-item-active
        }

      }

    }

    .nuem-images {
      display: flex;
      width: 1200px;
      flex-wrap: wrap;
      justify-content: space-around;

      .image-item {
        width: 275px;
        height: 285px;
        visibility: visible;
        margin-bottom: 20px;

      }
    }

  }

}</style>
