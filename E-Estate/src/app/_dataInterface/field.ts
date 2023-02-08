import { Clone } from "./clone";

export interface Field{
    id:number,
    fieldName:string,
    area:number,
    status:string,
    isMature:boolean,
    dateOpenTapping:string,
    totalTask:number,
    estateId: number,
    cloneId:number,
    clone:string,
    cropCategoryId:number,
    cropCategory:string,
    yearPlanted:string,
    otherCrop:string
}
