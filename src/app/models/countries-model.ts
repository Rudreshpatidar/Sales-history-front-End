export class CountriesModel {
    constructor(
        private countryId:number,
        private countryIsoCode:string,
        private countryName:string,
        private countrySubregion:string,
        private countrySubregionId:number,
        private countryRegion:string,
        private countryRegionId:number,
        private countryTotal:string,
        private countryTotalId:number,
    ){}
}
