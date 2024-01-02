<template>
  <section class="container screen-height-v flex flex-js-c flex-ai-c">
    <!-- <div style="height: 200px;width: 200px;" >
      <svg-icon name="pass"/>
    </div> -->
    <swiper></swiper>
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { getApp } from "@/common/hooks";
  import swiper from "@/components/Swiper/index.vue";
  export default defineComponent({
    name: "login",
    components: {
      swiper
    },
    data() {
      return { }
    },
    setup(props, context) {

    }
  })
</script>

<style lang="scss" scoped>
  .container {
    background-color: red;
  }
</style>