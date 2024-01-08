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
    private ItemTitle=[];
    public async initData(){
        this.protectMessage=await this.getCustomizedProduct()
    }

    private async getCustomizedProduct() {
        const res = await request({
            url: this.RequestApi.CUSTOMIZEDPRODUCT_ALLLIST,
            method: 'get',

          })
        console.log("res",res);
        for (let i = 0; i < res.data.rows.total ; i++) {
            for(let j = 0; j < res.data.rows[i].productList.length; j++){
                res.data.rows[i].productList[j].imageUrl=formatImg(res.data.rows[i].productList[j].imageUrl)
            }
        }
        this.protectMessage=res.data.rows;
        return res.data.rows;

        function formatImg(str: string) {
            return str.split(',').map((url: string) => {
                return import.meta.env.VITE_API_AXIOS + url;
            })
        }
    }

     public getItemImages(index:number){
         this.ItemImages=[];
         console.log("protectMessage",this.protectMessage)
         for (let i = 0; i < this.protectMessage[index].productList.length; i++) {
             this.ItemImages.push("https://8.137.39.49:444/jufeng-admin"+this.protectMessage[index].productList[i].imageUrl);
         }
         console.log("this.ItemImages",this.ItemImages)
         return this.ItemImages;
     }

    public getItemTitle(){
        this.ItemTitle=[];
        for (let i = 0; i < this.protectMessage.length; i++) {
            this.ItemTitle.push(this.protectMessage[i].typeName);
        }
        return this.ItemTitle;
    }

    public getItemMessage(index:number,itemIndex:number){
        console.log(this.protectMessage[index]);
        console.log((this.protectMessage[index]).productList);
        this.ItemMessage=this.protectMessage[index].productList[itemIndex];
        return this.ItemMessage;
    }


}
