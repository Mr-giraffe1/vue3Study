
/*后台响应状态*/
export enum ResponseCode {
    SUCCEED = 200
}

/*图片类型*/
export enum ImgTypeCode {
    // 轮播
    Banner = 0,
    // 工厂图
    Factory = 1,
    // 案例
    Case,
    // 服务
    Serve,
    // 新闻
    News,

    OtherImg,
    // 关于我们
    AboutOur = 6

}

export default {
    ResponseCode,
    ImgTypeCode
}