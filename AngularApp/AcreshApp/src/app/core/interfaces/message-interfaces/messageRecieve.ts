export interface IMessageRecievedSent {
    id: number,
    dateOfCreation: string,
    isDeleted: boolean,
    senderUserName: string,
    senderAvatarPicture: string,
    recieverUserName:string,
    recieverAvatarPicture: string,

    content: string
    status:string,
  }