import { IIngredientOption } from '../ingredients/IIngredientOption';

export interface ICauldronRecipeCard {
    id:string;
    name: string;
    authorUserName: string,
    authorCookRank: number,
    categoryName: string;
    categoryId: number;
    mainPicture: string;
    ingredients: IIngredientOption[];
}