import { IRecipeIngredient } from './RecipeIngredient';

export interface IRecipeDetails {
    name: string,
    authorUserName: string,
    authorCookRank: string,
    rating: number,
    category: string,
    dateOfCreation: string,
    description: string,
    pictures: string[],
    videoLink: string,
    votes: { name: string, vote: number }[],
    difficulty: number,
    tags: string[],
    ingridients: IRecipeIngredient[],
    recipeFavorisers: string[]
}

