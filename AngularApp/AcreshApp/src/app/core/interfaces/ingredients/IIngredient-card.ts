export interface IIngredientCard {
    id: number,
    name: string,
    picUrl: string,
    usageCount:number,
    isVegan: boolean,
    origin:string,
    authorUserName: string,
}

export interface IIngredientDetails extends IIngredientCard {
    measureType:string,
    description:string,
    lastModified:number,

}