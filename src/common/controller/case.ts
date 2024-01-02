import { request } from '@/common/utils/axios';
export class Case {
    private RequestApi: { [key: string]: string } = {
        "CUSTOMIZEDPRODUCT_ALLLIST" : "/tp/customizedProduct/allList"
    }
    constructor() {
        
    }

    private protectMessage=[];
    private ItemMessage={};
    private ItemImages=[];

    public async initData(){
        this.protectMessage=await this.getCustomizedProduct()
    }

    private async getCustomizedProduct() {
        const res = await request({
            url: this.RequestApi.CUSTOMIZEDPRODUCT_ALLLIST,
            method: 'get',
            
          })
        for (let i = 0; i < res.data.total ; i++) {
            for(let j = 0; j < res.data.rows[i].productList.length; j++){
                res.data.rows[i].productList[j].imageUrl=formatImg(res.data.rows[i].productList[j].imageUrl)
            }
        }
        this.protectMessage=res.data.rows;
        console.log(this.protectMessage)
        return res.data.rows;

        function formatImg(str: string) {
            return str.split(',').map((url: string) => {
                return import.meta.env.VITE_API_AXIOS + url;
            })
        }
    }

     public getItemImages(index:number){
        console.log(this.protectMessage);
        debugger
         for (let i = 0; i < this.protectMessage.length; i++) {
             this.ItemImages.push(this.protectMessage[index].productList[i].imageUrl[0]);
         }
         return this.ItemImages;
     }


    public getItemMessage(index:number,itemIndex:number){
        this.ItemMessage=this.protectMessage[index].productList[itemIndex];
        return this.ItemMessage;
    }


}