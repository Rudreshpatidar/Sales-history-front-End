export class PromotionsModel {
    constructor(
        public promoId:number,
        public promoName:string,
        public promoSubcategory:string,
        public promoSubcategoryId:number,
        public promoCategory:string,
        public promoCategoryId:number,
        public promoCost:number,
        public promoBeginDate:Date,
        public promoEndDate:Date,
        public promoTotal:string,
        public promoTotalId:number,
    ){}
}
