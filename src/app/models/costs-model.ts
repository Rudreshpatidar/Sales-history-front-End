import { ChannelsModel } from "./channels-model";
import { ProductsModel } from "./products-model";
import { PromotionsModel } from "./promotions-model";
import { TimesModel } from "./times-model";

export class CostsModel {
constructor(
    private id:number,
    private product:ProductsModel,
    private time:TimesModel,
    private promotion:PromotionsModel,
    private channel:ChannelsModel,
    private unitCost:number,
    private unitPrice:number,
){}
}
