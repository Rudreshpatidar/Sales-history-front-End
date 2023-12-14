export class ProductsModel {
    constructor(
        private prodName:string,
        private prodDesc:string,
        private prodSubcategory:string,
        private prodSubcategoryId:number,
        private prodSubcategoryDesc:string,
        private prodCategory:string,
        private prodCategoryId:number,
        private prodCategoryDesc:string,
        private prodWeightClass:number,
        private prodUnitOfMeasure:string,
        private prodPackSize:string,
        private supplierId:number,
        private prodStatus:string,
        private prodListPrice:number,
        private prodMinPrice:number,
        private prodTotal:string,
        private prodTotalId:number,
        private prodSrcId:number,
        private prodEffFrom:Date,
        private prodEffTo:Date,
        private prodValid:string
){}
}
