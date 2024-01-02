import { createRouter, createWebHistory, RouteLocation, RouteLocationRaw, RouteRecord } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
import Admin from "@/common/Admin";

// 路由类型
export declare type RouteRecordType = {
    hidden?: string | boolean;
    meta?: {
        title?: string;
        type?: 'home';
        icon?: string;
        permission?: string[];
        active?: string
        isLogin?: boolean //是否需要登录
    };
    children?: RouteRecordType[];
} & RouteRecordRaw

/**
 * 处理重定向
 * @param to 当前匹配路径
 * @param name 匹配对应路由
 */
function setRedirect(to: RouteLocation, path: string): RouteLocationRaw {
    let route_name: any;
    to.matched.forEach((item: RouteRecord) => {
        if (item.path === path) {
            const router = item.children.filter((item: RouteRecordType) => !item?.hidden);
            route_name = router[0].name;
        }
    });
    return { name: route_name }
}

// 静态路由
export const constantRouters: Array<RouteRecordType> = [
    {
        path: '/',
        meta: { },
        component: Layout,
        redirect: (to: RouteLocation) => setRedirect(to, '/'),
        children: [
            {
                path: 'index',
                name: 'home',
                meta: {},
                component: () => import('@/views/home/index.vue'),
            }
        ]
    },
    {
        path: '/news',
        component: Layout,
        redirect: (to: RouteLocation) => setRedirect(to, '/news'),
        meta: {},
        children: [
            {
                path: 'index',
                name: 'news',
                meta: {},
                component: () => import('@/views/news/index.vue'),
            }
        ]
    },
    {
        path: '/case',
        component: Layout,
        redirect: (to: RouteLocation) => setRedirect(to, '/case'),
        meta: {},
        children: [
            {
                path: 'index',
                name: 'case',
                meta: {},
                component: () => import('@/views/case/index.vue'),
            }
        ]
    },
    {
        path: '/describe',
        component: Layout,
        redirect: (to: RouteLocation) => setRedirect(to, '/describe'),
        meta: {},
        children: [
            {
                path: 'index',
                name: 'describe',
                meta: {},
                component: () => import('@/views/describe/index.vue'),
            }
        ]
    },
    {
        path: '/about',
        component: Layout,
        redirect: (to: RouteLocation) => setRedirect(to, '/about'),
        meta: {},
        children: [
            {
                path: 'index',
                name: 'about',
                meta: {},
                component: () => import('@/views/about/index.vue'),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRouters,
    scrollBehavior() {
        return { top: 0 }
    }
});

export default router;