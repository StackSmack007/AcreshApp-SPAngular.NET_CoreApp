const basePath: string = "https://localhost:5001/";

export const authPaths: IAuthPaths = {
    checkUserNameOrEmailTaken: basePath + "users/is-singIn-data-free",//post
    registerUser: basePath + "users/register",//post
    logInUser: basePath + "users/login",//post
    updateToken: basePath + "users/update-my-token",//post
}

export interface IAuthPaths {
    checkUserNameOrEmailTaken: string,
    registerUser: string,
    logInUser: string
    updateToken: string,
}

export const userDataPaths: IUserDataPaths = {
    getUserProfileData: basePath + "userData/profileInfo?userName=",//get
    getUserProfileEditData: basePath + "userData/profile?userId=",//get
    updateUserInfo: basePath + "userData/profile",
    submitEdittedData: basePath + "userData/editData",//post
    setBlocking: basePath + "userData/setUserBlocking",//post
}

export interface IUserDataPaths {
    getUserProfileData: string,
    getUserProfileEditData: string,
    updateUserInfo: string,
    submitEdittedData: string,
    setBlocking: string,
}

export const messagePaths: IMessagePaths = {
    baseCtrlPath: basePath + "messages/",//post
    userUnreadCount: basePath + "messages/unread-count"
}
export interface IMessagePaths {
    baseCtrlPath: string,
    userUnreadCount: string,
}

