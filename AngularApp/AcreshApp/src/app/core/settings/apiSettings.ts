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
    userProfileData: basePath + "userData/profileInfo?userName=",//get
    userProfileEditData: basePath + "userData/profile?userId=",//get
    updateUserInfo: basePath + "userData/profile",
    submitEdittedData: basePath + "userData/editData",//post
    setBlocking: basePath + "userData/setUserBlocking",//post
}

export interface IUserDataPaths {
    userProfileData: string,
    userProfileEditData: string,
    updateUserInfo: string,
    submitEdittedData: string,
    setBlocking: string,
}

export const messagePaths: IMessagePaths = {
    base: basePath + "messages/",//post
    setToRead: basePath + "messages/setRead",//post
    SentMessages: basePath + "messages/sent",
}

export interface IMessagePaths {
    base: string,
    setToRead: string,
    SentMessages:string
}

