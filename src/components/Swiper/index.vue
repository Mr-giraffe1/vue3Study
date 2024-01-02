<template>
    <div class="project">
        <div class="project-swiper position-relative">
            <swiper
                v-if="list.length"
                effect="cube"
                :slidesPerView="1"
                :loop="true"
                :centeredSlides="true"
                :autoplay="{ delay: 3000, disableOnInteraction: false }"
                :navigation="navigation"
                :modules="[Autoplay, EffectCube, Navigation]">
                <swiper-slide v-for="(url, index) in list" :key="index">
                    <div class="swiper-content">
                      <img loading="lazy" class="img" :src="url" alt=""/>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="button-prev button position-absolute cursor-pointer">
              <svg-icon name="arrow" size="30"/>
            </div>
            <div class="button-next button position-absolute cursor-pointer">
              <svg-icon style="transform: rotate(180deg)" name="arrow" size="30"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { EffectCube, Autoplay, Navigation } from 'swiper/modules';
  import { defineComponent, reactive } from "vue";
  import 'swiper/css/effect-cube';
  import 'swiper/css';

  export default defineComponent({
    components: {
      Swiper,
      SwiperSlide
    },
    props: {
      list: {
        type: Array,
        default: () => []
      }
    },
    setup(props) {

      const navigation = reactive({
        nextEl: '.button-next',
        prevEl: '.button-prev',
      })

      return {
        navigation,
        EffectCube,
        Autoplay,
        Navigation
      }
    }
  });
</script>


<style scoped lang="scss">
  :deep(.swiper-cube-shadow) {
    width: 0;
  }
  .project-swiper {
    .swiper-content {
      height: 700px;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .button {
      height: 60px;
      width: 60px;
      background-color: rgba(191, 191, 191, .5);
      top: 50%;
      transform: translateY(-50%);
      z-index: 99;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    .button-prev {
      left: 10px;
      padding-right: 5px;
    }
    .button-next {
      padding-left: 5px;
      right: 10px;
    }
  }
</style>

