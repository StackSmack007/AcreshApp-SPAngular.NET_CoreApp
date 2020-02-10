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
    userProfileData:(id: string) =>  basePath + "userData/profileInfo?userName="+id,//get
    userProfileEditData:(id: string) =>  basePath + "userData/profile?userId="+id,//get
    updateUserInfo: basePath + "userData/profile",
    submitEdittedData: basePath + "userData/editData",//post
    setBlocking: basePath + "userData/setUserBlocking",//post
}

export interface IUserDataPaths {
    userProfileData: (id: string) => string,
    userProfileEditData: (id: string) => string,
    updateUserInfo: string,
    submitEdittedData: string,
    setBlocking: string,
}

export const messagePaths: IMessagePaths = {
    base: basePath + "messages/",//post//put//get
    delete: (id: number) => basePath + `messages/${id}`,//post
    sentMessages: basePath + "messages/sent",
}

export interface IMessagePaths {
    base: string,
    delete: (id: number) => string,
    sentMessages: string
}

