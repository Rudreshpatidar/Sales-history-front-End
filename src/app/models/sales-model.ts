import { ChannelsModel } from "./channels-model";
import { CustomersModel } from "./customers-model";
import { ProductsModel } from "./products-model";
import { PromotionsModel } from "./promotions-model";
import { TimesModel } from "./times-model";

export class SalesModel {
    constructor(
        private id:number,
        private product:ProductsModel,
        private channel:ChannelsModel,
        private customer:CustomersModel,
        private promotions:PromotionsModel,
        private times:TimesModel,
        private quantitySold:number,
        private amountSold:number,
    ){}
}
