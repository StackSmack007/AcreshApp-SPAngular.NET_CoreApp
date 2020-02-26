export interface IComment {
 id:number,
    authorUserName: string,
    authorAvatarPicture: string,
    dateModified: number,
    dateAdded: number,
    content:string,
    likers: string[],
    disLikers: string[],
  }