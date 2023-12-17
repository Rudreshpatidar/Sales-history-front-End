export class ProductsModel {
    constructor(
        public prodId : number,
        public prodName:string,
        public prodDesc:string,
        public prodSubcategory:string,
        public prodSubcategoryId:number,
        public prodSubcategoryDesc:string,
        public prodCategory:string,
        public prodCategoryId:number,
        public prodCategoryDesc:string,
        public prodWeightClass:number,
        public prodUnitOfMeasure:string,
        public prodPackSize:string,
        public supplierId:number,
        public prodStatus:string,
        public prodListPrice:number,
        public prodMinPrice:number,
        public prodTotal:string,
        public prodTotalId:number,
        public prodSrcId:number,
        public prodEffFrom:Date,
        public prodEffTo:Date,
        public prodValid:string
){}
}
