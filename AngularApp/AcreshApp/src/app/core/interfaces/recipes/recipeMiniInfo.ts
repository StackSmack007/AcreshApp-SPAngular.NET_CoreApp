import { IRecipeMiniSubInfo } from './recipeMiniSubInfo';

export interface IRecipeMiniInfo {
    id: string,
    name: string,
    description: string,
    mainPicture: string,
    authorUserName: string,
    authorCookRank: number,
    dateOfCreation: string,
    subInfo: IRecipeMiniSubInfo
}

