import { IRecipeIngredient } from './RecipeIngredient';

export interface IRecipeDetails {
    id: string,
    name: string,
    authorUserName: string,
    authorCookRank: number,
    categoryName: string,
    dateOfLastEdit: string,
    description: string,
    pictures: string[],
    videoLink: string,
    votes: { name: string, vote: number }[],
    difficulty: number,
    tags: string[],
    ingredients: IRecipeIngredient[],
    favorizers: string[]
}


