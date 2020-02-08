import * as MsgOptions from "../actions/user.unread.count.action"
import { IUserUnreadMsgCount } from 'src/app/core/interfaces/store/user.unread.msg-count.model'

const initialValue: IUserUnreadMsgCount[] = [{ userName: "kitodar", unreadMessagesCount: -2 }];

export function unreadMsgsReducer(state: IUserUnreadMsgCount[] = initialValue, action: MsgOptions.Actions): IUserUnreadMsgCount[] {
    switch (action.type) {
        case MsgOptions.RESET_UNR_MESSAGE_COUNT:
            return [];
        case MsgOptions.SET_UNR_MESSAGE_COUNT:
            return setUnreadMessagesCountForUser(state, action.payload);

        case MsgOptions.INCREMENT_UNR_MESSAGE_COUNT:
            return addNewUnreadMessage(state, action.payload);

        case MsgOptions.RESET_UNR_MESSAGE_COUNT:
            return resetUserUnreadMessages(state, action.payload);

        default:
            return state;
    }
}

function setUnreadMessagesCountForUser(state: IUserUnreadMsgCount[], userUnrMessages) {
    return [...state.slice().filter(x => x.userName !== userUnrMessages.userName), userUnrMessages]
}

function addNewUnreadMessage(state: IUserUnreadMsgCount[], username) {
    console.log(state, "asiktir");
    let foundUser = state.find(x => x.userName === username);
    if (!foundUser) { return state; }
    let { userName, unreadMessagesCount } = foundUser;
    if (!userName) {
        //it does not matter for this user he ll see when he logs in!
        return state;
    }
    unreadMessagesCount++;
    return [...state.slice().filter(x => x.userName !== userName), { userName, unreadMessagesCount: unreadMessagesCount }]
}

function resetUserUnreadMessages(state: IUserUnreadMsgCount[], username) {
    return state.slice().filter(x => x.userName !== username);
}
