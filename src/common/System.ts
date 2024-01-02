import { Utils } from '@/common/utils';
import Enum from '@/common/utils/enum';
import { Common } from '@/common/controller/common';
import {Case} from "@/common/controller/case";


export class System {
    public readonly Utils = Utils;
    public readonly Enum = Enum;

    /*公共请求模块*/
    public Common: Common;
    public Case:Case;
    public constructor(env: any) {
        this.init();
    }

    /*初始化系统*/
    private init(): void {
        this.Common = new Common();
        this.Case = new Case();
    }

}

export default new System(import.meta.env.MODE);

