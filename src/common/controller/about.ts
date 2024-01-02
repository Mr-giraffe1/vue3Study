import { request } from '@/common/utils/axios';
export class About {
    static RequestApi: { [key: string]: string } = {
        "SYSTEM_CONSULT" : "tp/consult"
    }
    constructor() {

    }

    static async uploadMsg(name:string,phnoe:string,msg:string) {
        const res = await request({
            url: this.RequestApi.SYSTEM_CONSULT,
            method: 'post',
            responseType: 'json',
            data: {
              
                "name":name,
                "phone":phnoe,
                "content":msg
              
            },
          })
            
        
        console.log(res);
    }
}