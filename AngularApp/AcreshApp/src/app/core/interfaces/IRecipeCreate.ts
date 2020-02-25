import { IIngredientCreate } from './categories/IIngredientCreate';
export interface IRecipeCreate {
    name: string;
    categoryId: number;
    mainPicture: string;
    description: string;
    pictures: string[];
    videoLink: string;
    difficulty: number;
    tags: string[];
    ingredients: IIngredientCreate[];
}

export interface IRecipeEdit {
    id: string,
    name: string;
    categoryId: number;
    mainPicture: string;
    description: string;
    pictures: string[];
    videoLink: string;
    difficulty: number;
    tags: string[];
    ingredients: IIngredientCreate[];
}


