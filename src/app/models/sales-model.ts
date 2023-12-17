import { ChannelsModel } from "./channels-model";
import { CustomersModel } from "./customers-model";
import { ProductsModel } from "./products-model";
import { PromotionsModel } from "./promotions-model";
import { TimesModel } from "./times-model";

export class SalesModel {
    constructor(
        public id:number,
        public productPojo:ProductsModel,
        public channelPojo:ChannelsModel,
        public customerPojo:CustomersModel,
        public promotionPojo:PromotionsModel,
        public timesPojo:TimesModel,
        public quantitySold:number,
        public amountSold:number,
    ){}
}




