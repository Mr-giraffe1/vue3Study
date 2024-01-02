
export class Utils {
   /* /!**
     * 权限判断
     * @param value
     *!/
    public static getPermission(value: string[] = []): boolean {
        return value.some((item: string) => {
            return store.getters.roles.includes(item);
        })
    }*/

    /**
     * 获取状态对应状态对象
     * @param status 状态值
     * @param arr 转换数据
     * @param key 需要比对的字段
     * @return objValue
     */
    /*public static getStatus(status: number, arr: any[], key?: string): StatusType<any, any> {
        if (!isNaN(parseInt(String(status))) && arr && arr.length) {
            let field: string = key ? key : 'code';
            let index: number = arr.findIndex((item) => item[field] == status);
            return arr[index]
        } else {
            return {
                description: '-',
                code: -1
            }
        }
    }*/

    /*监听页面元素渲染绑定*/
    public static setIntersectionObserve() {
        return new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(entry.target.dataset.active || "scroll-animate");
                } else {
                   // entry.target.classList.remove(entry.target.dataset.active || "scroll-animate");
                }
            })
        });
    }
}