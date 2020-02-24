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
    userProfileData: (uName: string) => basePath + "userData/profileInfo?userName=" + uName,//get

    userInfo: basePath + "userData/profile",//post get
    blocked: basePath + "userData/blocked",
    myblockers: basePath + "userData/my-blockers",
    submitEdittedData: basePath + "userData/editData",//post
    setBlocking: basePath + "userData/setUserBlocking",//post
}

export interface IUserDataPaths {
    userProfileData: (uName: string) => string,
    userInfo: string,
    blocked: string,
    myblockers: string,
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

export const recipePaths: IRecipePaths = {
    base: basePath + "recipes/",//post//put//get
    getMinified: (pNum, crit, val) => basePath + `recipes?criteria=${crit}&val=${val}&pageNum=${pNum}`,
    getMinifiedPrivate: (pNum, crit) => basePath + `recipes/private?criteria=${crit}&pageNum=${pNum}`,
    favUnvaf: basePath + "recipes/fav-unfav",
    setRating: basePath + "recipes/set-rating",
    chkNameTaken: (name) => basePath + `recipes/name-used?name=${name}`,
    edit: (id) => basePath + `recipes/edit?id=${id}`,
}

export interface IRecipePaths {
    base: string,
    getMinified: (pNum: number, crit: string, val: string, ) => string,
    getMinifiedPrivate: (pNum: number, crit: string, ) => string,
    favUnvaf: string,
    setRating: string,
    chkNameTaken: (name: string) => string,
    edit: (id: string) => string,
}

export const categoryPaths: ICategoryPath = {
    base: basePath + "categories/",
    getAllMini: basePath + "categories/all-mini"
}

export interface ICategoryPath {
    base: string,
    getAllMini: string
}

export const ignredientPaths: IIgnredientPaths = {
    base: basePath + "ingredients/",
    getAllMini: basePath + "ingredients/all-mini"
}

export interface IIgnredientPaths {
    base: string,
    getAllMini: string
}
