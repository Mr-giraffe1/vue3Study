import { Utils } from '@/common/utils';

// permission 权限指令
export const permission: { created(el: HTMLElement, binding: any): void } = {
    created(el: HTMLElement, binding: any) {
        const { value }: { value: string[] } = binding;
        if (value && value.length > 0) {
            /*const is_permission = value.some((item: string) => {
                return store.getters.roles.includes(item);
            })
            is_permission ? '' : el.style.display = 'none';*/
        } else {
            throw new Error("没有权限值！示例：v-permission='['admin', 'editor']'")
        }
    }
}

// 滑动动画指令
export const scrollAnimation: {
    unmounted: (el: HTMLElement, binding: any) => void;
    mounted: (el: HTMLElement, binding: any) => void
}= {
    mounted: (el: HTMLElement, binding: any) => {
        el.dataset.active = binding.value;
        Utils.setIntersectionObserve().observe(el);
    },
    unmounted: (el: HTMLElement, binding: any) => {
        Utils.setIntersectionObserve().observe(el);
    }
}
