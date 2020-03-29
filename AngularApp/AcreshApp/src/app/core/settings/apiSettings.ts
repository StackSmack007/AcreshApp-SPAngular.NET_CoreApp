export const basePath: string = "https://localhost:5020/";
 //export const basePath: string = "http://localhost:5020/";

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
    delete: (id) => basePath + `recipes?id=${id}`,
    getCauldronCards: (ids, page) => basePath + `recipes/caulron-cards?ids=${ids}&page=${page}`,
}
// "outputPath": "../../AcreshApi/ACRESH_API/ACRESH_API/wwwroot/",
export interface IRecipePaths {
    base: string,
    getMinified: (pNum: number, crit: string, val: string, ) => string,
    getMinifiedPrivate: (pNum: number, crit: string, ) => string,
    favUnvaf: string,
    setRating: string,
    chkNameTaken: (name: string) => string,
    edit: (id: string) => string,
    delete(id: string): string;
    getCauldronCards(ids: string, page: number): string;
}

export const categoryPaths: ICategoryPath = {
    base: basePath + "categories/",
    getAllMini: basePath + "categories/all-mini",
    getThreeStructure: basePath + "categories/three",
    getDetails: (id: number) => basePath + `categories/details?id=${id}`,
    nameUsed: (name: string) => basePath + `categories/name-used?name=${name}`,
    delete: (id) => basePath + `categories?id=${id}`,
    getEditDetails: (id) => basePath + `categories/edit-details?id=${id}`
}

export interface ICategoryPath {
    getEditDetails(id: number): string;
    base: string,
    getAllMini: string
    getThreeStructure: string,
    getDetails(id: number): string;
    nameUsed(name: string): string;
    delete(id: number): string;
}

export const ignredientPaths: IIgnredientPaths = {
    base: basePath + "ingredients/",
    getAllMini: basePath + "ingredients/all-mini",
    getDetails: (id: number) => basePath + "ingredients/details/" + id,
    chkNameTaken: (name) => basePath + `ingredients/name-used?name=${name}`,
    getRecipeIngredients: (id) => basePath + `ingredients/recipe?id=${id}`,
    getCardsTotalCount: (index, phrase) => basePath + `ingredients/cards-count?index=${index}&phrase=${phrase}`,
    getCards: (page, index, phrase, essential) => basePath + `ingredients/cards?page=${page}&index=${index}&phrase=${phrase}&essential=${essential}`,
    editGet: (id) => basePath + `ingredients/edit?id=${id}`,
    delete: (id) => basePath + `ingredients?id=${id}`,
    getNamesByIds: (ids) => basePath + `ingredients/get-names?ids=${ids}`,
    getCauldronIngsCount: (phr) => basePath + `ingredients/get-cauld-cards-count?phrase=${phr}`,
    getCauldronIngs: (phr, page) => basePath + `ingredients/get-cauld-cards?phrase=${phr}&page=${page}`,
}

export interface IIgnredientPaths {
    base: string,
    getAllMini: string,
    getDetails: (id: number) => string,
    chkNameTaken: (name: string) => string,
    getRecipeIngredients: (id: string) => string,
    getCardsTotalCount: (index: string, phrase: string) => string,
    getCards: (page: number, index: string, phrase: string, essential: boolean) => string,
    editGet: (id: number) => string,
    delete: (id: number) => string,
    getNamesByIds: (ids: string) => string;
    getCauldronIngsCount(phr: string): string;
    getCauldronIngs(phr: string, page: number): string;
}

export const commentsPaths: ICommentPaths = {
    base: basePath + "comments/",
    delete: (id) => basePath + `comments/${id}`,
    getAllForRecipe: (page, id) => basePath + `comments/for-recipe?page=${page}&recipeId=${id}`,
    setVote: basePath + "comments/set-vote",
}

export interface ICommentPaths {
    setVote: string;
    base: string,
    delete: (id: number) => string,
    getAllForRecipe: (page, id) => string,
}