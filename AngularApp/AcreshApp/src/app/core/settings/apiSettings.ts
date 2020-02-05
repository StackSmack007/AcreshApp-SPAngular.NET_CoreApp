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
    setBlocking: basePath + "userData/setUserBlocking",//post
}

export interface IUserDataPaths {
    getUserProfileData: string,
    setBlocking: string,
}

