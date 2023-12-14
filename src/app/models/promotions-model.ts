export class PromotionsModel {
    constructor(
        private promoId:number,
        private promoName:string,
        private promoSubcategory:string,
        private promoSubcategoryId:number,
        private promoCategory:string,
        private promoCategoryId:number,
        private promoCost:number,
        private promoBeginDate:Date,
        private promoEndDate:Date,
        private promoTotal:string,
        private promoTotalId:number,
    ){}
}
