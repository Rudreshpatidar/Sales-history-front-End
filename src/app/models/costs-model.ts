import { ChannelsModel } from "./channels-model";
import { ProductsModel } from "./products-model";
import { PromotionsModel } from "./promotions-model";
import { TimesModel } from "./times-model";

export class CostsModel {
constructor(
    public id:number,
    public product:ProductsModel,
    public time:TimesModel,
    public promotion:PromotionsModel,
    public channel:ChannelsModel,
    public unitCost:number,
    public unitPrice:number,
){}
}
