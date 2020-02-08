import { MessageStatus } from './MessageStatus';

export interface IMessageRecieved {
    id: number,
    dateOfCreation: number,
    isDeleted: boolean,
    senderUserName: string
    senderAvatarPicture: string
    sontent: string
    status:MessageStatus,
  }