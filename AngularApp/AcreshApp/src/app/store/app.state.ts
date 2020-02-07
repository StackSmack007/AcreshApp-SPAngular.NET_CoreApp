import { IUserUnreadMsgCount } from 'src/app/core/interfaces/store/user.unread.msg-count.model';

export interface AppState {
    readonly userUnread:IUserUnreadMsgCount[],
}

