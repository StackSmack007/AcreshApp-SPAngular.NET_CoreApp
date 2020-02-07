import { Action } from '@ngrx/store';
import { IUserUnreadMsgCount } from 'src/app/core/interfaces/store/user.unread.msg-count.model';

export const SET_UNR_MESSAGE_COUNT = "[UnrMessage] Set";
export const RESET_UNR_MESSAGE_COUNT = "[UnrMessage] Reset";
export const INCREMENT_UNR_MESSAGE_COUNT = "[UnrMessage] Increment";


export class SetMessageCount implements Action {
    readonly type: string = SET_UNR_MESSAGE_COUNT
    constructor(public payload: IUserUnreadMsgCount) { }
}

export class ResetMessageCount implements Action {
    readonly type: string = RESET_UNR_MESSAGE_COUNT
    constructor(public payload: string) { }
}

export class IncrementMessageCount implements Action {
    readonly type: string = RESET_UNR_MESSAGE_COUNT
    constructor(public payload: string) { }
}

export type Actions = SetMessageCount | ResetMessageCount | IncrementMessageCount;