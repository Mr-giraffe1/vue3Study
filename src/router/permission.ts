import router from './index';
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

router.beforeEach(async (to: any, form: RouteLocationNormalized , next: NavigationGuardNext) => {
    if (!to.meta.isLogin) return next();

    /*if (store.getters.token) {
        if (to.name === 'login') {
            next({path: '/'});
            NProgress.done();
        } else {
            if (!store.getters.roles.length) {
                const res = await store.dispatch('user/getUserInfo');
                store.dispatch('permission/generateRoute', res);
                next({...to, replace: true});
            } else {
                next();
            }
        }
    }*/
    //~whiteList.indexOf(to.name as string) ? next() : next(`/login?redirect=${ to.path }`);
    /*
     } else {

     }*/
 });

router.afterEach(() => {
});
