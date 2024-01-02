import {
    computed,
    getCurrentInstance,
    reactive,
    ToRef,
    toRefs,
    ComputedRef
} from 'vue';
import { RouteLocationNormalizedLoaded, Router, useRoute, useRouter } from 'vue-router';
import System from '@/common/System';

/*系统api规则*/
interface GetAppType {
    Router: "Router",
    Route: "Route",
    System: "System"
}
export function getApp<K extends keyof GetAppType>(keys?: K[]) {

    let Router: Router;
    let Route: RouteLocationNormalizedLoaded;

    if (keys)
    for (let i = 0; i < keys.length; i ++) {
        switch (keys[i]) {
            case "Router":
                Router = useRouter();
                break;
            case "Route":
                Route = useRoute();
                break;
        }
    }

    return {
        Router,
        Route,
        System
    }
}
