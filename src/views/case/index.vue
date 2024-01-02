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
          <div class="image-item" v-for="(image, index) in images.banner">
            <img :src="image.imageUrl[0]" alt="" width="278" height="285" @click="open(index)">
          </div>
        </div>
      </div>

    </div>
    <popup v-model:show="toggleChange" prop="" :data="itemMessage" ref="popup"></popup>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue';
import { toRaw } from "@vue/reactivity";
import { getApp } from '@/common/hooks';
import Popup from '@/components/Popup/index.vue';
// import a from '@/assets/images/image11.webp';
import { Case } from '@/common/controller/case';
export default defineComponent({
  name: "case",
  components: {
    Popup,
  },
  setup() {
    const toggleChange = ref<boolean>(false);
    const isActive = ref(false);
    const items = ref(['T恤定制', '来图设计', '男装加工', '女装加工', '西装定制', '运动装定制']);
    let activeIndex = ref(0);
    let images = reactive({
      banner: []
    });
    // let productMessage = reactive({});
    let productMessage = ref();
    // let itemMessage = ref()
    const popup = ref()
    const initData = async () => {
      const data = await getApp().System.Case.initData();
    }

    function open(index:number){
      toggleChange.value = !toggleChange.value;
      // itemMessage.value=image;
      popup.value.setData(index,images.banner);
      console.log(popup.value)
    }

    function getItemImages(index:number) {
      console.log(productMessage.value)
      console.log(toRaw(productMessage.value))
      // images.banner = (productMessage.value)[index].productList;
      images.banner = toRaw(productMessage.value)[index].productList;
      activeIndex.value = index;
    }

    (async () => {
      await initData()
      getApp().System.Case.getItemImages(0);
    })();



    async function getCustomizedProductItem() {
      await Case.getCustomizedProduct().then(res => {
        productMessage.value = res;
      })
    }

    onMounted(async () => {

      await getCustomizedProductItem();
      getItemImages(0);
    })

    return {
      images,
      isActive,
      items,
      activeIndex,
      productMessage,
      toggleChange,
      popup,
      open,
      getCustomizedProductItem,
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
