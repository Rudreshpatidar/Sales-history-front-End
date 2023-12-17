export class CountriesModel {
    constructor(
        public countryId:number,
        public countryIsoCode:string,
        public countryName:string,
        public countrySubregion:string,
        public countrySubregionId:number,
        public countryRegion:string,
        public countryRegionId:number,
        public countryTotal:string,
        public countryTotalId:number,
    ){}
}
