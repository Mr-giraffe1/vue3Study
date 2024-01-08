<template>
  <section v-if="props.show" class="popup-container flex flex-js-c flex-ai-c" @click="closeModel" @mousewheel.prevent>
    <div class="content position-relative" @click.stop="() => {}">
      <div class="close position-absolute cursor-pointer" @click.stop="closeModel">
        <svg-icon name="close" size="30"/>
      </div>
      <div class="flex">
        <div class="common cover margin-right-l flex flex-js-c">
          <!-- <img src="@/assets/images/01.png"> -->
          <img :src="itemData.imageUrl[0]">
        </div>
        <div class="common info">
          <h4 class="font-size-m">{{ itemData.title }}</h4>
          <div class="margin-top-sm padding-top-sm">
            <span class="font-size-s font-color-lightGray">编号:<i class="font-color-main">{{ itemData.serialNumber }}</i></span>
          </div>
        </div>
      </div>
      <div class="clothes flex flex-js-c margin-top-l">
        <template v-for="(item) in dataList">
          <div class="item margin-right-s">
            <img :src="item" alt="" width="100" height="80">
          </div>
        </template>
      </div>
      <div class="position-absolute arrow right-arrow" @click.stop="nextItem()">
        <svg-icon name="arrow" size="30"/>
      </div>
      <div class="position-absolute arrow left-arrow" @click.stop="preItem()">
        <svg-icon name="arrow" size="30"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { defineProps, defineEmits, defineExpose,ref } from 'vue';
  import { getApp } from '@/common/hooks';
  let itemData =ref({})
  let nowIndex = ref()
  let nowItemIndex = ref()
  let dataList = ref([])
  const props = defineProps({
    itemMessage:{
      type:Object,
      default: () => {}
    },
    show: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => {}
    }
  });
  const emit = defineEmits(["update:show"]);

  const closeModel = () => {
    emit('update:show', false);
  }
  
  const setData = (index: number, itemIndex: number) => {
    nowIndex.value = index;
    nowItemIndex.value = itemIndex;
    itemData.value = getApp().System.Case.getItemMessage(nowIndex.value, nowItemIndex.value);
    dataList.value = getApp().System.Case.getItemImages(index);
  }
  function nextItem(){
    nowItemIndex.value=(nowItemIndex.value+1)%8;
    itemData.value=getApp().System.Case.getItemMessage(nowIndex.value,nowItemIndex.value);
  }
  function preItem(){
    nowItemIndex.value=(nowIndex.value-1)%8;
    itemData.value=getApp().System.Case.getItemMessage(nowIndex.value,nowItemIndex.value);
    console.log(itemData.value);
  }
  defineExpose({
    setData
  })
  
</script>

<style lang="scss" scoped>
  .popup-container {
    top: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgb(0, 0, 0, .4);
    z-index: 9999;
    .content {
      height: 580px;
      width: 50%;
      background-color: #FFFFFF;
      border-radius: 10px;
      padding: 50px 20px 0 20px;
      box-sizing: border-box;
      .common {
        height: 350px;
        flex: 1;
      }
      .cover {
        img {
          height: 285px;
          width: 285px;
        }
      }
      .info {
        div {
          border-top: 1px $color-gray solid;
        }
      }
    }
    .clothes {
      > .item {
        height: 80px;
        width: 100px;
        background-color: #93D4FA
      }
    }

    /* 操作相关 */
    .close {
      top: 0;
      right: 0;
    }
    .arrow {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: rgba(191, 191, 191, .3);
      top: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      cursor: pointer;
      &.left-arrow {
        left: -80px;
        transform: translateY(-50%);
        padding-right: 5px;
      }
      &.right-arrow {
        right: -80px;
        transform: translateY(-50%) rotate(180deg);
        padding-right: 5px;
      }
    }
  }
</style>