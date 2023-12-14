import { CountriesModel } from "./countries-model";

export class CustomersModel { 
    constructor(
        private customerId:number,
        private firstName:string,
        private lastname:string,
        private gender:string,
        private yearOfBirth:number,
        private maritalStatus:string,
        private streetAddress:string,
        private postalCode:string,
        private city:string,
        private cityId:number,
        private stateProvince:string,
        private stateProvinceId:number,
        private country:CountriesModel,
        private mainPhone:string,
        private income:string,
        private creditLimit:number,
        private email:string,
        private total:string,
        private totalId:number,
        private srcId:number,
        private effectiveFrom:Date,
        private effectiveTo:Date,
        private valid:Date,
    ){}
}
