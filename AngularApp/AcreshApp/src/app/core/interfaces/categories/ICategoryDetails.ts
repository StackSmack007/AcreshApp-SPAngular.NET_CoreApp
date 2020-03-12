export interface ICategoryDetails {
    id: number;
    name: string;
    description:string;
    authorUserName: string;
    parentCategoryId:number;
    parentCategoryName:string;
    recipesCount: number;
    dateOfCreation: number;
    dateOfLastEdit: number;
}
