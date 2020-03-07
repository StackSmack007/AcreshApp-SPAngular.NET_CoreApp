export interface IIngredientCreate {
    name: string;
    authorId:string,
    isEssential: boolean;
    measureType: number;
    origin: number;
    picUrl: string;
    description: string;
}

