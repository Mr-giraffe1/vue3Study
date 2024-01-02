import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import '@/router/permission';
import { permission, scrollAnimation } from '@/common/directive';
import { setupStore } from '@/store';
import 'normalize.css/normalize.css';
/*公共css*/
import('@/styles/common.scss');
/*svg相关*/
import svgIcon from '@/components/SvgIcon/index.vue';
import 'virtual:svg-icons-register';

/*引入Swiper*/
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'swiper/css';
/*初始挂载*/
let app = createApp(App);
app.directive('permission', permission);
app.directive("scrollAnimation", scrollAnimation);
app.component('svg-icon', svgIcon);
setupStore(app);
app.use(router);
// app.use(VueAwesomeSwiper);
app.mount('#app')

