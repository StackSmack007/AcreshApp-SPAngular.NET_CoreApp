export interface CategoryNode {
    id: number;
    authorId: string;
    name: string;
    hasRecipes: boolean;
    children?: CategoryNode[];
}