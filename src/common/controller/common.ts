import { ImgTypeCode } from '@/common/utils/enum';
import { request } from '@/common/utils/axios';

export class Common {
    private RequestApi = {
        "TP_IMAGE_LIST" : "/tp/image/alllist"
    }

    private MapImg: Map<ImgTypeCode, any[]> = new Map();

    constructor() {

    }

    public async getImgAll() {
        !this.MapImg.size && await this.initImg();
        return this.MapImg;
    }

    public async getImg(code: ImgTypeCode) {
        let list: undefined | any[] = [];
        if (this.MapImg.has(code)) {
            list = this.MapImg.get(code);
        } else {
            await this.initImg();
            list = this.MapImg.get(code);
        }
        return list;
    }

    public async initImg() {
        const res: any = await request({
            url: this.RequestApi.TP_IMAGE_LIST
        });

        const data = formatData(res.data);

        data.forEach(item => {
           if (item) {
               switch (parseInt(item.type)) {
                   case ImgTypeCode.Banner:
                       this.MapImg.set(ImgTypeCode.Banner, formatImg(item.url));
                       break;
                   case ImgTypeCode.AboutOur:
                       this.MapImg.set(ImgTypeCode.AboutOur, formatImg(item.url));
                       break;
                   case ImgTypeCode.Factory:
                       this.MapImg.set(ImgTypeCode.Factory, formatImg(item.url));
                       break;
                   case ImgTypeCode.Case:
                       this.MapImg.set(ImgTypeCode.Case, formatImg(item.url));
                       break;
                   case ImgTypeCode.Serve:
                       this.MapImg.set(ImgTypeCode.Serve, item.list);
                       break;
                   case ImgTypeCode.News:
                       this.MapImg.set(ImgTypeCode.News, item.list);
                       break;
                   default:
                       break;
               }
           }
        });

        function formatImg(str: string) {
            return str.split(',').map((url: string) => {
                return import.meta.env.VITE_API_AXIOS + url;
            })
        }

        function formatData(list: any[]) {
            let new_list = [];
            for (let i = 0; i < list.length; i++) {
                const data: any = new_list.find((item) => item.type == list[i].type);
                if (!data) {
                    const obj = {
                        type: list[i].type,
                        list: [list[i]],
                        url: list[i].url
                    }
                    new_list.push(obj);
                } else data.list.push(list[i]);
            }
            return new_list;
        }
    }
}