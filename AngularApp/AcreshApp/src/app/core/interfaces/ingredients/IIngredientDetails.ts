import { IIngredientCard } from './IIngredient-card';
export interface IIngredientDetails extends IIngredientCard {
    measureType: string;
    description: string;
    lastModified: number;
    isDeleted:boolean;
}
