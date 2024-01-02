<template>
  
  <section class="container">
    <!-- <div style="width:1902px;height: 100%; overflow-x: hidden;"> -->
    <div class="top-content"></div>
    <div class="service-content overflow-hidden margin-top-xl">
      <div class="about-content margin-top-m flex flex-dir flex-ai-c default-animate" v-scrollAnimation="'scroll-animate'">
        <p class="font-color-gray">Latest Information</p>
        <h2 class="margin-top-s margin-bottom-sm title" >联系我们</h2>
        <span class="line margin-bottom-sm"></span>
        <div class="content">
          <div class="item flex flex-dir flex-ai-c">
            <img src="../../assets/images/phone.png"/>
            <p class="font-color-lightGray margin-top-sm">18785654648</p>
          </div>
          <div class="item flex flex-dir flex-ai-c ">
            <img src="../../assets/images/home.png"/>
            <p class="font-color-lightGray margin-top-sm">重庆市渝北区</p>
          </div>
          <div class="item flex flex-dir flex-ai-c">
            <img src="../../assets/images/emal.png"/>
            <p class="font-color-lightGray margin-top-sm">123456789@163.com</p>
          </div>
        </div>
      </div>
    </div>

    <div class="service-content overflow-hidden margin-top-xl">
      <div class="map-content flex flex-js-c default-animate" v-scrollAnimation="'scroll-animate'">
        <div class="map" id="map" style="height: 300px;width: 500px">
        </div>
        <div class="form">
          <form class="user-message">
            <div>  <label class="form-lable" >姓名</label>
              <input class="input-name" v-model="name"/>
              <i class="font-color-red">*</i>
            </div>
            <div>
              <label class="form-lable">电话</label>
              <input class="input-name" v-model="phone"/>
              <i class="font-color-red">*</i>
            </div>
            <div>
              <label class="form-lable">内容</label>
              <input type="text" class="form-content" v-model="content"/>
              <i class="font-color-red">*</i>
            </div>
            <input type="submit" @click="submitMsg" value="提交" class="submit-but">
          </form>
        </div>
      </div>
    </div>
    <!-- <button @click="open">12345312316</button> -->
    
  </section>
</template>

<script lang="ts">
  import { defineComponent,ref,onMounted } from 'vue';
  import { getApp } from '@/common/hooks';
  import { About } from '@/common/controller/about';

  export default defineComponent({
    name: "about",
    components: {
    },
   
    setup() {
      console.log(window)
      let name=ref("");
      let phone=ref("");
      let content=ref("");

      function submitMsg(){
        if(name.value===""||phone.value===""||content.value===""){
          alert("请输入完整信息")
        }else{
          About.uploadMsg(name.value,phone.value,content.value);
          name.value=""
          phone.value=""
          content.value=""
        }
        
      }
      // About.uploadMsg(name.value,phone.value,content.value);
      getApp().System.Common.getImg(getApp().System.Enum.ImgTypeCode.Banner)
      .then((res) => {
        console.log("数据来了");
        console.log(res);
      });
      // 地图嵌入
      const map = ref();
      const point = ref();
      const marker = ref();
      const scaleCtrl =ref();
      const zoomCtrl= ref();
      const cityCtrl=ref();
      function initMap(lng = 106.554633,lat = 29.610363) {
        const map = new window.BMapGL.Map("map");
        // const point = ref();
        console.log(map)
        point.value = new window.BMapGL.Point(lng,lat);//创建点
        marker.value = new window.BMapGL.Marker(point.value);//创建点
        // var marker = new BMapGL.Marker(point);  
        map.centerAndZoom(point.value, 16);
        map.enableScrollWheelZoom(true); //滚轮缩放
        map.addOverlay(marker.value);  ;//在地图上显示标记点
        scaleCtrl.value = new window.BMapGL.ScaleControl();  // 添加比例尺控件
        map.addControl(scaleCtrl);
        zoomCtrl.value = new window.BMapGL.ZoomControl();  // 添加缩放控件
        map.addControl(zoomCtrl);
        cityCtrl.value = new window.BMapGL.CityListControl();  // 添加城市列表控件
        map.addControl(cityCtrl);
          // 点击标注监听事件
        // marker.value.addEventListener("click", function (e) {
        //   alert("您点击了标注");
        //   console.log(e,888888888);
        // });
      }

   
    onMounted(() => {
      initMap()

      
    })
      return {
        name,
        phone,
        content,
        submitMsg
      }
    }
  });
</script>

<style lang="scss" scoped>

  .news-content {
    .list {
      width: 960px;
      margin: 0 auto;
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
        }
      }
    }
  }
  .top-content {
    height: 300px;
    background: url("../../assets/images/about_01.png") no-repeat;
    background-size: cover;
  }

  .about-content {
    padding: 80px 0;
    .title{
      font-size: 30px;
    }
    .line {
      height: 4px;
      width: 100px;
      background-color: $color-main;
    }
    .content {

      width: 1200px;
      height: 177px;
      display: flex;
      justify-content: space-around;
      .item{
        width: 400px;
      }
      img {
        height: 50px;
        width: 50px;
      }
    }
  }

  .map-content {
    padding: 50px 0;
    background-color: rgb(247,247,247);
    .map {
      margin-right: 100px;
      height: 300px;
      width: 500px;
      // border: 1px solid black;
      // > img {
      //   height: 100%;
      //   width: 100%;
      // }
    }
    .user-message{
      >div{
        margin-bottom: 20px;
        
        .form-lable{
          font-size: 14px;
          color: #666666;
          font-weight: bold;
          margin-right: 10px;
        }
      }
      .input-name{
        width: 360px;
        height: 36px;
        border: 1px solid #c7c6c6;
      }
      .form-content{
        width: 360px;
        height: 100px;
        border: 1px solid #c7c6c6;
      }
      .submit-but{
        color: white;
        margin-left: 40px;
        width: 185px;
        height: 45px;
        background-color: #ffad2b;
        border: none;
      }

    }
  }
</style>