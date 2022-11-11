export interface FixedAssetBuilder {
    createFicexAsset (codigo:string, nombre:string, precio:number):any;
    whitDescription (description:string):any;
    whitUSeFullife(useFullife:number):any;
    whitDepreciationRate( depreciationRate:number):any;
    whitIngresDate(ingresDate:Date):any;
    whitManufactureDate(manyureDate:Date):any;
    whitFixedAssetsType(type:string):any

}