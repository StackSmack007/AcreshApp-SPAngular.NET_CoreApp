import { IRecipeIngredientAmmount } from './IRecipeIngredientAmmount';

export interface IRecipeCreate {
    name: string;
    authorId: string;
    categoryId: number;
    mainPicture: string;
    description: string;
    pictures: string[];
    videoLink: string;
    difficulty: number;
    tags: string[];
    ingredients: IRecipeIngredientAmmount[];
}

