import { CookRank } from "../CookRank";

export interface IUserInfo {
    id: string;
    userName: string;
    roles: string[];
    fullName: string;
    cookRank: CookRank;
    avPic: string;
    blocked: string[];
    exp: number;
}
