export interface IComment {
 id:number,
    authorUserName: string,
    authorCookRank: number,
    authorAvatarPicture: string,
    dateModified: number,
    dateAdded: number,
    content:string,
    likers: string[],
    disLikers: string[],
  }