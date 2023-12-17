import { CountriesModel } from "./countries-model";

export class CustomersModel { 
    constructor(
        public customerId:number,
        public firstName:string,
        public lastname:string,
        public gender:string,
        public yearOfBirth:number,
        public maritalStatus:string,
        public streetAddress:string,
        public postalCode:string,
        public city:string,
        public cityId:number,
        public stateProvince:string,
        public stateProvinceId:number,
        public country:CountriesModel,
        public mainPhone:string,
        public income:string,
        public creditLimit:number,
        public email:string,
        public total:string,
        public totalId:number,
        public srcId:number,
        public effectiveFrom:Date,
        public effectiveTo:Date,
        public valid:Date,
    ){}
}
