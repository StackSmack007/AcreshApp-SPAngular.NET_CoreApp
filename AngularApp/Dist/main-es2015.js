(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _shared_components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/main/main.component */ "./src/app/shared/components/main/main.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/profile-info/profile-info.component */ "./src/app/auth/profile-info/profile-info.component.ts");
/* harmony import */ var _core_resolvers_user_data_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/resolvers/user-data.resolver */ "./src/app/core/resolvers/user-data.resolver.ts");
/* harmony import */ var _auth_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/profile-edit/profile-edit.component */ "./src/app/auth/profile-edit/profile-edit.component.ts");
/* harmony import */ var _core_resolvers_user_data_profile_edit_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/resolvers/user-data-profile-edit.resolver */ "./src/app/core/resolvers/user-data-profile-edit.resolver.ts");
/* harmony import */ var _messages_list_all_list_all_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages/list-all/list-all.component */ "./src/app/messages/list-all/list-all.component.ts");
/* harmony import */ var _core_guards_authorized_only__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/guards/authorized.only */ "./src/app/core/guards/authorized.only.ts");
/* harmony import */ var _recipes_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recipes/recipe-details/recipe-details.component */ "./src/app/recipes/recipe-details/recipe-details.component.ts");
/* harmony import */ var _core_resolvers_recipe_details_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/resolvers/recipe-details-resolver */ "./src/app/core/resolvers/recipe-details-resolver.ts");
/* harmony import */ var _recipes_create_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./recipes/create/create.component */ "./src/app/recipes/create/create.component.ts");
/* harmony import */ var _core_resolvers_recipe_edit_data_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/resolvers/recipe-edit-data-resolver */ "./src/app/core/resolvers/recipe-edit-data-resolver.ts");
/* harmony import */ var _recipes_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recipes/edit/edit.component */ "./src/app/recipes/edit/edit.component.ts");
/* harmony import */ var _ingredients_list_ingredients_list_ingredients_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ingredients/list-ingredients/list-ingredients.component */ "./src/app/ingredients/list-ingredients/list-ingredients.component.ts");
/* harmony import */ var _ingredients_ingredient_details_ingredient_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ingredients/ingredient-details/ingredient-details.component */ "./src/app/ingredients/ingredient-details/ingredient-details.component.ts");
/* harmony import */ var _ingredients_create_ingredient_create_ingredient_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ingredients/create-ingredient/create-ingredient.component */ "./src/app/ingredients/create-ingredient/create-ingredient.component.ts");
/* harmony import */ var _ingredients_edit_ingredient_edit_ingredient_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ingredients/edit-ingredient/edit-ingredient.component */ "./src/app/ingredients/edit-ingredient/edit-ingredient.component.ts");
/* harmony import */ var _core_resolvers_ingredient_edit_data_resolver__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/resolvers/ingredient-edit-data-resolver */ "./src/app/core/resolvers/ingredient-edit-data-resolver.ts");
/* harmony import */ var _recipes_list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./recipes/list-recipes/recipes-list-exporter */ "./src/app/recipes/list-recipes/recipes-list-exporter.ts");
/* harmony import */ var _categories_main_board_main_board_categories_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./categories/main-board/main-board-categories.component */ "./src/app/categories/main-board/main-board-categories.component.ts");
/* harmony import */ var _recipes_list_recipes_filters_in_category_list_inCategory_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./recipes/list-recipes/filters/in-category/list-inCategory.component */ "./src/app/recipes/list-recipes/filters/in-category/list-inCategory.component.ts");


























const routes = [
    { path: "", pathMatch: "full", redirectTo: "/index" },
    { path: "index", pathMatch: "full", component: _shared_components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: "authentication/register", component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: "authentication/login", component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    {
        path: "user-data/profile/:userName", component: _auth_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_5__["ProfileInfoComponent"],
        resolve: { userInfo: _core_resolvers_user_data_resolver__WEBPACK_IMPORTED_MODULE_6__["UserDataResolver"] }
    },
    {
        path: "user-data/edit-profile", component: _auth_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_7__["ProfileEditComponent"],
        resolve: { userInfo: _core_resolvers_user_data_profile_edit_resolver__WEBPACK_IMPORTED_MODULE_8__["UserDataProfileEditResolver"] }
    },
    {
        path: "message-box", component: _messages_list_all_list_all_component__WEBPACK_IMPORTED_MODULE_9__["ListAllComponent"],
        canActivate: [_core_guards_authorized_only__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]]
    },
    {
        path: "recipes",
        children: [
            {
                path: "", pathMatch: "full",
                redirectTo: "/all"
            },
            {
                path: "all",
                component: _recipes_list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_21__["ListAllRComponent"],
            },
            {
                path: "ing-contain/:ingids",
                component: _recipes_list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_21__["ListIngredientsContainingRComponent"],
            },
            {
                path: "category/:id",
                component: _recipes_list_recipes_filters_in_category_list_inCategory_component__WEBPACK_IMPORTED_MODULE_23__["ListInCategoryRComponent"],
            },
            {
                path: "recent",
                component: _recipes_list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_21__["ListMostRecentRComponent"]
            },
            {
                path: "commented",
                component: _recipes_list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_21__["ListMostCommentedRComponent"]
            },
            {
                path: "commented-recently",
                component: _recipes_list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_21__["ListCommentedRecentlyRComponent"]
            },
            {
                path: "highly-rated",
                component: _recipes_list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_21__["ListHighlyRatedRComponent"]
            },
            {
                path: "most-rated",
                component: _recipes_list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_21__["ListMostRatedRComponent"]
            },
            {
                path: "most-favoured",
                component: _recipes_list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_21__["ListMostFavouredRComponent"]
            },
            {
                path: "search/:phrase",
                component: _recipes_list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_21__["ListSearchedRComponent"]
            },
            {
                path: "user/:username",
                component: _recipes_list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_21__["ListUserSharedRComponent"]
            },
            {
                path: "my-favourite",
                component: _recipes_list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_21__["ListMyFavouriteRComponent"],
                canActivate: [_core_guards_authorized_only__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]]
            },
            {
                path: "my-commented",
                component: _recipes_list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_21__["ListMyCommentedRComponent"],
                canActivate: [_core_guards_authorized_only__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]]
            },
            {
                path: "details/:id",
                component: _recipes_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_11__["RecipeDetailsComponent"],
                resolve: { data: _core_resolvers_recipe_details_resolver__WEBPACK_IMPORTED_MODULE_12__["RecipeDetailsResolver"] }
            }, {
                path: "add-new",
                component: _recipes_create_create_component__WEBPACK_IMPORTED_MODULE_13__["CreateRecipeComponent"],
                canActivate: [_core_guards_authorized_only__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]]
            },
            {
                path: "edit/:id",
                component: _recipes_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__["EditRecipeComponent"],
                canActivate: [_core_guards_authorized_only__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]],
                resolve: { data: _core_resolvers_recipe_edit_data_resolver__WEBPACK_IMPORTED_MODULE_14__["RecipeEditDataResolver"] }
            },
        ]
    },
    {
        path: "ingredients",
        component: _ingredients_list_ingredients_list_ingredients_component__WEBPACK_IMPORTED_MODULE_16__["ListIngredientsComponent"],
        children: [
            {
                path: "details/:id",
                component: _ingredients_ingredient_details_ingredient_details_component__WEBPACK_IMPORTED_MODULE_17__["IngredientDetailsComponent"],
                outlet: "ing-outlet"
            },
            {
                path: "edit/:id",
                component: _ingredients_edit_ingredient_edit_ingredient_component__WEBPACK_IMPORTED_MODULE_19__["EditIngredientComponent"],
                canActivate: [_core_guards_authorized_only__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]],
                resolve: { data: _core_resolvers_ingredient_edit_data_resolver__WEBPACK_IMPORTED_MODULE_20__["IngredientEditResolver"] },
                outlet: "ing-outlet"
            },
            {
                path: "create",
                component: _ingredients_create_ingredient_create_ingredient_component__WEBPACK_IMPORTED_MODULE_18__["CreateIngredientComponent"],
                canActivate: [_core_guards_authorized_only__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]],
                outlet: "ing-outlet"
            },
        ]
    },
    {
        path: "categories",
        children: [
            {
                path: "", pathMatch: "full",
                component: _categories_main_board_main_board_categories_component__WEBPACK_IMPORTED_MODULE_22__["MainBoardCategoriesComponent"]
            },
            {
                path: "details/:id",
                component: _categories_main_board_main_board_categories_component__WEBPACK_IMPORTED_MODULE_22__["MainBoardCategoriesComponent"],
            }
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'AcreshApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["acr-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "acr-footer");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/interceptors/auth.interceptor */ "./src/app/core/interceptors/auth.interceptor.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_reducers_unread_msg_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/reducers/unread.msg.reducer */ "./src/app/store/reducers/unread.msg.reducer.ts");
/* harmony import */ var _messages_messages_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./messages/messages.module */ "./src/app/messages/messages.module.ts");
/* harmony import */ var _recipes_recipes_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recipes/recipes.module */ "./src/app/recipes/recipes.module.ts");
/* harmony import */ var _ingredients_ingredients_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ingredients/ingredients.module */ "./src/app/ingredients/ingredients.module.ts");
/* harmony import */ var _categories_categories_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./categories/categories.module */ "./src/app/categories/categories.module.ts");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _recipes_recipes_module__WEBPACK_IMPORTED_MODULE_14__["RecipesModule"],
            _ingredients_ingredients_module__WEBPACK_IMPORTED_MODULE_15__["IngredientsModule"],
            _categories_categories_module__WEBPACK_IMPORTED_MODULE_16__["CategoriesModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
            _messages_messages_module__WEBPACK_IMPORTED_MODULE_13__["MessagesModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot({
                userUnread: _store_reducers_unread_msg_reducer__WEBPACK_IMPORTED_MODULE_12__["unreadMsgsReducer"]
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({
                positionClass: 'toast-top-right',
                preventDuplicates: true,
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _recipes_recipes_module__WEBPACK_IMPORTED_MODULE_14__["RecipesModule"],
        _ingredients_ingredients_module__WEBPACK_IMPORTED_MODULE_15__["IngredientsModule"],
        _categories_categories_module__WEBPACK_IMPORTED_MODULE_16__["CategoriesModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
        _messages_messages_module__WEBPACK_IMPORTED_MODULE_13__["MessagesModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreRootModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _recipes_recipes_module__WEBPACK_IMPORTED_MODULE_14__["RecipesModule"],
                    _ingredients_ingredients_module__WEBPACK_IMPORTED_MODULE_15__["IngredientsModule"],
                    _categories_categories_module__WEBPACK_IMPORTED_MODULE_16__["CategoriesModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                    _messages_messages_module__WEBPACK_IMPORTED_MODULE_13__["MessagesModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot({
                        userUnread: _store_reducers_unread_msg_reducer__WEBPACK_IMPORTED_MODULE_12__["unreadMsgsReducer"]
                    }),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({
                        positionClass: 'toast-top-right',
                        preventDuplicates: true,
                    })
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                        useClass: _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-info/profile-info.component */ "./src/app/auth/profile-info/profile-info.component.ts");
/* harmony import */ var _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-edit/profile-edit.component */ "./src/app/auth/profile-edit/profile-edit.component.ts");
/* harmony import */ var _user_small_info_user_small_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-small-info/user-small-info.component */ "./src/app/auth/user-small-info/user-small-info.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");











class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_6__["ProfileInfoComponent"], _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_7__["ProfileEditComponent"], _user_small_info_user_small_info_component__WEBPACK_IMPORTED_MODULE_8__["UserSmallInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"]], exports: [_user_small_info_user_small_info_component__WEBPACK_IMPORTED_MODULE_8__["UserSmallInfoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_6__["ProfileInfoComponent"], _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_7__["ProfileEditComponent"], _user_small_info_user_small_info_component__WEBPACK_IMPORTED_MODULE_8__["UserSmallInfoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"]
                ],
                exports: [_user_small_info_user_small_info_component__WEBPACK_IMPORTED_MODULE_8__["UserSmallInfoComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/settings/globalConstants */ "./src/app/core/settings/globalConstants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_core_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/message.service */ "./src/app/core/services/message.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function LoginComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Username!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please provide username or email! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_28_div_1_Template, 4, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.getCtrlErrors("userName")["required"]);
} }
function LoginComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please provide Password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Length of password must be equal or greater than ", ctx_r27.getCtrlErrors("password")["minlength"]["requiredLength"], " symbols! ");
} }
function LoginComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_29_div_1_Template, 4, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_29_div_2_Template, 4, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.getCtrlErrors("password")["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.getCtrlErrors("password")["minlength"]);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(router, authService, fb, toastrService, messageService, store) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.toastrService = toastrService;
        this.messageService = messageService;
        this.store = store;
        this.lf = null;
        this.buildForm();
        this.toastrService.toastrConfig.positionClass = "toastr";
        this.toastrService.toastrConfig.closeButton = true;
    }
    isTouchedInvalid(name) {
        return this.lf.controls[name].touched && this.lf.controls[name].invalid;
    }
    getCtrlErrors(name) {
        return (this.lf.controls[name] && this.lf.controls[name]["errors"]) ? this.lf.controls[name]["errors"] : null;
    }
    getCtrl(name) {
        return this.lf.controls[name] || null;
    }
    buildForm() {
        this.lf = this.fb.group({
            "umail": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            "password": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_2__["minLengthFields"].password)]],
        });
    }
    submitLogin() {
        console.log(this.lf);
        const values = this.lf.value;
        this.authService.login(values).subscribe(r => {
            console.log("success");
            console.log("Avemos Papa:", this.authService.getUserInfo());
            this.toastrService.success("Successfull login", `Welcome ${values.umail}`);
            this.router.navigate([""]);
        }, e => {
            console.log("failure ->", e.error.error);
            this.toastrService.error("UserName or Password Mismatch!", "Invalid Input!");
        }, () => {
            console.log("completed? wtf");
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["acr-login"]], decls: 30, vars: 10, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-3", "toastr"], [1, "col-6"], [3, "formGroup", "ngSubmit"], [1, "text-center", "py-3"], [1, "form-group"], ["for", "umail"], ["type", "text", "id", "umail", "placeholder", "Enter email or username...", "formControlName", "umail", 1, "form-control", 3, "ngClass"], ["for", "pwd1"], ["type", "password", "id", "pwd1", "placeholder", "Password...", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["pwd", ""], [1, "row", "my-4"], [1, "col-12", "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "col-12", "d-flex", "justify-content-end"], [1, "h5", "font-italic"], ["routerLink", "/authentication/register"], [1, "col-3", "validationMessages"], ["class", "umailVaildation", 4, "ngIf"], ["class", "passwordValidations", 4, "ngIf"], [1, "umailVaildation"], ["class", "alert alert-dismissible alert-danger", 4, "ngIf"], [1, "alert", "alert-dismissible", "alert-danger"], [1, "passwordValidations"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener($event) { return ctx.submitLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "LogIn:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "UserName or Email:*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "LogIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Not a member, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Sing Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LoginComponent_div_28_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, LoginComponent_div_29_Template, 3, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.lf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isTouchedInvalid("umail")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.isTouchedInvalid("password")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.lf.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTouchedInvalid("umail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTouchedInvalid("password"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: [".red[_ngcontent-%COMP%] {\r\n    color:red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZCB7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: src_app_core_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/profile-edit/profile-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/profile-edit/profile-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditComponent", function() { return ProfileEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/settings/globalConstants */ "./src/app/core/settings/globalConstants.ts");
/* harmony import */ var src_app_core_validators_takenName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/validators/takenName */ "./src/app/core/validators/takenName.ts");
/* harmony import */ var src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_user_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/user-data.service */ "./src/app/core/services/user-data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function ProfileEditComponent_img_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 44, 45);
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r42.avatarImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProfileEditComponent_div_73_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid First Name!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please provide first Name! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileEditComponent_div_73_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid First Name!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " First Name can not unallowed symbols! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileEditComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileEditComponent_div_73_div_1_Template, 4, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileEditComponent_div_73_div_2_Template, 4, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.getCtrlErrors("firstName")["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.getCtrlErrors("firstName")["pattern"]);
} }
function ProfileEditComponent_div_74_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Last Name!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Last Name can not unallowed symbols! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileEditComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileEditComponent_div_74_div_1_Template, 4, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.getCtrlErrors("lastName")["pattern"]);
} }
function ProfileEditComponent_div_75_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please provide email! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileEditComponent_div_75_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please provide valid email! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileEditComponent_div_75_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " is already used please provide another! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r54.getCtrlErrors("email")["valueTaken"], "");
} }
function ProfileEditComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileEditComponent_div_75_div_1_Template, 4, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileEditComponent_div_75_div_2_Template, 4, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileEditComponent_div_75_div_3_Template, 7, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.getCtrlErrors("email")["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.getCtrlErrors("email")["email"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.getCtrlErrors("email")["valueTaken"]);
} }
function ProfileEditComponent_div_76_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please provide Password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileEditComponent_div_76_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Length of password must be equal or greater than ", ctx_r56.getCtrlErrors("password")["minlength"]["requiredLength"], " symbols! ");
} }
function ProfileEditComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileEditComponent_div_76_div_1_Template, 4, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileEditComponent_div_76_div_2_Template, 4, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.getCtrlErrors("password")["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.getCtrlErrors("password")["minlength"]);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ProfileEditComponent {
    constructor(route, router, authService, userDataService, fb, toastr) {
        this.router = router;
        this.authService = authService;
        this.userDataService = userDataService;
        this.fb = fb;
        this.toastr = toastr;
        this.rf = null;
        this.takenEmails = [];
        this.user = null;
        this.buildForm();
        this.user = route.snapshot.data["userInfo"];
        this.rf.patchValue(this.user);
        this.rf.controls.gender.valueChanges.subscribe(gender => {
            this.rf.controls.avatarPicture.setValue(src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_2__["avImages"][gender][0]);
        });
    }
    nextPicture() {
        this.rf.controls.avatarPicture.setValue(src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"].getNextItem(src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_2__["avImages"][this.gender], this.avatarImg));
    }
    prevPicture() {
        this.rf.controls.avatarPicture.setValue(src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"].getPreviousItem(src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_2__["avImages"][this.gender], this.avatarImg));
    }
    isTouchedInvalid(name) {
        return this.rf.controls[name].touched && this.rf.controls[name].invalid;
    }
    getCtrlErrors(name) {
        return (this.rf.controls[name] && this.rf.controls[name]["errors"]) ? this.rf.controls[name]["errors"] : null;
    }
    getCtrl(name) {
        return this.rf.controls[name] || null;
    }
    get gender() {
        return this.rf.value.gender;
    }
    get avatarImg() {
        return this.rf.value.avatarPicture;
    }
    buildForm() {
        this.rf = this.fb.group({
            "userName": "",
            "firstName": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(`^[^\\d\\^\\$\\&\\+\\,\\:\\;\\=\\?\\@\\#\\|\\<\\>\\.\\^\\*\\(\\)\\%\\!\\-\\\\\\/\\]\\[\\{\\}]{1,${src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_2__["maxLengthFields"].names}}$`)]],
            "lastName": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(`^[^\\d\\^\\$\\&\\+\\,\\:\\;\\=\\?\\@\\#\\|\\<\\>\\.\\^\\*\\(\\)\\%\\!\\-\\\\\\/\\]\\[\\{\\}]{1,${src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_2__["maxLengthFields"].names}}$`)]],
            "gender": ["ufo", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            "email": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, Object(src_app_core_validators_takenName__WEBPACK_IMPORTED_MODULE_3__["takenValueValidator"])(this.takenEmails)]],
            "password": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_2__["minLengthFields"].password)]],
            "avatarPicture": [src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_2__["avImages"].ufo[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            "description": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_2__["maxLengthFields"].description)]],
        });
    }
    submitEdit() {
        console.log(this.rf);
        const values = this.rf.value;
        if (this.user.email !== values.email) {
            this.authService.checkUserNameOrEmailTaken(values).subscribe(answer => {
                if (answer.emailTaken) {
                    this.takenEmails.push(values.email);
                    this.rf.controls.email.updateValueAndValidity();
                    return;
                }
                this.sendDataToAPI(values);
            });
        }
        else {
            this.sendDataToAPI(values);
        }
    }
    sendDataToAPI(values) {
        this.userDataService.updateUserData(values).subscribe(() => {
            this.toastr.success(`Successfully modified profile info`, "Success!");
            this.router.navigate([`/user-data/profile/${values.userName}`]);
        }, (e) => {
            console.log(e);
            this.toastr.error("Incorrect password!", "Failure");
        });
    }
}
ProfileEditComponent.ɵfac = function ProfileEditComponent_Factory(t) { return new (t || ProfileEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_user_data_service__WEBPACK_IMPORTED_MODULE_7__["UserDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"])); };
ProfileEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileEditComponent, selectors: [["acr-profile-edit"]], decls: 77, vars: 20, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-3"], [1, "col-6"], [3, "formGroup", "ngSubmit"], [1, "text-center", "py-3"], [1, "row", "justify-content-between"], [1, "form-check-inline"], [1, "form-check", "px-0"], [1, "form-check-label"], ["type", "radio", "formControlName", "gender", "id", "optionsRadios1", "value", "male", 1, "form-check-input", "mx-0"], [1, "form-check", "px-1", "mx-2"], ["type", "radio", "formControlName", "gender", "id", "optionsRadios2", "value", "female", 1, "form-check-input", "mx-0"], ["type", "radio", "formControlName", "gender", "id", "optionsRadios3", "value", "ufo", 1, "form-check-input", "mx-0"], [1, "picture-nav", "text-center", "pt-2", "pl-2"], [3, "click"], [1, "far", "fa-arrow-alt-circle-left", "h6"], [1, "far", "fa-arrow-alt-circle-right", "h6"], [1, "form-group"], ["for", "userName"], ["type", "text", "id", "userName", "aria-describedby", "userNameHelp", "formControlName", "userName", "readonly", "", 1, "form-control"], ["id", "userNameHelp", 1, "form-text", "text-muted"], ["for", "firstName"], ["type", "text", "id", "firstName", "placeholder", "Fill your name...", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "lastName", "placeholder", "Optional...", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], [1, "col-4"], ["class", "img-thumbnail rounded", "alt", "profilePicture", 3, "src", 4, "ngIf"], [1, "col-7"], ["for", "emailAdr"], ["type", "email", "id", "emailAdr", "aria-describedby", "emailHelp", "placeholder", "Enter email...", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "pwd1"], ["type", "password", "id", "pwd1", "placeholder", "Provide to verify changes!", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["pwd", ""], [1, "form-group", "pt-2"], ["for", "exampleTextarea"], ["id", "exampleTextarea", "rows", "2", "placeholder", "Write something if you feel the need...", "formControlName", "description", 1, "form-control"], [1, "row", "my-4"], [1, "col-12", "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "col-3", "validationMessages"], ["class", "firstNameValidations", 4, "ngIf"], ["class", "lastNameValidations", 4, "ngIf"], ["class", "passwordValidations", 4, "ngIf"], ["alt", "profilePicture", 1, "img-thumbnail", "rounded", 3, "src"], ["avatarPreview", ""], [1, "firstNameValidations"], ["class", "alert alert-dismissible alert-danger", 4, "ngIf"], [1, "alert", "alert-dismissible", "alert-danger"], [1, "lastNameValidations"], [1, "passwordValidations"]], template: function ProfileEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileEditComponent_Template_form_ngSubmit_4_listener($event) { return ctx.submitEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " UFO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileEditComponent_Template_span_click_26_listener($event) { return ctx.prevPicture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileEditComponent_Template_span_click_29_listener($event) { return ctx.nextPicture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "UserName:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Visible for other users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "First Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ProfileEditComponent_img_50_Template, 2, 1, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " We'll never share your email with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Password*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Description About Myself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "textarea", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Edit Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ProfileEditComponent_div_73_Template, 3, 2, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ProfileEditComponent_div_74_Template, 2, 1, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ProfileEditComponent_div_75_Template, 4, 3, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ProfileEditComponent_div_76_Template, 3, 2, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.isTouchedInvalid("firstName")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.isTouchedInvalid("lastName")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.isTouchedInvalid("email")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.isTouchedInvalid("password")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCtrl("description").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.rf.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTouchedInvalid("firstName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTouchedInvalid("lastName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTouchedInvalid("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTouchedInvalid("password"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-profile-edit',
                templateUrl: './profile-edit.component.html',
                styleUrls: ['./profile-edit.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: src_app_core_services_user_data_service__WEBPACK_IMPORTED_MODULE_7__["UserDataService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/profile-info/profile-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/profile-info/profile-info.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfileInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInfoComponent", function() { return ProfileInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user-data.service */ "./src/app/core/services/user-data.service.ts");
/* harmony import */ var src_app_core_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/message.service */ "./src/app/core/services/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









const _c0 = ["blockOpt"];
function ProfileInfoComponent_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 User Info:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileInfoComponent_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 My Profile Info:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["/recipes/user/", a1]; };
function ProfileInfoComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recipes Shared:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r30.user.userName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r30.user.recipesShared, " ");
} }
function ProfileInfoComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0 My Personal Data As JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileInfoComponent_ng_template_42_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please provide message if you wish to send...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileInfoComponent_ng_template_42_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Please provide message with length ", _r35.errors.minlength.requiredLength, "");
} }
function ProfileInfoComponent_ng_template_42_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileInfoComponent_ng_template_42_div_21_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileInfoComponent_ng_template_42_div_21_div_2_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r35.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r35.errors.minlength);
} }
const _c2 = function (a0, a1) { return { "text-danger": a0, "text-success": a1 }; };
const _c3 = function (a0, a1) { return { "disabled": a0, "not-allowed": a1 }; };
function ProfileInfoComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileInfoComponent_ng_template_42_Template_form_ngSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.submitMessage(_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Write a message:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "textarea", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Block User Messages!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Send Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileInfoComponent_ng_template_42_div_21_Template, 3, 2, "div", 16);
} if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r33.amBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r33.iblocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, _r36.checked, !_r36.checked));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c3, _r34.invalid, ctx_r33.amBlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r35.touched && _r35.invalid);
} }
class ProfileInfoComponent {
    constructor(toastr, route, authService, userDataService, messageService) {
        this.toastr = toastr;
        this.authService = authService;
        this.userDataService = userDataService;
        this.messageService = messageService;
        this.addressTitles = {
            male: "m-r. ",
            female: "m-s. ",
            ufo: "",
        };
        this.isAuthor = () => this.myUserName == this.user.userName;
        this.amBlocked = false;
        this.iblocked = false;
        this.user = null;
        this.user = route.snapshot.data["userInfo"];
        this.myUserName = authService.getUserInfo().userName;
        this.amBlocked = this.user.blockedUserNames.includes(this.myUserName);
        this.iblocked = this.authService.getUserInfo().blocked.includes(this.user.userName);
    }
    ngOnDestroy() {
        if (!this.isAuthor()) {
            const iBlockedUser = this.authService.getUserInfo().blocked.includes(this.user.userName);
            if (this.blockOption.nativeElement.checked && !iBlockedUser ||
                !this.blockOption.nativeElement.checked && iBlockedUser) {
                this.userDataService.changeBlockedStatus(this.user.userName).subscribe(() => {
                    this.authService.updateToken().subscribe((t) => { console.log(`new token: ${t}`); });
                });
            }
        }
    }
    submitMessage(mf) {
        if (mf.invalid)
            return;
        this.messageService.submitMsg(mf.value.msg, this.user.id).subscribe(() => {
            this.toastr.success("Message Sent", "Success");
            mf.reset();
            this.messageService.signalR.updateUserUnreadCount(this.user.userName);
        }, () => this.toastr.error(`Message Not Sent`, "Failure"));
        console.log(mf);
    }
}
ProfileInfoComponent.ɵfac = function ProfileInfoComponent_Factory(t) { return new (t || ProfileInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
ProfileInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileInfoComponent, selectors: [["acr-profile-info"]], viewQuery: function ProfileInfoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.blockOption = _t.first);
    } }, decls: 45, vars: 14, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-3"], [1, "col-6"], ["class", "text-center py-3", 4, "ngIf"], [1, "row"], [1, "row", "container-fluid", "justify-content-start", "pb-2"], [1, "col-5", "h5", "ml-2"], [1, "col-6", "h5", "pl-4", "ml-2", "font-italic"], [1, "col-12"], [1, "row", "justify-content-between"], [1, "col-4", "px-4"], ["alt", "profilePicture", 1, "img-thumbnail", "rounded-lg", "img-fluid", 3, "src"], [1, "col-7"], [1, "table", "table-borderless", "mb-0"], [1, "py-1", "my-1"], [4, "ngIf"], [1, "form-group"], ["readonly", "", "id", "exampleFormControlTextarea1", "rows", "5", 1, "form-control"], ["class", "row mt-4 justify-content-between", 4, "ngIf", "ngIfElse"], ["visitor", ""], [1, "text-center", "py-3"], [1, "fas", "fa-info-circle"], [3, "routerLink"], [1, "fas", "fa-scroll"], [1, "row", "mt-4", "justify-content-between"], [1, "col-5"], ["routerLink", "/authentication/profile/download"], ["routerLink", "/user-data/edit-profile", 1, "btn", "btn-primary", "float-right"], [3, "ngSubmit"], ["mf", "ngForm"], [1, "row", "mt-2", "justify-content-between"], [1, "col-9"], ["for", "msg"], ["name", "msg", "required", "", "minlength", "4", "ngModel", "", "id", "msg", "rows", "3", "placeholder", "message...", 1, "form-control", 3, "disabled"], ["msg", "ngModel"], [1, "form-group", "col-12"], [1, "custom-control", "custom-switch", "pt-4"], ["type", "checkbox", "id", "customSwitch1", 1, "custom-control-input", 3, "checked"], ["blockOpt", ""], ["for", "customSwitch1", 1, "custom-control-label", 3, "ngClass"], [1, "fas", "fa-biohazard"], ["type", "submit", 1, "btn", "btn-info", 3, "ngClass"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]], template: function ProfileInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileInfoComponent_h2_4_Template, 3, 0, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileInfoComponent_h2_5_Template, 3, 0, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProfileInfoComponent_tr_34_Template, 7, 4, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "About Me:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ProfileInfoComponent_div_41_Template, 8, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProfileInfoComponent_ng_template_42_Template, 22, 11, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.userName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.cookRank, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.avPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.addressTitles[ctx.user.gender], " ", ctx.user.firstName, " ", ctx.user.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.recipesShared !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("                        ", ctx.user.description, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthor())("ngIfElse", _r32);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".not-allowed[_ngcontent-%COMP%] {cursor: not-allowed;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9wcm9maWxlLWluZm8vcHJvZmlsZS1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxtQkFBbUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcHJvZmlsZS1pbmZvL3Byb2ZpbGUtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1hbGxvd2VkIHtjdXJzb3I6IG5vdC1hbGxvd2VkO30iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-profile-info',
                templateUrl: './profile-info.component.html',
                styleUrls: ['./profile-info.component.css']
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: src_app_core_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] }, { type: src_app_core_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, { blockOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["blockOpt", { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_validators_takenName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/validators/takenName */ "./src/app/core/validators/takenName.ts");
/* harmony import */ var src_app_core_validators_sameInputVal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/validators/sameInputVal */ "./src/app/core/validators/sameInputVal.ts");
/* harmony import */ var src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/settings/globalConstants */ "./src/app/core/settings/globalConstants.ts");
/* harmony import */ var src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function RegisterComponent_div_77_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Username!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please provide username! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_77_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Username!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Length of username must be equal or greater than ", ctx_r9.getCtrlErrors("userName")["minlength"]["requiredLength"], " symbols! ");
} }
function RegisterComponent_div_77_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Username!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " UserName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " is already used please provide another! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.getCtrlErrors("userName")["valueTaken"], "");
} }
function RegisterComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_77_div_1_Template, 4, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_77_div_2_Template, 4, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_div_77_div_3_Template, 7, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getCtrlErrors("userName")["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getCtrlErrors("userName")["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getCtrlErrors("userName")["valueTaken"]);
} }
function RegisterComponent_div_78_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid First Name!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please provide first Name! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_78_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid First Name!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " First Name can not unallowed symbols! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_78_div_1_Template, 4, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_78_div_2_Template, 4, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getCtrlErrors("firstName")["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getCtrlErrors("firstName")["pattern"]);
} }
function RegisterComponent_div_79_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Last Name!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Last Name can not unallowed symbols! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_79_div_1_Template, 4, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.getCtrlErrors("lastName")["pattern"]);
} }
function RegisterComponent_div_80_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please provide email! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_80_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please provide valid email! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_80_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " is already used please provide another! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.getCtrlErrors("email")["valueTaken"], "");
} }
function RegisterComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_80_div_1_Template, 4, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_80_div_2_Template, 4, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_div_80_div_3_Template, 7, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.getCtrlErrors("email")["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.getCtrlErrors("email")["email"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.getCtrlErrors("email")["valueTaken"]);
} }
function RegisterComponent_div_81_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please provide Password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_81_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Length of password must be equal or greater than ", ctx_r18.getCtrlErrors("password")["minlength"]["requiredLength"], " symbols! ");
} }
function RegisterComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_81_div_1_Template, 4, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_81_div_2_Template, 4, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.getCtrlErrors("password")["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.getCtrlErrors("password")["minlength"]);
} }
function RegisterComponent_div_82_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please provide Password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_82_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Length of password must be equal or greater than ", ctx_r20.getCtrlErrors("rePassword")["minlength"]["requiredLength"], " symbols! ");
} }
function RegisterComponent_div_82_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Passwords mismatch! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_82_div_1_Template, 4, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_82_div_2_Template, 4, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_div_82_div_3_Template, 4, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getCtrlErrors("rePassword")["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getCtrlErrors("rePassword")["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getCtrlErrors("rePassword")["mismatch"]);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class RegisterComponent {
    constructor(router, authService, fb, toastr) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.toastr = toastr;
        this.rf = null;
        this.takenUserNames = [];
        this.takenEmails = [];
        this.buildForm();
        this.rf.controls.gender.valueChanges.subscribe(gender => {
            this.rf.controls.avatarPicture.setValue(src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_4__["avImages"][gender][0]);
        });
    }
    nextPicture() {
        this.rf.controls.avatarPicture.setValue(src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"].getNextItem(src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_4__["avImages"][this.gender], this.avatarImg));
    }
    prevPicture() {
        this.rf.controls.avatarPicture.setValue(src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"].getPreviousItem(src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_4__["avImages"][this.gender], this.avatarImg));
    }
    isTouchedInvalid(name) {
        return this.rf.controls[name].touched && this.rf.controls[name].invalid;
    }
    getCtrlErrors(name) {
        return (this.rf.controls[name] && this.rf.controls[name]["errors"]) ? this.rf.controls[name]["errors"] : null;
    }
    getCtrl(name) {
        return this.rf.controls[name] || null;
    }
    get gender() {
        return this.rf.value.gender;
    }
    get avatarImg() {
        return this.rf.value.avatarPicture;
    }
    buildForm() {
        this.rf = this.fb.group({
            "userName": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_4__["minLengthFields"].username), Object(src_app_core_validators_takenName__WEBPACK_IMPORTED_MODULE_2__["takenValueValidator"])(this.takenUserNames)]],
            "firstName": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(`^[^\\d\\^\\$\\&\\+\\,\\:\\;\\=\\?\\@\\#\\|\\<\\>\\.\\^\\*\\(\\)\\%\\!\\-\\\\\\/\\]\\[\\{\\}]{1,${src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_4__["maxLengthFields"].names}}$`)]],
            "lastName": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(`^[^\\d\\^\\$\\&\\+\\,\\:\\;\\=\\?\\@\\#\\|\\<\\>\\.\\^\\*\\(\\)\\%\\!\\-\\\\\\/\\]\\[\\{\\}]{1,${src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_4__["maxLengthFields"].names}}$`)]],
            "gender": ["ufo", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            "email": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, Object(src_app_core_validators_takenName__WEBPACK_IMPORTED_MODULE_2__["takenValueValidator"])(this.takenEmails)]],
            "password": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_4__["minLengthFields"].password)]],
            "rePassword": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(src_app_core_validators_sameInputVal__WEBPACK_IMPORTED_MODULE_3__["sameFieldsValidator"])(() => this.rf ? this.rf.value.password : null)]],
            "avatarPicture": [src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_4__["avImages"].ufo[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            "description": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(src_app_core_settings_globalConstants__WEBPACK_IMPORTED_MODULE_4__["maxLengthFields"].description)]],
        });
    }
    submitRegister() {
        const values = this.rf.value;
        this.authService.checkUserNameOrEmailTaken(values).subscribe(answer => {
            if (answer.userNameTaken || answer.emailTaken) {
                if (answer.userNameTaken) {
                    this.takenUserNames.push(values.userName);
                    this.rf.controls.userName.updateValueAndValidity();
                }
                if (answer.emailTaken) {
                    this.takenEmails.push(values.email);
                    this.rf.controls.email.updateValueAndValidity();
                }
                return;
            }
            this.authService.register(values).subscribe(() => {
                this.toastr.success(`Welcome user ${values.userName}`, "Successfull Registration!");
                this.router.navigate([""]);
            });
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["acr-register"]], decls: 83, vars: 27, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-3"], [1, "col-6"], [3, "formGroup", "ngSubmit"], [1, "text-center", "py-3"], [1, "row", "justify-content-between"], [1, "form-check-inline"], [1, "form-check", "px-0"], [1, "form-check-label"], ["type", "radio", "formControlName", "gender", "id", "optionsRadios1", "value", "male", 1, "form-check-input", "mx-0"], [1, "form-check", "px-1", "mx-2"], ["type", "radio", "formControlName", "gender", "id", "optionsRadios2", "value", "female", 1, "form-check-input", "mx-0"], ["type", "radio", "formControlName", "gender", "id", "optionsRadios3", "value", "ufo", 1, "form-check-input", "mx-0"], [1, "picture-nav", "text-center", "pt-2", "pl-2"], [3, "click"], [1, "far", "fa-arrow-alt-circle-left", "h6"], [1, "far", "fa-arrow-alt-circle-right", "h6"], [1, "form-group"], ["for", "userName"], ["type", "text", "id", "userName", "aria-describedby", "userNameHelp", "formControlName", "userName", "placeholder", "Fill your userName...", 1, "form-control", 3, "ngClass"], ["id", "userNameHelp", 1, "form-text", "text-muted"], ["for", "firstName"], ["type", "text", "id", "firstName", "placeholder", "Fill your name...", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "lastName", "placeholder", "Optional...", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], [1, "col-4"], ["alt", "profilePicture", 1, "img-thumbnail", "rounded", 3, "src"], ["avatarPreview", ""], [1, "col-7"], ["for", "emailAdr"], ["type", "email", "id", "emailAdr", "aria-describedby", "emailHelp", "placeholder", "Enter email...", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "pwd1"], ["type", "password", "id", "pwd1", "placeholder", "Password...", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["pwd", ""], ["for", "pwd2"], ["type", "password", "id", "pwd2", "placeholder", "Password again...", "formControlName", "rePassword", 1, "form-control", 3, "ngClass"], [1, "form-group", "pt-2"], ["for", "exampleTextarea"], ["id", "exampleTextarea", "rows", "2", "placeholder", "Write something if you feel the need...", "formControlName", "description", 1, "form-control"], [1, "row", "my-4"], [1, "col-12", "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "col-3", "validationMessages"], ["class", "userNameValidations", 4, "ngIf"], ["class", "firstNameValidations", 4, "ngIf"], ["class", "lastNameValidations", 4, "ngIf"], ["class", "passwordValidations", 4, "ngIf"], ["class", "repasswordValidations", 4, "ngIf"], [1, "userNameValidations"], ["class", "alert alert-dismissible alert-danger", 4, "ngIf"], [1, "alert", "alert-dismissible", "alert-danger"], [1, "firstNameValidations"], [1, "lastNameValidations"], [1, "passwordValidations"], [1, "repasswordValidations"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener($event) { return ctx.submitRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " UFO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_span_click_26_listener($event) { return ctx.prevPicture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_span_click_29_listener($event) { return ctx.nextPicture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "UserName*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Visible for other users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "First Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Email address*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "small", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " We'll never share your email with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Password*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Repeat Password*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Description About Myself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "textarea", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, RegisterComponent_div_77_Template, 4, 3, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, RegisterComponent_div_78_Template, 3, 2, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, RegisterComponent_div_79_Template, 2, 1, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, RegisterComponent_div_80_Template, 4, 3, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, RegisterComponent_div_81_Template, 3, 2, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, RegisterComponent_div_82_Template, 4, 3, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.isTouchedInvalid("userName")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.isTouchedInvalid("firstName")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.isTouchedInvalid("lastName")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.avatarImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.isTouchedInvalid("email")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.isTouchedInvalid("password")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.isTouchedInvalid("rePassword")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.rf.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTouchedInvalid("userName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTouchedInvalid("firstName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTouchedInvalid("lastName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTouchedInvalid("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTouchedInvalid("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTouchedInvalid("rePassword"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/user-small-info/user-small-info.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/user-small-info/user-small-info.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserSmallInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSmallInfoComponent", function() { return UserSmallInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function (a1) { return ["/user-data/profile/", a1]; };
class UserSmallInfoComponent {
    constructor() {
        this.user = null;
    }
    ngOnInit() {
    }
    get dateOfBlocking() {
        return src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"].dateConvert(this.user.dateOfCreation, src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["CustomDateFormats"].DefaultFormater);
    }
}
UserSmallInfoComponent.ɵfac = function UserSmallInfoComponent_Factory(t) { return new (t || UserSmallInfoComponent)(); };
UserSmallInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSmallInfoComponent, selectors: [["acr-user-sm"]], inputs: { user: "user" }, decls: 14, vars: 7, consts: [[3, "routerLink"], [1, "card", "mb-3"], [1, "card-header", "py-1"], [1, "card-body", "pb-0", "pt-2"], ["classs", "card-title"], ["alt", "Profile Picture", 1, "px-1", 2, "height", "200px", "width", "100%", "display", "block", 3, "src"], [1, "card-body", "py-2"], [1, "card-text"], [1, "fas", "fa-ban", "text-danger"], [2, "font-size", "small"]], template: function UserSmallInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A0 Blocked On : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.user.userName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.cookRank);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.avatarPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dateOfBlocking);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvdXNlci1zbWFsbC1pbmZvL3VzZXItc21hbGwtaW5mby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSmallInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-user-sm',
                templateUrl: './user-small-info.component.html',
                styleUrls: ['./user-small-info.component.css']
            }]
    }], function () { return []; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _category_tree_category_tree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-tree/category-tree.component */ "./src/app/categories/category-tree/category-tree.component.ts");
/* harmony import */ var _create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-edit-form/create-edit-form.component */ "./src/app/categories/create-edit-form/create-edit-form.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/categories/details/details.component.ts");
/* harmony import */ var _main_board_main_board_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-board/main-board-categories.component */ "./src/app/categories/main-board/main-board-categories.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create/create.component */ "./src/app/categories/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/categories/edit/edit.component.ts");









class CategoriesModule {
}
CategoriesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CategoriesModule });
CategoriesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CategoriesModule_Factory(t) { return new (t || CategoriesModule)(); }, imports: [[_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CategoriesModule, { declarations: [_main_board_main_board_categories_component__WEBPACK_IMPORTED_MODULE_5__["MainBoardCategoriesComponent"], _category_tree_category_tree_component__WEBPACK_IMPORTED_MODULE_2__["CategoryTreeComponent"], _create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_3__["CreateEditFormComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]], imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_main_board_main_board_categories_component__WEBPACK_IMPORTED_MODULE_5__["MainBoardCategoriesComponent"], _category_tree_category_tree_component__WEBPACK_IMPORTED_MODULE_2__["CategoryTreeComponent"], _create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_3__["CreateEditFormComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]],
                imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/categories/category-tree/category-tree.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/categories/category-tree/category-tree.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTreeComponent", function() { return CategoryTreeComponent; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");












function CategoryTreeComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryTreeComponent_span_3_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r181); const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r180.add(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/recipes/category", a1]; };
function CategoryTreeComponent_mat_tree_node_5_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, node_r182.id))("matTooltip", "View recipes for " + node_r182.name);
} }
function CategoryTreeComponent_mat_tree_node_5_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryTreeComponent_mat_tree_node_5_span_7_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r190); const node_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r188.add(node_r182.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", "Add Sub-Category of " + node_r182.name);
} }
function CategoryTreeComponent_mat_tree_node_5_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryTreeComponent_mat_tree_node_5_span_8_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r194); const node_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r192.edit(node_r182.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", "Edit " + node_r182.name);
} }
function CategoryTreeComponent_mat_tree_node_5_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryTreeComponent_mat_tree_node_5_span_9_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r198); const node_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r196.askDelete(node_r182.id, node_r182.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", "Delete category " + node_r182.name);
} }
const _c1 = function (a0) { return { "chosen": a0 }; };
function CategoryTreeComponent_mat_tree_node_5_Template(rf, ctx) { if (rf & 1) {
    const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryTreeComponent_mat_tree_node_5_Template_span_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r201); const node_r182 = ctx.$implicit; const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r200.display(node_r182.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CategoryTreeComponent_mat_tree_node_5_span_6_Template, 2, 4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CategoryTreeComponent_mat_tree_node_5_span_7_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CategoryTreeComponent_mat_tree_node_5_span_8_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CategoryTreeComponent_mat_tree_node_5_span_9_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r182 = ctx.$implicit;
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, node_r182.id === ctx_r178.chosenId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](node_r182.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", "View details for " + node_r182.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", node_r182.hasRecipes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r178.canCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r178.canEdit(node_r182));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r178.canDelete(node_r182));
} }
function CategoryTreeComponent_mat_tree_node_6_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, node_r202.id))("matTooltip", "View recipes for " + node_r202.name);
} }
function CategoryTreeComponent_mat_tree_node_6_span_10_Template(rf, ctx) { if (rf & 1) {
    const _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryTreeComponent_mat_tree_node_6_span_10_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r209); const node_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r207.add(node_r202.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", "Add Sub-Category of " + node_r202.name);
} }
function CategoryTreeComponent_mat_tree_node_6_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryTreeComponent_mat_tree_node_6_span_11_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r213); const node_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r211.edit(node_r202.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", "Edit " + node_r202.name);
} }
const _c2 = function (a0) { return { "rotated": a0 }; };
function CategoryTreeComponent_mat_tree_node_6_Template(rf, ctx) { if (rf & 1) {
    const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryTreeComponent_mat_tree_node_6_Template_span_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r216); const node_r202 = ctx.$implicit; const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r215.display(node_r202.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CategoryTreeComponent_mat_tree_node_6_span_9_Template, 2, 4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CategoryTreeComponent_mat_tree_node_6_span_10_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CategoryTreeComponent_mat_tree_node_6_span_11_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r202 = ctx.$implicit;
    const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, ctx_r179.treeControl.isExpanded(node_r202)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, node_r202.id === ctx_r179.chosenId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](node_r202.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", "View details for " + node_r202.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", node_r202.hasRecipes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r179.canCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r179.canEdit(node_r202));
} }
/**
 * @title Tree with flat nodes
 */
class CategoryTreeComponent {
    constructor(authService) {
        this.authService = authService;
        this._transformer = (node, level) => {
            return {
                id: node.id,
                authorId: node.authorId,
                name: node.name,
                hasRecipes: node.hasRecipes,
                level: level,
                expandable: !!node.children && node.children.length > 0,
            };
        };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["FlatTreeControl"](node => node.level, node => node.expandable);
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this._transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.hasChild = (_, node) => node.expandable;
        this.chosenId = null;
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set cats(v) {
        this.dataSource.data = v;
        //If it category was added or deleted upon refreshing categories it will expand to current!
        if (this.selectedCategory)
            this.expandParents(this.selectedCategory.getValue());
    }
    /**Expands only provided id's parents in tree structure and closes everything else...*/
    expandParents(id, expandSelf = true) {
        this.treeControl.collapseAll();
        if (!this.treeControl || id === null || id <= 0)
            return;
        const allNodes = this.treeControl.dataNodes;
        const node = allNodes.find(x => x.id === id);
        if (!node)
            return;
        let level = node.level;
        for (let i = allNodes.indexOf(node) - 1; i >= 0; i--) {
            const current = allNodes[i];
            if (current.level < level) {
                level--;
                this.treeControl.expand(current);
            }
            if (level === 0)
                break;
        }
        if (expandSelf && node.expandable)
            this.treeControl.expand(node);
    }
    /**Purpose is to provide parentNode in the tree stucture so it can be manipulated or retrieved it's id*/
    getParentNodeById(id) {
        let parentCollection = this.dataSource.data;
        const lineage = this.familyTreeOfNodeId(id);
        let result;
        lineage.forEach(id => {
            result = parentCollection.find(x => x.id === id);
            parentCollection = result.children;
        });
        return result;
    }
    updateTree() { this.dataSource.data = this.dataSource.data; } //upon setter flattened_tree is refreshed!
    addNode(id, parentId, name, hasRecipes = false, authorId = this.authService.getUserInfo().id, children = []) {
        let node = { id, name, children, hasRecipes, authorId };
        let parentCollection;
        if (parentId === null) {
            parentCollection = this.dataSource.data;
        }
        else {
            const parentNode = this.getParentNodeById(+parentId);
            parentCollection = parentNode
                ? parentNode.children.find(x => x.id === +parentId).children
                : this.dataSource.data.find(x => x.id === +parentId).children;
        }
        parentCollection.push(node);
        return this.updateTree();
    }
    editNode(id, parentId, name) {
        const node = this.getNodeById(id);
        const parentIdBefore = this.getParentId(id);
        if (+parentId === parentIdBefore) {
            node.name = name;
            return this.updateTree();
        }
        this.deleteNode(id);
        this.addNode(id, parentId, name, node.hasRecipes, node.authorId, node.children);
    }
    getNodeById(id) {
        const parentNode = this.getParentNodeById(id);
        if (parentNode)
            return parentNode.children.find(x => x.id === id);
        return this.dataSource.data.find(x => x.id === id);
    }
    /**Returns parentId*/
    deleteNode(id) {
        var _a;
        const parentNode = this.getParentNodeById(id);
        const parentCollection = parentNode ? parentNode.children : this.dataSource.data;
        let targetIndex = parentCollection.indexOf(parentCollection.find(x => x.id === id));
        parentCollection.splice(targetIndex, 1);
        this.updateTree();
        return (_a = parentNode) === null || _a === void 0 ? void 0 : _a.id;
    }
    /**Returns collection of id's of all parents before seeked child */
    familyTreeOfNodeId(id) {
        let result = [id];
        while (true) {
            const parentId = this.getParentId(result[0]);
            if (parentId) {
                result = [parentId, ...result];
                continue;
            }
            result.pop(); //no need of targetId
            return result;
        }
    }
    getParentId(nodeId) {
        var _a, _b;
        if (!this.treeControl || nodeId === null || nodeId <= 0)
            return null;
        const allNodes = this.treeControl.dataNodes;
        const node = allNodes.find(x => x.id === nodeId);
        if (!node)
            return null;
        return (_b = (_a = allNodes.slice(0, allNodes.indexOf(node)).filter(x => x.level < node.level)) === null || _a === void 0 ? void 0 : _a.pop()) === null || _b === void 0 ? void 0 : _b.id;
    }
    ngOnInit() {
        this.selectedCategory.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(0)).subscribe(x => { this.chosenId = x; this.expandParents(x); });
    }
    get canCreate() { return this.authService.isAuthenticated(); }
    get isAdmin() { return this.authService.isAdmin; }
    canEdit(node) { return this.authService.isAuthenticated() && (this.isAdmin || this.authService.getUserInfo().id === node.authorId); }
    canDelete(node) { return this.canEdit(node) && !node.hasRecipes; }
    display(id) { this.selectedCategory.next(id); }
    add(pId) { this.addEvent.emit(pId); }
    askDelete(id, name) { this.deleteEvent.emit({ id, name }); }
    edit(id) { this.editEvent.emit(id); }
}
CategoryTreeComponent.ɵfac = function CategoryTreeComponent_Factory(t) { return new (t || CategoryTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
CategoryTreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoryTreeComponent, selectors: [["acr-cat-tree"]], inputs: { cats: "cats", selectedCategory: "selectedCategory" }, outputs: { addEvent: "addEvent", deleteEvent: "deleteEvent", editEvent: "editEvent" }, decls: 7, vars: 4, consts: [["src", "../../../assets/imgs/100x100xtree.png", "alt", "tree", 1, "bullet-img"], ["class", "opt", "mat-raised-button", "", "matTooltipPosition", "above", "matTooltip", "Add new Head Category", "aria-label", "create-main category popup", 3, "click", 4, "ngIf"], [3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["mat-raised-button", "", "matTooltipPosition", "above", "matTooltip", "Add new Head Category", "aria-label", "create-main category popup", 1, "opt", 3, "click"], [1, "fas", "fa-plus-circle", "text-success"], ["matTreeNodePadding", ""], ["src", "../../../assets/imgs/leaf 100x100.png", "alt", "bottom-category", 1, "bullet-img"], [3, "ngClass"], ["mat-raised-button", "", "matTooltipPosition", "above", "aria-label", "details popup", 1, "opt", 3, "matTooltip", "click"], [1, "fas", "fa-info-circle", "text-info"], ["class", "opt", "mat-raised-button", "", "matTooltipPosition", "above", "aria-label", "recipes popup", 3, "routerLink", "matTooltip", 4, "ngIf"], ["class", "opt", "mat-raised-button", "", "matTooltipPosition", "above", "aria-label", "create popup", 3, "matTooltip", "click", 4, "ngIf"], ["class", "opt", "mat-raised-button", "", "matTooltipPosition", "above", "aria-label", "edit popup", 3, "matTooltip", "click", 4, "ngIf"], ["class", "opt", "mat-raised-button", "", "matTooltipPosition", "above", "aria-label", "delete popup", 3, "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", "matTooltipPosition", "above", "aria-label", "recipes popup", 1, "opt", 3, "routerLink", "matTooltip"], [1, "fas", "fa-scroll", "text-info"], ["mat-raised-button", "", "matTooltipPosition", "above", "aria-label", "create popup", 1, "opt", 3, "matTooltip", "click"], ["mat-raised-button", "", "matTooltipPosition", "above", "aria-label", "edit popup", 1, "opt", 3, "matTooltip", "click"], [1, "fas", "fa-pencil-alt", "text-primary"], ["mat-raised-button", "", "matTooltipPosition", "above", "aria-label", "delete popup", 1, "opt", 3, "matTooltip", "click"], [1, "fas", "fa-trash", "text-danger"], ["mat-icon-button", "", "matTreeNodeToggle", "", "attr.aria-label", "toggle"], [1, "mat-icon-rtl-mirror"], ["src", "../../../assets/imgs/branch-alt-100x50.png", "alt", "parrent-category", 1, "bullet-img", 3, "ngClass"]], template: function CategoryTreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Category tree ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CategoryTreeComponent_span_3_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-tree", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CategoryTreeComponent_mat_tree_node_5_Template, 10, 9, "mat-tree-node", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CategoryTreeComponent_mat_tree_node_6_Template, 12, 11, "mat-tree-node", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeDef"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodePadding"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\r\n    margin-right: 4px;\r\n  }\r\n  \r\n  img.bullet-img[_ngcontent-%COMP%]{\r\n      width:2em;\r\n      margin-right: .5em;\r\n  }\r\n  \r\n  span.opt[_ngcontent-%COMP%] {\r\n      cursor: pointer;\r\n      margin-left:.6em;\r\n  }\r\n  \r\n  span.opt[_ngcontent-%COMP%]:hover {\r\n   -webkit-transform:scale(1.4);\r\n           transform:scale(1.4);\r\n   -webkit-animation-duration: 1s;\r\n           animation-duration: 1s;\r\n   -webkit-animation-timing-function:ease-in;\r\n           animation-timing-function:ease-in;\r\n}\r\n  \r\n  img.rotated[_ngcontent-%COMP%]{\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n}\r\n  \r\n  span.chosen[_ngcontent-%COMP%] {\r\n    background:blanchedalmond;\r\n    color:darkgreen;\r\n    border-radius: 1em;\r\n    font-weight: bold;\r\n    padding:0.2em 0.35em;\r\n}\r\n  \r\n  mat-tree.mat-tree[_ngcontent-%COMP%]{\r\n    padding:1em 0 0 2.5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yeS10cmVlL2NhdGVnb3J5LXRyZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtFQUNuQjs7RUFFQTtNQUNJLFNBQVM7TUFDVCxrQkFBa0I7RUFDdEI7O0VBRUE7TUFDSSxlQUFlO01BQ2YsZ0JBQWdCO0VBQ3BCOztFQUVBO0dBQ0MsNEJBQW9CO1dBQXBCLG9CQUFvQjtHQUNwQiw4QkFBc0I7V0FBdEIsc0JBQXNCO0dBQ3RCLHlDQUFpQztXQUFqQyxpQ0FBaUM7QUFDcEM7O0VBRUE7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0FBQzVCOztFQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7RUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcnktdHJlZS9jYXRlZ29yeS10cmVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGltZy5idWxsZXQtaW1ne1xyXG4gICAgICB3aWR0aDoyZW07XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLjVlbTtcclxuICB9XHJcblxyXG4gIHNwYW4ub3B0IHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tbGVmdDouNmVtO1xyXG4gIH1cclxuXHJcbiAgc3Bhbi5vcHQ6aG92ZXIge1xyXG4gICB0cmFuc2Zvcm06c2NhbGUoMS40KTtcclxuICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO1xyXG59XHJcblxyXG5pbWcucm90YXRlZHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuc3Bhbi5jaG9zZW4ge1xyXG4gICAgYmFja2dyb3VuZDpibGFuY2hlZGFsbW9uZDtcclxuICAgIGNvbG9yOmRhcmtncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzowLjJlbSAwLjM1ZW07XHJcbn1cclxuXHJcbm1hdC10cmVlLm1hdC10cmVle1xyXG4gICAgcGFkZGluZzoxZW0gMCAwIDIuNWVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryTreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'acr-cat-tree',
                templateUrl: 'category-tree.component.html',
                styleUrls: ['category-tree.component.css'],
            }]
    }], function () { return [{ type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, { cats: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectedCategory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], deleteEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], editEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();
/* Example of input structure **/
const TREE_DATA = [
    {
        name: 'Fruit',
        id: 1,
        authorId: 'aaa',
        hasRecipes: false,
        children: [
            { name: 'Apple', id: 2, authorId: 'aaa', hasRecipes: false, },
            { name: 'Banana', id: 3, authorId: 'aaa', hasRecipes: false, },
            { name: 'Fruit loops', id: 4, authorId: 'aaa', hasRecipes: false, },
        ]
    }, {
        name: 'Vegetables',
        id: 5,
        authorId: 'aaa',
        hasRecipes: false,
        children: [
            {
                name: 'Green',
                id: 6,
                authorId: 'aaa',
                hasRecipes: false,
                children: [
                    { name: 'Broccoli', id: 7, authorId: 'd0927f1d-9762-40ad-9fdd-90652911fea1', hasRecipes: false, },
                    { name: 'Brussels sprouts', id: 8, authorId: 'aaa', hasRecipes: false, },
                ]
            }, {
                name: 'Orange',
                id: 9,
                authorId: 'aaa',
                hasRecipes: false,
                children: [
                    { name: 'Pumpkins', id: 10, authorId: 'aaa', hasRecipes: false, },
                    { name: 'Carrots', id: 11, authorId: 'aaa', hasRecipes: false, },
                ]
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/categories/create-edit-form/create-edit-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/categories/create-edit-form/create-edit-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: CreateEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditFormComponent", function() { return CreateEditFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_validators_takenNameValidatorAsync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/validators/takenNameValidatorAsync */ "./src/app/core/validators/takenNameValidatorAsync.ts");
/* harmony import */ var src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/category.service */ "./src/app/core/services/category.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_pipes_htmlRaw_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipes/htmlRaw.pipe */ "./src/app/core/pipes/htmlRaw.pipe.ts");










function CreateEditFormComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 20);
} if (rf & 2) {
    const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx_r307.getErr("name", "required") ? "Please provide Ingredient Name!" : ctx_r307.getErr("name", "minlength") ? "Please provide name with length atleast " + ctx_r307.getErr("name", "minlength")["requiredLength"] + " symbols long!" : ctx_r307.getErr("name", "maxlength") ? "Please provide name with length shorter than " + ctx_r307.getErr("name", "maxlength")["requiredLength"] + " symbols long!" : ctx_r307.getErr("name", "valueTaken") ? "The name " + ctx_r307.getErr("name", "valueTaken") + " is already in use!" : ctx_r307.getErr("name", "pattern") ? "Please provide name consisting of one word, or two words with 1 space between them" : "unknown-Error");
} }
function CreateEditFormComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r310 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", opt_r310.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](opt_r310.name);
} }
function CreateEditFormComponent_div_23_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please provide description!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateEditFormComponent_div_23_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Please provide description with length atleast ", ctx_r313.getCtrl("description").errors["minlength"]["requiredLength"], " symbols long!");
} }
function CreateEditFormComponent_div_23_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Please provide description with length lesser than ", ctx_r314.getCtrl("description").errors["maxlength"]["requiredLength"], " symbols long!");
} }
function CreateEditFormComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateEditFormComponent_div_23_span_2_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CreateEditFormComponent_div_23_span_3_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CreateEditFormComponent_div_23_span_4_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r309.getCtrl("description").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r309.getCtrl("description").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r309.getCtrl("description").errors["maxlength"]);
} }
class CreateEditFormComponent {
    constructor(fb, catService, authService) {
        this.fb = fb;
        this.catService = catService;
        this.authService = authService;
        this.btnClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.abortEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this._category = null;
        this.namesAllowed = [];
        this.subscriptions = [];
        this.categorie$ = catService.getAllMini();
        this.buildForm();
    }
    get btnDisabled() {
        return this.form.pristine || this.form.invalid || src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"].compareObjects(this._category, this.form.value);
    }
    abort() { this.abortEvent.emit(); }
    get settings() { return this._settings; }
    set settings(v) {
        this._settings = v;
        this.form.get("parentCategoryId").setValue(v.parentCategoryId);
    }
    ;
    set category(value) {
        if (value === null)
            return;
        this._category = value;
        this.namesAllowed.push(value.name);
        this.form.patchValue(value);
    }
    getCtrl(name) { return this.form.get(name); }
    getErr(name, errName) { return this.getCtrl(name).errors[errName]; }
    /**Used to clasify input field as valid or not*/
    getValClasses(name) {
        const ctrl = this.getCtrl(name);
        return { 'is-invalid': (ctrl.invalid && ctrl.touched), 'is-valid': ctrl.valid };
    }
    invalidTouchedCtrl(name) { return this.getCtrl(name).invalid && this.getCtrl(name).touched; }
    buildForm() {
        this.form = this.fb.group({
            name: ["", { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, Object(src_app_core_validators_takenNameValidatorAsync__WEBPACK_IMPORTED_MODULE_3__["takenNameValidatorAsync"])(this.catService.nameTaken.bind(this.catService), this.namesAllowed), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(32), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[a-zA-Z]+(\\s[a-zA-Z]{2,})?')], updateOn: "blur" }],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(32), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10240)]],
            authorId: this.authService.getUserInfo().id,
            parentCategoryId: null,
        });
        this.subscriptions.push(this.form.get("parentCategoryId")
            .valueChanges.subscribe(id => {
            this.navigateTreeEvent.emit(id === "null" || id === null ? null : +id);
        }));
    }
    submitForm() {
        if (this.form.valid) {
            this.btnClickEvent.emit(this.form.value);
        }
    }
    ngOnDestroy() {
        this.subscriptions.filter(x => !x.closed).forEach(x => x.unsubscribe());
    }
}
CreateEditFormComponent.ɵfac = function CreateEditFormComponent_Factory(t) { return new (t || CreateEditFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
CreateEditFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateEditFormComponent, selectors: [["acr-create-edit-form"]], inputs: { settings: "settings", navigateTreeEvent: "navigateTreeEvent", category: "category" }, outputs: { btnClickEvent: "btnClickEvent", abortEvent: "abortEvent" }, decls: 29, vars: 13, consts: [[1, "text-center"], [3, "formGroup", "ngSubmit"], [1, "row", "justify-content-between"], [1, "col-6", "pr-4"], [1, "form-group", "has-danger", "has-success"], ["for", "name", 1, "form-control-label", "h5"], ["formControlName", "name", "id", "name", "placeholder", "Name...", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 3, "innerText", 4, "ngIf"], [1, "col-6", "pl-4"], [1, "form-group"], ["for", "parentCategoryId", 1, "form-control-label", "pr-3", "h5"], ["formControlName", "parentCategoryId", "id", "parentCategoryId", 1, "custom-select"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "desc", 1, "h5"], ["formControlName", "description", "id", "desc", "rows", "4", "placeholder", "Describe what this category contains ...", 1, "form-control"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "float-left", 3, "click"], [1, "fas", "fa-ban"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "float-right", 3, "disabled", "innerHTML"], [1, "invalid-feedback", 3, "innerText"], [1, "alert", "alert-danger"]], template: function CreateEditFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateEditFormComponent_Template_form_ngSubmit_2_listener($event) { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "New Category Name*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CreateEditFormComponent_div_9_Template, 1, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Parent Category:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Root Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CreateEditFormComponent_option_17_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Category Description*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, CreateEditFormComponent_div_23_Template, 5, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditFormComponent_Template_button_click_24_listener($event) { return ctx.abort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " \u00A0 Abort");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "htmlRaw");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.settings.headline);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.getValClasses("name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.invalidTouchedCtrl("name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 9, ctx.categorie$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getCtrl("description").touched && ctx.getCtrl("description").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.btnDisabled)("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 11, ctx.settings.submitBtnTitle), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _core_pipes_htmlRaw_pipe__WEBPACK_IMPORTED_MODULE_7__["HTMLRaw"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY3JlYXRlLWVkaXQtZm9ybS9jcmVhdGUtZWRpdC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CreateEditFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'acr-create-edit-form',
                templateUrl: './create-edit-form.component.html',
                styleUrls: ['./create-edit-form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, { btnClickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], abortEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], navigateTreeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/categories/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/categories/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/category.service */ "./src/app/core/services/category.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-edit-form/create-edit-form.component */ "./src/app/categories/create-edit-form/create-edit-form.component.ts");





class CreateComponent {
    constructor(catService, toastr) {
        this.catService = catService;
        this.toastr = toastr;
        this.addNodeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.navigateTreeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set parentCategoryId(parentCategoryId) {
        this.settings = {
            headline: 'Create',
            submitBtnTitle: "<i class='fas fa-plus-circle'></i>&nbsp;Add Category",
            parentCategoryId
        };
    }
    abort() { this.selectedCategory.next(this.settings.parentCategoryId); }
    createNewCategory(v) {
        this.catService.create(v).subscribe(id => {
            this.selectedCategory.next(id);
            this.toastr.success(`Created category ${v.name}`, "Success!");
            this.addNodeEvent.emit({ id, parentId: v.parentCategoryId, name: v.name });
        }, (e) => {
            console.log("nsh error", e);
            this.toastr.error('Unsucessfull creation of e');
        });
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["acr-create-category"]], inputs: { parentCategoryId: "parentCategoryId", selectedCategory: "selectedCategory" }, outputs: { addNodeEvent: "addNodeEvent", navigateTreeEvent: "navigateTreeEvent" }, decls: 1, vars: 2, consts: [[3, "navigateTreeEvent", "settings", "btnClickEvent", "abortEvent"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "acr-create-edit-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClickEvent", function CreateComponent_Template_acr_create_edit_form_btnClickEvent_0_listener($event) { return ctx.createNewCategory($event); })("abortEvent", function CreateComponent_Template_acr_create_edit_form_abortEvent_0_listener($event) { return ctx.abort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navigateTreeEvent", ctx.navigateTreeEvent)("settings", ctx.settings);
    } }, directives: [_create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_3__["CreateEditFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-create-category',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, { parentCategoryId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedCategory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addNodeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], navigateTreeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/categories/details/details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/details/details.component.ts ***!
  \*********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function DetailsComponent_section_0_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ParentCategory: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_section_0_li_10_Template_span_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r322); const ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r321.selectParentCategory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r316.category.parentCategoryName);
} }
function DetailsComponent_section_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Main Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsComponent_section_0_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last Modified: ", ctx_r319.editedBefore, "");
} }
function DetailsComponent_section_0_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_section_0_button_24_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r324); const ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r323.askDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/user-data/profile/", a1]; };
function DetailsComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Details:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DetailsComponent_section_0_li_10_Template, 4, 1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetailsComponent_section_0_ng_template_11_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Added By: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DetailsComponent_section_0_li_19_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DetailsComponent_section_0_button_24_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r315.category.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r315.category.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Recipes: ", ctx_r315.category.recipesCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r315.category.parentCategoryId)("ngIfElse", _r317);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r315.category.authorUserName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0", ctx_r315.category.authorUserName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created: ", ctx_r315.createdBefore, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r315.createdBefore !== ctx_r315.editedBefore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r315.canDelete);
} }
class DetailsComponent {
    constructor(authService) {
        this.authService = authService;
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    askDelete() { this.deleteEvent.emit({ id: this.category.id, name: this.category.name }); }
    get createdBefore() { return src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"].timeElapsed(this.category.dateOfCreation); }
    get editedBefore() { return src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"].timeElapsed(this.category.dateOfLastEdit); }
    selectParentCategory() { this.selectedCategory.next(this.category.parentCategoryId); }
    get canEdit() { return this.authService.isAuthenticated() && (this.authService.isAdmin || this.authService.getUserInfo().userName === this.category.authorUserName); }
    get canDelete() { return this.canEdit && this.category.recipesCount === 0 && !this.category.hasChildren; }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["acr-details"]], inputs: { category: "category", selectedCategory: "selectedCategory" }, outputs: { deleteEvent: "deleteEvent" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "stats"], [4, "ngIf", "ngIfElse"], ["mainCategory", ""], [3, "routerLink"], [1, "row", "justify-content-between"], [1, "col-4"], ["class", "btn btn-primary btn-sm float-right", 3, "click", 4, "ngIf"], [1, "clickable", "text-success", 3, "click"], [1, "btn", "btn-primary", "btn-sm", "float-right", 3, "click"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailsComponent_section_0_Template, 25, 12, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.category);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["section[_ngcontent-%COMP%] {\r\n    padding: 1em;\r\n}\r\n\r\nul.stats[_ngcontent-%COMP%] {\r\n    list-style-type: disc;\r\n}\r\n\r\nul.stats[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\r\n    padding-bottom:0.5em;\r\n}\r\n\r\nspan.clickable[_ngcontent-%COMP%]:hover {\r\n    cursor:pointer;\r\n    color:darkgreen;\r\n    background:blanchedalmond;\r\n    border-radius:0.3em;\r\n    padding:0.2em\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxudWwuc3RhdHMge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG59XHJcblxyXG51bC5zdGF0cz5saSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowLjVlbTtcclxufVxyXG5cclxuc3Bhbi5jbGlja2FibGU6aG92ZXIge1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBjb2xvcjpkYXJrZ3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kOmJsYW5jaGVkYWxtb25kO1xyXG4gICAgYm9yZGVyLXJhZGl1czowLjNlbTtcclxuICAgIHBhZGRpbmc6MC4yZW1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-details',
                templateUrl: './details.component.html',
                styleUrls: ['./details.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, { category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], selectedCategory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/categories/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/categories/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/category.service */ "./src/app/core/services/category.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-edit-form/create-edit-form.component */ "./src/app/categories/create-edit-form/create-edit-form.component.ts");





class EditComponent {
    constructor(catService, toastr) {
        this.catService = catService;
        this.toastr = toastr;
        this.category = null;
        this.editEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.navigateTreeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.settings = {
            headline: 'Edit',
            submitBtnTitle: "<i class='far fa-edit'></i>&nbsp;Edit Category",
            parentCategoryId: null
        };
    }
    set categoryId(ownCategoryId) {
        this._categoryId = ownCategoryId;
        this.catService.getEditDetails(ownCategoryId).subscribe(x => {
            delete x.id;
            this.category = x;
        });
    }
    abort() { this.selectedCategory.next(this._categoryId); }
    editCategory(v) {
        let edited = Object.assign(Object.assign({}, v), { id: this._categoryId });
        this.catService.editCategory(edited).subscribe(() => {
            this.editEvent.emit({ id: this._categoryId, parentId: v.parentCategoryId, name: v.name });
            this.selectedCategory.next(this._categoryId);
            this.toastr.success(`Edited category ${v.name}`, "Success!");
        }, (e) => {
            console.log("nsh error", e);
            this.toastr.error(`Unsucessfull edit of category ${v.name}`, "Failure!");
        });
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["acr-edit-category"]], inputs: { categoryId: "categoryId", selectedCategory: "selectedCategory" }, outputs: { editEvent: "editEvent", navigateTreeEvent: "navigateTreeEvent" }, decls: 1, vars: 3, consts: [[3, "navigateTreeEvent", "settings", "category", "btnClickEvent", "abortEvent"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "acr-create-edit-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClickEvent", function EditComponent_Template_acr_create_edit_form_btnClickEvent_0_listener($event) { return ctx.editCategory($event); })("abortEvent", function EditComponent_Template_acr_create_edit_form_abortEvent_0_listener($event) { return ctx.abort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navigateTreeEvent", ctx.navigateTreeEvent)("settings", ctx.settings)("category", ctx.category);
    } }, directives: [_create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_3__["CreateEditFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-edit-category',
                templateUrl: './edit.component.html',
                styleUrls: ['./edit.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, { categoryId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedCategory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], navigateTreeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/categories/main-board/main-board-categories.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/categories/main-board/main-board-categories.component.ts ***!
  \**************************************************************************/
/*! exports provided: MainBoardCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBoardCategoriesComponent", function() { return MainBoardCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_core_components_questionComponent_dialog_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/components/questionComponent/dialog-question.component */ "./src/app/core/components/questionComponent/dialog-question.component.ts");
/* harmony import */ var _category_tree_category_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category-tree/category-tree.component */ "./src/app/categories/category-tree/category-tree.component.ts");
/* harmony import */ var src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/category.service */ "./src/app/core/services/category.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/create.component */ "./src/app/categories/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../edit/edit.component */ "./src/app/categories/edit/edit.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../details/details.component */ "./src/app/categories/details/details.component.ts");














function MainBoardCategoriesComponent_acr_cat_tree_6_Template(rf, ctx) { if (rf & 1) {
    const _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "acr-cat-tree", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addEvent", function MainBoardCategoriesComponent_acr_cat_tree_6_Template_acr_cat_tree_addEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r220); const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r219.add($event); })("editEvent", function MainBoardCategoriesComponent_acr_cat_tree_6_Template_acr_cat_tree_editEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r220); const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r221.edit($event); })("deleteEvent", function MainBoardCategoriesComponent_acr_cat_tree_6_Template_acr_cat_tree_deleteEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r220); const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r222.confirmDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cats", ctx_r217.categories)("selectedCategory", ctx_r217.selectedCategory);
} }
function MainBoardCategoriesComponent_div_7_acr_create_category_2_Template(rf, ctx) { if (rf & 1) {
    const _r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "acr-create-category", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addNodeEvent", function MainBoardCategoriesComponent_div_7_acr_create_category_2_Template_acr_create_category_addNodeEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r227); const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r226.addNodeToTree($event); })("navigateTreeEvent", function MainBoardCategoriesComponent_div_7_acr_create_category_2_Template_acr_create_category_navigateTreeEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r227); const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r228.navigateTreeElementNoDetails($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentCategoryId", ctx_r223.dataObj.createInfo)("selectedCategory", ctx_r223.selectedCategory);
} }
function MainBoardCategoriesComponent_div_7_acr_edit_category_3_Template(rf, ctx) { if (rf & 1) {
    const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "acr-edit-category", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("editEvent", function MainBoardCategoriesComponent_div_7_acr_edit_category_3_Template_acr_edit_category_editEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r230); const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r229.editNodeInTree($event); })("navigateTreeEvent", function MainBoardCategoriesComponent_div_7_acr_edit_category_3_Template_acr_edit_category_navigateTreeEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r230); const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r231.navigateTreeElementNoDetails($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedCategory", ctx_r224.selectedCategory)("categoryId", ctx_r224.dataObj.editInfo);
} }
function MainBoardCategoriesComponent_div_7_acr_details_4_Template(rf, ctx) { if (rf & 1) {
    const _r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "acr-details", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteEvent", function MainBoardCategoriesComponent_div_7_acr_details_4_Template_acr_details_deleteEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r233); const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r232.confirmDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r225.dataObj.info$))("selectedCategory", ctx_r225.selectedCategory);
} }
function MainBoardCategoriesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainBoardCategoriesComponent_div_7_acr_create_category_2_Template, 1, 2, "acr-create-category", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainBoardCategoriesComponent_div_7_acr_edit_category_3_Template, 1, 2, "acr-edit-category", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainBoardCategoriesComponent_div_7_acr_details_4_Template, 2, 4, "acr-details", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r218.action === "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r218.action === "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r218.action === "details");
} }
class MainBoardCategoriesComponent {
    constructor(catService, dialog, toastr, activatedRoute) {
        this.catService = catService;
        this.dialog = dialog;
        this.toastr = toastr;
        this.categories = null;
        this.actionLocked = false;
        this.action = null;
        this.selectedCategory = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](-1);
        this.dataObj = {
            info$: null,
            createInfo: null,
            editInfo: null,
        };
        if (activatedRoute.snapshot.url[0] && activatedRoute.snapshot.url[0].path.toLowerCase() === "details" &&
            !isNaN(activatedRoute.snapshot.params["id"])) {
            this.selectedCategory.next(+activatedRoute.snapshot.params["id"]);
        }
        this.updateTree();
        this.selectedCategory.subscribe(id => {
            if (this.actionLocked)
                return;
            if (id > 0) {
                this.dataObj.info$ = this.catService.getDetails(id);
                this.action = "details";
            }
        });
    }
    navigateTreeElementNoDetails(id, expandSelf = true) {
        this.tree.expandParents(id, expandSelf);
        if (id !== this.selectedCategory.getValue()) {
            this.actionLocked = true;
            this.selectedCategory.next(id);
            this.actionLocked = false;
        }
    }
    updateTree() {
        this.catService.getThreeStructure().subscribe((x) => {
            this.categories = x;
        });
    }
    add(parentCategoryId) {
        this.dataObj.createInfo = parentCategoryId; //Todo can remove name from data transfer since it is retrieved from a list.
        this.action = "create";
    }
    addNodeToTree({ id, parentId, name }) { this.tree.addNode(id, parentId, name); }
    edit(id) {
        this.dataObj.editInfo = id;
        this.action = "edit";
    }
    editNodeInTree({ id, parentId, name }) { this.tree.editNode(id, parentId, name); }
    confirmDelete({ name, id }) {
        let dialogRef = this.dialog.open(src_app_core_components_questionComponent_dialog_question_component__WEBPACK_IMPORTED_MODULE_2__["DialogQuestionComponent"], {
            width: "35em",
            data: {
                title: `Confirm Deletion Please:`,
                question: `Are you sure you wish to delete ${name} category?`,
                picUrl: '../../../assets/imgs/leaf 100x100.png',
                positiveAnswerBtnName: '<i class="far fa-trash-alt"></i> Delete',
                negativeAnswerBtnName: '<i class="fas fa-ban"></i> Abort'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === "true") {
                this.catService.deleteCategoryById(id).subscribe(() => {
                    this.toastr.success(`Removed category ${name}`, "Success!");
                    const parentId = this.tree.deleteNode(id);
                    this.selectedCategory.next(parentId); //Navigation happens with OnInit subscription treeComponent somehow...
                }, (err) => {
                    this.toastr.error(`Category ${name} was not removed`, "Failure");
                    console.log(err);
                });
            }
        });
    }
}
MainBoardCategoriesComponent.ɵfac = function MainBoardCategoriesComponent_Factory(t) { return new (t || MainBoardCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
MainBoardCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainBoardCategoriesComponent, selectors: [["main-board-categories"]], viewQuery: function MainBoardCategoriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_category_tree_category_tree_component__WEBPACK_IMPORTED_MODULE_3__["CategoryTreeComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tree = _t.first);
    } }, decls: 8, vars: 2, consts: [[1, "title"], [1, "far", "fa-bookmark"], [1, "three"], [3, "cats", "selectedCategory", "addEvent", "editEvent", "deleteEvent", 4, "ngIf"], ["class", "menu", 4, "ngIf"], [3, "cats", "selectedCategory", "addEvent", "editEvent", "deleteEvent"], [1, "menu"], [1, "details"], [3, "parentCategoryId", "selectedCategory", "addNodeEvent", "navigateTreeEvent", 4, "ngIf"], [3, "selectedCategory", "categoryId", "editEvent", "navigateTreeEvent", 4, "ngIf"], [3, "category", "selectedCategory", "deleteEvent", 4, "ngIf"], [3, "parentCategoryId", "selectedCategory", "addNodeEvent", "navigateTreeEvent"], [3, "selectedCategory", "categoryId", "editEvent", "navigateTreeEvent"], [3, "category", "selectedCategory", "deleteEvent"]], template: function MainBoardCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Recipe's Categories...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MainBoardCategoriesComponent_acr_cat_tree_6_Template, 1, 2, "acr-cat-tree", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainBoardCategoriesComponent_div_7_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _category_tree_category_tree_component__WEBPACK_IMPORTED_MODULE_3__["CategoryTreeComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_9__["CreateComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_11__["DetailsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["section[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    max-width:90em;\r\n    margin:0 auto;\r\n    background:whitesmoke;\r\n    padding:2em 3em;\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\ndiv.title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 100%;\r\n}\r\n\r\ndiv.three[_ngcontent-%COMP%], div.menu[_ngcontent-%COMP%] {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n    max-width: 40em;\r\n}\r\n\r\ndiv.menu[_ngcontent-%COMP%] {\r\n    margin-left:auto;\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\ndiv.details[_ngcontent-%COMP%]{\r\n    border:2px solid magenta;\r\n    border-radius:2em;\r\n    padding:1em;\r\n    margin:2em 0;\r\n}\r\n\r\ndiv.actions[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-around;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9tYWluLWJvYXJkL21haW4tYm9hcmQtY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixtQkFBWTtJQUFaLFlBQVk7SUFDWiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFjO1lBQWQsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFjO1lBQWQsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQVk7SUFBWixZQUFZO0lBQ1osNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvbWFpbi1ib2FyZC9tYWluLWJvYXJkLWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDo5MGVtO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIGJhY2tncm91bmQ6d2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6MmVtIDNlbTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbmRpdi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAwIDAgMTAwJTtcclxufVxyXG5cclxuZGl2LnRocmVlLGRpdi5tZW51IHtcclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA0MGVtO1xyXG59XHJcblxyXG5kaXYubWVudSB7XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5kaXYuZGV0YWlsc3tcclxuICAgIGJvcmRlcjoycHggc29saWQgbWFnZW50YTtcclxuICAgIGJvcmRlci1yYWRpdXM6MmVtO1xyXG4gICAgcGFkZGluZzoxZW07XHJcbiAgICBtYXJnaW46MmVtIDA7XHJcbn1cclxuXHJcbmRpdi5hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgLyogbWFyZ2luLXRvcDogYXV0bzsgKi9cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainBoardCategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'main-board-categories',
                templateUrl: './main-board-categories.component.html',
                styleUrls: ['./main-board-categories.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, { tree: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_category_tree_category_tree_component__WEBPACK_IMPORTED_MODULE_3__["CategoryTreeComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/comments/comment/comment.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/comments/comment/comment.component.ts ***!
  \*******************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_enumerations_CookRank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/enumerations/CookRank */ "./src/app/core/enumerations/CookRank.ts");
/* harmony import */ var src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_comments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/comments.service */ "./src/app/core/services/comments.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function CommentComponent_span_18_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_span_18_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_span_18_span_1_span_2_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r281); const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r280.abortEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Abort Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_span_18_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_span_18_span_1_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283); const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r282.editModeSwitch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentComponent_span_18_span_1_span_1_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentComponent_span_18_span_1_span_2_Template, 3, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r277.editModeOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r277.editModeOn);
} }
function CommentComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    const _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentComponent_span_18_span_1_Template, 3, 2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_span_18_Template_span_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r285); const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r284.del(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r273.canEdit);
} }
function CommentComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r274.comment.content, "");
} }
function CommentComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CommentComponent_ng_template_20_Template_form_ngSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r288); const _r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r287.editComment(_r286); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommentComponent_ng_template_20_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r288); const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r289.comment.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r276.comment.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r286.invalid || _r286.pristine);
} }
const _c0 = function (a1) { return ["/user-data/profile/", a1]; };
const _c1 = function (a0) { return { "active-btn": a0 }; };
class CommentComponent {
    constructor(authService, commentService) {
        this.authService = authService;
        this.commentService = commentService;
        this.editModeOn = false;
        this.originalContent = null;
        this.changeLikesEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeContentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteCommentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.comment = {
            id: 1,
            authorCookRank: 1,
            authorUserName: "Kuncho",
            authorAvatarPicture: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            dateAdded: 3456789,
            dateModified: 3456789,
            content: "Lorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem Lorem",
            likers: ["User12", "User2", "User3"],
            disLikers: ["User5", "User6", "User7"],
        };
    }
    editModeSwitch() { this.editModeOn = !this.editModeOn; }
    ngAfterViewInit() { this.originalContent = this.comment.content; }
    get cookRank() {
        return src_app_core_enumerations_CookRank__WEBPACK_IMPORTED_MODULE_1__["CookRank"][this.comment.authorCookRank];
    }
    get isLikeAble() {
        return this.authService.isAuthenticated() && !this.comment.likers.includes(this.authService.getUserInfo().userName);
    }
    get isDislikeAble() {
        return this.authService.isAuthenticated() && !this.comment.disLikers.includes(this.authService.getUserInfo().userName);
    }
    get timeEdited() { return src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"].timeElapsed(this.comment.dateModified); }
    giveLike() {
        if (!this.isLikeAble)
            return;
        this.commentService.setVote(this.comment.id, true).subscribe(x => this.changeLikesEvent.emit(x));
    }
    giveDisLike() {
        if (!this.isDislikeAble)
            return;
        this.commentService.setVote(this.comment.id, false).subscribe(x => this.changeLikesEvent.emit(x));
    }
    get canDelete() {
        return this.authService.isAuthenticated() &&
            (this.authService.isAdmin || [this.comment.authorUserName, this.recipeAuthorUserName].includes(this.authService.getUserInfo().userName));
    }
    get canEdit() { return this.authService.isAuthenticated() && this.comment.authorUserName === this.authService.getUserInfo().userName; }
    del() {
        this.deleteCommentEvent.emit(this.comment.id);
    }
    editComment(form) {
        const { editedContent } = form.value;
        if (form.invalid || editedContent === this.originalContent)
            return;
        const dateModified = Date.now() / 1000;
        const commentStatus = { id: this.comment.id, content: editedContent, dateModified };
        this.commentService.editContent(commentStatus).subscribe(() => {
            this.changeContentEvent.emit(commentStatus);
            return this.editModeSwitch();
        });
        console.log('contentChanged');
    }
    abortEdit() {
        this.comment.content = this.originalContent;
    }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_comments_service__WEBPACK_IMPORTED_MODULE_4__["CommentsService"])); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["acr-comment"]], inputs: { comment: "comment", recipeAuthorUserName: "recipeAuthorUserName" }, outputs: { changeLikesEvent: "changeLikesEvent", changeContentEvent: "changeContentEvent", deleteCommentEvent: "deleteCommentEvent" }, decls: 22, vars: 18, consts: [[1, "media"], ["alt", "post_author_picture", 1, "img-circle", "pull-left", 3, "src"], [1, "media-body"], [1, "label-info"], [1, "text-decoration-none", "text-success", "font-weight-bold", 3, "routerLink"], [3, "ngClass", "click"], [1, "fas", "fa-thumbs-up"], [1, "fas", "fa-thumbs-down"], [1, "text-muted"], ["class", "actions", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["editF", ""], [1, "actions"], ["class", "active-btn", 3, "click", 4, "ngIf"], [1, "active-btn", 3, "click"], [1, "far", "fa-trash-alt"], [4, "ngIf"], ["class", "text-danger", 3, "click", 4, "ngIf"], [1, "far", "fa-edit"], [1, "text-danger", 3, "click"], [1, "fas", "fa-ban"], [1, "content", ".smooth-scroll"], [3, "ngSubmit"], ["editForm", "ngForm"], [1, "row", "jusify-content-start", "mt-3"], [1, "col-10", "form-group"], ["rows", "2", "cols", "100%", "name", "editedContent", "placeholder", "Type edited content...", "minlength", "4", "maxlength", "1024", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "fas", "fa-save"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_Template_span_click_9_listener($event) { return ctx.giveLike(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_Template_span_click_12_listener($event) { return ctx.giveDisLike(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CommentComponent_span_18_Template, 5, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CommentComponent_div_19_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CommentComponent_ng_template_20_Template, 9, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.comment.authorAvatarPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.cookRank, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.comment.authorUserName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment.authorUserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx.isLikeAble));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.comment.likers.length, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.isDislikeAble));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.comment.disLikers.length, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last edited: ", ctx.timeEdited, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canDelete || ctx.canEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editModeOn)("ngIfElse", _r275);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: ["img.img-circle[_ngcontent-%COMP%] {\r\nborder-radius: 40%;\r\nmin-height: 4em;\r\nmax-height: 6em;\r\nmargin:auto 0;\r\npadding-left: 1em;\r\n}\r\n     \r\nli[_ngcontent-%COMP%]   p.content[_ngcontent-%COMP%]{\r\n    margin-top:1em;\r\n    min-height:3em;\r\n    max-height:5em;\r\n    overflow:auto auto;\r\n}\r\n     \r\nli.media[_ngcontent-%COMP%] {\r\n    border: 2px solid goldenrod;\r\n    border-radius: 3em 1.2em;;\r\n    margin-bottom:1em;\r\n    margin-right:1em;\r\n}\r\n     \r\nli.media[_ngcontent-%COMP%]:nth-child(odd){\r\n    padding: 1em 0;\r\n}\r\n     \r\ndiv.media-body[_ngcontent-%COMP%]{\r\n  padding-left:2em;\r\n  padding-right:3em;\r\n  }\r\n     \r\nspan.label-info[_ngcontent-%COMP%]{\r\n    border-bottom: 3px solid rgba(119, 41, 83, 0.73);\r\n    padding-bottom:0.3em;\r\n    margin-bottom:0.5em;\r\n}\r\n     \r\nspan.active-btn[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{\r\n    color:darkorange;\r\n}\r\n     \r\nspan.active-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n    display:inline-block;\r\n    color:blue;\r\n    -webkit-transform: scaleY(1.3);\r\n            transform: scaleY(1.3);\r\n    cursor: pointer;\r\n    -webkit-transition: 0.5s ease-in-out;\r\n    transition: 0.5s ease-in-out;\r\n}\r\n     \r\nspan.actions[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\r\n    float:right; \r\n    cursor: pointer;\r\n    margin-right: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIO0FBQ0Esa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixlQUFlO0FBQ2YsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCOztBQUVGO0lBQ0ksZ0RBQWdEO0lBQ2hELG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9DQUE0QjtJQUE1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbW1lbnQtd3JhcHBlciAucGFuZWwtYm9keSB7XHJcbiAgICBtYXgtaGVpZ2h0OjEwZW07XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG59ICovXHJcbiAgICAgXHJcbmltZy5pbWctY2lyY2xlIHtcclxuYm9yZGVyLXJhZGl1czogNDAlO1xyXG5taW4taGVpZ2h0OiA0ZW07XHJcbm1heC1oZWlnaHQ6IDZlbTtcclxubWFyZ2luOmF1dG8gMDtcclxucGFkZGluZy1sZWZ0OiAxZW07XHJcbn1cclxuXHJcbmxpIHAuY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6MWVtO1xyXG4gICAgbWluLWhlaWdodDozZW07XHJcbiAgICBtYXgtaGVpZ2h0OjVlbTtcclxuICAgIG92ZXJmbG93OmF1dG8gYXV0bztcclxufVxyXG5cclxubGkubWVkaWEge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM2VtIDEuMmVtOztcclxuICAgIG1hcmdpbi1ib3R0b206MWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjFlbTtcclxufVxyXG5cclxubGkubWVkaWE6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICBwYWRkaW5nOiAxZW0gMDtcclxufVxyXG5cclxuZGl2Lm1lZGlhLWJvZHl7XHJcbiAgcGFkZGluZy1sZWZ0OjJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OjNlbTtcclxuICB9XHJcblxyXG5zcGFuLmxhYmVsLWluZm97XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgxMTksIDQxLCA4MywgMC43Myk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowLjNlbTtcclxuICAgIG1hcmdpbi1ib3R0b206MC41ZW07XHJcbn1cclxuXHJcbnNwYW4uYWN0aXZlLWJ0bj5pe1xyXG4gICAgY29sb3I6ZGFya29yYW5nZTtcclxufVxyXG5cclxuc3Bhbi5hY3RpdmUtYnRuIGk6aG92ZXJ7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOmJsdWU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxLjMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuc3Bhbi5hY3Rpb25zPnNwYW57XHJcbiAgICBmbG9hdDpyaWdodDsgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-comment',
                templateUrl: './comment.component.html',
                styleUrls: ['./comment.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: src_app_core_services_comments_service__WEBPACK_IMPORTED_MODULE_4__["CommentsService"] }]; }, { changeLikesEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], changeContentEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteCommentEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], recipeAuthorUserName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/comments/comments.module.ts":
/*!*********************************************!*\
  !*** ./src/app/comments/comments.module.ts ***!
  \*********************************************/
/*! exports provided: CommentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsModule", function() { return CommentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _list_comments_list_comments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-comments/list-comments.component */ "./src/app/comments/list-comments/list-comments.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comments/comment/comment.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");






class CommentsModule {
}
CommentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CommentsModule });
CommentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CommentsModule_Factory(t) { return new (t || CommentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommentsModule, { declarations: [_list_comments_list_comments_component__WEBPACK_IMPORTED_MODULE_2__["ListCommentsComponent"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_3__["CommentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]], exports: [_list_comments_list_comments_component__WEBPACK_IMPORTED_MODULE_2__["ListCommentsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_list_comments_list_comments_component__WEBPACK_IMPORTED_MODULE_2__["ListCommentsComponent"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_3__["CommentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
                ],
                exports: [_list_comments_list_comments_component__WEBPACK_IMPORTED_MODULE_2__["ListCommentsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comments/list-comments/list-comments.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comments/list-comments/list-comments.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCommentsComponent", function() { return ListCommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/comments.service */ "./src/app/core/services/comments.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comment/comment.component */ "./src/app/comments/comment/comment.component.ts");









function ListCommentsComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ListCommentsComponent_form_7_Template_form_ngSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r267); const _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r266.submitComment(_r265.value); return _r265.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r263.isLastCommentor ? "Cant post sequencial comments..." : "write a comment...")("disabled", ctx_r263.isLastCommentor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r265.invalid);
} }
function ListCommentsComponent_acr_comment_15_Template(rf, ctx) { if (rf & 1) {
    const _r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "acr-comment", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeLikesEvent", function ListCommentsComponent_acr_comment_15_Template_acr_comment_changeLikesEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270); const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r269.changeLikes($event); })("changeContentEvent", function ListCommentsComponent_acr_comment_15_Template_acr_comment_changeContentEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270); const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r271.changeContent($event); })("deleteCommentEvent", function ListCommentsComponent_acr_comment_15_Template_acr_comment_deleteCommentEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270); const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r272.deleteComment($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r268 = ctx.$implicit;
    const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", comment_r268)("recipeAuthorUserName", ctx_r264.recipeAuthorUserName);
} }
class ListCommentsComponent {
    constructor(authService, commentService, toastr, spinner) {
        this.authService = authService;
        this.commentService = commentService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.signalR = null;
        this.isLoading = false;
        this.endReached = false;
        this.page = 1;
        this.comments = [];
        this.scrolSayLoad = (target) => target.scrollHeight - (target.scrollTop + target.clientHeight) < 20;
    }
    ngOnInit() {
        this.fetchComments();
        this.signalR.monitorComments(this.comments);
    }
    get isLastCommentor() {
        return this.isLoggedIn && this.comments.length > 0 && this.comments[0].authorUserName === this.myInfo.userName;
    }
    fetchComments() {
        if (this.endReached || this.isLoading)
            return;
        this.isLoading = true;
        this.spinner.show();
        this.commentService.getCommentsForRecipe(this.page++, this.recipeId).subscribe(coms => {
            if (coms.length === 0) {
                this.endReached = true;
                return;
            }
            this.comments.splice(this.comments.length, 0, ...coms);
        }).add(() => { this.isLoading = false; this.spinner.hide(); });
    }
    onScroll({ target }) {
        if (!this.scrolSayLoad(target)) {
            return;
        }
        this.fetchComments();
    }
    get isLoggedIn() {
        return this.authService.isAuthenticated();
    }
    get myInfo() {
        return this.isLoggedIn ? this.authService.getUserInfo() : null;
    }
    submitComment({ content }) {
        if (content.length < 4 || !this.isLoggedIn)
            return;
        const newComment = { content, authorId: this.authService.getUserInfo().id, recipeId: this.recipeId };
        this.commentService.postComment(newComment).subscribe((id) => {
            const timeNow = Date.now() / 1000;
            const newCommentForDisplay = {
                id,
                authorUserName: this.myInfo.userName,
                authorCookRank: this.myInfo.cookRank,
                authorAvatarPicture: this.myInfo.avPic,
                dateAdded: timeNow,
                dateModified: timeNow,
                likers: [],
                disLikers: [],
                content,
            };
            this.signalR.addComment(newCommentForDisplay);
        }, (e) => {
            this.toastr.error("Unsuccessful comment post", "Misfortune!");
            console.error("Comment sending error", e);
        });
    }
    changeLikes(status) {
        this.signalR.changeCommentVote(status);
    }
    changeContent(status) {
        this.signalR.changeCommentContent(status);
    }
    deleteComment(id) {
        this.commentService.del(id).subscribe(() => this.signalR.removeComment(id));
    }
}
ListCommentsComponent.ɵfac = function ListCommentsComponent_Factory(t) { return new (t || ListCommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"])); };
ListCommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListCommentsComponent, selectors: [["acr-list-comments"]], inputs: { recipeId: "recipeId", recipeAuthorUserName: "recipeAuthorUserName", signalR: "signalR" }, decls: 17, vars: 3, consts: [[1, "bootstrap", "snippets", "px-4"], [1, "comment-wrapper"], [1, "panel", "panel-info"], [1, "panel-heading", "text-center", "py-2"], [1, "far", "fa-comments"], ["class", "px-4", 3, "ngSubmit", 4, "ngIf"], [2, "position", "relative"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "rgba(119, 41, 83, 0.73)", "type", "ball-scale-multiple", 3, "fullScreen"], [2, "font-size", "24px", "color", "rgba(119, 41, 83, 0.73)", "padding-left", "12em", "padding-top", "1em"], [1, "panel-body", 3, "scroll"], [1, "media-list"], [3, "comment", "recipeAuthorUserName", "changeLikesEvent", "changeContentEvent", "deleteCommentEvent", 4, "ngFor", "ngForOf"], [1, "botomizer"], [1, "px-4", 3, "ngSubmit"], ["f", "ngForm"], [1, "row", "justify-content-center"], [1, "col-1"], [1, "col-6"], ["name", "content", "ngModel", "", "minlength", "4", "required", "", "rows", "2", 1, "form-control", 3, "placeholder", "disabled"], [1, "col-2"], ["type", "submit", 1, "btn", "btn-info", "pull-right", 3, "disabled"], [3, "comment", "recipeAuthorUserName", "changeLikesEvent", "changeContentEvent", "deleteCommentEvent"]], template: function ListCommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0 Comments For Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListCommentsComponent_form_7_Template, 11, 3, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-spinner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Loading comments...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ListCommentsComponent_Template_div_scroll_13_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListCommentsComponent_acr_comment_15_Template, 1, 2, "acr-comment", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_7__["CommentComponent"]], styles: ["div.comment-wrapper[_ngcontent-%COMP%]  {\r\n    max-height:30em;\r\n}\r\ndiv.panel-body[_ngcontent-%COMP%]{\r\n    max-height:20em;\r\n    max-width: 80em;\r\n    margin: 0 auto;\r\n    overflow:auto auto;\r\n}\r\ndiv.botomizer[_ngcontent-%COMP%]{\r\n    height: 5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvbGlzdC1jb21tZW50cy9saXN0LWNvbW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUdBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tbWVudHMvbGlzdC1jb21tZW50cy9saXN0LWNvbW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmRpdi5jb21tZW50LXdyYXBwZXIgIHtcclxuICAgIG1heC1oZWlnaHQ6MzBlbTtcclxufVxyXG5kaXYucGFuZWwtYm9keXtcclxuICAgIG1heC1oZWlnaHQ6MjBlbTtcclxuICAgIG1heC13aWR0aDogODBlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6YXV0byBhdXRvO1xyXG59XHJcblxyXG4gICAgXHJcbmRpdi5ib3RvbWl6ZXJ7XHJcbiAgICBoZWlnaHQ6IDVlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListCommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-list-comments',
                templateUrl: './list-comments.component.html',
                styleUrls: ['./list-comments.component.css']
            }]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _core_services_comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }]; }, { recipeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], recipeAuthorUserName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], signalR: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/components/questionComponent/dialog-question.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/core/components/questionComponent/dialog-question.component.ts ***!
  \********************************************************************************/
/*! exports provided: DialogQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogQuestionComponent", function() { return DialogQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _pipes_htmlRaw_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/htmlRaw.pipe */ "./src/app/core/pipes/htmlRaw.pipe.ts");







function DialogQuestionComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r71.data.title);
} }
class DialogQuestionComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogQuestionComponent.ɵfac = function DialogQuestionComponent_Factory(t) { return new (t || DialogQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DialogQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogQuestionComponent, selectors: [["nsh-dialog-question"]], decls: 13, vars: 9, consts: [[1, "container"], [1, "media"], ["alt", "question-picture", 3, "src"], [1, "quiz"], ["class", "title", 4, "ngIf"], [1, "question"], [1, "options"], ["mat-button", "", "mat-dialog-close", "false", 1, "btn", "btn-info", 3, "innerHTML"], ["mat-button", "", "mat-dialog-close", "true", 1, "btn", "btn-primary", 3, "innerHTML"], [1, "title"]], template: function DialogQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DialogQuestionComponent_div_4_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "htmlRaw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "htmlRaw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.data.picUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.question);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, ctx.data.negativeAnswerBtnName), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, ctx.data.positiveAnswerBtnName), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], pipes: [_pipes_htmlRaw_pipe__WEBPACK_IMPORTED_MODULE_4__["HTMLRaw"]], styles: ["div.container[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    padding:0;\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    flex-wrap: wrap;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n}\r\n\r\nfigure.media[_ngcontent-%COMP%]{ \r\n    -webkit-box-flex: 1; \r\n            flex: 1 0 10%;\r\n    margin-bottom: 0;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width:auto;\r\n    height: 10em;\r\n    border-radius: 1em;\r\n}\r\n\r\ndiv.quiz[_ngcontent-%COMP%] {\r\n    -webkit-box-flex:1;\r\n            flex:1 0 50%;\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n    padding-left:1.5em;\r\n}\r\n\r\ndiv.title.h1[_ngcontent-%COMP%]{text-align: left;}\r\n\r\nnav.options[_ngcontent-%COMP%]{\r\n    margin-top: auto;\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\ndiv.options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 1 10em}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3F1ZXN0aW9uQ29tcG9uZW50L2RpYWxvZy1xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxtQkFBWTtJQUFaLFlBQVk7SUFDWiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFhO1lBQWIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQVk7WUFBWixZQUFZO0lBQ1osbUJBQVk7SUFBWixZQUFZO0lBQ1osNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsdUJBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUEsYUFBYSxnQkFBZ0IsQ0FBQzs7QUFFOUI7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQVk7SUFBWixZQUFZO0lBQ1osOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHlCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUEsbUJBQW1CLGtCQUFZLENBQVosYUFBYSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9xdWVzdGlvbkNvbXBvbmVudC9kaWFsb2ctcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuZmlndXJlLm1lZGlheyBcclxuICAgIGZsZXg6IDEgMCAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6YXV0bztcclxuICAgIGhlaWdodDogMTBlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxufVxyXG5cclxuZGl2LnF1aXoge1xyXG4gICAgZmxleDoxIDAgNTAlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmctbGVmdDoxLjVlbTtcclxufVxyXG5cclxuZGl2LnRpdGxlLmgxe3RleHQtYWxpZ246IGxlZnQ7fVxyXG5cclxubmF2Lm9wdGlvbnN7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5kaXYub3B0aW9ucyBidXR0b257ZmxleDowIDEgMTBlbX1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogQuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: './nsh-dialog-question',
                templateUrl: './dialog-question.component.html',
                styleUrls: ['./dialog-question.component.css'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _pipes_htmlRaw_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/htmlRaw.pipe */ "./src/app/core/pipes/htmlRaw.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pipes_safeUrl_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/safeUrl.pipe */ "./src/app/core/pipes/safeUrl.pipe.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_smart_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-smart-popover */ "./node_modules/ngx-smart-popover/__ivy_ngcc__/fesm2015/ngx-smart-popover.js");
/* harmony import */ var _directives_class_if_class_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/class-if-class.directive */ "./src/app/core/directives/class-if-class.directive.ts");
/* harmony import */ var _components_questionComponent_dialog_question_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/questionComponent/dialog-question.component */ "./src/app/core/components/questionComponent/dialog-question.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material/material.module */ "./src/app/core/material/material.module.ts");















class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ngx_smart_popover__WEBPACK_IMPORTED_MODULE_10__["PopoverModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"]
        ],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ngx_smart_popover__WEBPACK_IMPORTED_MODULE_10__["PopoverModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_pipes_htmlRaw_pipe__WEBPACK_IMPORTED_MODULE_4__["HTMLRaw"], _pipes_safeUrl_pipe__WEBPACK_IMPORTED_MODULE_6__["SafePipe"], _directives_class_if_class_directive__WEBPACK_IMPORTED_MODULE_11__["ClassIfClassDirective"], _components_questionComponent_dialog_question_component__WEBPACK_IMPORTED_MODULE_12__["DialogQuestionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ngx_smart_popover__WEBPACK_IMPORTED_MODULE_10__["PopoverModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"]], exports: [_directives_class_if_class_directive__WEBPACK_IMPORTED_MODULE_11__["ClassIfClassDirective"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"], _pipes_htmlRaw_pipe__WEBPACK_IMPORTED_MODULE_4__["HTMLRaw"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _pipes_safeUrl_pipe__WEBPACK_IMPORTED_MODULE_6__["SafePipe"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ngx_smart_popover__WEBPACK_IMPORTED_MODULE_10__["PopoverModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pipes_htmlRaw_pipe__WEBPACK_IMPORTED_MODULE_4__["HTMLRaw"], _pipes_safeUrl_pipe__WEBPACK_IMPORTED_MODULE_6__["SafePipe"], _directives_class_if_class_directive__WEBPACK_IMPORTED_MODULE_11__["ClassIfClassDirective"], _components_questionComponent_dialog_question_component__WEBPACK_IMPORTED_MODULE_12__["DialogQuestionComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ngx_smart_popover__WEBPACK_IMPORTED_MODULE_10__["PopoverModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"]
                ],
                exports: [_directives_class_if_class_directive__WEBPACK_IMPORTED_MODULE_11__["ClassIfClassDirective"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"], _pipes_htmlRaw_pipe__WEBPACK_IMPORTED_MODULE_4__["HTMLRaw"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _pipes_safeUrl_pipe__WEBPACK_IMPORTED_MODULE_6__["SafePipe"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ngx_smart_popover__WEBPACK_IMPORTED_MODULE_10__["PopoverModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/directives/class-if-class.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/directives/class-if-class.directive.ts ***!
  \*************************************************************/
/*! exports provided: ClassIfClassDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassIfClassDirective", function() { return ClassIfClassDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const splitArrToClasses = (str) => str.split(' ').filter(x => !x.includes(' '));
class ClassIfClassDirective {
    constructor(el) {
        this.el = el;
        /*
          [0,1][]
          [0] are all classes that will be attached or removed if [0] is present or not!
          [1] are all classes that need to be present!
          every rule will either attach or remove all classes of [1]
          order matters last one wins
        */
        this.rules = null;
        this.test = el.nativeElement.classList;
    }
    get elmntClassList() {
        return this.el.nativeElement.classList;
    }
    get getClassyRules() {
        return this.rules.map(x => ({
            provided: splitArrToClasses(x[0]),
            required: splitArrToClasses(x[1]),
        }));
    }
    ngDoCheck() {
        {
            this.updateClasses();
        }
    }
    imediateCheck() {
        setTimeout(() => this.updateClasses(), 1000);
    }
    updateClasses() {
        if (this.rules === null || this.elmntClassList.value === this.currentClassState)
            return;
        this.getClassyRules.forEach(({ required, provided }) => {
            if (required.some(x => !this.elmntClassList.contains(x))) {
                const classesToRemove = provided.filter(x => this.elmntClassList.contains(x));
                return this.elmntClassList.remove(...classesToRemove);
            }
            const classesToAdd = provided.filter(x => !this.elmntClassList.contains(x));
            this.elmntClassList.add(...provided.filter(x => classesToAdd));
        });
        this.currentClassState = this.elmntClassList.value;
    }
}
ClassIfClassDirective.ɵfac = function ClassIfClassDirective_Factory(t) { return new (t || ClassIfClassDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ClassIfClassDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ClassIfClassDirective, selectors: [["", "nshClassIfClass", ""]], hostBindings: function ClassIfClassDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClassIfClassDirective_change_HostBindingHandler($event) { return ctx.imediateCheck(); });
    } }, inputs: { rules: ["nshClassIfClass", "rules"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassIfClassDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[nshClassIfClass]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { rules: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['nshClassIfClass']
        }], imediateCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["change"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/enumerations/CookRank.ts":
/*!***********************************************!*\
  !*** ./src/app/core/enumerations/CookRank.ts ***!
  \***********************************************/
/*! exports provided: CookRank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookRank", function() { return CookRank; });
var CookRank;
(function (CookRank) {
    CookRank[CookRank["Newbie"] = 1] = "Newbie";
    CookRank[CookRank["Cooker Assistant"] = 2] = "Cooker Assistant";
    CookRank[CookRank["Cooker"] = 3] = "Cooker";
    CookRank[CookRank["Shef Assistant"] = 4] = "Shef Assistant";
    CookRank[CookRank["Shef"] = 5] = "Shef";
    CookRank[CookRank["Wizard Assistant"] = 6] = "Wizard Assistant";
    CookRank[CookRank["National Treasure"] = 7] = "National Treasure";
})(CookRank || (CookRank = {}));


/***/ }),

/***/ "./src/app/core/enumerations/Gender.ts":
/*!*********************************************!*\
  !*** ./src/app/core/enumerations/Gender.ts ***!
  \*********************************************/
/*! exports provided: Gender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
var Gender;
(function (Gender) {
    Gender[Gender["ufo"] = 0] = "ufo";
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 2] = "female";
})(Gender || (Gender = {}));


/***/ }),

/***/ "./src/app/core/enumerations/MeasureTypes.ts":
/*!***************************************************!*\
  !*** ./src/app/core/enumerations/MeasureTypes.ts ***!
  \***************************************************/
/*! exports provided: MeasureTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasureTypes", function() { return MeasureTypes; });
var MeasureTypes;
(function (MeasureTypes) {
    MeasureTypes[MeasureTypes["Weight Units"] = 1] = "Weight Units";
    MeasureTypes[MeasureTypes["Volume Units"] = 2] = "Volume Units";
    MeasureTypes[MeasureTypes["Count"] = 3] = "Count";
})(MeasureTypes || (MeasureTypes = {}));


/***/ }),

/***/ "./src/app/core/enumerations/OriginTypes.ts":
/*!**************************************************!*\
  !*** ./src/app/core/enumerations/OriginTypes.ts ***!
  \**************************************************/
/*! exports provided: OriginTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OriginTypes", function() { return OriginTypes; });
var OriginTypes;
(function (OriginTypes) {
    OriginTypes[OriginTypes["Plant"] = 1] = "Plant";
    OriginTypes[OriginTypes["Animal"] = 3] = "Animal";
    OriginTypes[OriginTypes["Non Organic"] = 2] = "Non Organic";
})(OriginTypes || (OriginTypes = {}));


/***/ }),

/***/ "./src/app/core/enumerations/RecipeDifficulty.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/enumerations/RecipeDifficulty.ts ***!
  \*******************************************************/
/*! exports provided: RecipeDifficulty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDifficulty", function() { return RecipeDifficulty; });
var RecipeDifficulty;
(function (RecipeDifficulty) {
    RecipeDifficulty[RecipeDifficulty["Easy"] = 1] = "Easy";
    RecipeDifficulty[RecipeDifficulty["Normal"] = 2] = "Normal";
    RecipeDifficulty[RecipeDifficulty["Hard"] = 3] = "Hard";
})(RecipeDifficulty || (RecipeDifficulty = {}));


/***/ }),

/***/ "./src/app/core/guards/authorized.only.ts":
/*!************************************************!*\
  !*** ./src/app/core/guards/authorized.only.ts ***!
  \************************************************/
/*! exports provided: AuthorizedOnlyGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizedOnlyGuard", function() { return AuthorizedOnlyGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");



class AuthorizedOnlyGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(route, state) {
        return this.authService.isAuthenticated();
    }
}
AuthorizedOnlyGuard.ɵfac = function AuthorizedOnlyGuard_Factory(t) { return new (t || AuthorizedOnlyGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthorizedOnlyGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorizedOnlyGuard, factory: AuthorizedOnlyGuard.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizedOnlyGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: "root" }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/interceptors/auth.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _settings_apiSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/apiSettings */ "./src/app/core/settings/apiSettings.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");






class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        if (this.authService.isAuthenticated() &&
            this.authService.getUserInfo().exp <= (Date.now() / 1000)) {
            this.authService.clearUserData();
        }
        if (req.url === _settings_apiSettings__WEBPACK_IMPORTED_MODULE_2__["authPaths"].registerUser || req.url === _settings_apiSettings__WEBPACK_IMPORTED_MODULE_2__["authPaths"].logInUser) {
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(evnt => {
                if (evnt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && evnt.body["isSuccessfull"]) {
                    this.authService.storeToken(evnt.body["authToken"]);
                }
            }));
        }
        if (this.authService.isAuthenticated()) {
            return next.handle(req.clone({
                setHeaders: { Authorization: `Bearer ${this.authService.getToken()}` }
            }));
        }
        return next.handle(req);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{ providedIn: "root" }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/material/material.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/material/material.module.ts ***!
  \**************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");











































const modules = [
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            modules
        ],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]], exports: [_angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    modules
                ],
                exports: [modules]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/pipes/htmlRaw.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/core/pipes/htmlRaw.pipe.ts ***!
  \********************************************/
/*! exports provided: HTMLRaw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLRaw", function() { return HTMLRaw; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class HTMLRaw {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}
HTMLRaw.ɵfac = function HTMLRaw_Factory(t) { return new (t || HTMLRaw)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
HTMLRaw.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "htmlRaw", type: HTMLRaw, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HTMLRaw, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'htmlRaw', pure: false }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/pipes/safeUrl.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/core/pipes/safeUrl.pipe.ts ***!
  \********************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'safe' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/resolvers/ingredient-edit-data-resolver.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/resolvers/ingredient-edit-data-resolver.ts ***!
  \*****************************************************************/
/*! exports provided: IngredientEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientEditResolver", function() { return IngredientEditResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_ingredient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ingredient.service */ "./src/app/core/services/ingredient.service.ts");



class IngredientEditResolver {
    constructor(ingredientService) {
        this.ingredientService = ingredientService;
    }
    resolve(route, state) {
        const id = +route.url[1].path;
        return this.ingredientService.getEditDataById(id);
    }
}
IngredientEditResolver.ɵfac = function IngredientEditResolver_Factory(t) { return new (t || IngredientEditResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_ingredient_service__WEBPACK_IMPORTED_MODULE_1__["IngredientService"])); };
IngredientEditResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IngredientEditResolver, factory: IngredientEditResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngredientEditResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_ingredient_service__WEBPACK_IMPORTED_MODULE_1__["IngredientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/resolvers/recipe-details-resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/resolvers/recipe-details-resolver.ts ***!
  \***********************************************************/
/*! exports provided: RecipeDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailsResolver", function() { return RecipeDetailsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/recipe.service */ "./src/app/core/services/recipe.service.ts");



class RecipeDetailsResolver {
    constructor(recipeService) {
        this.recipeService = recipeService;
    }
    resolve(route, state) {
        var id = route.paramMap.get('id');
        return this.recipeService.getDetails(id);
    }
}
RecipeDetailsResolver.ɵfac = function RecipeDetailsResolver_Factory(t) { return new (t || RecipeDetailsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"])); };
RecipeDetailsResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RecipeDetailsResolver, factory: RecipeDetailsResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeDetailsResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/resolvers/recipe-edit-data-resolver.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/resolvers/recipe-edit-data-resolver.ts ***!
  \*************************************************************/
/*! exports provided: RecipeEditDataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditDataResolver", function() { return RecipeEditDataResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/recipe.service */ "./src/app/core/services/recipe.service.ts");



class RecipeEditDataResolver {
    constructor(recipeService) {
        this.recipeService = recipeService;
    }
    resolve(route, state) {
        var id = route.paramMap.get('id');
        return this.recipeService.getEditDetails(id);
    }
}
RecipeEditDataResolver.ɵfac = function RecipeEditDataResolver_Factory(t) { return new (t || RecipeEditDataResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"])); };
RecipeEditDataResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RecipeEditDataResolver, factory: RecipeEditDataResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeEditDataResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/resolvers/user-data-profile-edit.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/resolvers/user-data-profile-edit.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: UserDataProfileEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataProfileEditResolver", function() { return UserDataProfileEditResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user-data.service */ "./src/app/core/services/user-data.service.ts");



class UserDataProfileEditResolver {
    constructor(udService) {
        this.udService = udService;
    }
    resolve(route, state) {
        return this.udService.getUserInfoForEditing();
    }
}
UserDataProfileEditResolver.ɵfac = function UserDataProfileEditResolver_Factory(t) { return new (t || UserDataProfileEditResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_data_service__WEBPACK_IMPORTED_MODULE_1__["UserDataService"])); };
UserDataProfileEditResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserDataProfileEditResolver, factory: UserDataProfileEditResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDataProfileEditResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_1__["UserDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/resolvers/user-data.resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/core/resolvers/user-data.resolver.ts ***!
  \******************************************************/
/*! exports provided: UserDataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataResolver", function() { return UserDataResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user-data.service */ "./src/app/core/services/user-data.service.ts");



class UserDataResolver {
    constructor(udService) {
        this.udService = udService;
    }
    resolve(route, state) {
        var userName = route.paramMap.get('userName');
        return this.udService.getUserInfoByUserName(userName);
    }
}
UserDataResolver.ɵfac = function UserDataResolver_Factory(t) { return new (t || UserDataResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_data_service__WEBPACK_IMPORTED_MODULE_1__["UserDataService"])); };
UserDataResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserDataResolver, factory: UserDataResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDataResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_1__["UserDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _settings_apiSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/apiSettings */ "./src/app/core/settings/apiSettings.ts");
/* harmony import */ var _enumerations_Gender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enumerations/Gender */ "./src/app/core/enumerations/Gender.ts");
/* harmony import */ var _enumerations_CookRank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enumerations/CookRank */ "./src/app/core/enumerations/CookRank.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class AuthService {
    constructor(http) {
        this.http = http;
    }
    isAuthenticated() {
        return localStorage.getItem("authToken") !== null;
    }
    checkUserNameOrEmailTaken({ userName, email }) {
        return this.http.post(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_2__["authPaths"].checkUserNameOrEmailTaken, { UserName: userName, Email: email });
    }
    register(ud) {
        let userData = {
            UserName: ud.userName,
            Email: ud.email,
            FirstName: ud.firstName,
            Password: ud.password,
            AvatarPicture: ud.avatarPicture,
            Gender: _enumerations_Gender__WEBPACK_IMPORTED_MODULE_3__["Gender"][ud.gender],
            LastName: ud.lastName,
            Description: ud.description,
        };
        return this.http.post(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_2__["authPaths"].registerUser, userData);
    }
    login({ umail, password }) {
        return this.http.post(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_2__["authPaths"].logInUser, { UserNameOrEmail: umail, Password: password });
    }
    clearUserData() {
        localStorage.clear();
    }
    getUserInfo() {
        return this.parseJwt(this.getToken());
    }
    get isAdmin() {
        return this.isAuthenticated() && this.getUserInfo().roles.includes("Admin");
    }
    updateToken() {
        return this.http.post(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_2__["authPaths"].updateToken, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(lr => {
            if (lr.isSuccessfull) {
                this.storeToken(lr.authToken);
                console.log(lr);
            }
        }));
    }
    parseJwt(token) {
        if (!token)
            return null;
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const tInfo = JSON.parse(jsonPayload);
        return {
            id: tInfo._id,
            userName: tInfo.unique_name,
            fullName: tInfo.fullName,
            avPic: tInfo.avPic,
            cookRank: _enumerations_CookRank__WEBPACK_IMPORTED_MODULE_4__["CookRank"][tInfo.cookRank],
            roles: tInfo.roles.split("|"),
            blocked: tInfo.blocked.split("|"),
            exp: tInfo.exp,
        };
    }
    ;
    getToken() {
        return localStorage.getItem("authToken") || null;
    }
    storeToken(token) {
        localStorage.setItem("authToken", token);
    }
    getChupakabra() {
        return this.http.get("https://localhost:5001/users/vzemi");
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/category.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/category.service.ts ***!
  \***************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/apiSettings */ "./src/app/core/settings/apiSettings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CategoryService {
    constructor(http) {
        this.http = http;
    }
    getAllMini() {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["categoryPaths"].getAllMini);
    }
    getThreeStructure() {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["categoryPaths"].getThreeStructure);
    }
    getDetails(id) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["categoryPaths"].getDetails(id));
    }
    nameTaken(name) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["categoryPaths"].nameUsed(name));
    }
    create(v) {
        return this.http.post(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["categoryPaths"].base, v);
    }
    deleteCategoryById(id) {
        return this.http.delete(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["categoryPaths"].delete(id));
    }
    getEditDetails(id) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["categoryPaths"].getEditDetails(id));
    }
    editCategory(v) {
        return this.http.put(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["categoryPaths"].base, v);
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/comments.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/comments.service.ts ***!
  \***************************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/apiSettings */ "./src/app/core/settings/apiSettings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CommentsService {
    constructor(http) {
        this.http = http;
    }
    getCommentsForRecipe(pageNum, recipeId) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["commentsPaths"].getAllForRecipe(pageNum, recipeId));
    }
    postComment(comment) {
        return this.http.post(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["commentsPaths"].base, comment);
    }
    setVote(id, like) {
        return this.http.put(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["commentsPaths"].setVote, { id, like });
    }
    del(id) {
        return this.http.delete(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["commentsPaths"].delete(id));
    }
    editContent(contentStatus) {
        return this.http.patch(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["commentsPaths"].base, contentStatus);
    }
}
CommentsService.ɵfac = function CommentsService_Factory(t) { return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CommentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentsService, factory: CommentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/helper.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/helper.service.ts ***!
  \*************************************************/
/*! exports provided: CustomDateFormats, HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateFormats", function() { return CustomDateFormats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



const pad2 = (num) => (num < 10 ? '0' : '') + num;
const dateFormats = {
    defaultformater: (d) => `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()} [${d.getHours()} : ${pad2(d.getMinutes())}]`
};
var CustomDateFormats;
(function (CustomDateFormats) {
    CustomDateFormats[CustomDateFormats["DefaultFormater"] = 1] = "DefaultFormater";
})(CustomDateFormats || (CustomDateFormats = {}));
function convertToCurrentDateTime(date) {
    const offsetHours = new Date().getTimezoneOffset() / -60;
    date.setHours(date.getHours() + offsetHours);
    return date;
}
const DateTimeCStoJS = (date, symbol = "T") => {
    let t = {};
    let csDate = date.split("-");
    t["year"] = +csDate.shift();
    t["month"] = +csDate.shift();
    csDate = csDate[0].split(symbol);
    t["date"] = +csDate.shift();
    csDate = csDate[0].split(":");
    t["hours"] = +csDate.shift();
    t["minutes"] = +csDate.shift();
    csDate = csDate[0].split(".");
    t["seconds"] = +csDate.shift();
    t["ms"] = 1000 * +(`0.` + csDate.shift());
    const result = convertToCurrentDateTime(new Date(t["year"], t["month"], t["date"], t["hours"], t["minutes"], t["seconds"], t["ms"]));
    return new Date(result);
};
class HelperService {
    constructor() {
    }
    static getEnumOptions(enumeration) {
        const ent = Object.entries(enumeration);
        return ent.slice(-ent.length / 2);
    }
    // toCS_keys(cam_obj: any): any {
    //   let result = {};
    //   Object.keys(cam_obj).forEach(key => {
    //     result[this.capitalize(key)] = cam_obj[key]
    //   })
    //   return result;
    // }
    // toJS_keys(pas_obj: any): any {
    //   let result = {};
    //   Object.keys(pas_obj).forEach(key => {
    //     result[this.deCapitalize(key)] = pas_obj[key]
    //   })
    //   return result;
    // }
    static timeElapsed(time, months = false) {
        const timeDifference = Date.now() / 1000 - time; // Unix timestamp in milliseconds
        const hr = 3600;
        if (timeDifference < hr)
            return `${Math.floor((timeDifference) / 60)} mins ago`;
        if (timeDifference < hr * 24)
            return `${Math.floor((timeDifference) / (hr))} hours ago`;
        if (timeDifference < hr * 24 * 31)
            return `${Math.floor((timeDifference) / (24 * hr))} days ago`;
        if (months && timeDifference < hr * 24 * 30 * 30.45)
            return `${Math.floor((timeDifference) / (24 * hr * 30.45))} months ago`;
        let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
        d.setUTCSeconds(time);
        d = convertToCurrentDateTime(d);
        return `${pad2(d.getDay() + 1)}.${pad2(d.getMonth() + 1)}.${d.getFullYear()}`;
    }
    static fixJsonNumbers(obj) {
        let result = {};
        Object.keys(obj).forEach(key => {
            let value = obj[key];
            if (!isNaN(obj[key])) {
                result[key] = Number(value);
            }
            else if (typeof (value) === "object") {
                result[key] = this.fixJsonNumbers(value);
            }
            else {
                result[key] = value;
            }
        });
        return result;
    }
    capitalize(str) {
        return str[0].toUpperCase() + str.substr(1);
    }
    deCapitalize(str) {
        return str[0].toLowerCase() + str.substr(1);
    }
    static getNextItem(arr, currentItem) {
        let index = arr.indexOf(currentItem);
        index = (index + 1 === arr.length) ? 0 : index + 1;
        return arr[index];
    }
    static getPreviousItem(arr, currentItem) {
        let index = arr.indexOf(currentItem);
        index = (index === 0) ? arr.length - 1 : index - 1;
        return arr[index];
    }
    static dateConvert(date, formatFn) {
        return dateFormats[CustomDateFormats[formatFn].toLowerCase()](DateTimeCStoJS(date));
    }
}
HelperService.compareObjects = (obj1, obj2) => {
    if (!obj1 || !obj2)
        return false;
    let result = true;
    Object.entries(obj1).forEach(([key, value]) => {
        var _a, _b;
        if (((_a = value) === null || _a === void 0 ? void 0 : _a.toString()) === ((_b = obj2[key]) === null || _b === void 0 ? void 0 : _b.toString())) {
            return;
        }
        if (JSON.stringify(value) !== JSON.stringify(obj2[key])) {
            result = false;
        }
    });
    return result;
};
HelperService.appJsonHeader = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
HelperService.videoLinkMake = (id) => `https://www.youtube.com/embed/${id}?rel=0`;
HelperService.ɵfac = function HelperService_Factory(t) { return new (t || HelperService)(); };
HelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HelperService, factory: HelperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/services/ingredient.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/ingredient.service.ts ***!
  \*****************************************************/
/*! exports provided: IngredientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientService", function() { return IngredientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/apiSettings */ "./src/app/core/settings/apiSettings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class IngredientService {
    constructor(http) {
        this.http = http;
    }
    getAllMini() {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["ignredientPaths"].getAllMini);
    }
    getRecipeIngredients(recipeId) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["ignredientPaths"].getRecipeIngredients(recipeId));
    }
    getIngredientDetails(id) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["ignredientPaths"].getDetails(id));
    }
    getCardsMaxCount({ index, phrase }) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["ignredientPaths"].getCardsTotalCount(index, phrase));
    }
    nameTaken(name) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["ignredientPaths"].chkNameTaken(name));
    }
    getEssentialIngCards(page, index, phrase) { return this.getCards(page, index, phrase, true); }
    getNonEssentialIngsCards(page, index, phrase) { return this.getCards(page, index, phrase); }
    getCards(page, index, phrase, essential = false) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["ignredientPaths"].getCards(page, index, phrase, essential));
    }
    getEditDataById(id) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["ignredientPaths"].editGet(id));
    }
    createIngredient(value) {
        return this.http.post(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["ignredientPaths"].base, value);
    }
    editIngredient(editValue) {
        return this.http.put(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["ignredientPaths"].base, editValue);
    }
    getIngredientNames(ids) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["ignredientPaths"].getNamesByIds(ids));
    }
    deleteIngredientById(id) {
        return this.http.delete(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["ignredientPaths"].delete(id));
    }
}
IngredientService.ɵfac = function IngredientService_Factory(t) { return new (t || IngredientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
IngredientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IngredientService, factory: IngredientService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngredientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/message.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/message.service.ts ***!
  \**************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/apiSettings */ "./src/app/core/settings/apiSettings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _signal_r_new_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signal-r.new-messages.service */ "./src/app/core/services/signal-r.new-messages.service.ts");






class MessageService {
    constructor(http, authService, signalR) {
        this.http = http;
        this.authService = authService;
        this.signalR = signalR;
    }
    submitMsg(content, recieverId) {
        let messageObj = { recieverId, content, senderId: this.authService.getUserInfo().id };
        return this.http.post(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["messagePaths"].base, messageObj);
    }
    markReadMessage(messageId) {
        return this.http.put(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["messagePaths"].base, messageId);
    }
    getRecievedMessages() {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["messagePaths"].base);
    }
    getSentMessages() {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["messagePaths"].sentMessages);
    }
    deleteMessage(messageId) {
        return this.http.delete(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["messagePaths"].delete(messageId));
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_signal_r_new_messages_service__WEBPACK_IMPORTED_MODULE_4__["SignalRNewMessagesService"])); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _signal_r_new_messages_service__WEBPACK_IMPORTED_MODULE_4__["SignalRNewMessagesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/recipe.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/recipe.service.ts ***!
  \*************************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/apiSettings */ "./src/app/core/settings/apiSettings.ts");
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class RecipeService {
    constructor(http) {
        this.http = http;
    }
    getRecipes(criteria, val, pageNum) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["recipePaths"].getMinified(pageNum, criteria, val));
    }
    getPrivateRecipes(criteria, pageNum) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["recipePaths"].getMinifiedPrivate(pageNum, criteria));
    }
    getDetails(id) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["recipePaths"].base + id);
    }
    favUnfavRecipe(id) {
        return this.http.put(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["recipePaths"].favUnvaf, JSON.stringify(id), _helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"].appJsonHeader);
    }
    rateRecipe(id, score) {
        return this.http.put(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["recipePaths"].setRating, { id, score });
    }
    nameTaken(name) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["recipePaths"].chkNameTaken(name));
    }
    submitRecipe(recipe) {
        return this.http.post(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["recipePaths"].base, recipe, { responseType: 'text' });
    }
    getEditDetails(id) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["recipePaths"].edit(id));
    }
    editRecipe(recipe) {
        return this.http.put(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["recipePaths"].base, recipe, { responseType: 'text' });
    }
    deleteIngredientById(id) {
        return this.http.delete(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["recipePaths"].delete(id));
    }
}
RecipeService.ɵfac = function RecipeService_Factory(t) { return new (t || RecipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
RecipeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RecipeService, factory: RecipeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/signal-r.new-messages.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/services/signal-r.new-messages.service.ts ***!
  \****************************************************************/
/*! exports provided: SignalRNewMessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalRNewMessagesService", function() { return SignalRNewMessagesService; });
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class SignalRNewMessagesService {
    constructor() {
        this.unreadCount = 0;
        this.startConnection = (userName) => {
            this.hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_0__["HubConnectionBuilder"]()
                .withUrl('https://localhost:5001/unread-messages')
                .build();
            return this.hubConnection
                .start()
                .then(() => console.log('Connection started')).then(() => this.hubConnection.invoke("RegisterUserConnection", userName))
                .then(() => {
                console.log("registered connection for " + userName);
                this.monitorChange();
            })
                .catch(err => console.log('Error while starting connection: ', err));
        };
        this.updateUserUnreadCount = (userName) => {
            this.hubConnection.invoke('UpdateUserUnreadCount', userName).catch(console.log);
        };
    }
    stopConnection() {
        return this.hubConnection.invoke("RemoveUserConnection")
            .then(() => console.log("connection closed"))
            .catch(console.log);
    }
    monitorChange() {
        this.hubConnection.on('updateUnrCount', (unreadCount) => {
            console.log("obnovqvame", unreadCount);
            this.unreadCount = unreadCount;
        });
    }
}
SignalRNewMessagesService.ɵfac = function SignalRNewMessagesService_Factory(t) { return new (t || SignalRNewMessagesService)(); };
SignalRNewMessagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SignalRNewMessagesService, factory: SignalRNewMessagesService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignalRNewMessagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: "root" }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/services/signal-r.recipe-details.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/services/signal-r.recipe-details.service.ts ***!
  \******************************************************************/
/*! exports provided: SignalRRecipeDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalRRecipeDetailsService", function() { return SignalRRecipeDetailsService; });
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class SignalRRecipeDetailsService {
    constructor() {
        this.unreadCount = 0;
        this.recipeMonitored = null;
        this.commentsMonitored = null;
        this.startConnection = (rec) => {
            this.hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_0__["HubConnectionBuilder"]()
                .withUrl('https://localhost:5001/recipe-details')
                .build();
            return this.hubConnection
                .start()
                .then(() => console.log('Connection started')).then(() => this.hubConnection.invoke("RegisterUserConnection", rec.id))
                .then(() => {
                console.log("registered connection for details monitoring...");
                this.recipeMonitored = rec;
                this.startListening();
            })
                .catch(err => console.log('Error while starting connection: ', err));
        };
    }
    stopConnection() {
        return this.hubConnection.invoke("RemoveUserConnection")
            .then(() => console.log("connection closed"))
            .catch(console.log);
    }
    patchRecipeData(newFragment) {
        return this.hubConnection.invoke("ChangeDetailsProp", this.recipeMonitored.id, newFragment);
    }
    startListening() {
        this.hubConnection.on("updateRecipeData", (newPatch) => {
            //   console.log("Recieved details update...", newPatch);
            Object.entries(newPatch).forEach(([key, value]) => {
                this.recipeMonitored[key] = value;
            });
        });
    }
    enqueueComment(comment) { this.commentsMonitored.unshift(comment); }
    deleteCommentById(id) {
        const commentIndex = this.commentsMonitored.findIndex(x => x.id === id);
        if (commentIndex === -1)
            return;
        this.commentsMonitored.splice(commentIndex, 1);
    }
    setCommentVotes(stat) {
        let commentFd = this.commentsMonitored.find(x => x.id === stat.id);
        if (!commentFd)
            return; //this comment is not yet displayed so no need of updating.
        commentFd.likers = stat.likers;
        commentFd.disLikers = stat.disLikers;
    }
    setCommentContent(stat) {
        let commentFd = this.commentsMonitored.find(x => x.id === stat.id);
        if (!commentFd)
            return; //this comment is not yet displayed so no need of updating.
        commentFd.dateModified = stat.dateModified;
        commentFd.content = stat.content;
    }
    monitorComments(comments) {
        console.log("registered set of comments for monitoring...");
        this.commentsMonitored = comments;
        this.hubConnection.on("addNewComment", (comment) => {
            //  console.log("recieved new comment...");
            this.enqueueComment(comment);
        });
        this.hubConnection.on("deleteComment", (id) => {
            //  console.log("recieved new comment...");
            this.deleteCommentById(id);
        });
        this.hubConnection.on("updateCommentVotes", (st) => {
            //  console.log("someone voted for comment...");
            this.setCommentVotes(st);
        });
        this.hubConnection.on("updateCommentContent", (st) => {
            //  console.log("someone voted for comment...");
            this.setCommentContent(st);
        });
    }
    addComment(newCommentForDisplay) {
        this.enqueueComment(newCommentForDisplay);
        this.hubConnection.invoke("AddComment", this.recipeMonitored.id, newCommentForDisplay);
    }
    removeComment(id) {
        this.deleteCommentById(id);
        this.hubConnection.invoke("DeleteComment", this.recipeMonitored.id, id);
    }
    changeCommentVote(status) {
        this.setCommentVotes(status);
        this.hubConnection.invoke("ChangeCommentVote", this.recipeMonitored.id, status);
    }
    changeCommentContent(status) {
        this.setCommentContent(status);
        this.hubConnection.invoke("ChangeCommentContent", this.recipeMonitored.id, status);
    }
}
SignalRRecipeDetailsService.ɵfac = function SignalRRecipeDetailsService_Factory(t) { return new (t || SignalRRecipeDetailsService)(); };
SignalRRecipeDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SignalRRecipeDetailsService, factory: SignalRRecipeDetailsService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignalRRecipeDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: "root" }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/services/user-data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/user-data.service.ts ***!
  \****************************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/apiSettings */ "./src/app/core/settings/apiSettings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");





class UserDataService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    getUserInfoByUserName(userName) {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["userDataPaths"].userProfileData(userName));
    }
    changeBlockedStatus(IrritatorUserName) {
        return this.http.post(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["userDataPaths"].setBlocking, { IrritatorUserName, DefendorUserName: this.authService.getUserInfo().userName });
    }
    getUserInfoForEditing() {
        debugger;
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["userDataPaths"].userInfo);
    }
    updateUserData(dataWithPassword) {
        return this.http.post(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["userDataPaths"].userInfo, dataWithPassword);
    }
    getBlockedUserInfos() {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["userDataPaths"].blocked);
    }
    getBlockerUserInfos() {
        return this.http.get(_settings_apiSettings__WEBPACK_IMPORTED_MODULE_1__["userDataPaths"].myblockers);
    }
}
UserDataService.ɵfac = function UserDataService_Factory(t) { return new (t || UserDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
UserDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserDataService, factory: UserDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/settings/apiSettings.ts":
/*!**********************************************!*\
  !*** ./src/app/core/settings/apiSettings.ts ***!
  \**********************************************/
/*! exports provided: authPaths, userDataPaths, messagePaths, recipePaths, categoryPaths, ignredientPaths, commentsPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authPaths", function() { return authPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userDataPaths", function() { return userDataPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messagePaths", function() { return messagePaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipePaths", function() { return recipePaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryPaths", function() { return categoryPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignredientPaths", function() { return ignredientPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentsPaths", function() { return commentsPaths; });
const basePath = "https://localhost:5020/";
// const basePath: string = "http://localhost:5020/";
const authPaths = {
    checkUserNameOrEmailTaken: basePath + "users/is-singIn-data-free",
    registerUser: basePath + "users/register",
    logInUser: basePath + "users/login",
    updateToken: basePath + "users/update-my-token",
};
const userDataPaths = {
    userProfileData: (uName) => basePath + "userData/profileInfo?userName=" + uName,
    userInfo: basePath + "userData/profile",
    blocked: basePath + "userData/blocked",
    myblockers: basePath + "userData/my-blockers",
    submitEdittedData: basePath + "userData/editData",
    setBlocking: basePath + "userData/setUserBlocking",
};
const messagePaths = {
    base: basePath + "messages/",
    delete: (id) => basePath + `messages/${id}`,
    sentMessages: basePath + "messages/sent",
};
const recipePaths = {
    base: basePath + "recipes/",
    getMinified: (pNum, crit, val) => basePath + `recipes?criteria=${crit}&val=${val}&pageNum=${pNum}`,
    getMinifiedPrivate: (pNum, crit) => basePath + `recipes/private?criteria=${crit}&pageNum=${pNum}`,
    favUnvaf: basePath + "recipes/fav-unfav",
    setRating: basePath + "recipes/set-rating",
    chkNameTaken: (name) => basePath + `recipes/name-used?name=${name}`,
    edit: (id) => basePath + `recipes/edit?id=${id}`,
    delete: (id) => basePath + `recipes?id=${id}`
};
const categoryPaths = {
    base: basePath + "categories/",
    getAllMini: basePath + "categories/all-mini",
    getThreeStructure: basePath + "categories/three",
    getDetails: (id) => basePath + `categories/details?id=${id}`,
    nameUsed: (name) => basePath + `categories/name-used?name=${name}`,
    delete: (id) => basePath + `categories?id=${id}`,
    getEditDetails: (id) => basePath + `categories/edit-details?id=${id}`
};
const ignredientPaths = {
    base: basePath + "ingredients/",
    getAllMini: basePath + "ingredients/all-mini",
    getDetails: (id) => basePath + "ingredients/details/" + id,
    chkNameTaken: (name) => basePath + `ingredients/name-used?name=${name}`,
    getRecipeIngredients: (id) => basePath + `ingredients/recipe?id=${id}`,
    getCardsTotalCount: (index, phrase) => basePath + `ingredients/cards-count?index=${index}&phrase=${phrase}`,
    getCards: (page, index, phrase, essential) => basePath + `ingredients/cards?page=${page}&index=${index}&phrase=${phrase}&essential=${essential}`,
    editGet: (id) => basePath + `ingredients/edit?id=${id}`,
    delete: (id) => basePath + `ingredients?id=${id}`,
    getNamesByIds: (ids) => basePath + `ingredients/get-names?ids=${ids}`,
};
const commentsPaths = {
    base: basePath + "comments/",
    delete: (id) => basePath + `comments/${id}`,
    getAllForRecipe: (page, id) => basePath + `comments/for-recipe?page=${page}&recipeId=${id}`,
    setVote: basePath + "comments/set-vote",
};


/***/ }),

/***/ "./src/app/core/settings/globalConstants.ts":
/*!**************************************************!*\
  !*** ./src/app/core/settings/globalConstants.ts ***!
  \**************************************************/
/*! exports provided: minLengthFields, maxLengthFields, avImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minLengthFields", function() { return minLengthFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLengthFields", function() { return maxLengthFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avImages", function() { return avImages; });
const minLengthFields = {
    username: 4,
    password: 4,
    description: 4
};
const maxLengthFields = {
    names: 64,
    description: 512,
};
const avImages = {
    male: [
        "https://cdn.clipart.email/352db2f55a127c0929aac48ae5be5387_hotel-cook-clipart-png-clipartxtras_931-983.jpeg",
        "https://thumbs.dreamstime.com/z/cook-2731503.jpg",
        "https://thumbs.dreamstime.com/z/chef-cook-baker-mixing-bowl-cartoon-27376733.jpg",
        "https://previews.123rf.com/images/vanilladesign/vanilladesign1203/vanilladesign120300176/12744030-chef-cook-with-hamburger.jpg",
        "https://image.freepik.com/free-vector/hand-drawn-background-cook-with-tray_23-2147630131.jpg",
        "https://clipartstation.com/wp-content/uploads/2017/11/hotel-cook-clipart-2.jpg"
    ],
    female: [
        "https://img.favpng.com/22/14/25/chef-cartoon-female-cooking-png-favpng-TjMzKhEDbGVxHkD8PP1mT59jp.jpg",
        "https://i.pinimg.com/originals/7c/b0/18/7cb018683132322074c039046f55d01a.jpg",
        "https://all4desktop.com/data_images/original/4245978-cook.jpg",
        "https://cdn1.vectorstock.com/i/1000x1000/75/65/chef-woman-with-pan-vector-21447565.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_U4nrivVLO7CQ3tSTprLOM5Fw-TpDbdOKgc0g9hl7js6jKyT&s"
    ],
    ufo: [
        "https://shannawynne.files.wordpress.com/2012/06/alien_bbq_photosculpture-p153342890522009839env3c_400.jpg",
        "https://2.bp.blogspot.com/-ZFVaTfkcy0I/XBXx2IGvfSI/AAAAAAAAJnY/hv22L0lrCkUzr4b_1LUEafHnDJ5Y_7fTACLcBGAs/s1600/alien.jpg",
        "https://2.bp.blogspot.com/-zgznGX6lCFs/U6h6hUgRayI/AAAAAAAAkMY/zNY-B0J_qFo/s1600/zzzzzz.001.jpg",
        "https://i0.wp.com/metro.co.uk/wp-content/uploads/2018/10/sei_36554009-212f.jpg?quality=90&strip=all&zoom=1&resize=644%2C483&ssl=1"
    ]
};


/***/ }),

/***/ "./src/app/core/validators/sameInputVal.ts":
/*!*************************************************!*\
  !*** ./src/app/core/validators/sameInputVal.ts ***!
  \*************************************************/
/*! exports provided: sameFieldsValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sameFieldsValidator", function() { return sameFieldsValidator; });
function sameFieldsValidator(valueFunc) {
    return (control) => {
        return control.value !== valueFunc() ? { 'mismatch': true } : null;
    };
}


/***/ }),

/***/ "./src/app/core/validators/takenName.ts":
/*!**********************************************!*\
  !*** ./src/app/core/validators/takenName.ts ***!
  \**********************************************/
/*! exports provided: takenValueValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takenValueValidator", function() { return takenValueValidator; });
function takenValueValidator(takenValues) {
    return (control) => {
        return takenValues.includes(control.value) ? { 'valueTaken': control.value } : null;
    };
}


/***/ }),

/***/ "./src/app/core/validators/takenNameValidatorAsync.ts":
/*!************************************************************!*\
  !*** ./src/app/core/validators/takenNameValidatorAsync.ts ***!
  \************************************************************/
/*! exports provided: takenNames, takenNameValidatorAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takenNames", function() { return takenNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takenNameValidatorAsync", function() { return takenNameValidatorAsync; });
let takenNames = [];
function takenNameValidatorAsync(isNameTakenMethod, allowedNonChecked = [], caseInsensitive = true) {
    return (control) => {
        const { value } = control;
        const res_val = null;
        const res_inv = { 'valueTaken': control.value };
        const res_nocheck = { 'valueTakenNoCheck': false };
        console.log(allowedNonChecked);
        if (control.invalid || value === "") {
            return res_nocheck;
        }
        if ((!caseInsensitive && allowedNonChecked.includes(value)) ||
            (caseInsensitive && allowedNonChecked.some(x => x.toLowerCase() === value.toLowerCase()))) {
            return res_val;
        }
        if ((!caseInsensitive && takenNames.includes(value)) ||
            (caseInsensitive && takenNames.some(x => x.toLowerCase() === value.toLowerCase()))) {
            return res_inv;
        }
        isNameTakenMethod(value).subscribe(answ => {
            if (!answ) {
                return res_val;
            }
            takenNames.push(value);
            control.updateValueAndValidity();
            console.log("tested but taken", takenNames);
        });
    };
}


/***/ }),

/***/ "./src/app/ingredients/create-edit-ingredient-form/create-edit-ingredient-form.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/ingredients/create-edit-ingredient-form/create-edit-ingredient-form.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CreateEditIngredientFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditIngredientFormComponent", function() { return CreateEditIngredientFormComponent; });
/* harmony import */ var src_app_core_enumerations_OriginTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/enumerations/OriginTypes */ "./src/app/core/enumerations/OriginTypes.ts");
/* harmony import */ var src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var src_app_core_enumerations_MeasureTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/enumerations/MeasureTypes */ "./src/app/core/enumerations/MeasureTypes.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_validators_takenNameValidatorAsync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/validators/takenNameValidatorAsync */ "./src/app/core/validators/takenNameValidatorAsync.ts");
/* harmony import */ var src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/ingredient.service */ "./src/app/core/services/ingredient.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_pipes_htmlRaw_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/pipes/htmlRaw.pipe */ "./src/app/core/pipes/htmlRaw.pipe.ts");













function CreateEditIngredientFormComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 27);
} if (rf & 2) {
    const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", ctx_r296.getErr("name", "required") ? "Please provide Ingredient Name!" : ctx_r296.getErr("name", "minlength") ? "Please provide name with length atleast " + ctx_r296.getErr("name", "minlength")["requiredLength"] + " symbols long!" : ctx_r296.getErr("name", "maxlength") ? "Please provide name with length shorter than " + ctx_r296.getErr("name", "maxlength")["requiredLength"] + " symbols long!" : ctx_r296.getErr("name", "valueTaken") ? "The name " + ctx_r296.getErr("name", "valueTaken") + " is already in use!" : ctx_r296.getErr("name", "pattern") ? "Please provide name consisting of one word, or two words with 1 space between them" : "unknown-Error");
} }
function CreateEditIngredientFormComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r302 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", type_r302[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", type_r302[0], " ");
} }
function CreateEditIngredientFormComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r303 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", type_r303[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", type_r303[0], " ");
} }
function CreateEditIngredientFormComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 27);
} if (rf & 2) {
    const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", ctx_r299.getErr("picUrl", "required") ? "Please provide Picture Url!" : "unknown-Error");
} }
function CreateEditIngredientFormComponent_img_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 32);
} if (rf & 2) {
    const ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@showHide", undefined)("src", ctx_r300.picUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function CreateEditIngredientFormComponent_div_44_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please provide description!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CreateEditIngredientFormComponent_div_44_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Please provide description with length atleast ", ctx_r305.getCtrl("description").errors["minlength"]["requiredLength"], " symbols long!");
} }
function CreateEditIngredientFormComponent_div_44_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Please provide description with length lesser than ", ctx_r306.getCtrl("description").errors["maxlength"]["requiredLength"], " symbols long!");
} }
function CreateEditIngredientFormComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CreateEditIngredientFormComponent_div_44_span_2_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CreateEditIngredientFormComponent_div_44_span_3_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CreateEditIngredientFormComponent_div_44_span_4_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r301.getCtrl("description").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r301.getCtrl("description").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r301.getCtrl("description").errors["maxlength"]);
} }
const _c0 = function (a0) { return { "text-success": a0 }; };
class CreateEditIngredientFormComponent {
    constructor(fb, ingService, authService) {
        this.fb = fb;
        this.ingService = ingService;
        this.authService = authService;
        this.btnClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this._ingredient = null;
        this.namesAllowed = [];
        this.subscriptions = [];
        this.measureTypes = src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"].getEnumOptions(src_app_core_enumerations_MeasureTypes__WEBPACK_IMPORTED_MODULE_2__["MeasureTypes"]);
        this.originTypes = src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"].getEnumOptions(src_app_core_enumerations_OriginTypes__WEBPACK_IMPORTED_MODULE_0__["OriginTypes"])
            .sort((a, b) => a[0].length - b[0].length);
        this.picUrl = null;
        this.buildForm();
    }
    get btnDisabled() {
        return this.form.pristine || this.form.invalid || src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"].compareObjects(this._ingredient, this.form.value);
    }
    set ingredient(value) {
        this._ingredient = value;
        this.namesAllowed.push(value.name);
        this.form.patchValue(value);
    }
    getCtrl(name) {
        return this.form.get(name);
    }
    getErr(name, errName) {
        return this.getCtrl(name).errors[errName];
    }
    //Used to clasify input field as valid or not
    getValClasses(name) {
        const ctrl = this.getCtrl(name);
        return { 'is-invalid': (ctrl.invalid && ctrl.touched), 'is-valid': ctrl.valid };
    }
    invalidTouchedCtrl(name) {
        return this.getCtrl(name).invalid && this.getCtrl(name).touched;
    }
    buildForm() {
        this.form = this.fb.group({
            authorId: this.authService.getUserInfo().id,
            name: ["", { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, Object(src_app_core_validators_takenNameValidatorAsync__WEBPACK_IMPORTED_MODULE_6__["takenNameValidatorAsync"])(this.ingService.nameTaken.bind(this.ingService), this.namesAllowed), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(32), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z]+(\\s[a-zA-Z]{2,})?')], updateOn: "blur" }],
            isEssential: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            measureType: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            origin: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            picUrl: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(32), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10240)]],
        });
        const pic = this.form.get('picUrl');
        pic.valueChanges.subscribe(v => {
            if (pic.invalid)
                return;
            this.picUrl = null;
            setTimeout(() => this.picUrl = v, 2000);
        });
    }
    submitForm() {
        if (this.form.valid) {
            this.btnClickEvent.emit(this.form.value);
        }
    }
    ngOnDestroy() {
        this.subscriptions.filter(x => !x.closed).forEach(x => x.unsubscribe());
    }
}
CreateEditIngredientFormComponent.ɵfac = function CreateEditIngredientFormComponent_Factory(t) { return new (t || CreateEditIngredientFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_7__["IngredientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"])); };
CreateEditIngredientFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CreateEditIngredientFormComponent, selectors: [["acr-create-edit-ingredient-form"]], inputs: { settings: "settings", ingredient: "ingredient" }, outputs: { btnClickEvent: "btnClickEvent" }, decls: 48, vars: 23, consts: [[1, "container-fluid", "px-2"], [1, "text-center"], [3, "formGroup", "ngSubmit"], [1, "row", "justify-content-between", "fields"], [1, "col-5", "pl-2"], [1, "form-group"], [1, "form-group", "has-danger", "has-success"], ["for", "name", 1, "form-control-label", "h5"], ["formControlName", "name", "id", "name", "placeholder", "Name...", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 3, "innerText", 4, "ngIf"], [1, "custom-control", "custom-switch"], ["formControlName", "isEssential", "type", "checkbox", "id", "isEssential", 1, "custom-control-input", "mr-2", "text-success"], ["for", "isEssential", 1, "custom-control-label", "h5", 3, "ngClass"], [1, "h5"], ["class", "form-check pb-2 pl-4", 4, "ngFor", "ngForOf"], ["formControlName", "picUrl", "id", "picUrl", "placeholder", "Picture url...", 1, "form-control", 3, "ngClass"], ["type", "checkbox", "id", "isVegan", "readonly", "", 1, "custom-control-input", "mr-2", "text-success", 3, "checked"], [1, "custom-control-label", "h5", 3, "ngClass"], [1, "col-7"], [1, "media"], ["alt", "ingredient main picture", 3, "src", 4, "ngIf"], [1, "desc"], ["for", "desc", 1, "h5"], ["formControlName", "description", "id", "desc", "rows", "4", "placeholder", "Describe what this ingredient is ...", 1, "form-control"], [4, "ngIf"], [1, "row", "justify-content-end", "px-3"], ["type", "submit", 1, "center", "btn", "btn-success", "action-btn", 3, "disabled", "innerHTML"], [1, "invalid-feedback", 3, "innerText"], [1, "form-check", "pb-2", "pl-4"], [1, "form-check-label"], ["type", "radio", "name", "measureType", "formControlName", "measureType", 1, "form-check-input", 3, "value"], ["type", "radio", "name", "origin", "formControlName", "origin", 1, "form-check-input", 3, "value"], ["alt", "ingredient main picture", 3, "src"], [1, "alert", "alert-danger"]], template: function CreateEditIngredientFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function CreateEditIngredientFormComponent_Template_form_ngSubmit_3_listener($event) { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Ingredient Name*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, CreateEditIngredientFormComponent_div_11_Template, 1, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "legend", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Measure Units Type*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CreateEditIngredientFormComponent_div_19_Template, 4, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "legend", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Origin Types*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CreateEditIngredientFormComponent_div_22_Template, 4, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Picture Url*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, CreateEditIngredientFormComponent_div_28_Template, 1, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, " Ingredient Picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, CreateEditIngredientFormComponent_img_38_Template, 1, 2, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Description*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, CreateEditIngredientFormComponent_div_44_Template, 5, 3, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](47, "htmlRaw");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.settings.headline);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getValClasses("name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.invalidTouchedCtrl("name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c0, ctx.form.get("isEssential").value));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.form.get("isEssential").value ? "Primary" : "Additional", " Ingredient");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.measureTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.originTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getValClasses("picUrl"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.invalidTouchedCtrl("picUrl"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.form.get("origin").value != "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](21, _c0, ctx.form.get("origin").value != "3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.form.get("origin").value != 3 ? "" : "Non", " Vegan Compatible");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.picUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getCtrl("description").touched && ctx.getCtrl("description").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.btnDisabled)("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](47, 17, ctx.settings.submitBtnTitle), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"]], pipes: [_core_pipes_htmlRaw_pipe__WEBPACK_IMPORTED_MODULE_10__["HTMLRaw"]], styles: ["div.media[_ngcontent-%COMP%]{\r\n    height: 18em;\r\n}\r\n\r\ndiv.media[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n    border-radius: 2em;\r\n    height: 15.2em;\r\n    width: auto;\r\n    max-width: 92%;\r\n    position: absolute;\r\n    top: 2.2em;\r\n    bottom:0    \r\n}\r\n\r\ndiv.desc[_ngcontent-%COMP%]{\r\n    height: 18em;\r\n}\r\n\r\ndiv.row.fields[_ngcontent-%COMP%] {\r\n    height: 28.3em;\r\n}\r\n\r\nbutton.action-btn[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVkaWVudHMvY3JlYXRlLWVkaXQtaW5ncmVkaWVudC1mb3JtL2NyZWF0ZS1lZGl0LWluZ3JlZGllbnQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWO0FBQ0o7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2luZ3JlZGllbnRzL2NyZWF0ZS1lZGl0LWluZ3JlZGllbnQtZm9ybS9jcmVhdGUtZWRpdC1pbmdyZWRpZW50LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5tZWRpYXtcclxuICAgIGhlaWdodDogMThlbTtcclxufVxyXG5cclxuZGl2Lm1lZGlhPmltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIGhlaWdodDogMTUuMmVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDkyJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMi4yZW07XHJcbiAgICBib3R0b206MCAgICBcclxufVxyXG5kaXYuZGVzY3tcclxuICAgIGhlaWdodDogMThlbTtcclxufVxyXG5cclxuZGl2LnJvdy5maWVsZHMge1xyXG4gICAgaGVpZ2h0OiAyOC4zZW07XHJcbn1cclxuXHJcbmJ1dHRvbi5hY3Rpb24tYnRuIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('showHide', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void=>*', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: '0', transform: 'scaleY(0.1)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(2000)]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('*=>void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(2000), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: '0', transform: 'scaleY(0.1)' })]),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CreateEditIngredientFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'acr-create-edit-ingredient-form',
                templateUrl: './create-edit-ingredient-form.component.html',
                styleUrls: ['./create-edit-ingredient-form.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('showHide', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void=>*', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: '0', transform: 'scaleY(0.1)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(2000)]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('*=>void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(2000), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: '0', transform: 'scaleY(0.1)' })]),
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_7__["IngredientService"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }]; }, { btnClickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], ingredient: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ingredients/create-ingredient/create-ingredient.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ingredients/create-ingredient/create-ingredient.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateIngredientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIngredientComponent", function() { return CreateIngredientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/ingredient.service */ "./src/app/core/services/ingredient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _create_edit_ingredient_form_create_edit_ingredient_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-edit-ingredient-form/create-edit-ingredient-form.component */ "./src/app/ingredients/create-edit-ingredient-form/create-edit-ingredient-form.component.ts");






class CreateIngredientComponent {
    constructor(ingService, router, toastr) {
        this.ingService = ingService;
        this.router = router;
        this.toastr = toastr;
        this.settings = { headline: "Create New Ingredient", submitBtnTitle: "<i class='fas fa-plus-circle'></i> &nbsp; Create" };
    }
    createIngredient(value) {
        this.ingService.createIngredient(value).subscribe(id => {
            this.toastr.success("Created new Ingredient", "Congratulations!");
            this.router.navigate(['/ingredients', { outlets: { 'ing-outlet': ['details', id] } }]);
        }, (e) => {
            this.toastr.error("No igredient was created", "Failure!");
            console.error("Problem", e);
        });
    }
}
CreateIngredientComponent.ɵfac = function CreateIngredientComponent_Factory(t) { return new (t || CreateIngredientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_1__["IngredientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
CreateIngredientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateIngredientComponent, selectors: [["acr-create-ingredient"]], decls: 1, vars: 1, consts: [[3, "settings", "btnClickEvent"]], template: function CreateIngredientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "acr-create-edit-ingredient-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClickEvent", function CreateIngredientComponent_Template_acr_create_edit_ingredient_form_btnClickEvent_0_listener($event) { return ctx.createIngredient($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings);
    } }, directives: [_create_edit_ingredient_form_create_edit_ingredient_form_component__WEBPACK_IMPORTED_MODULE_4__["CreateEditIngredientFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZ3JlZGllbnRzL2NyZWF0ZS1pbmdyZWRpZW50L2NyZWF0ZS1pbmdyZWRpZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateIngredientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-create-ingredient',
                templateUrl: './create-ingredient.component.html',
                styleUrls: ['./create-ingredient.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_1__["IngredientService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ingredients/edit-ingredient/edit-ingredient.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ingredients/edit-ingredient/edit-ingredient.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditIngredientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIngredientComponent", function() { return EditIngredientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/ingredient.service */ "./src/app/core/services/ingredient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _create_edit_ingredient_form_create_edit_ingredient_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-edit-ingredient-form/create-edit-ingredient-form.component */ "./src/app/ingredients/create-edit-ingredient-form/create-edit-ingredient-form.component.ts");






class EditIngredientComponent {
    constructor(ingService, router, toastr, route) {
        this.ingService = ingService;
        this.router = router;
        this.toastr = toastr;
        this.settings = { headline: "Edit Ingredient", submitBtnTitle: "<i class='fas fa-edit'></i> &nbsp; Edit" };
        this.ingredient = route.snapshot.data.data;
        this.id = this.ingredient.id;
        delete this.ingredient.id;
    }
    editIngredient(value) {
        debugger;
        let editValue = Object.assign(Object.assign({}, value), { id: this.id });
        this.ingService.editIngredient(editValue).subscribe(id => {
            this.toastr.success("Edited ingredient :)", "Congratulations!");
            this.router.navigate(['/ingredients', { outlets: { 'ing-outlet': ['details', id] } }]);
        }, (e) => {
            this.toastr.success("No igredient was eddited :(", "Failure!");
            debugger;
            console.error("Problem", e);
        });
    }
}
EditIngredientComponent.ɵfac = function EditIngredientComponent_Factory(t) { return new (t || EditIngredientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_1__["IngredientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
EditIngredientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditIngredientComponent, selectors: [["acr-edit-ingredient"]], decls: 1, vars: 2, consts: [[3, "settings", "ingredient", "btnClickEvent"]], template: function EditIngredientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "acr-create-edit-ingredient-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClickEvent", function EditIngredientComponent_Template_acr_create_edit_ingredient_form_btnClickEvent_0_listener($event) { return ctx.editIngredient($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings)("ingredient", ctx.ingredient);
    } }, directives: [_create_edit_ingredient_form_create_edit_ingredient_form_component__WEBPACK_IMPORTED_MODULE_4__["CreateEditIngredientFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZ3JlZGllbnRzL2VkaXQtaW5ncmVkaWVudC9lZGl0LWluZ3JlZGllbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditIngredientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-edit-ingredient',
                templateUrl: './edit-ingredient.component.html',
                styleUrls: ['./edit-ingredient.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_1__["IngredientService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ingredients/ingredient-card/ingredient-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ingredients/ingredient-card/ingredient-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: IngredientCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientCartComponent", function() { return IngredientCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function IngredientCartComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vegan compatible!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IngredientCartComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Non-Vegan!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "selected": a0 }; };
class IngredientCartComponent {
    constructor() {
        this.isChosen = false;
        this.ingredient = {
            id: 12,
            name: "Kanela",
            picUrl: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200",
            usageCount: 123,
            isVegan: false,
            origin: "Plant",
            authorUserName: "User1215",
        };
    }
    ngAfterViewInit() {
        this.ingrIdSelected.subscribe(id => {
            this.isChosen = id === this.ingredient.id;
        });
    }
    loadIngredientInfo() {
        this.ingrIdSelected.next(this.ingredient.id);
    }
}
IngredientCartComponent.ɵfac = function IngredientCartComponent_Factory(t) { return new (t || IngredientCartComponent)(); };
IngredientCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IngredientCartComponent, selectors: [["acr-ingredient-card"]], inputs: { ingrIdSelected: "ingrIdSelected", ingredient: "ingredient" }, decls: 13, vars: 11, consts: [[1, "ing-cart", 3, "ngClass", "click"], [3, "src", "alt"], [4, "ngIf"]], template: function IngredientCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IngredientCartComponent_Template_section_click_0_listener($event) { return ctx.loadIngredientInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IngredientCartComponent_span_9_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IngredientCartComponent_span_10_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.isChosen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.ingredient.picUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.ingredient.name + "-picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ingredient.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Used in ", ctx.ingredient.usageCount, " recipes so far.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Origin-", ctx.ingredient.origin, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ingredient.isVegan);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ingredient.isVegan);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Author: ", ctx.ingredient.authorUserName, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["section.ing-cart[_ngcontent-%COMP%]{\r\nheight:5.65em;\r\nwidth: 95%;\r\nmargin-right:5%;\r\nmargin-bottom: 1em;\r\nborder:2px solid green;\r\nborder-radius:1em;\r\npadding:0.2em\r\n}\r\n\r\nsection.ing-cart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\nfloat:left;\r\nheight:5em;\r\nwidth: auto;\r\nmargin-right:1em;\r\n\r\nborder-radius: 1em 0 0 1em;\r\n}\r\n\r\nsection.ing-cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    padding:0;\r\n    margin:0;\r\n}\r\n\r\nsection.ing-cart[_ngcontent-%COMP%]:not(.selected):hover{\r\n    box-shadow: 0px 0px 22px 3px rgba(60,181,74,0.86);\r\n    -webkit-transition: 0.3s ease-in-out;\r\n    transition: 0.3s ease-in-out;\r\n}\r\n\r\nsection.selected.ing-cart[_ngcontent-%COMP%]{\r\n    border:4px solid orangered;\r\n    padding: 0.0625em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVkaWVudHMvaW5ncmVkaWVudC1jYXJkL2luZ3JlZGllbnQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1YsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixpQ0FBaUM7QUFDakMsMEJBQTBCO0FBQzFCOztBQUNBO0lBQ0ksU0FBUztJQUNULFFBQVE7QUFDWjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCxvQ0FBNEI7SUFBNUIsNEJBQTRCO0FBQ2hDOztBQUdBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2luZ3JlZGllbnRzL2luZ3JlZGllbnQtY2FyZC9pbmdyZWRpZW50LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24uaW5nLWNhcnR7XHJcbmhlaWdodDo1LjY1ZW07XHJcbndpZHRoOiA5NSU7XHJcbm1hcmdpbi1yaWdodDo1JTtcclxubWFyZ2luLWJvdHRvbTogMWVtO1xyXG5ib3JkZXI6MnB4IHNvbGlkIGdyZWVuO1xyXG5ib3JkZXItcmFkaXVzOjFlbTtcclxucGFkZGluZzowLjJlbVxyXG59XHJcblxyXG5zZWN0aW9uLmluZy1jYXJ0IGltZyB7XHJcbmZsb2F0OmxlZnQ7XHJcbmhlaWdodDo1ZW07XHJcbndpZHRoOiBhdXRvO1xyXG5tYXJnaW4tcmlnaHQ6MWVtO1xyXG4vKiBtYXJnaW46MC4zZW0gMWVtIDAuM2VtIDAuM207ICovXHJcbmJvcmRlci1yYWRpdXM6IDFlbSAwIDAgMWVtO1xyXG59XHJcbnNlY3Rpb24uaW5nLWNhcnQgcHtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbjowO1xyXG59XHJcblxyXG5zZWN0aW9uLmluZy1jYXJ0Om5vdCguc2VsZWN0ZWQpOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMnB4IDNweCByZ2JhKDYwLDE4MSw3NCwwLjg2KTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcblxyXG5zZWN0aW9uLnNlbGVjdGVkLmluZy1jYXJ0e1xyXG4gICAgYm9yZGVyOjRweCBzb2xpZCBvcmFuZ2VyZWQ7XHJcbiAgICBwYWRkaW5nOiAwLjA2MjVlbTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngredientCartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-ingredient-card',
                templateUrl: './ingredient-card.component.html',
                styleUrls: ['./ingredient-card.component.css']
            }]
    }], function () { return []; }, { ingrIdSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ingredient: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ingredients/ingredient-details/ingredient-details.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ingredients/ingredient-details/ingredient-details.component.ts ***!
  \********************************************************************************/
/*! exports provided: IngredientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientDetailsComponent", function() { return IngredientDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_components_questionComponent_dialog_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/questionComponent/dialog-question.component */ "./src/app/core/components/questionComponent/dialog-question.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/ingredient.service */ "./src/app/core/services/ingredient.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function IngredientDetailsComponent_div_0_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IngredientDetailsComponent_div_0_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IngredientDetailsComponent_div_0_div_51_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IngredientDetailsComponent_div_0_div_51_button_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r176); const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r175.confirmDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["edit", a1]; };
const _c1 = function (a0) { return { "ing-outlet": a0 }; };
const _c2 = function (a0) { return { outlets: a0 }; };
const _c3 = function (a1) { return ["/ingredients", a1]; };
function IngredientDetailsComponent_div_0_div_51_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r174.ingredient.id)))));
} }
function IngredientDetailsComponent_div_0_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IngredientDetailsComponent_div_0_div_51_button_2_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IngredientDetailsComponent_div_0_div_51_a_5_Template, 3, 9, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r170.isDeleteAuthorised);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r170.isEditAuthorised);
} }
function IngredientDetailsComponent_div_0_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Deleted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " This ingredient was deleted by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "admin/creator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " and it is no longer available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " You can create it anew, if you wish to use it in recipe!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function (a1) { return ["/recipes/ing-contain", a1]; };
const _c5 = function (a1) { return ["/user-data/profile/", a1]; };
function IngredientDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Used in:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Vegan:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, IngredientDetailsComponent_div_0_span_22_Template, 3, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, IngredientDetailsComponent_div_0_span_23_Template, 3, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Origin:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Measure type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Added By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Last Edit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, IngredientDetailsComponent_div_0_div_51_Template, 6, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, IngredientDetailsComponent_div_0_ng_template_52_Template, 13, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);
    const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r165.ingredient.picUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r165.ingredient.name + "main picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", ctx_r165.ingredient.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c4, ctx_r165.ingredient.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r165.ingredient.usageCount, " Recipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r165.ingredient.isVegan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r165.ingredient.isVegan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r165.ingredient.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r165.ingredient.measureType.replace("_", " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c5, ctx_r165.ingredient.authorUserName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r165.ingredient.authorUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r165.modificationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r165.ingredient.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r165.ingredient.isDeleted)("ngIfElse", _r171);
} }
function IngredientDetailsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Ingredient Selected!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class IngredientDetailsComponent {
    constructor(route, authService, ingService, router, dialog, toastr) {
        this.authService = authService;
        this.ingService = ingService;
        this.router = router;
        this.dialog = dialog;
        this.toastr = toastr;
        this.ingredient = null;
        route.params.subscribe(({ id }) => {
            if (!id || isNaN(id) || +id === 0) {
                this.ingredient = null;
                return;
            }
            if (this.ingredient && this.ingredient.id === id)
                return;
            this.ingService.getIngredientDetails(+id).subscribe(det => this.ingredient = det);
        });
    }
    get myInfo() { return this.authService.getUserInfo(); }
    get isEditAuthorised() { var _a; return ((_a = this.myInfo) === null || _a === void 0 ? void 0 : _a.userName) === this.ingredient.authorUserName || this.authService.isAdmin; }
    get isDeleteAuthorised() { return this.ingredient.usageCount === 0 && this.isEditAuthorised; }
    get modificationDate() { return src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"].timeElapsed(this.ingredient.lastModified); }
    confirmDelete() {
        let dialogRef = this.dialog.open(_core_components_questionComponent_dialog_question_component__WEBPACK_IMPORTED_MODULE_2__["DialogQuestionComponent"], {
            width: "40em",
            data: {
                title: `Confirm Deletion Please:`,
                question: `Are you sure you wish to delete ${this.ingredient.name}?`,
                picUrl: this.ingredient.picUrl,
                positiveAnswerBtnName: '<i class="far fa-trash-alt"></i> Delete',
                negativeAnswerBtnName: '<i class="fas fa-ban"></i> Abort'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === "true") {
                this.ingService.deleteIngredientById(this.ingredient.id).subscribe(() => {
                    this.toastr.success(`Removed ingredient ${this.ingredient.name}`, "Success!");
                    this.router.navigate(['/ingredients', { outlets: { 'ing-outlet': ['details', 0] } }]);
                }, (err) => {
                    this.toastr.error(`Ingredient ${this.ingredient.name} was not removed`, "Failure");
                    console.log(err);
                });
            }
        });
    }
}
IngredientDetailsComponent.ɵfac = function IngredientDetailsComponent_Factory(t) { return new (t || IngredientDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_5__["IngredientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
IngredientDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IngredientDetailsComponent, selectors: [["acr-ingredient-details"]], inputs: { chosenIngrId: "chosenIngrId" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["nothing", ""], [1, "det-container"], [1, "main-pic"], [3, "src", "alt"], [1, "info"], [1, "stats"], ["colspan", "2", 1, "h3", "font-style-bold", "text-center", "pb-2"], [1, "fas", "fa-puzzle-piece"], [3, "routerLink"], [1, "fas", "fa-scroll"], [4, "ngIf"], [1, "fas", "fa-user"], [1, "desc"], ["class", "actionBtns row justify-content-between", 4, "ngIf", "ngIfElse"], ["deletedMessage", ""], [1, "fas", "fa-check", "text-success"], [1, "fas", "fa-times", "text-danger"], [1, "actionBtns", "row", "justify-content-between"], [1, "col-3", "text-center"], ["mat-raised-button", "", "class", "center btn btn-danger", 3, "click", 4, "ngIf"], [1, "col-6"], [1, "col-3", "text-center", "pl-1"], ["class", "center btn btn-primary", 3, "routerLink", 4, "ngIf"], ["mat-raised-button", "", 1, "center", "btn", "btn-danger", 3, "click"], [1, "far", "fa-trash-alt"], [1, "center", "btn", "btn-primary", 3, "routerLink"], [1, "fas", "fa-edit"], [1, "alert", "alert-dismissible", "alert-danger", "deleted"], ["type", "button", "data-dismiss", "alert", 1, "close"], [1, "text-center", "pt-3"], [1, "text-info"], ["src", "https://image.freepik.com/free-photo/healthy-eating-food-with-empty-dish-copyspace-diet-plan-top-view_44943-853.jpg", 1, "no-content"]], template: function IngredientDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IngredientDetailsComponent_div_0_Template, 54, 19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IngredientDetailsComponent_ng_template_1_Template, 4, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ingredient)("ngIfElse", _r166);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["section.det-container[_ngcontent-%COMP%] {\r\n        height: 31em;\r\n       }       \r\n       \r\n       div.main-pic[_ngcontent-%COMP%] {\r\n            float: left;\r\n            display: block;\r\n            max-width: 60%;\r\n        }       \r\n       \r\n       div.main-pic[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n            height: 18em;\r\n            width: auto;\r\n            max-width: 100%;\r\n            border-radius: 1em;\r\n        }       \r\n       \r\n       div.info[_ngcontent-%COMP%] {\r\n            display: block;\r\n            float: left;\r\n            padding-left:4%;\r\n\r\n            max-width: 37.5%;\r\n            min-width:30%;\r\n            max-height: 18em;\r\n            \r\n            \r\n        }       \r\n       \r\n       table.stats[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%] {\r\n            font-size: 1.15em;\r\n            line-height: 1.2em;\r\n            padding:.4em .2em 0 0;   \r\n        }       \r\n       \r\n       div.desc[_ngcontent-%COMP%] {\r\n            clear:both;\r\n            height: 13.5em;\r\n            padding-top:.2em;\r\n            margin-bottom:0.2em;\r\n        }       \r\n       \r\n       div.desc[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] { \r\n            overflow-y: auto;\r\n            height:9.6em;\r\n        }       \r\n       \r\n       img.no-content[_ngcontent-%COMP%] {\r\n            margin-top: 1em;\r\n            width: auto;\r\n            height: auto;\r\n            max-width: 80%;\r\n            max-height: 26.5em;\r\n            border-radius: 3em;\r\n        }       \r\n       \r\n       div.alert.deleted[_ngcontent-%COMP%]{\r\n            position: absolute;\r\n            bottom: 10%;\r\n            z-index: 3;\r\n            left: 2em;\r\n            right: 1.2em;\r\n            border-radius: .75em;\r\n        }       \r\n       \r\n       div.alert.deleted[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] { padding:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVkaWVudHMvaW5ncmVkaWVudC1kZXRhaWxzL2luZ3JlZGllbnQtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7T0FDTztRQUNDLFlBQVk7T0FDYjs7T0FFQTtZQUNLLFdBQVc7WUFDWCxjQUFjO1lBQ2QsY0FBYztRQUNsQjs7T0FFQTtZQUNJLFlBQVk7WUFDWixXQUFXO1lBQ1gsZUFBZTtZQUNmLGtCQUFrQjtRQUN0Qjs7T0FFQTtZQUNJLGNBQWM7WUFDZCxXQUFXO1lBQ1gsZUFBZTs7WUFFZixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLGdCQUFnQjs7WUFFaEIsOEJBQThCO1FBQ2xDOztPQUVEO1lBQ0ssaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixxQkFBcUI7UUFDekI7O09BRUE7WUFDSSxVQUFVO1lBQ1YsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixtQkFBbUI7UUFDdkI7O09BQ0E7WUFDSSxnQkFBZ0I7WUFDaEIsWUFBWTtRQUNoQjs7T0FFQTtZQUNJLGVBQWU7WUFDZixXQUFXO1lBQ1gsWUFBWTtZQUNaLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsa0JBQWtCO1FBQ3RCOztPQUVBO1lBQ0ksa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxVQUFVO1lBQ1YsU0FBUztZQUNULFlBQVk7WUFDWixvQkFBb0I7UUFDeEI7O09BQ0Esc0JBQXNCLFNBQVMsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2luZ3JlZGllbnRzL2luZ3JlZGllbnQtZGV0YWlscy9pbmdyZWRpZW50LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgXHJcbiAgICAgICBzZWN0aW9uLmRldC1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMzFlbTtcclxuICAgICAgIH0gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIGRpdi5tYWluLXBpYyB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYubWFpbi1waWM+aW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOGVtO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYuaW5mbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjQlO1xyXG5cclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzNy41JTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOjMwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMThlbTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8qIGJhY2tncm91bmQ6IGxlbW9uY2hpZmZvbjsgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgdGFibGUuc3RhdHM+dGJvZHk+dHI+dGQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOi40ZW0gLjJlbSAwIDA7ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYuZGVzYyB7XHJcbiAgICAgICAgICAgIGNsZWFyOmJvdGg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTMuNWVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDouMmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjAuMmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYuZGVzYz5wIHsgXHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDo5LjZlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZy5uby1jb250ZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjYuNWVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYuYWxlcnQuZGVsZXRlZHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDEwJTtcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgbGVmdDogMmVtO1xyXG4gICAgICAgICAgICByaWdodDogMS4yZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC43NWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYuYWxlcnQuZGVsZXRlZD5wIHsgcGFkZGluZzowO30iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngredientDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-ingredient-details',
                templateUrl: './ingredient-details.component.html',
                styleUrls: ['./ingredient-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_5__["IngredientService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }]; }, { chosenIngrId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ingredients/ingredients.module.ts":
/*!***************************************************!*\
  !*** ./src/app/ingredients/ingredients.module.ts ***!
  \***************************************************/
/*! exports provided: IngredientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsModule", function() { return IngredientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _list_ingredients_list_ingredients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-ingredients/list-ingredients.component */ "./src/app/ingredients/list-ingredients/list-ingredients.component.ts");
/* harmony import */ var _create_ingredient_create_ingredient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-ingredient/create-ingredient.component */ "./src/app/ingredients/create-ingredient/create-ingredient.component.ts");
/* harmony import */ var _ingredient_card_ingredient_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ingredient-card/ingredient-card.component */ "./src/app/ingredients/ingredient-card/ingredient-card.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _ingredient_details_ingredient_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingredient-details/ingredient-details.component */ "./src/app/ingredients/ingredient-details/ingredient-details.component.ts");
/* harmony import */ var _create_edit_ingredient_form_create_edit_ingredient_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-edit-ingredient-form/create-edit-ingredient-form.component */ "./src/app/ingredients/create-edit-ingredient-form/create-edit-ingredient-form.component.ts");
/* harmony import */ var _edit_ingredient_edit_ingredient_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-ingredient/edit-ingredient.component */ "./src/app/ingredients/edit-ingredient/edit-ingredient.component.ts");










class IngredientsModule {
}
IngredientsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IngredientsModule });
IngredientsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IngredientsModule_Factory(t) { return new (t || IngredientsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IngredientsModule, { declarations: [_list_ingredients_list_ingredients_component__WEBPACK_IMPORTED_MODULE_2__["ListIngredientsComponent"], _create_ingredient_create_ingredient_component__WEBPACK_IMPORTED_MODULE_3__["CreateIngredientComponent"], _ingredient_card_ingredient_card_component__WEBPACK_IMPORTED_MODULE_4__["IngredientCartComponent"], _ingredient_details_ingredient_details_component__WEBPACK_IMPORTED_MODULE_6__["IngredientDetailsComponent"], _create_edit_ingredient_form_create_edit_ingredient_form_component__WEBPACK_IMPORTED_MODULE_7__["CreateEditIngredientFormComponent"], _edit_ingredient_edit_ingredient_component__WEBPACK_IMPORTED_MODULE_8__["EditIngredientComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]], exports: [_list_ingredients_list_ingredients_component__WEBPACK_IMPORTED_MODULE_2__["ListIngredientsComponent"], _ingredient_details_ingredient_details_component__WEBPACK_IMPORTED_MODULE_6__["IngredientDetailsComponent"], _create_ingredient_create_ingredient_component__WEBPACK_IMPORTED_MODULE_3__["CreateIngredientComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngredientsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_list_ingredients_list_ingredients_component__WEBPACK_IMPORTED_MODULE_2__["ListIngredientsComponent"], _create_ingredient_create_ingredient_component__WEBPACK_IMPORTED_MODULE_3__["CreateIngredientComponent"], _ingredient_card_ingredient_card_component__WEBPACK_IMPORTED_MODULE_4__["IngredientCartComponent"], _ingredient_details_ingredient_details_component__WEBPACK_IMPORTED_MODULE_6__["IngredientDetailsComponent"], _create_edit_ingredient_form_create_edit_ingredient_form_component__WEBPACK_IMPORTED_MODULE_7__["CreateEditIngredientFormComponent"], _edit_ingredient_edit_ingredient_component__WEBPACK_IMPORTED_MODULE_8__["EditIngredientComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]
                ],
                exports: [_list_ingredients_list_ingredients_component__WEBPACK_IMPORTED_MODULE_2__["ListIngredientsComponent"], _ingredient_details_ingredient_details_component__WEBPACK_IMPORTED_MODULE_6__["IngredientDetailsComponent"], _create_ingredient_create_ingredient_component__WEBPACK_IMPORTED_MODULE_3__["CreateIngredientComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ingredients/list-ingredients/list-ingredients.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ingredients/list-ingredients/list-ingredients.component.ts ***!
  \****************************************************************************/
/*! exports provided: ListIngredientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIngredientsComponent", function() { return ListIngredientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/ingredient.service */ "./src/app/core/services/ingredient.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _ingredient_card_ingredient_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ingredient-card/ingredient-card.component */ "./src/app/ingredients/ingredient-card/ingredient-card.component.ts");











function ListIngredientsComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r154 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", letter_r154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](letter_r154);
} }
function ListIngredientsComponent_div_33_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-spinner", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading ingredients...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
function ListIngredientsComponent_div_33_acr_ingredient_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-ingredient-card", 42);
} if (rf & 2) {
    const ingC_r157 = ctx.$implicit;
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ingredient", ingC_r157)("ingrIdSelected", ctx_r156.ingrIdSelected);
} }
function ListIngredientsComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Primal Ingredients");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ListIngredientsComponent_div_33_Template_div_scroll_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r159); const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r158.onScrollEsts($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListIngredientsComponent_div_33_div_8_Template, 5, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListIngredientsComponent_div_33_acr_ingredient_card_9_Template, 1, 2, "acr-ingredient-card", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Found ", ctx_r150.resultsFd.essentials, ". Displayed ", ctx_r150.cards.essentials.cards.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r150.cards.essentials.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r150.cards.essentials.cards);
} }
function ListIngredientsComponent_div_34_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-spinner", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading ingredients...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
function ListIngredientsComponent_div_34_acr_ingredient_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-ingredient-card", 42);
} if (rf & 2) {
    const ingC_r162 = ctx.$implicit;
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ingredient", ingC_r162)("ingrIdSelected", ctx_r161.ingrIdSelected);
} }
function ListIngredientsComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Additional Ingredients");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ListIngredientsComponent_div_34_Template_div_scroll_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r163.onScrollNonEsts($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListIngredientsComponent_div_34_div_8_Template, 5, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListIngredientsComponent_div_34_acr_ingredient_card_9_Template, 1, 2, "acr-ingredient-card", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Found ", ctx_r151.resultsFd.nonEssentials, ". Displayed ", ctx_r151.cards.nonEssentials.cards.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r151.cards.nonEssentials.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r151.cards.nonEssentials.cards);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
const _c1 = function () { return ["create"]; };
const _c2 = function (a0) { return { "ing-outlet": a0 }; };
const _c3 = function (a0) { return { outlets: a0 }; };
const _c4 = function (a1) { return ["/ingredients", a1]; };
function ListIngredientsComponent_a_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r152.isLoggedIn))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1)))));
} }
const _c5 = function () { return ["details", 0]; };
function ListIngredientsComponent_a_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 Abort!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r153.isLoggedIn))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c5)))));
} }
class ListIngredientsComponent {
    constructor(route, fb, ingService, spinner, router, authService) {
        this.route = route;
        this.fb = fb;
        this.ingService = ingService;
        this.spinner = spinner;
        this.router = router;
        this.authService = authService;
        this.cards = {
            essentials: { page: 1, cards: [], loading: false },
            nonEssentials: { page: 1, cards: [], loading: false }
        };
        this.resultsFd = { essentials: 0, nonEssentials: 0, pageCappacity: 0 };
        this.indexLetters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
        this.ingrIdSelected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.scrolSayLoad = (target) => target.scrollHeight - (target.scrollTop + target.clientHeight) < 10;
        this.buildForm();
        this.monitorForm();
        this.ingrIdSelected.subscribe(id => router.navigate(['/ingredients', { outlets: { 'ing-outlet': ['details', id] } }]));
    }
    get isLoggedIn() { return this.authService.isAuthenticated(); }
    // selectedId: number=-1;
    get essentials() { return this.filterForm.get('essentials'); }
    get nonEssentials() { return this.filterForm.get('non-essentials'); }
    setLocks() {
        this.essentials.enable();
        this.nonEssentials.enable();
        (this.essentials.value && !this.nonEssentials.value) ? this.essentials.disable() : this.essentials.enable();
        (this.nonEssentials.value && !this.essentials.value) ? this.nonEssentials.disable() : this.nonEssentials.enable();
    }
    buildForm() {
        this.filterForm = this.fb.group({
            "index": "-",
            "phrase": ["", { updateOn: "blur" }],
            "essentials": true,
            "non-essentials": true,
        });
    }
    get formData() {
        const { index, phrase } = this.filterForm.value;
        return { index, phrase };
    }
    monitorForm() {
        let trackerSubj = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        trackerSubj.subscribe(() => {
            this.filterForm.updateValueAndValidity();
            this.ingService.getCardsMaxCount(this.formData).subscribe(res => {
                this.resultsFd = res;
                this.cards.essentials = { page: 1, cards: [], loading: false },
                    this.cards.nonEssentials = { page: 1, cards: [], loading: false };
                this.fetchNonEssentials();
                this.fetchEssentials();
            });
        });
        trackerSubj.next();
        this.filterForm.get("index").valueChanges.subscribe(trackerSubj);
        this.filterForm.get("phrase").valueChanges.subscribe(trackerSubj);
    }
    fetchEssentials() {
        if (this.cards.essentials.cards.length === this.resultsFd.essentials || this.cards.essentials.loading)
            return;
        this.cards.essentials.loading = true;
        this.spinner.show();
        this.ingService.getEssentialIngCards(this.cards.essentials.page++, this.formData.index, this.formData.phrase)
            .subscribe(r => {
            this.cards.essentials.cards.splice(this.cards.essentials.cards.length, 0, ...r);
            this.cards.essentials.loading = false;
        }).add(() => this.spinner.hide());
    }
    fetchNonEssentials() {
        if (this.cards.nonEssentials.cards.length === this.resultsFd.nonEssentials || this.cards.nonEssentials.loading)
            return;
        this.cards.nonEssentials.loading = true;
        this.spinner.show();
        this.ingService.getNonEssentialIngsCards(this.cards.nonEssentials.page++, this.formData.index, this.formData.phrase)
            .subscribe(r => {
            this.cards.nonEssentials.cards.splice(this.cards.nonEssentials.cards.length, 0, ...r);
            this.cards.nonEssentials.loading = false;
        }).add(() => this.spinner.hide());
    }
    onScrollEsts({ target }) {
        if (!this.scrolSayLoad(target)) {
            return;
        }
        console.log("sroll Ess");
        this.fetchEssentials();
    }
    onScrollNonEsts({ target }) {
        if (!this.scrolSayLoad(target)) {
            return;
        }
        console.log("sroll nonEss");
        this.fetchNonEssentials();
    }
    isOnCreatePage() {
        const urlChilds = this.route.snapshot.children;
        return urlChilds.length > 0 && ["create", "edit"].includes(urlChilds[0].url[0]["path"].toLowerCase());
    }
}
ListIngredientsComponent.ɵfac = function ListIngredientsComponent_Factory(t) { return new (t || ListIngredientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_4__["IngredientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
ListIngredientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListIngredientsComponent, selectors: [["acr-list-ingredients"]], decls: 42, vars: 6, consts: [[1, "container-fluid", "allContent", "pt-4"], [1, "text-center", "py-2"], [1, "fas", "fa-puzzle-piece"], [1, "row", "justify-content-between"], [1, "col-12", "pb-4"], [1, "filter-box"], [1, "form-inline", "my-2", "my-lg-0", 3, "formGroup"], [1, "form-group", "float-left", "pr-4", "mr-4"], ["for", "index", 1, "pr-2", "h4"], [1, "fas", "fa-sort-alpha-down"], ["formControlName", "index", "id", "index", 1, "form-control"], ["value", "-"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "float-left", "pl-4"], ["id", "s-field", "type", "text", "formControlName", "phrase", "placeholder", "Search phrase...", 1, "form-control", "s-field"], [1, "pl-2", "h4"], [1, "fas", "fa-search"], [1, "checks"], [1, "form-check", "float-left"], [1, "form-check-label", "h4"], ["type", "checkbox", "formControlName", "essentials", 1, "form-check-input", "pr-3", "big-checkbox", 3, "change"], [1, "form-check", "float-right", "mr-4"], ["type", "checkbox", "formControlName", "non-essentials", 1, "form-check-input", "pr-3", "big-checkbox", 3, "change"], [1, "ing-types"], ["class", "ing-container", 4, "ngIf"], [1, "right-section"], [1, "det-inf"], ["name", "ing-outlet"], [1, "actionBtns"], ["class", "center btn btn-info", 3, "ngClass", "routerLink", 4, "ngIf"], ["class", "center btn btn-danger", 3, "ngClass", "routerLink", 4, "ngIf"], [3, "value"], [1, "ing-container"], [1, "ing-types-header"], ["mat-raised-button", "", "matTooltipPosition", "below", "matTooltip", "Ingredients you are likely to have (spices, oils and such...)", "aria-label", "Section description", 1, "text-center"], [1, "font-italic", "text-muted"], [1, "ings-box", 3, "scroll"], ["style", "position:relative", 4, "ngIf"], [3, "ingredient", "ingrIdSelected", 4, "ngFor", "ngForOf"], [2, "position", "relative"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "rgba(119, 41, 83, 0.73)", "type", "ball-scale-multiple", 2, "position", "absolute", "top", "2em", "right", "31%", 3, "fullScreen"], [2, "font-size", "18px", "color", "rgba(119, 41, 83, 0.73)", "padding-left", "10em", "padding-top", "2em"], [3, "ingredient", "ingrIdSelected"], ["mat-raised-button", "", "matTooltipPosition", "below", "matTooltip", "Ingredients you might have...", "aria-label", "Section description"], [1, "center", "btn", "btn-info", 3, "ngClass", "routerLink"], [1, "fas", "fa-plus-circle"], [1, "center", "btn", "btn-danger", 3, "ngClass", "routerLink"], [1, "fas", "fa-ban"]], template: function ListIngredientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 All Ingredients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u00A0 Index:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "A-Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListIngredientsComponent_option_17_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A0 Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ListIngredientsComponent_Template_input_change_26_listener($event) { return ctx.setLocks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Primal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ListIngredientsComponent_Template_input_change_30_listener($event) { return ctx.setLocks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Additional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ListIngredientsComponent_div_33_Template, 10, 4, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ListIngredientsComponent_div_34_Template, 10, 4, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "router-outlet", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ListIngredientsComponent_a_40_Template, 3, 11, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ListIngredientsComponent_a_41_Template, 3, 11, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.indexLetters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.essentials.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nonEssentials.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isOnCreatePage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOnCreatePage());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"], _ingredient_card_ingredient_card_component__WEBPACK_IMPORTED_MODULE_9__["IngredientCartComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: ["div.allContent[_ngcontent-%COMP%] {\r\n    max-width:100em;\r\n    margin:0 auto;\r\n    height: 92vh;\r\n    background: rgb(241, 241, 241);\r\n}\r\n\r\ndiv.center[_ngcontent-%COMP%] {\r\n    margin:0 auto;\r\n}\r\n\r\ninput.s-field[_ngcontent-%COMP%] {\r\n    width:10em;\r\n}\r\n\r\ndiv.right-section[_ngcontent-%COMP%]{\r\n    position:relative;\r\n    display:inline-block;\r\n    width: 54%;\r\n    min-width:37.5em;\r\n    height:40em;\r\n    margin: 0 2%;\r\n    padding-left: 0.8em;\r\n}\r\n\r\ndiv.det-inf[_ngcontent-%COMP%] {\r\n    display:block;\r\n    height:36em;\r\n    border:2px solid purple;\r\n    border-radius: 2em;\r\n    overflow: auto hidden;\r\n    padding:1em;\r\n    background: #f5f1e9;\r\n}\r\n\r\ndiv.ing-types[_ngcontent-%COMP%] {\r\n    display:inline-block;\r\n    width:40%;\r\n    min-width:25em;\r\n    height:40em;\r\n    margin-left:2%;\r\n    margin-bottom:1.6em;\r\n}\r\n\r\ndiv.ing-container[_ngcontent-%COMP%]{\r\n    display:block;\r\n    width:100%;\r\n    min-width: 29em;\r\n    height:19em;\r\n    border:2px solid purple;\r\n    padding-right:.9em;   \r\n    border-radius: 2em;\r\n    background: #f5f1e9;\r\n}\r\n\r\ndiv.ing-container[_ngcontent-%COMP%]:first-child{\r\nmargin-bottom:2em;\r\n}\r\n\r\ndiv.ing-container[_ngcontent-%COMP%]:nth-of-type(2){\r\nmargin-top:2em;\r\n}\r\n\r\ndiv.ing-types-header[_ngcontent-%COMP%]{ display:block;}\r\n\r\ndiv.ing-types-header[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display:inline-block;\r\n    padding-bottom: 0.25em;\r\n    margin-top:0.5em;\r\n    border-bottom: 2px solid orangered;\r\n}\r\n\r\ndiv.ing-types-header[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%] {\r\n     padding-left:0.4em; \r\n    display:inline-block;\r\n}\r\n\r\ndiv.ing-types-header[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\r\n    \r\n    float: right;\r\n    padding-top: 1.2em;  \r\n}\r\n\r\ndiv.filter-box[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    min-width:35em;\r\n    padding-left:2em;\r\n}\r\n\r\ndiv.filter-box[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] {display:block}\r\n\r\ndiv.filter-box[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{\r\n   padding-right:1em;\r\n}\r\n\r\nform[_ngcontent-%COMP%] > div.checks[_ngcontent-%COMP%] {\r\n    float:right;\r\n    min-width: 21em;\r\n}\r\n\r\ninput.big-checkbox[_ngcontent-%COMP%] {\r\n    width: 1em;\r\n    height: 1em;\r\n    color:green;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\ndiv.ings-box[_ngcontent-%COMP%]{\r\n    overflow: auto auto;\r\n    height: 14.5em;\r\n    min-width: 27em;\r\n    padding: .9em;\r\n    padding-right: 0;\r\n}\r\n\r\ndiv.actionBtns[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 0.3em;\r\n    right: 2.5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVkaWVudHMvbGlzdC1pbmdyZWRpZW50cy9saXN0LWluZ3JlZGllbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsY0FBYztBQUNkOztBQUVBLHNCQUFzQixhQUFhLENBQUM7O0FBRXBDO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0NBQWtDO0FBQ3RDOztBQUNBO0tBQ0ssa0JBQWtCO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBQ0EscUJBQXFCLGFBQWE7O0FBRWxDO0dBQ0csaUJBQWlCO0FBQ3BCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9pbmdyZWRpZW50cy9saXN0LWluZ3JlZGllbnRzL2xpc3QtaW5ncmVkaWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5hbGxDb250ZW50IHtcclxuICAgIG1heC13aWR0aDoxMDBlbTtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICBoZWlnaHQ6IDkydmg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbn1cclxuXHJcbmRpdi5jZW50ZXIge1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxufVxyXG5cclxuaW5wdXQucy1maWVsZCB7XHJcbiAgICB3aWR0aDoxMGVtO1xyXG59XHJcblxyXG5kaXYucmlnaHQtc2VjdGlvbntcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTQlO1xyXG4gICAgbWluLXdpZHRoOjM3LjVlbTtcclxuICAgIGhlaWdodDo0MGVtO1xyXG4gICAgbWFyZ2luOiAwIDIlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhlbTtcclxufVxyXG5cclxuZGl2LmRldC1pbmYge1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGhlaWdodDozNmVtO1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCBwdXJwbGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBvdmVyZmxvdzogYXV0byBoaWRkZW47XHJcbiAgICBwYWRkaW5nOjFlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmNWYxZTk7XHJcbn1cclxuXHJcbmRpdi5pbmctdHlwZXMge1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDo0MCU7XHJcbiAgICBtaW4td2lkdGg6MjVlbTtcclxuICAgIGhlaWdodDo0MGVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6MiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEuNmVtO1xyXG59XHJcblxyXG5kaXYuaW5nLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAyOWVtO1xyXG4gICAgaGVpZ2h0OjE5ZW07XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHB1cnBsZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6LjllbTsgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmNWYxZTk7XHJcbn1cclxuXHJcbmRpdi5pbmctY29udGFpbmVyOmZpcnN0LWNoaWxke1xyXG5tYXJnaW4tYm90dG9tOjJlbTtcclxufVxyXG5cclxuZGl2LmluZy1jb250YWluZXI6bnRoLW9mLXR5cGUoMil7XHJcbm1hcmdpbi10b3A6MmVtO1xyXG59XHJcblxyXG5kaXYuaW5nLXR5cGVzLWhlYWRlcnsgZGlzcGxheTpibG9jazt9XHJcblxyXG5kaXYuaW5nLXR5cGVzLWhlYWRlcj5oNSBzcGFuIHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVlbTtcclxuICAgIG1hcmdpbi10b3A6MC41ZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgb3JhbmdlcmVkO1xyXG59XHJcbmRpdi5pbmctdHlwZXMtaGVhZGVyPmg1IHtcclxuICAgICBwYWRkaW5nLWxlZnQ6MC40ZW07IFxyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmRpdi5pbmctdHlwZXMtaGVhZGVyPnNwYW57XHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OjFlbTsgKi9cclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiAxLjJlbTsgIFxyXG59XHJcblxyXG5kaXYuZmlsdGVyLWJveHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtaW4td2lkdGg6MzVlbTtcclxuICAgIHBhZGRpbmctbGVmdDoyZW07XHJcbn1cclxuZGl2LmZpbHRlci1ib3g+Zm9ybSB7ZGlzcGxheTpibG9ja31cclxuXHJcbmRpdi5maWx0ZXItYm94PmZvcm0+KntcclxuICAgcGFkZGluZy1yaWdodDoxZW07XHJcbn1cclxuZm9ybT5kaXYuY2hlY2tzIHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgbWluLXdpZHRoOiAyMWVtO1xyXG59XHJcblxyXG5pbnB1dC5iaWctY2hlY2tib3gge1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgY29sb3I6Z3JlZW47XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuZGl2LmluZ3MtYm94e1xyXG4gICAgb3ZlcmZsb3c6IGF1dG8gYXV0bztcclxuICAgIGhlaWdodDogMTQuNWVtO1xyXG4gICAgbWluLXdpZHRoOiAyN2VtO1xyXG4gICAgcGFkZGluZzogLjllbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbmRpdi5hY3Rpb25CdG5zIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDAuM2VtO1xyXG4gICAgcmlnaHQ6IDIuNWVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListIngredientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-list-ingredients',
                templateUrl: './list-ingredients.component.html',
                styleUrls: ['./list-ingredients.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_4__["IngredientService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/messages/list-all/list-all.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/messages/list-all/list-all.component.ts ***!
  \*********************************************************/
/*! exports provided: ListAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAllComponent", function() { return ListAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/message.service */ "./src/app/core/services/message.service.ts");
/* harmony import */ var src_app_core_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user-data.service */ "./src/app/core/services/user-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _message_display_recieved_message_recieved_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../message-display-recieved/message-recieved.component */ "./src/app/messages/message-display-recieved/message-recieved.component.ts");
/* harmony import */ var _message_display_sent_message_sent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message-display-sent/message-sent.component */ "./src/app/messages/message-display-sent/message-sent.component.ts");
/* harmony import */ var _message_display_deleted_message_deleted_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../message-display-deleted/message-deleted.component */ "./src/app/messages/message-display-deleted/message-deleted.component.ts");
/* harmony import */ var _auth_user_small_info_user_small_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../auth/user-small-info/user-small-info.component */ "./src/app/auth/user-small-info/user-small-info.component.ts");











const _c0 = ["defaultTab"];
function ListAllComponent_acr_message_recieved_30_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "acr-message-recieved", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openUnreadMessageEmitter", function ListAllComponent_acr_message_recieved_30_Template_acr_message_recieved_openUnreadMessageEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.openUnreadMessage($event); })("deleteMessageEmitter", function ListAllComponent_acr_message_recieved_30_Template_acr_message_recieved_deleteMessageEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.setDeletedStatus($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mes_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", mes_r63);
} }
function ListAllComponent_acr_message_sent_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-message-sent", 30);
} if (rf & 2) {
    const mes_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", mes_r67);
} }
function ListAllComponent_acr_message_deleted_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-message-deleted", 30);
} if (rf & 2) {
    const mes_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", mes_r68);
} }
function ListAllComponent_acr_user_sm_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-user-sm", 31);
} if (rf & 2) {
    const u_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", u_r69);
} }
function ListAllComponent_acr_user_sm_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-user-sm", 31);
} if (rf & 2) {
    const u_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", u_r70);
} }
class ListAllComponent {
    constructor(authService, messageService, userDataService) {
        this.messageService = messageService;
        this.userDataService = userDataService;
        this.all$ = null;
        this.nonDeleted$ = null;
        this.deleted$ = null;
        this.blockedUsers$ = null;
        this.blockerUsers$ = null;
        this.sent$ = null;
        this.myUserName = null;
        this.resetDeletedNonDeletedStreams();
        this.myUserName = authService.getUserInfo().userName;
        this.messageService.signalR.startConnection(this.myUserName);
    }
    ngAfterViewInit() {
        this.sent$ = this.messageService.getSentMessages();
        this.blockedUsers$ = this.userDataService.getBlockedUserInfos();
        this.blockerUsers$ = this.userDataService.getBlockerUserInfos();
    }
    resetDeletedNonDeletedStreams() {
        this.all$ = this.messageService.getRecievedMessages();
        this.nonDeleted$ = this.all$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => res.slice().filter(x => !x.isDeleted)));
        this.deleted$ = this.all$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => res.slice().filter(x => x.isDeleted)));
    }
    openUnreadMessage(id) {
        this.messageService.markReadMessage(id).subscribe(() => {
            this.messageService.signalR.updateUserUnreadCount(this.myUserName);
        });
    }
    setDeletedStatus({ id, isSeen }) {
        console.log("triem", id);
        this.messageService.deleteMessage(id).subscribe(() => {
            this.resetDeletedNonDeletedStreams();
            if (!isSeen) {
                this.messageService.signalR.updateUserUnreadCount(this.myUserName);
            }
        });
    }
}
ListAllComponent.ɵfac = function ListAllComponent_Factory(t) { return new (t || ListAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"])); };
ListAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListAllComponent, selectors: [["acr-list-all"]], viewQuery: function ListAllComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.defaultTab = _t.first);
    } }, decls: 51, vars: 15, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-2", "toastr"], [1, "col-8"], [1, "text-center", "py-3"], [1, "nav", "nav-tabs", "h4"], [1, "nav-item"], ["data-toggle", "tab", "href", "#recieved", 1, "nav-link", "active"], [1, "fas", "fa-envelope-open-text"], ["data-toggle", "tab", "href", "#sent", 1, "nav-link"], [1, "fas", "fa-paper-plane"], ["data-toggle", "tab", "href", "#deleted", 1, "nav-link"], [1, "far", "fa-trash-alt"], ["data-toggle", "tab", "href", "#users-i-block", 1, "nav-link"], [1, "fas", "fa-biohazard"], ["data-toggle", "tab", "href", "#users-blocking-me", 1, "nav-link"], [1, "fas", "fa-comment-slash"], ["id", "myTabContent", 1, "tab-content", "pt-4"], ["id", "recieved", 1, "tab-pane", "fade", "show", "active"], ["defaultTab", ""], [3, "message", "openUnreadMessageEmitter", "deleteMessageEmitter", 4, "ngFor", "ngForOf"], ["id", "sent", 1, "tab-pane", "fade"], [3, "message", 4, "ngFor", "ngForOf"], ["id", "deleted", 1, "tab-pane", "fade"], ["id", "users-i-block", 1, "tab-pane", "fade"], [1, "row", "justify-content-start"], ["class", "col-2", 3, "user", 4, "ngFor", "ngForOf"], ["id", "users-blocking-me", 1, "tab-pane", "fade"], [1, "col-2"], [3, "message", "openUnreadMessageEmitter", "deleteMessageEmitter"], [3, "message"], [1, "col-2", 3, "user"]], template: function ListAllComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Message Box:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0 Recieved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A0 Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u00A0 Deleted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u00A0 Users I Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u00A0 Users Blocking Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ListAllComponent_acr_message_recieved_30_Template, 1, 1, "acr-message-recieved", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ListAllComponent_acr_message_sent_33_Template, 1, 1, "acr-message-sent", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ListAllComponent_acr_message_deleted_36_Template, 1, 1, "acr-message-deleted", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "All users who can't tell me shit... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ListAllComponent_acr_user_sm_42_Template, 1, 1, "acr-user-sm", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "All users who I can not write... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ListAllComponent_acr_user_sm_48_Template, 1, 1, "acr-user-sm", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 5, ctx.nonDeleted$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 7, ctx.sent$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 9, ctx.deleted$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 11, ctx.blockedUsers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 13, ctx.blockerUsers$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _message_display_recieved_message_recieved_component__WEBPACK_IMPORTED_MODULE_6__["MessageRecievedComponent"], _message_display_sent_message_sent_component__WEBPACK_IMPORTED_MODULE_7__["MessageSentComponent"], _message_display_deleted_message_deleted_component__WEBPACK_IMPORTED_MODULE_8__["MessageDeletedComponent"], _auth_user_small_info_user_small_info_component__WEBPACK_IMPORTED_MODULE_9__["UserSmallInfoComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL2xpc3QtYWxsL2xpc3QtYWxsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListAllComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-list-all',
                templateUrl: './list-all.component.html',
                styleUrls: ['./list-all.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_core_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }, { type: src_app_core_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] }]; }, { defaultTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["defaultTab", { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/messages/message-display-deleted/message-deleted.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/messages/message-display-deleted/message-deleted.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MessageDeletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDeletedComponent", function() { return MessageDeletedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MessageDeletedComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 Hide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessageDeletedComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 Display ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/user-data/profile/", a1]; };
const _c1 = function (a0) { return { "display": a0 }; };
class MessageDeletedComponent {
    constructor() {
        this.expanded = false;
    }
    showHideContent() {
        this.expanded = !this.expanded;
    }
    get dateSent() {
        return src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"].dateConvert(this.message.dateOfCreation, src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["CustomDateFormats"].DefaultFormater);
    }
}
MessageDeletedComponent.ɵfac = function MessageDeletedComponent_Factory(t) { return new (t || MessageDeletedComponent)(); };
MessageDeletedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageDeletedComponent, selectors: [["acr-message-deleted"]], inputs: { message: "message" }, decls: 20, vars: 15, consts: [[1, "card", "border-primary", "mb-3", "mx-4", 2, "max-width", "100%"], [1, "card-header"], [1, "row", "justify-content-between"], [1, "col-4"], [1, "h4"], [1, "h4", 3, "routerLink"], [1, "col-3"], [1, "font-italic"], [1, "col-3", "float-right"], [1, "link", 3, "click"], ["class", "float-right pt-1 px-4", 4, "ngIf"], [1, "card-body", "p-2", "h5", "mb-0", "mt-1", 3, "ngStyle"], [1, "mb-2", "px-2"], [3, "routerLink"], ["alt", "avatar picture of sender", 1, "avatar", 3, "src"], [1, "float-right", "pt-1", "px-4"], [1, "far", "fa-minus-square"], [1, "far", "fa-plus-square"]], template: function MessageDeletedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "To : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageDeletedComponent_Template_div_click_12_listener($event) { return ctx.showHideContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MessageDeletedComponent_div_13_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MessageDeletedComponent_div_14_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.message.recieverUserName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.recieverUserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0Recieved on: ", ctx.dateSent, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.expanded ? "inline" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.message.senderUserName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.message.recieverAvatarPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message.content, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: ["img.avatar[_ngcontent-%COMP%] {\r\n    width:10rem;\r\n    height: 10rem;\r\n    float:left;\r\n    padding-right: 1rem;\r\n    padding-bottom: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZS1kaXNwbGF5LWRlbGV0ZWQvbWVzc2FnZS1kZWxldGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZS1kaXNwbGF5LWRlbGV0ZWQvbWVzc2FnZS1kZWxldGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuYXZhdGFyIHtcclxuICAgIHdpZHRoOjEwcmVtO1xyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageDeletedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-message-deleted',
                templateUrl: './message-deleted.component.html',
                styleUrls: ['./message-deleted.component.css']
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/messages/message-display-recieved/message-recieved.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/messages/message-display-recieved/message-recieved.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MessageRecievedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageRecievedComponent", function() { return MessageRecievedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function MessageRecievedComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MessageRecievedComponent_span_7_Template_span_mouseenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r249); const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r248.showHideBlockInfo(); })("mouseleave", function MessageRecievedComponent_span_7_Template_span_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r249); const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r250.showHideBlockInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessageRecievedComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " I have blocked this user!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessageRecievedComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 Read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessageRecievedComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 Unread");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessageRecievedComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 Hide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessageRecievedComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 Display ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/user-data/profile/", a1]; };
const _c1 = function (a0) { return { "display": a0 }; };
class MessageRecievedComponent {
    constructor(authService) {
        this.authService = authService;
        this._mesg = {
            id: 123,
            dateOfCreation: "",
            isDeleted: false,
            senderUserName: "Sandio",
            recieverUserName: "Sandio",
            recieverAvatarPicture: "https://i.pinimg.com/originals/7c/b0/18/7cb018683132322074c039046f55d01a.jpg",
            senderAvatarPicture: "https://i.pinimg.com/originals/7c/b0/18/7cb018683132322074c039046f55d01a.jpg",
            content: "kade e mlqkoto",
            status: "UnRead",
        };
        this.openUnreadMessageEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteMessageEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.expanded = true;
        this.showBlockInfo = false;
    }
    get message() {
        return this._mesg;
    }
    set message(m) {
        this._mesg = m;
        this.expanded = m.status === "Read";
    }
    get isSenderBlocked() {
        return this.authService.getUserInfo().blocked.includes(this.message.senderUserName);
    }
    showHideContent() {
        this.expanded = !this.expanded;
        if (this.message.status === "Read") {
            return;
        }
        this.message.status = "Read";
        this.openUnreadMessageEmitter.emit(this.message.id);
    }
    showHideBlockInfo() {
        this.showBlockInfo = !this.showBlockInfo;
    }
    del() {
        this.deleteMessageEmitter.emit({ id: this.message.id, isSeen: this.message.status === "Read" });
    }
    get dateSent() {
        return src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"].dateConvert(this.message.dateOfCreation, src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["CustomDateFormats"].DefaultFormater);
    }
}
MessageRecievedComponent.ɵfac = function MessageRecievedComponent_Factory(t) { return new (t || MessageRecievedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
MessageRecievedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageRecievedComponent, selectors: [["acr-message-recieved"]], inputs: { message: "message" }, outputs: { openUnreadMessageEmitter: "openUnreadMessageEmitter", deleteMessageEmitter: "deleteMessageEmitter" }, decls: 30, vars: 19, consts: [[1, "card", "border-primary", "mb-3", "mx-4", 2, "max-width", "100%"], [1, "card-header"], [1, "row", "justify-content-start"], [1, "col-4"], [1, "h4"], [1, "h4", 3, "routerLink"], [3, "mouseenter", "mouseleave", 4, "ngIf"], ["class", "text-danger font-weight-bold h5", 4, "ngIf"], [1, "col-2"], ["class", "text-success", 4, "ngIf", "ngIfElse"], ["unread", ""], [1, "col-3"], [1, "font-italic"], [1, "col-3", "float-right"], [1, "link", 3, "click"], ["class", "float-right pt-1 px-4", 4, "ngIf"], [1, "float-right", "pt-1", 3, "click"], [1, "far", "fa-trash-alt"], [1, "card-body", "p-2", "h5", "mb-0", "mt-1", 3, "ngStyle"], [1, "mb-2", "px-2"], [3, "routerLink"], ["alt", "avatar picture of sender", 1, "avatar", 3, "src"], [3, "mouseenter", "mouseleave"], [1, "fas", "fa-ban", "text-danger", "fa-xs"], [1, "text-danger", "font-weight-bold", "h5"], [1, "text-success"], [1, "fas", "fa-eye"], [1, "text-danger"], [1, "fas", "fa-eye-slash"], [1, "float-right", "pt-1", "px-4"], [1, "far", "fa-minus-square"], [1, "far", "fa-plus-square"]], template: function MessageRecievedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "From : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MessageRecievedComponent_span_7_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MessageRecievedComponent_span_10_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MessageRecievedComponent_div_12_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MessageRecievedComponent_ng_template_13_Template, 3, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageRecievedComponent_Template_div_click_19_listener($event) { return ctx.showHideContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MessageRecievedComponent_div_20_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MessageRecievedComponent_div_21_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageRecievedComponent_Template_a_click_22_listener($event) { return ctx.del(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u00A0 Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.message.senderUserName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSenderBlocked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message.senderUserName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSenderBlocked && ctx.showBlockInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.status === "Read")("ngIfElse", _r244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0Recieved on: ", ctx.dateSent, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.expanded ? "inline" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.message.senderUserName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.message.senderAvatarPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message.content, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["img.avatar[_ngcontent-%COMP%] {\r\n    width:10rem;\r\n    height: 10rem;\r\n    float:left;\r\n    padding-right: 1rem;\r\n    padding-bottom: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZS1kaXNwbGF5LXJlY2lldmVkL21lc3NhZ2UtcmVjaWV2ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlLWRpc3BsYXktcmVjaWV2ZWQvbWVzc2FnZS1yZWNpZXZlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLmF2YXRhciB7XHJcbiAgICB3aWR0aDoxMHJlbTtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageRecievedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-message-recieved',
                templateUrl: './message-recieved.component.html',
                styleUrls: ['./message-recieved.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, { openUnreadMessageEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteMessageEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/messages/message-display-sent/message-sent.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/messages/message-display-sent/message-sent.component.ts ***!
  \*************************************************************************/
/*! exports provided: MessageSentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSentComponent", function() { return MessageSentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MessageSentComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 Read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessageSentComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 Unread");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessageSentComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 Hide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessageSentComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 Display ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/user-data/profile/", a1]; };
const _c1 = function (a0) { return { "display": a0 }; };
class MessageSentComponent {
    constructor() {
        this.expanded = false;
    }
    showHideContent() {
        this.expanded = !this.expanded;
    }
    get dateSent() {
        return src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"].dateConvert(this.message.dateOfCreation, src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["CustomDateFormats"].DefaultFormater);
    }
}
MessageSentComponent.ɵfac = function MessageSentComponent_Factory(t) { return new (t || MessageSentComponent)(); };
MessageSentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageSentComponent, selectors: [["acr-message-sent"]], inputs: { message: "message" }, decls: 24, vars: 17, consts: [[1, "card", "border-primary", "mb-3", "mx-4", 2, "max-width", "100%"], [1, "card-header"], [1, "row", "justify-content-start"], [1, "col-4"], [1, "h4"], [1, "h4", 3, "routerLink"], [1, "col-2"], ["class", "text-success", 4, "ngIf", "ngIfElse"], ["unread", ""], [1, "col-3"], [1, "font-italic"], [1, "col-3", "float-right"], [1, "link", 3, "click"], ["class", "float-right pt-1 px-4", 4, "ngIf"], [1, "card-body", "p-2", "h5", "mb-0", "mt-1", 3, "ngStyle"], [1, "mb-2", "px-2"], [3, "routerLink"], ["alt", "avatar picture of sender", 1, "avatar", 3, "src"], [1, "text-success"], [1, "fas", "fa-eye"], [1, "text-danger"], [1, "fas", "fa-eye-slash"], [1, "float-right", "pt-1", "px-4"], [1, "far", "fa-minus-square"], [1, "far", "fa-plus-square"]], template: function MessageSentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "To : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MessageSentComponent_div_9_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MessageSentComponent_ng_template_10_Template, 3, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageSentComponent_Template_div_click_16_listener($event) { return ctx.showHideContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MessageSentComponent_div_17_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MessageSentComponent_div_18_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.message.recieverUserName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.recieverUserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.status === "Read")("ngIfElse", _r252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0Sent on: ", ctx.dateSent, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.expanded ? "inline" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.message.senderUserName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.message.recieverAvatarPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message.content, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: ["img.avatar[_ngcontent-%COMP%] {\r\n    width:10rem;\r\n    height: 10rem;\r\n    float:left;\r\n    padding-right: 1rem;\r\n    padding-bottom: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZS1kaXNwbGF5LXNlbnQvbWVzc2FnZS1zZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZS1kaXNwbGF5LXNlbnQvbWVzc2FnZS1zZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuYXZhdGFyIHtcclxuICAgIHdpZHRoOjEwcmVtO1xyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageSentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-message-sent',
                templateUrl: './message-sent.component.html',
                styleUrls: ['./message-sent.component.css']
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/messages/messages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.module.ts ***!
  \*********************************************/
/*! exports provided: MessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesModule", function() { return MessagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _list_all_list_all_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-all/list-all.component */ "./src/app/messages/list-all/list-all.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _message_display_recieved_message_recieved_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message-display-recieved/message-recieved.component */ "./src/app/messages/message-display-recieved/message-recieved.component.ts");
/* harmony import */ var _message_display_sent_message_sent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-display-sent/message-sent.component */ "./src/app/messages/message-display-sent/message-sent.component.ts");
/* harmony import */ var _message_display_deleted_message_deleted_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message-display-deleted/message-deleted.component */ "./src/app/messages/message-display-deleted/message-deleted.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.module */ "./src/app/auth/auth.module.ts");









class MessagesModule {
}
MessagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MessagesModule });
MessagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MessagesModule_Factory(t) { return new (t || MessagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MessagesModule, { declarations: [_list_all_list_all_component__WEBPACK_IMPORTED_MODULE_2__["ListAllComponent"], _message_display_recieved_message_recieved_component__WEBPACK_IMPORTED_MODULE_4__["MessageRecievedComponent"], _message_display_sent_message_sent_component__WEBPACK_IMPORTED_MODULE_5__["MessageSentComponent"], _message_display_deleted_message_deleted_component__WEBPACK_IMPORTED_MODULE_6__["MessageDeletedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_list_all_list_all_component__WEBPACK_IMPORTED_MODULE_2__["ListAllComponent"], _message_display_recieved_message_recieved_component__WEBPACK_IMPORTED_MODULE_4__["MessageRecievedComponent"], _message_display_sent_message_sent_component__WEBPACK_IMPORTED_MODULE_5__["MessageSentComponent"], _message_display_deleted_message_deleted_component__WEBPACK_IMPORTED_MODULE_6__["MessageDeletedComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/recipes/create-edit-form/create-edit-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/recipes/create-edit-form/create-edit-form.component.ts ***!
  \************************************************************************/
/*! exports provided: CreateEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditFormComponent", function() { return CreateEditFormComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var src_app_core_validators_takenNameValidatorAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/validators/takenNameValidatorAsync */ "./src/app/core/validators/takenNameValidatorAsync.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var src_app_core_enumerations_RecipeDifficulty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/enumerations/RecipeDifficulty */ "./src/app/core/enumerations/RecipeDifficulty.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/category.service */ "./src/app/core/services/category.service.ts");
/* harmony import */ var src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/ingredient.service */ "./src/app/core/services/ingredient.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_directives_class_if_class_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/directives/class-if-class.directive */ "./src/app/core/directives/class-if-class.directive.ts");
/* harmony import */ var _core_pipes_htmlRaw_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/pipes/htmlRaw.pipe */ "./src/app/core/pipes/htmlRaw.pipe.ts");
/* harmony import */ var _core_pipes_safeUrl_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/pipes/safeUrl.pipe */ "./src/app/core/pipes/safeUrl.pipe.ts");
















function CreateEditFormComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 60);
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx_r105.getErr("name", "required") ? "Please provide Recipe Name!" : ctx_r105.getErr("name", "minlength") ? "Please provide name with length atleast " + ctx_r105.getErr("name", "minlength")["requiredLength"] + " symbols long!" : ctx_r105.getErr("name", "valueTaken") ? "The name " + ctx_r105.getErr("name", "valueTaken") + " is already in use!" : ctx_r105.getErr("name", "pattern") ? "Please provide name consisting of only latin letters!" : "unknown-Error");
} }
function CreateEditFormComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", opt_r118.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](opt_r118.name);
} }
function CreateEditFormComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dif_r120 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", dif_r120[1])("id", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, dif_r120[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 6, dif_r120[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](dif_r120[0]);
} }
function CreateEditFormComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 60);
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx_r108.getErr("mainPicture", "required") ? "Please provide Picture URL" : ctx_r108.getErr("mainPicture", "pattern") ? "Picture URL invalid!" : "unknown-Error");
} }
function CreateEditFormComponent_div_61_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", opt_r126.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](opt_r126.name);
} }
function CreateEditFormComponent_div_61_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 60);
} if (rf & 2) {
    const ing_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ing_r122.get("ammount").errors["required"] ? "Please Provide Valid Ammount!" : ing_r122.get("ammount").errors["minlength"] ? "Please provide ammount with length minimum " + ing_r122.get("ammount").errors["minlength"]["requiredLength"] + " symbols long!" : ing_r122.get("ammount").errors["maxlength"] ? "Please provide ammount with length maximum " + ing_r122.get("ammount").errors["maxlength"]["requiredLength"] + " symbols long!" : ing_r122.get("ammount").errors["pattern"] ? "Ammount not valid must contain digits (1 space) and letters!" : "unknown error!");
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function CreateEditFormComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Type*:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Choose!...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CreateEditFormComponent_div_61_option_9_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Ammount*:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CreateEditFormComponent_div_61_div_15_Template, 1, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditFormComponent_div_61_Template_p_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r129); const i_r123 = ctx.index; const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r128.removeIngredient(i_r123); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ing_r122 = ctx.$implicit;
    const i_r123 = ctx.index;
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@slowShowHideY", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", "id" + i_r123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "id" + i_r123)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ing_r122.get("id").invalid && (ing_r122.get("id").touched || ing_r122.get("ammount").valid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r109.availableIngredients(ing_r122.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r109.getCtrlValClasses(ing_r122.get("ammount")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ing_r122.get("ammount").invalid && ing_r122.get("ammount").touched);
} }
function CreateEditFormComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please provide atleast one ingredient!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateEditFormComponent_div_68_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please provide description!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateEditFormComponent_div_68_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Please provide description with length atleast ", ctx_r131.getCtrl("description").errors["minlength"]["requiredLength"], " symbols long!");
} }
function CreateEditFormComponent_div_68_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Please provide description with length lesser than ", ctx_r132.getCtrl("description").errors["maxlength"]["requiredLength"], " symbols long!");
} }
function CreateEditFormComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateEditFormComponent_div_68_span_2_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CreateEditFormComponent_div_68_span_3_Template, 2, 1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CreateEditFormComponent_div_68_span_4_Template, 2, 1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r111.getCtrl("description").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r111.getCtrl("description").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r111.getCtrl("description").errors["maxlength"]);
} }
function CreateEditFormComponent_div_70_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 60);
} if (rf & 2) {
    const pic_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", pic_r133.errors["required"] ? "Please provide Picture URL" : pic_r133.errors["pattern"] ? "Picture URL invalid!" : "unknown-Error");
} }
function CreateEditFormComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CreateEditFormComponent_div_70_div_8_Template, 1, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditFormComponent_div_70_Template_p_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r138); const i_r134 = ctx.index; const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r137.removePicture(i_r134); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pic_r133 = ctx.$implicit;
    const i_r134 = ctx.index;
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@slowShowHideY", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", "pic" + i_r134);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Picture ", i_r134 + 1, "*:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", pic_r133)("id", "pic" + i_r134)("ngClass", ctx_r112.getCtrlValClasses(pic_r133))("placeholder", "Picture " + (1 + i_r134) + " url...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", pic_r133.invalid && pic_r133.touched);
} }
function CreateEditFormComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditFormComponent_div_84_Template_span_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r142); const i_r140 = ctx.index; const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r141.removeTag(i_r140); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tagCtrl_r139 = ctx.$implicit;
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", tagCtrl_r139)("ngClass", ctx_r113.getCtrlValClasses(tagCtrl_r139));
} }
function CreateEditFormComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Main Picture:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@slowShowHideX", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r114.form.value["mainPicture"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function CreateEditFormComponent_div_91_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 100);
} if (rf & 2) {
    const i_r146 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-slide-to", i_r146);
} }
const _c1 = function (a0) { return { "active": a0 }; };
function CreateEditFormComponent_div_91_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picUrl_r147 = ctx.$implicit;
    const i_r148 = ctx.index;
    const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c1, picUrl_r147 === ctx_r144.form.value["pictures"][0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", picUrl_r147, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", "recipe picture " + (i_r148 + 1));
} }
function CreateEditFormComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ol", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CreateEditFormComponent_div_91_li_5_Template, 1, 1, "li", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CreateEditFormComponent_div_91_div_7_Template, 2, 5, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@slowShowHideX", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Additional Pictures: ", ctx_r115.validPicturesOnly.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r115.validPicturesOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r115.validPicturesOnly);
} }
function CreateEditFormComponent_h5_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Additional Video:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateEditFormComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "iframe", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@slowShowHideX", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx_r117.videoLink), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
} }
const _c2 = function () { return ["is-valid", "ng-valid"]; };
const _c3 = function () { return ["is-invalid", "ng-invalid ng-touched"]; };
const _c4 = function (a0, a1) { return [a0, a1]; };
class CreateEditFormComponent {
    constructor(fb, authService, recipeService, catService, ingredientService) {
        this.fb = fb;
        this.authService = authService;
        this.recipeService = recipeService;
        this.subscriptions = [];
        this.categorie$ = null; //[{ name: "no category", id: -1 }, { name: "cat1111111111111111", id: 1 }, { name: "cat2", id: 2 }, { name: "cat3", id: 3 }]
        this.ingredients = null; // [{ id: 1, name: "salati" }, { id: 2, name: "torshii" }];
        this._recipe = null;
        this.namesAllowed = [];
        this.SubmitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.diffGrades = src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"].getEnumOptions(src_app_core_enumerations_RecipeDifficulty__WEBPACK_IMPORTED_MODULE_5__["RecipeDifficulty"]);
        this.formArrs = { pictures: undefined, tags: undefined, ingredients: undefined };
        this.categorie$ = catService.getAllMini();
        this.subscriptions.push(ingredientService.getAllMini().subscribe(x => { this.ingredients = x; }));
        this.buildForm();
    }
    get btnDisabled() {
        return this.form.pristine || this.form.invalid || src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"].compareObjects(this._recipe, this.form.value);
    }
    set recipe(value) {
        this._recipe = value;
        this.namesAllowed.push(value.name);
        this.loadData(value);
    }
    loadData(data) {
        data.ingredients.forEach(x => this.addIngredient(x));
        data.pictures.forEach(x => this.addPicture(x));
        data.tags.forEach(x => this.addTag(x));
        this.form.patchValue(data);
    }
    get videoLink() {
        if (this.getCtrl('videoLink').invalid || this.form.value['videoLink'].length === 0) {
            return null;
        }
        const id = this.form.value['videoLink'].substr(this.form.value['videoLink'].indexOf("v=") + 2 || this.form.value['videoLink'].lastIndexOf("\\") + 1);
        return src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"].videoLinkMake(id);
    }
    get myPersonality() {
        const { userName, cookRank } = this.authService.getUserInfo();
        return { userName, cookRank };
    }
    getCtrl(name) {
        return this.form.get(name);
    }
    getErr(name, errName) {
        return this.getCtrl(name).errors[errName];
    }
    //Used to clasify input field as valid or not
    getValClasses(name) {
        const ctrl = this.getCtrl(name);
        return { 'is-invalid': (ctrl.invalid && ctrl.touched), 'is-valid': ctrl.valid };
    }
    //Used to clasify input field as valid or not
    getCtrlValClasses(ctr) {
        return { 'is-invalid': (ctr.invalid && ctr.touched), 'is-valid': ctr.valid };
    }
    invalidTouchedCtrl(name) {
        return this.getCtrl(name).invalid && this.getCtrl(name).touched;
    }
    setFormArrs() {
        this.formArrs.pictures = this.form.get('pictures');
        this.formArrs.tags = this.form.get('tags');
        this.formArrs.ingredients = this.form.get('ingredients');
    }
    addPicture(picUrl = "") {
        this.formArrs.pictures.push(this.fb.control(picUrl, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("(http(s?):)([/|.|\\w|\\s|-])*\.(?:jpg|gif|png)")]));
    }
    removePicture(index = 0) {
        this.formArrs.pictures.removeAt(index);
    }
    addTag(tagName = "") {
        this.formArrs.tags.push(this.fb.control(tagName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-zA-Z]{3,10}")]));
    }
    removeTag(index = 0) {
        this.formArrs.tags.removeAt(index);
    }
    addIngredient(ing = { id: 0, ammount: "" }) {
        this.formArrs.ingredients.push(this.createIngredient(ing));
    }
    removeIngredient(index = 0) {
        this.formArrs.ingredients.removeAt(index);
    }
    createIngredient({ id, ammount }) {
        return this.fb.group({
            ammount: [ammount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[\\d\\.\\,\\/\\-]+\\s?\\w+")], []],
            id: [id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)], []],
        });
    }
    availableIngredients({ id }) {
        var _a;
        if (!this.formArrs.ingredients || this.ingredients === null)
            return [];
        const usedIds = (_a = this.formArrs.ingredients.value) === null || _a === void 0 ? void 0 : _a.map(x => +x.id);
        return this.ingredients.filter(x => !usedIds.includes(x.id) || x.id === +id);
    }
    get validPicturesOnly() {
        if (!this.formArrs.pictures || this.formArrs.pictures.length === 0)
            return null;
        return this.formArrs.pictures.controls.filter(x => x.valid).map(x => x.value);
    }
    buildForm() {
        this.form = this.fb.group({
            id: "",
            authorId: this.authService.getUserInfo().id,
            name: ["", { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), Object(src_app_core_validators_takenNameValidatorAsync__WEBPACK_IMPORTED_MODULE_1__["takenNameValidatorAsync"])(this.recipeService.nameTaken.bind(this.recipeService), this.namesAllowed), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-zA-Z ]+")], updateOn: "blur" }],
            categoryId: ["-1", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], []],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25600)], []],
            mainPicture: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("(http(s?):)([/|.|\\w|\\s|-])*\.(?:jpg|gif|png)")], []],
            videoLink: ["", [], []],
            difficulty: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], []],
            pictures: this.fb.array([]),
            tags: this.fb.array([]),
            ingredients: this.fb.array([])
        });
        this.setFormArrs();
    }
    ngDoCheck() {
        //Validates that we have atleast one ingredient chosen!
        if (this.form.valid && (!this.form.value.ingredients || this.form.value.ingredients.length === 0)) {
            this.form.setErrors({ "noIngredient": true });
        }
        else if (this.form.hasError("noIngredient")) {
            this.form.setErrors({ "noIngredient": false });
        }
    }
    submitRecipe() {
        if (this.form.invalid || this.form.pristine)
            return;
        this.SubmitEvent.emit(this.form.value);
    }
    ngOnDestroy() {
        this.subscriptions.filter(x => !x.closed).forEach(x => x.unsubscribe());
    }
}
CreateEditFormComponent.ɵfac = function CreateEditFormComponent_Factory(t) { return new (t || CreateEditFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_7__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_9__["IngredientService"])); };
CreateEditFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateEditFormComponent, selectors: [["acr-create-edit-form"]], inputs: { settings: "settings", recipe: "recipe" }, outputs: { SubmitEvent: "SubmitEvent" }, decls: 95, vars: 33, consts: [[1, "main", "px-2"], [1, "row", "justify-content-start"], [1, "col-9"], [1, "row", "justify-content-between"], [1, "col-4"], [1, "text-left", "py-3"], [1, "fas", "fa-scroll"], [1, "text-right", "py-3"], [3, "formGroup", "ngSubmit"], [1, "text-center", "pb-3"], [1, "row", "justify-content-between", "pl-3"], [1, "col-3"], [1, "form-group"], [1, "form-group", "has-danger", "has-success"], ["for", "name", 1, "form-control-label", "h5"], ["formControlName", "name", "id", "name", "placeholder", "Name...", 1, "form-control", 3, "ngClass", "nshClassIfClass"], ["class", "invalid-feedback", 3, "innerText", 4, "ngIf"], [1, "col-2"], [1, "form-group", "has-success", "has-danger"], ["for", "category", 1, "form-control-label", "pr-3", "h5"], ["formControlName", "categoryId", "id", "category", 1, "custom-select", 3, "ngClass"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "difficulty", 1, "pr-4", "h5"], [1, "row", "justify-content-between", "px-3", "pt-2"], ["class", "custom-control custom-radio col-3", 4, "ngFor", "ngForOf"], ["for", "main-pic", 1, "form-control-label", "h5"], [1, "form-group", "mb-0"], [1, "col-10", "px-0"], ["type", "url", "id", "main-pic", "formControlName", "mainPicture", "placeholder", "Picture url...", 1, "form-control", 3, "ngClass"], [1, "img-func", "text-success", 3, "click"], [1, "fas", "fa-plus-circle"], [1, "col-5"], [1, "form-control-label"], [1, "h5", "pb-2"], ["formArrayName", "ingredients", 4, "ngFor", "ngForOf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "col-7"], ["for", "desc", 1, "h5"], ["formControlName", "description", "id", "desc", "rows", "12", "placeholder", "Describe how to cook this meal please...", 1, "form-control"], [4, "ngIf"], [1, "col-3", "pl-0"], ["class", "pl-3", "formArrayName", "pictures", 4, "ngFor", "ngForOf"], [1, "form-group", "px-0"], ["for", "videoUrl", 1, "form-control-label", "pr-3"], [1, "fab", "fa-youtube", "h5"], ["formControlName", "videoLink", "id", "videoUrl", "placeholder", "Youtube video...optional", 1, "form-control"], [1, "row", "justify-content-between", "pl-4"], [1, "col-10"], ["formArrayName", "tags", 1, "form-group", "row", "has-danger", "has-success"], [1, "control-label", "form-inline", "py-0"], ["class", "col-2 input-group py-2", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary", "py-3", "btn-sm", 3, "disabled", "innerHTML"], [1, "col-3", "media", "pt-4"], [1, "row", "w-100", "px-2"], ["class", "col-12", 4, "ngIf"], ["class", "col-12 pt-3", 4, "ngIf"], [1, "py-4", "col-12"], ["width", "90%", 4, "ngIf"], ["class", "pt-4 mt-3 embed-responsive embed-responsive-16by9", 4, "ngIf"], [1, "invalid-feedback", 3, "innerText"], [1, "custom-control", "custom-radio", "col-3"], ["type", "radio", "formControlName", "difficulty", 1, "custom-control-input", 3, "value", "id"], [1, "custom-control-label", 3, "for"], ["formArrayName", "ingredients"], [1, "row", "justify-content-between", 3, "formGroupName"], [1, "col-6", "pr-0"], [1, "form-group", "has-danger"], [1, "form-control-label", "h6", 3, "for"], ["formControlName", "id", 1, "custom-select", 3, "id", "ngClass"], ["value", "0", "disabled", ""], [1, "col-4", "pr-0"], ["for", "ammount", 1, "form-control-label", "h6"], ["formControlName", "ammount", "id", "ammount", "placeholder", "Ammount...", 1, "form-control", 3, "ngClass"], [1, "col-2", "pt-4"], [1, "img-func", "text-danger", 3, "click"], [1, "fas", "fa-minus-circle"], [1, "alert", "alert-danger"], ["formArrayName", "pictures", 1, "pl-3"], [1, "form-control-label", "pr-3", "h6", 3, "for"], [1, "form-group", "has-danger", "has-success", "mb-0"], [1, "form-control", "my-0", "py-0", 3, "formControl", "id", "ngClass", "placeholder"], [1, "col-2", "input-group", "py-2"], ["type", "text", "placeholder", "tag...", 1, "form-control", "px-0", "pl-1", "lime-border", 3, "formControl", "ngClass"], [1, "input-group-append"], ["id", "remTagBtn", 1, "input-group-text", "lime", "lighten-2", "px-2", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-minus-circle", "text-danger"], [1, "col-12"], ["alt", "new recipe main pic", 1, "img-fluid", "rounded", 3, "src"], [1, "col-12", "pt-3"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", 4, "ngFor", "ngForOf"], [1, "carousel-inner"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["data-target", "#carouselExampleIndicators"], [1, "carousel-item", 3, "ngClass"], ["width", "100%", 1, "d-block", "rounded", 3, "src", "alt"], ["width", "90%"], [1, "pt-4", "mt-3", "embed-responsive", "embed-responsive-16by9"], ["allowfullscreen", "", 1, "embed-responsive-item"]], template: function CreateEditFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateEditFormComponent_Template_form_ngSubmit_12_listener($event) { return ctx.submitRecipe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "legend", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Please Provide Recipe Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Recipe Name*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, CreateEditFormComponent_div_23_Template, 1, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Category*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, CreateEditFormComponent_option_31_Template, 2, 2, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Difficulty*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, CreateEditFormComponent_div_38_Template, 6, 8, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Main Picture*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, CreateEditFormComponent_div_47_Template, 1, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditFormComponent_Template_p_click_49_listener($event) { return ctx.addPicture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditFormComponent_Template_span_click_56_listener($event) { return ctx.addIngredient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Ingredients:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, CreateEditFormComponent_div_61_Template, 19, 10, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, CreateEditFormComponent_div_62_Template, 3, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Description*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "textarea", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, CreateEditFormComponent_div_68_Template, 5, 3, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, CreateEditFormComponent_div_70_Template, 12, 8, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "\u00A0 YouTube Video URL:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateEditFormComponent_Template_span_click_81_listener($event) { return ctx.addTag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "\u00A0 Tags:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](84, CreateEditFormComponent_div_84_Template, 5, 2, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](87, "htmlRaw");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](90, CreateEditFormComponent_div_90_Template, 4, 2, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](91, CreateEditFormComponent_div_91_Template, 16, 4, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, CreateEditFormComponent_h5_93_Template, 2, 0, "h5", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, CreateEditFormComponent_div_94_Template, 3, 4, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0 ", ctx.settings.headline, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.myPersonality.cookRank, ": ", ctx.myPersonality.userName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.getValClasses("name"))("nshClassIfClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](30, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](28, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](29, _c3)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.invalidTouchedCtrl("name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.getValClasses("categoryId"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 24, ctx.categorie$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.diffGrades);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.getValClasses("mainPicture"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.invalidTouchedCtrl("mainPicture"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.formArrs.ingredients == null ? null : ctx.formArrs.ingredients.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.form == null ? null : ctx.form.errors) && ctx.form.errors["noIngredient"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getCtrl("description").touched && ctx.getCtrl("description").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.formArrs.pictures == null ? null : ctx.formArrs.pictures.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getCtrl("tags")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.btnDisabled)("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](87, 26, ctx.settings.submitBtnTitle), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.get("mainPicture").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.validPicturesOnly == null ? null : ctx.validPicturesOnly.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.videoLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.videoLink);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _core_directives_class_if_class_directive__WEBPACK_IMPORTED_MODULE_11__["ClassIfClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _core_pipes_htmlRaw_pipe__WEBPACK_IMPORTED_MODULE_12__["HTMLRaw"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["LowerCasePipe"], _core_pipes_safeUrl_pipe__WEBPACK_IMPORTED_MODULE_13__["SafePipe"]], styles: ["section.main[_ngcontent-%COMP%] {\r\n    max-width: 100em; \r\n    margin: 0 auto;\r\n    background: rgb(241, 241, 241);\r\n}\r\n\r\np.img-func[_ngcontent-%COMP%], span.img-func[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-size:2em;\r\n    \r\n    margin:0;\r\n}\r\n\r\n#remTagBtn[_ngcontent-%COMP%]:hover {\r\n    background-color:blanchedalmond;\r\n    color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9jcmVhdGUtZWRpdC1mb3JtL2NyZWF0ZS1lZGl0LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvY3JlYXRlLWVkaXQtZm9ybS9jcmVhdGUtZWRpdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uLm1haW4ge1xyXG4gICAgbWF4LXdpZHRoOiAxMDBlbTsgXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxufVxyXG5cclxucC5pbWctZnVuYywgc3Bhbi5pbWctZnVuYyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6MmVtO1xyXG4gICAgLyogcGFkZGluZzogMCAwIDAgMC44ZW07ICovXHJcbiAgICBtYXJnaW46MDtcclxufVxyXG5cclxuI3JlbVRhZ0J0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYW5jaGVkYWxtb25kO1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slowShowHideX', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void=>*', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(-20rem) scale(0.1)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000)]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(20rem) scale(0.1)' })]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slowShowHideY', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void=>*', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0.2', transform: 'translateY(-3rem)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000)]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0.2', transform: 'scale(0.1)' })]),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CreateEditFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'acr-create-edit-form',
                templateUrl: './create-edit-form.component.html',
                styleUrls: ['./create-edit-form.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slowShowHideX', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void=>*', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(-20rem) scale(0.1)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000)]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(20rem) scale(0.1)' })]),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slowShowHideY', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void=>*', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0.2', transform: 'translateY(-3rem)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000)]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0.2', transform: 'scale(0.1)' })]),
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_7__["RecipeService"] }, { type: src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"] }, { type: src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_9__["IngredientService"] }]; }, { settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], recipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], SubmitEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/recipes/create/create.component.ts":
/*!****************************************************!*\
  !*** ./src/app/recipes/create/create.component.ts ***!
  \****************************************************/
/*! exports provided: CreateRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRecipeComponent", function() { return CreateRecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_enumerations_RecipeDifficulty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/enumerations/RecipeDifficulty */ "./src/app/core/enumerations/RecipeDifficulty.ts");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../create-edit-form/create-edit-form.component */ "./src/app/recipes/create-edit-form/create-edit-form.component.ts");







class CreateRecipeComponent {
    constructor(recipeService, toastr, router) {
        this.recipeService = recipeService;
        this.toastr = toastr;
        this.router = router;
        this.subscriptions = [];
        this.settings = { headline: "Create new Recipe", submitBtnTitle: "Post This Recipe" };
        this.diffGrades = Object.entries(src_app_core_enumerations_RecipeDifficulty__WEBPACK_IMPORTED_MODULE_1__["RecipeDifficulty"]).filter((_, index, arr) => index < arr.length / 2);
    }
    submitRecipe(newRecipe) {
        this.subscriptions.push(this.recipeService.submitRecipe(newRecipe).subscribe((id) => {
            this.toastr.success("Successfully published a new recipe", "Congratulations!");
            this.router.navigate(["/recipes/details", id]);
        }, (e) => {
            this.toastr.error("Something went wrong please try again");
        }));
    }
    ngOnDestroy() {
        this.subscriptions.filter(x => !x.closed).forEach(x => x.unsubscribe());
    }
}
CreateRecipeComponent.ɵfac = function CreateRecipeComponent_Factory(t) { return new (t || CreateRecipeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CreateRecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateRecipeComponent, selectors: [["acr-create-rec"]], decls: 1, vars: 1, consts: [[3, "settings", "SubmitEvent"]], template: function CreateRecipeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "acr-create-edit-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("SubmitEvent", function CreateRecipeComponent_Template_acr_create_edit_form_SubmitEvent_0_listener($event) { return ctx.submitRecipe($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings);
    } }, directives: [_create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_5__["CreateEditFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateRecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-create-rec',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.css'],
            }]
    }], function () { return [{ type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipes/edit/edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/recipes/edit/edit.component.ts ***!
  \************************************************/
/*! exports provided: EditRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRecipeComponent", function() { return EditRecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-edit-form/create-edit-form.component */ "./src/app/recipes/create-edit-form/create-edit-form.component.ts");
/* harmony import */ var src_app_core_services_signal_r_recipe_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/signal-r.recipe-details.service */ "./src/app/core/services/signal-r.recipe-details.service.ts");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/ingredient.service */ "./src/app/core/services/ingredient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");









const isSame = (el1, el2) => JSON.stringify(el1) === JSON.stringify(el2);
class EditRecipeComponent {
    constructor(singalRService, recipeService, ingredientService, route, toastr, router) {
        this.singalRService = singalRService;
        this.recipeService = recipeService;
        this.ingredientService = ingredientService;
        this.toastr = toastr;
        this.router = router;
        this.settings = { headline: "Edit Recipe", submitBtnTitle: "<i class='fas fa-wrench'></i> Edit This Recipe" };
        this.subscriptions = [];
        this.recipe = null;
        this.recipe = route.snapshot.data.data;
    }
    submitRecipe(value) {
        this.subscriptions.push(this.recipeService.editRecipe(value).subscribe((r) => {
            this.toastr.success("Successfully edited a recipe", "Congratulations!");
            let patchValueForSignalR = {
                name: value.name,
                description: value.description,
                pictures: value.pictures,
                difficulty: +value.difficulty,
                videoLink: value.videoLink,
                tags: value.tags,
            };
            if (isSame(value.ingredients, this.recipe.ingredients) && Number(value.categoryId) === this.recipe.categoryId) {
                console.log("bez call!");
                this.sendSignalRData(patchValueForSignalR); //If ingredients and category is no need to API call...
            }
            else {
                this.childForm.categorie$.subscribe(v => {
                    console.log("pravq Call do bazata!");
                    patchValueForSignalR["categoryName"] = v.find(x => x.id === +value.categoryId).name;
                    this.ingredientService.getRecipeIngredients(value.id).subscribe(ings => {
                        patchValueForSignalR["ingredients"] = ings;
                        this.sendSignalRData(patchValueForSignalR);
                    });
                }).add(() => this.closeStreams());
            }
            this.router.navigate(["/recipes/details", r]);
        }, (e) => { this.toastr.error("Something went wrong please try again"); console.log(e); }));
    }
    ;
    sendSignalRData(data) {
        this.singalRService.startConnection({ id: this.recipe.id }).then(() => this.singalRService.patchRecipeData(data)).finally(() => this.closeStreams());
    }
    closeStreams() {
        this.subscriptions.filter(x => !x.closed).forEach(x => x.unsubscribe());
        this.singalRService.stopConnection();
    }
}
EditRecipeComponent.ɵfac = function EditRecipeComponent_Factory(t) { return new (t || EditRecipeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_signal_r_recipe_details_service__WEBPACK_IMPORTED_MODULE_2__["SignalRRecipeDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_4__["IngredientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
EditRecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditRecipeComponent, selectors: [["acr-edit-rec"]], viewQuery: function EditRecipeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_1__["CreateEditFormComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.childForm = _t.first);
    } }, decls: 1, vars: 2, consts: [[3, "settings", "recipe", "SubmitEvent"]], template: function EditRecipeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "acr-create-edit-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("SubmitEvent", function EditRecipeComponent_Template_acr_create_edit_form_SubmitEvent_0_listener($event) { return ctx.submitRecipe($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings)("recipe", ctx.recipe);
    } }, directives: [_create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_1__["CreateEditFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditRecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-edit-rec',
                templateUrl: './edit.component.html',
                styleUrls: ['./edit.component.css'],
            }]
    }], function () { return [{ type: src_app_core_services_signal_r_recipe_details_service__WEBPACK_IMPORTED_MODULE_2__["SignalRRecipeDetailsService"] }, { type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] }, { type: src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_4__["IngredientService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { childForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_1__["CreateEditFormComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/recipes/list-recipes/base/list-recipes.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/recipes/list-recipes/base/list-recipes.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListRecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRecipesComponent", function() { return ListRecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _recipe_cart_recipe_main_recipe_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../recipe-cart/recipe-main/recipe-card.component */ "./src/app/recipes/recipe-cart/recipe-main/recipe-card.component.ts");
/* harmony import */ var _core_pipes_htmlRaw_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/pipes/htmlRaw.pipe */ "./src/app/core/pipes/htmlRaw.pipe.ts");






function ListRecipesComponent_acr_recipe_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-recipe-card", 8);
} if (rf & 2) {
    const item_r293 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipe", item_r293);
} }
function ListRecipesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListRecipesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sorry No results for your search... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ListRecipesComponent {
    constructor(spinner) {
        this.spinner = spinner;
        this.recipesContainer = { fetched: [], page: 1, endReached: false };
        this.isLoading = false;
        this.notFound = false;
    }
    ngOnInit() {
        this.loadingMethod.subscribe(met => {
            this.recipesContainer = { fetched: [], page: 1, endReached: false };
            this.fetchRecipes();
        });
    }
    get scrolSayLoad() {
        return document.body.scrollHeight - (window.scrollY + window.innerHeight) < 0;
    }
    handleKeyDown() {
        if (this.recipesContainer.endReached || !this.scrolSayLoad || this.isLoading) {
            return;
        }
        this.fetchRecipes();
    }
    fetchRecipes() {
        this.startLoadingInfo();
        this.loadingMethod.getValue()(this.recipesContainer.page++)
            .subscribe(x => {
            if (x.length === 0) {
                this.recipesContainer.endReached = true;
                this.stopLoadingInfo();
            }
            this.recipesContainer.fetched.splice(this.recipesContainer.fetched.length, 0, ...x);
            this.stopLoadingInfo();
        }, (e) => {
            this.stopLoadingInfo();
            console.log(e, "problemNSH");
            this.notFound = true;
        });
    }
    startLoadingInfo() {
        this.isLoading = true;
        if (this.recipesContainer.endReached)
            return;
        this.spinner.show();
    }
    stopLoadingInfo() {
        this.isLoading = false;
        this.spinner.hide();
    }
}
ListRecipesComponent.ɵfac = function ListRecipesComponent_Factory(t) { return new (t || ListRecipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"])); };
ListRecipesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListRecipesComponent, selectors: [["acr-list-recipes"]], hostBindings: function ListRecipesComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ListRecipesComponent_scroll_HostBindingHandler($event) { return ctx.handleKeyDown(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { title: "title", loadingMethod: "loadingMethod" }, decls: 10, vars: 6, consts: [[1, "text-center", "pt-4", 3, "innerHTML"], [1, "row"], [1, "col-2"], [1, "col-10"], [3, "recipe", 4, "ngFor", "ngForOf"], [1, "row", "pb-4", "mb-4", "justify-content-center"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [3, "recipe"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-scale-multiple"], [2, "font-size", "20px", "color", "white"], [1, "col-4"], [1, "text-center", "py-4"], ["width", "100%", "src", "https://lh5.googleusercontent.com/proxy/bzT0KbGaK4qzgclV6hH_gbo3KfnMJBiywQ3VBkWZiGT8I7VbisSxA1FSsJ_5C4hGj7x71QAr30rFdpmGjWmH2oTErs2bi-fXcCnjW_k4cd33PgsImR5ONdbqGyu8DSymxdHD0KMD6z_AcwMGEJA", "alt", ""]], template: function ListRecipesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "htmlRaw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListRecipesComponent_acr_recipe_card_5_Template, 1, 1, "acr-recipe-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListRecipesComponent_div_8_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListRecipesComponent_div_9_Template, 7, 0, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx.title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipesContainer.fetched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.recipesContainer.fetched.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _recipe_cart_recipe_main_recipe_card_component__WEBPACK_IMPORTED_MODULE_3__["RecipeCartComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"]], pipes: [_core_pipes_htmlRaw_pipe__WEBPACK_IMPORTED_MODULE_4__["HTMLRaw"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListRecipesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-list-recipes',
                templateUrl: './list-recipes.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadingMethod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }] }); })();


/***/ }),

/***/ "./src/app/recipes/list-recipes/filters/all/list-allR.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/recipes/list-recipes/filters/all/list-allR.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListAllRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAllRComponent", function() { return ListAllRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var _base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/list-recipes.component */ "./src/app/recipes/list-recipes/base/list-recipes.component.ts");





class ListAllRComponent {
    constructor(recipeService) {
        this.title = "<i class='fas fa-scroll'></i>&nbsp; All Recipes...";
        this.loadingMethod = null;
        this.loadingMethod = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](recipeService.getRecipes.bind(recipeService, "all", undefined));
    }
}
ListAllRComponent.ɵfac = function ListAllRComponent_Factory(t) { return new (t || ListAllRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"])); };
ListAllRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListAllRComponent, selectors: [["acr-list-all"]], decls: 1, vars: 2, consts: [[3, "title", "loadingMethod"]], template: function ListAllRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-list-recipes", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("loadingMethod", ctx.loadingMethod);
    } }, directives: [_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__["ListRecipesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListAllRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-list-all',
                template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
            }]
    }], function () { return [{ type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipes/list-recipes/filters/commented-recently/list-commentedRecentlyR.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/recipes/list-recipes/filters/commented-recently/list-commentedRecentlyR.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ListCommentedRecentlyRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCommentedRecentlyRComponent", function() { return ListCommentedRecentlyRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var _base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/list-recipes.component */ "./src/app/recipes/list-recipes/base/list-recipes.component.ts");





class ListCommentedRecentlyRComponent {
    constructor(recipeService) {
        this.title = "<i class='far fa-clock'></i>&nbsp; Recently Commented Recipes...";
        this.loadingMethod = null;
        this.loadingMethod = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](recipeService.getRecipes.bind(recipeService, "commented-recently", undefined));
    }
}
ListCommentedRecentlyRComponent.ɵfac = function ListCommentedRecentlyRComponent_Factory(t) { return new (t || ListCommentedRecentlyRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"])); };
ListCommentedRecentlyRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListCommentedRecentlyRComponent, selectors: [["acr-list-all"]], decls: 1, vars: 2, consts: [[3, "title", "loadingMethod"]], template: function ListCommentedRecentlyRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-list-recipes", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("loadingMethod", ctx.loadingMethod);
    } }, directives: [_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__["ListRecipesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListCommentedRecentlyRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-list-all',
                template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
            }]
    }], function () { return [{ type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipes/list-recipes/filters/highly-rated/list-highlyRatedR.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/recipes/list-recipes/filters/highly-rated/list-highlyRatedR.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ListHighlyRatedRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHighlyRatedRComponent", function() { return ListHighlyRatedRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var _base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/list-recipes.component */ "./src/app/recipes/list-recipes/base/list-recipes.component.ts");





class ListHighlyRatedRComponent {
    constructor(recipeService) {
        this.title = "<i class='fas fa-medal'></i>&nbsp; Hihly Rated Recipes...";
        this.loadingMethod = null;
        this.loadingMethod = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](recipeService.getRecipes.bind(recipeService, "highly-rated", undefined));
    }
}
ListHighlyRatedRComponent.ɵfac = function ListHighlyRatedRComponent_Factory(t) { return new (t || ListHighlyRatedRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"])); };
ListHighlyRatedRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListHighlyRatedRComponent, selectors: [["acr-list-all"]], decls: 1, vars: 2, consts: [[3, "title", "loadingMethod"]], template: function ListHighlyRatedRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-list-recipes", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("loadingMethod", ctx.loadingMethod);
    } }, directives: [_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__["ListRecipesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListHighlyRatedRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-list-all',
                template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
            }]
    }], function () { return [{ type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipes/list-recipes/filters/in-category/list-inCategory.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/recipes/list-recipes/filters/in-category/list-inCategory.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ListInCategoryRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInCategoryRComponent", function() { return ListInCategoryRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/category.service */ "./src/app/core/services/category.service.ts");
/* harmony import */ var _base_list_recipes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/list-recipes.component */ "./src/app/recipes/list-recipes/base/list-recipes.component.ts");







class ListInCategoryRComponent {
    constructor(recipeService, activatedRoute, catService) {
        this.title = "";
        this.loadingMethod = null;
        const id = activatedRoute.snapshot.params["id"];
        // debugger;
        this.loadingMethod = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](recipeService.getRecipes.bind(recipeService, "category", +id));
        catService.getDetails(+id).subscribe(det => {
            this.title = `<i class='far fa-bookmark'></i> &nbsp;Recipes In Category: ${det.name}`;
        });
    }
}
ListInCategoryRComponent.ɵfac = function ListInCategoryRComponent_Factory(t) { return new (t || ListInCategoryRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"])); };
ListInCategoryRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListInCategoryRComponent, selectors: [["acr-list-all"]], decls: 1, vars: 2, consts: [[3, "title", "loadingMethod"]], template: function ListInCategoryRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-list-recipes", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("loadingMethod", ctx.loadingMethod);
    } }, directives: [_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_5__["ListRecipesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListInCategoryRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-list-all',
                template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
            }]
    }], function () { return [{ type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_core_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipes/list-recipes/filters/ings-contain/list-ingredientsContainingR.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/recipes/list-recipes/filters/ings-contain/list-ingredientsContainingR.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ListIngredientsContainingRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIngredientsContainingRComponent", function() { return ListIngredientsContainingRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/ingredient.service */ "./src/app/core/services/ingredient.service.ts");
/* harmony import */ var _base_list_recipes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/list-recipes.component */ "./src/app/recipes/list-recipes/base/list-recipes.component.ts");







class ListIngredientsContainingRComponent {
    constructor(recipeService, route, ingredientService) {
        this.title = "<i class='fas fa-flask'></i> &nbsp; Recipes Containing Ingredients";
        this.loadingMethod = null;
        const ingIds = route.snapshot.params["ingids"];
        this.loadingMethod = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](recipeService.getRecipes.bind(recipeService, "ingredients", ingIds));
        ingredientService.getIngredientNames(ingIds).subscribe(x => {
            debugger;
            this.title += ': ' + x.join(", ");
        });
    }
}
ListIngredientsContainingRComponent.ɵfac = function ListIngredientsContainingRComponent_Factory(t) { return new (t || ListIngredientsContainingRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_4__["IngredientService"])); };
ListIngredientsContainingRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListIngredientsContainingRComponent, selectors: [["acr-list-all"]], decls: 1, vars: 2, consts: [[3, "title", "loadingMethod"]], template: function ListIngredientsContainingRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-list-recipes", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("loadingMethod", ctx.loadingMethod);
    } }, directives: [_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_5__["ListRecipesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListIngredientsContainingRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-list-all',
                template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
            }]
    }], function () { return [{ type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_core_services_ingredient_service__WEBPACK_IMPORTED_MODULE_4__["IngredientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipes/list-recipes/filters/most-commented/list-mostCommentedR.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/recipes/list-recipes/filters/most-commented/list-mostCommentedR.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ListMostCommentedRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMostCommentedRComponent", function() { return ListMostCommentedRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var _base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/list-recipes.component */ "./src/app/recipes/list-recipes/base/list-recipes.component.ts");





class ListMostCommentedRComponent {
    constructor(recipeService) {
        this.title = "<i class='far fa-comments'></i> &nbsp; Most Commented Recipes...";
        this.loadingMethod = null;
        this.loadingMethod = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](recipeService.getRecipes.bind(recipeService, "commented", undefined));
    }
}
ListMostCommentedRComponent.ɵfac = function ListMostCommentedRComponent_Factory(t) { return new (t || ListMostCommentedRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"])); };
ListMostCommentedRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListMostCommentedRComponent, selectors: [["acr-list-all"]], decls: 1, vars: 2, consts: [[3, "title", "loadingMethod"]], template: function ListMostCommentedRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-list-recipes", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("loadingMethod", ctx.loadingMethod);
    } }, directives: [_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__["ListRecipesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListMostCommentedRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-list-all',
                template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
            }]
    }], function () { return [{ type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipes/list-recipes/filters/most-favoured/list-mostFavouredR.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/recipes/list-recipes/filters/most-favoured/list-mostFavouredR.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ListMostFavouredRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMostFavouredRComponent", function() { return ListMostFavouredRComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var _base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/list-recipes.component */ "./src/app/recipes/list-recipes/base/list-recipes.component.ts");





class ListMostFavouredRComponent {
    constructor(recipeService) {
        this.title = "<i class='fas fa-grin-hearts'></i>&nbsp; Everyone's First Choise...";
        this.loadingMethod = null;
        this.loadingMethod = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](recipeService.getRecipes.bind(recipeService, "most-favoured", undefined));
    }
}
ListMostFavouredRComponent.ɵfac = function ListMostFavouredRComponent_Factory(t) { return new (t || ListMostFavouredRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"])); };
ListMostFavouredRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListMostFavouredRComponent, selectors: [["acr-list-all"]], decls: 1, vars: 2, consts: [[3, "title", "loadingMethod"]], template: function ListMostFavouredRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "acr-list-recipes", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.title)("loadingMethod", ctx.loadingMethod);
    } }, directives: [_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__["ListRecipesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListMostFavouredRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'acr-list-all',
                template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
            }]
    }], function () { return [{ type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipes/list-recipes/filters/most-rated/list-mostRatedR.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/recipes/list-recipes/filters/most-rated/list-mostRatedR.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListMostRatedRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMostRatedRComponent", function() { return ListMostRatedRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var _base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/list-recipes.component */ "./src/app/recipes/list-recipes/base/list-recipes.component.ts");





class ListMostRatedRComponent {
    constructor(recipeService) {
        this.title = "<i class='fas fa-users'></i>&nbsp; Recipes With Most Votes...";
        this.loadingMethod = null;
        this.loadingMethod = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](recipeService.getRecipes.bind(recipeService, "most-rated", undefined));
    }
}
ListMostRatedRComponent.ɵfac = function ListMostRatedRComponent_Factory(t) { return new (t || ListMostRatedRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"])); };
ListMostRatedRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListMostRatedRComponent, selectors: [["acr-list-all"]], decls: 1, vars: 2, consts: [[3, "title", "loadingMethod"]], template: function ListMostRatedRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-list-recipes", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("loadingMethod", ctx.loadingMethod);
    } }, directives: [_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__["ListRecipesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListMostRatedRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-list-all',
                template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
            }]
    }], function () { return [{ type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipes/list-recipes/filters/most-recent/list-MostRecentR.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/recipes/list-recipes/filters/most-recent/list-MostRecentR.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ListMostRecentRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMostRecentRComponent", function() { return ListMostRecentRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var _base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/list-recipes.component */ "./src/app/recipes/list-recipes/base/list-recipes.component.ts");





class ListMostRecentRComponent {
    constructor(recipeService) {
        this.loadingMethod = null;
        this.title = "<i class='fas fa-concierge-bell'></i> &nbsp; Recently Published Recipes... (in the past 2 months)";
        this.loadingMethod = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](recipeService.getRecipes.bind(recipeService, "recent", undefined));
    }
}
ListMostRecentRComponent.ɵfac = function ListMostRecentRComponent_Factory(t) { return new (t || ListMostRecentRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"])); };
ListMostRecentRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListMostRecentRComponent, selectors: [["acr-list-all"]], decls: 1, vars: 2, consts: [[3, "title", "loadingMethod"]], template: function ListMostRecentRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-list-recipes", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("loadingMethod", ctx.loadingMethod);
    } }, directives: [_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__["ListRecipesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListMostRecentRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-list-all',
                template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
            }]
    }], function () { return [{ type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipes/list-recipes/filters/my-commented/list-myCommentedR.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/recipes/list-recipes/filters/my-commented/list-myCommentedR.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ListMyCommentedRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMyCommentedRComponent", function() { return ListMyCommentedRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var _base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/list-recipes.component */ "./src/app/recipes/list-recipes/base/list-recipes.component.ts");





class ListMyCommentedRComponent {
    constructor(recipeService) {
        this.title = "<i class='far fa-comment-alt'></i>&nbsp; My Commented Recipes...";
        this.loadingMethod = null;
        this.loadingMethod = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](recipeService.getPrivateRecipes.bind(recipeService, "my-commented"));
    }
}
ListMyCommentedRComponent.ɵfac = function ListMyCommentedRComponent_Factory(t) { return new (t || ListMyCommentedRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"])); };
ListMyCommentedRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListMyCommentedRComponent, selectors: [["acr-list-all"]], decls: 1, vars: 2, consts: [[3, "title", "loadingMethod"]], template: function ListMyCommentedRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-list-recipes", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("loadingMethod", ctx.loadingMethod);
    } }, directives: [_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__["ListRecipesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListMyCommentedRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-list-all',
                template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
            }]
    }], function () { return [{ type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipes/list-recipes/filters/my-favourite/list-myFavourite.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/recipes/list-recipes/filters/my-favourite/list-myFavourite.ts ***!
  \*******************************************************************************/
/*! exports provided: ListMyFavouriteRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMyFavouriteRComponent", function() { return ListMyFavouriteRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var _base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/list-recipes.component */ "./src/app/recipes/list-recipes/base/list-recipes.component.ts");





class ListMyFavouriteRComponent {
    constructor(recipeService) {
        this.title = "<i class='far fa-heart'></i>&nbsp; My Favourite Recipes...";
        this.loadingMethod = null;
        this.loadingMethod = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](recipeService.getPrivateRecipes.bind(recipeService, "my-favourite"));
    }
}
ListMyFavouriteRComponent.ɵfac = function ListMyFavouriteRComponent_Factory(t) { return new (t || ListMyFavouriteRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"])); };
ListMyFavouriteRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListMyFavouriteRComponent, selectors: [["acr-list-all"]], decls: 1, vars: 2, consts: [[3, "title", "loadingMethod"]], template: function ListMyFavouriteRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-list-recipes", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("loadingMethod", ctx.loadingMethod);
    } }, directives: [_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_3__["ListRecipesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListMyFavouriteRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-list-all',
                template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
            }]
    }], function () { return [{ type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipes/list-recipes/filters/searched/list-searchedR.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/recipes/list-recipes/filters/searched/list-searchedR.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ListSearchedRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSearchedRComponent", function() { return ListSearchedRComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _base_list_recipes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base/list-recipes.component */ "./src/app/recipes/list-recipes/base/list-recipes.component.ts");






class ListSearchedRComponent {
    constructor(recipeService, route) {
        this.loadingMethod = null;
        route.params.subscribe(({ phrase }) => {
            this.title = `<i class='fas fa-search'></i>&nbsp; Results Of Search for...<span class="text-info font-italic">"${phrase}"</span>`;
            let method = recipeService.getRecipes.bind(recipeService, "search", phrase);
            if (this.loadingMethod === null) {
                this.loadingMethod = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](method);
            }
            else {
                this.loadingMethod.next(method);
            }
        });
    }
}
ListSearchedRComponent.ɵfac = function ListSearchedRComponent_Factory(t) { return new (t || ListSearchedRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ListSearchedRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListSearchedRComponent, selectors: [["acr-list-all"]], decls: 1, vars: 2, consts: [[3, "title", "loadingMethod"]], template: function ListSearchedRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "acr-list-recipes", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.title)("loadingMethod", ctx.loadingMethod);
    } }, directives: [_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_4__["ListRecipesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListSearchedRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'acr-list-all',
                template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
            }]
    }], function () { return [{ type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipes/list-recipes/filters/user-shared/list-userSharedR.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/recipes/list-recipes/filters/user-shared/list-userSharedR.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ListUserSharedRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserSharedRComponent", function() { return ListUserSharedRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _base_list_recipes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/list-recipes.component */ "./src/app/recipes/list-recipes/base/list-recipes.component.ts");







class ListUserSharedRComponent {
    constructor(recipeService, route, authService) {
        this.loadingMethod = null;
        const userName = route.snapshot.params["username"];
        this.loadingMethod = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](recipeService.getRecipes.bind(recipeService, "user", userName));
        this.title = (authService.isAuthenticated() && authService.getUserInfo().userName.toLowerCase() === userName.toLowerCase())
            ? `<i class='fas fa-share-alt'></i></i>&nbsp; My Shared Recipes...`
            : `<i class='fas fa-user'></i></i>&nbsp; ${userName}'s Recipes...`;
    }
}
ListUserSharedRComponent.ɵfac = function ListUserSharedRComponent_Factory(t) { return new (t || ListUserSharedRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
ListUserSharedRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListUserSharedRComponent, selectors: [["acr-list-all"]], decls: 1, vars: 2, consts: [[3, "title", "loadingMethod"]], template: function ListUserSharedRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "acr-list-recipes", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("loadingMethod", ctx.loadingMethod);
    } }, directives: [_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_5__["ListRecipesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListUserSharedRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-list-all',
                template: `<acr-list-recipes [title]="title" [loadingMethod]="loadingMethod"></acr-list-recipes>`,
            }]
    }], function () { return [{ type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipes/list-recipes/recipes-list-exporter.ts":
/*!***************************************************************!*\
  !*** ./src/app/recipes/list-recipes/recipes-list-exporter.ts ***!
  \***************************************************************/
/*! exports provided: ListAllRComponent, ListMostRecentRComponent, ListMostFavouredRComponent, ListSearchedRComponent, ListMostCommentedRComponent, ListMostRatedRComponent, ListHighlyRatedRComponent, ListCommentedRecentlyRComponent, ListUserSharedRComponent, ListMyFavouriteRComponent, ListMyCommentedRComponent, ListIngredientsContainingRComponent, ListInCategoryRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filters_all_list_allR_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters/all/list-allR.component */ "./src/app/recipes/list-recipes/filters/all/list-allR.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListAllRComponent", function() { return _filters_all_list_allR_component__WEBPACK_IMPORTED_MODULE_0__["ListAllRComponent"]; });

/* harmony import */ var _filters_most_recent_list_MostRecentR_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters/most-recent/list-MostRecentR.component */ "./src/app/recipes/list-recipes/filters/most-recent/list-MostRecentR.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListMostRecentRComponent", function() { return _filters_most_recent_list_MostRecentR_component__WEBPACK_IMPORTED_MODULE_1__["ListMostRecentRComponent"]; });

/* harmony import */ var _filters_most_favoured_list_mostFavouredR_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters/most-favoured/list-mostFavouredR.component */ "./src/app/recipes/list-recipes/filters/most-favoured/list-mostFavouredR.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListMostFavouredRComponent", function() { return _filters_most_favoured_list_mostFavouredR_component__WEBPACK_IMPORTED_MODULE_2__["ListMostFavouredRComponent"]; });

/* harmony import */ var _filters_searched_list_searchedR_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters/searched/list-searchedR.component */ "./src/app/recipes/list-recipes/filters/searched/list-searchedR.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListSearchedRComponent", function() { return _filters_searched_list_searchedR_component__WEBPACK_IMPORTED_MODULE_3__["ListSearchedRComponent"]; });

/* harmony import */ var _filters_most_commented_list_mostCommentedR_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filters/most-commented/list-mostCommentedR.component */ "./src/app/recipes/list-recipes/filters/most-commented/list-mostCommentedR.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListMostCommentedRComponent", function() { return _filters_most_commented_list_mostCommentedR_component__WEBPACK_IMPORTED_MODULE_4__["ListMostCommentedRComponent"]; });

/* harmony import */ var _filters_most_rated_list_mostRatedR_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/most-rated/list-mostRatedR.component */ "./src/app/recipes/list-recipes/filters/most-rated/list-mostRatedR.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListMostRatedRComponent", function() { return _filters_most_rated_list_mostRatedR_component__WEBPACK_IMPORTED_MODULE_5__["ListMostRatedRComponent"]; });

/* harmony import */ var _filters_highly_rated_list_highlyRatedR_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters/highly-rated/list-highlyRatedR.component */ "./src/app/recipes/list-recipes/filters/highly-rated/list-highlyRatedR.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListHighlyRatedRComponent", function() { return _filters_highly_rated_list_highlyRatedR_component__WEBPACK_IMPORTED_MODULE_6__["ListHighlyRatedRComponent"]; });

/* harmony import */ var _filters_commented_recently_list_commentedRecentlyR_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filters/commented-recently/list-commentedRecentlyR.component */ "./src/app/recipes/list-recipes/filters/commented-recently/list-commentedRecentlyR.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListCommentedRecentlyRComponent", function() { return _filters_commented_recently_list_commentedRecentlyR_component__WEBPACK_IMPORTED_MODULE_7__["ListCommentedRecentlyRComponent"]; });

/* harmony import */ var _filters_user_shared_list_userSharedR_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filters/user-shared/list-userSharedR.component */ "./src/app/recipes/list-recipes/filters/user-shared/list-userSharedR.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListUserSharedRComponent", function() { return _filters_user_shared_list_userSharedR_component__WEBPACK_IMPORTED_MODULE_8__["ListUserSharedRComponent"]; });

/* harmony import */ var _filters_my_favourite_list_myFavourite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters/my-favourite/list-myFavourite */ "./src/app/recipes/list-recipes/filters/my-favourite/list-myFavourite.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListMyFavouriteRComponent", function() { return _filters_my_favourite_list_myFavourite__WEBPACK_IMPORTED_MODULE_9__["ListMyFavouriteRComponent"]; });

/* harmony import */ var _filters_my_commented_list_myCommentedR_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filters/my-commented/list-myCommentedR.component */ "./src/app/recipes/list-recipes/filters/my-commented/list-myCommentedR.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListMyCommentedRComponent", function() { return _filters_my_commented_list_myCommentedR_component__WEBPACK_IMPORTED_MODULE_10__["ListMyCommentedRComponent"]; });

/* harmony import */ var _filters_ings_contain_list_ingredientsContainingR_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filters/ings-contain/list-ingredientsContainingR.component */ "./src/app/recipes/list-recipes/filters/ings-contain/list-ingredientsContainingR.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListIngredientsContainingRComponent", function() { return _filters_ings_contain_list_ingredientsContainingR_component__WEBPACK_IMPORTED_MODULE_11__["ListIngredientsContainingRComponent"]; });

/* harmony import */ var _filters_in_category_list_inCategory_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filters/in-category/list-inCategory.component */ "./src/app/recipes/list-recipes/filters/in-category/list-inCategory.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListInCategoryRComponent", function() { return _filters_in_category_list_inCategory_component__WEBPACK_IMPORTED_MODULE_12__["ListInCategoryRComponent"]; });
















/***/ }),

/***/ "./src/app/recipes/recipe-cart/recipe-main/recipe-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-cart/recipe-main/recipe-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecipeCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeCartComponent", function() { return RecipeCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var src_app_core_enumerations_CookRank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/enumerations/CookRank */ "./src/app/core/enumerations/CookRank.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _recipe_sub_info_card_recipe_sub_info_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../recipe-sub-info-card/recipe-sub-info-card.component */ "./src/app/recipes/recipe-cart/recipe-sub-info-card/recipe-sub-info-card.component.ts");








function RecipeCartComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "acr-recipe-sub-info", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", ctx_r258.recipe.subInfo);
} }
const _c0 = function (a1) { return ["/recipes/details", a1]; };
const _c1 = function (a1) { return ["/user-data/profile/", a1]; };
class RecipeCartComponent {
    constructor() {
        this.recipe = {
            id: "someId",
            name: "Ramen",
            description: "More description! Lorem, ipsum dolor sit amet consectetur adipisicing elit.Debitis molestiae quae voluptate, vitae cumque aspernatur fugit autem quo minus accusantium uttotam delectus maxime, velit reiciendis obcaecati, quasi sit ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae quae voluptate, vitae cumque aspernatur fugit autem quo minus accusantium ut totam delectus maxime, velit reiciendis obcaecati, quasi sit ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae quae voluptate, vitae cumque aspernatur fugit autem quo minus accusantium ut totam delectus maxime, velit reiciendis obcaecati, quasi sit ipsam! Lorem, ipsum dolor sit amet consectetur adipisicingelit. Debitis molestiae quae voluptate, vitae cumque aspernatur fugit autem quo minus accusantium ut totam delectus maxime, velit reiciendis obcaecati, quasi sit ipsam!",
            mainPicture: "https://prods3.imgix.net/images/articles/2017_08/Non-feature-cold-summer-ramen-recipe-noodle-soup1.jpg?auto=format%2Ccompress&ixjsv=2.2.3",
            authorUserName: "User12",
            authorCookRank: 1,
            dateOfCreation: "0",
            subInfo: {
                rating: 7,
                category: "BreakFast",
                categoryId: 13,
                commentsCount: 0,
                ingredientsCount: 4,
                difficulty: "Hard",
                fans: 0,
            }
        };
        this.infoShown = false;
    }
    get cookRank() {
        return src_app_core_enumerations_CookRank__WEBPACK_IMPORTED_MODULE_3__["CookRank"][this.recipe.authorCookRank];
    }
    ngOnInit() {
    }
    displayInfo(timeDelay = 1000) {
        setTimeout(() => this.infoShown = true, timeDelay);
    }
    hideInfo(timeDelay = 1000) {
        setTimeout(() => this.infoShown = false, timeDelay);
    }
    get date() {
        return src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"].dateConvert(this.recipe.dateOfCreation, src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["CustomDateFormats"].DefaultFormater);
    }
}
RecipeCartComponent.ɵfac = function RecipeCartComponent_Factory(t) { return new (t || RecipeCartComponent)(); };
RecipeCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeCartComponent, selectors: [["acr-recipe-card"]], inputs: { recipe: "recipe" }, decls: 29, vars: 13, consts: [[1, "row", "justify-content-start", 3, "mouseenter", "mouseleave"], [1, "card", "border-primary", "my-2", "mx-4", "col-8", "px-0"], [1, "card-header", "py-0"], [1, "row", "justify-content-between", "pt-1"], [1, "col-6", "pt-2", "mt-1"], [1, "fas", "fa-scroll"], [1, "h5", 3, "routerLink"], [1, "col-5"], [1, "float-right", "h6"], ["height", "15", "width", "15"], ["src", "../../../../assets/hat.png", "alt", "cook-hat"], [1, "text-success", 3, "routerLink"], [1, "card-body", "p-2", "h5", "mb-0", "pt-3"], [1, "px-2"], [1, "img-date", "pr-2", "mx-0"], ["alt", "picture of meal", 1, "meal-picture", 3, "src"], [1, "pt-1"], [1, "font-italic", "h6", "my-0"], [1, "font-italic", "small-font", "my-0"], [1, "info", "pl-2"], [1, "mb-2", "h6"], ["class", "col-3", 4, "ngIf"], [1, "col-3"], [3, "info"]], template: function RecipeCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function RecipeCartComponent_Template_div_mouseenter_0_listener($event) { return ctx.displayInfo(0); })("mouseleave", function RecipeCartComponent_Template_div_mouseleave_0_listener($event) { return ctx.hideInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Added on : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RecipeCartComponent_div_28_Template, 2, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.recipe.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.recipe.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cookRank, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.recipe.authorUserName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.recipe.authorUserName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.recipe.mainPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.recipe.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.infoShown);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _recipe_sub_info_card_recipe_sub_info_card_component__WEBPACK_IMPORTED_MODULE_6__["RecipeSubInfoCardComponent"]], styles: ["img.meal-picture[_ngcontent-%COMP%] {\r\n    border-radius: 30%;\r\n    width: auto;\r\n    height: 10rem;\r\n  }\r\n\r\ndiv.img-date[_ngcontent-%COMP%] {\r\n  display:block;\r\n  float:left;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: 1.2rem;\r\n    width:auto;\r\n  }\r\n\r\ndiv.card[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 20px 20px 25px -19px rgba(161,66,128,1);\r\n    -webkit-transition: 0.4s ease-in-out;\r\n    transition: 0.4s ease-in-out;\r\n  }\r\n\r\ndiv.card-header[_ngcontent-%COMP%]{\r\n    background-color: #e6dfd1;\r\n  }\r\n\r\ndiv.card-body[_ngcontent-%COMP%]{\r\n    background-color: #f5f1e9;\r\n    margin-top: 0;\r\n  }\r\n\r\nspan.small-font[_ngcontent-%COMP%]{\r\n    padding-top: 0.2em ;\r\n    font-size: 1em;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtY2FydC9yZWNpcGUtbWFpbi9yZWNpcGUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0FBRUY7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVFO0lBQ0UsY0FBYztJQUNkLFVBQVU7RUFDWjs7QUFFQTtJQUNFLG1EQUFtRDtJQUNuRCxvQ0FBNEI7SUFBNUIsNEJBQTRCO0VBQzlCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7RUFDZjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtY2FydC9yZWNpcGUtbWFpbi9yZWNpcGUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLm1lYWwtcGljdHVyZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgfVxyXG5cclxuZGl2LmltZy1kYXRlIHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIGZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMS4ycmVtO1xyXG4gICAgd2lkdGg6YXV0bztcclxuICB9XHJcblxyXG4gIGRpdi5jYXJkOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMjBweCAyMHB4IDI1cHggLTE5cHggcmdiYSgxNjEsNjYsMTI4LDEpO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIGRpdi5jYXJkLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmRmZDE7XHJcbiAgfVxyXG5cclxuICBkaXYuY2FyZC1ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjFlOTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICBzcGFuLnNtYWxsLWZvbnR7XHJcbiAgICBwYWRkaW5nLXRvcDogMC4yZW0gO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void=>*', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(-15rem) scaleX(0.1)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0) scaleX(1)' }))]),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeCartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-recipe-card',
                templateUrl: './recipe-card.component.html',
                styleUrls: ['./recipe-card.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void=>*', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', transform: 'translateX(-15rem) scaleX(0.1)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1', transform: 'translateX(0) scaleX(1)' }))]),
                    ])
                ]
            }]
    }], function () { return []; }, { recipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/recipes/recipe-cart/recipe-sub-info-card/recipe-sub-info-card.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/recipes/recipe-cart/recipe-sub-info-card/recipe-sub-info-card.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RecipeSubInfoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeSubInfoCardComponent", function() { return RecipeSubInfoCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function RecipeSubInfoCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipeSubInfoCardComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx_r260.info.rating, "1.2"), " ");
} }
function RecipeSubInfoCardComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Comments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx_r261.info.commentsCount, "");
} }
function RecipeSubInfoCardComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admirers:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx_r262.info.fans, "");
} }
const _c0 = function (a1) { return ["/categories/details", a1]; };
class RecipeSubInfoCardComponent {
    constructor() {
    }
}
RecipeSubInfoCardComponent.ɵfac = function RecipeSubInfoCardComponent_Factory(t) { return new (t || RecipeSubInfoCardComponent)(); };
RecipeSubInfoCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeSubInfoCardComponent, selectors: [["acr-recipe-sub-info"]], inputs: { info: "info" }, decls: 27, vars: 10, consts: [[1, "card", "border-info", "my-4", "mx-4", "col-8", "h5", "pt-3"], ["id", "menuDiv", 4, "ngIf"], [1, "table", "table-borderless", "h6"], [1, "py-2", "my-0", "pl-0"], [1, "py-2", "my-0", "px-0"], [1, "far", "fa-bookmark"], [3, "routerLink"], [4, "ngIf"], [1, "fas", "fa-dumbbell"], [1, "fas", "fa-atom"], ["id", "menuDiv"], [1, "text-center", "h3", "py-2"], [1, "fas", "fa-utensils"], [1, "fas", "fa-star-half-alt"], [1, "far", "fa-comments"], [1, "fas", "fa-user-plus"]], template: function RecipeSubInfoCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecipeSubInfoCardComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Category:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RecipeSubInfoCardComponent_tr_12_Template, 7, 4, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RecipeSubInfoCardComponent_tr_13_Template, 6, 1, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Difficulty:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ingredients:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RecipeSubInfoCardComponent_tr_26_Template, 6, 1, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.info.fans && (!ctx.info.rating || !ctx.info.commentsCount));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.info.categoryId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.commentsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx.info.difficulty, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx.info.ingredientsCount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.fans);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], styles: ["div.card[_ngcontent-%COMP%] {\r\n    position:absolute;\r\n    border-radius: 15%;\r\n    border: 2px solid cornflowerblue;\r\n}\r\n\r\n#menuDiv[_ngcontent-%COMP%] {\r\n    border-bottom: 3px solid cornflowerblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtY2FydC9yZWNpcGUtc3ViLWluZm8tY2FyZC9yZWNpcGUtc3ViLWluZm8tY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGVzL3JlY2lwZS1jYXJ0L3JlY2lwZS1zdWItaW5mby1jYXJkL3JlY2lwZS1zdWItaW5mby1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY2FyZCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xyXG59XHJcblxyXG4jbWVudURpdiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgY29ybmZsb3dlcmJsdWU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeSubInfoCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-recipe-sub-info',
                templateUrl: './recipe-sub-info-card.component.html',
                styleUrls: ['./recipe-sub-info-card.component.css']
            }]
    }], function () { return []; }, { info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/recipes/recipe-details/recipe-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/recipes/recipe-details/recipe-details.component.ts ***!
  \********************************************************************/
/*! exports provided: RecipeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailsComponent", function() { return RecipeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var src_app_core_enumerations_CookRank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/enumerations/CookRank */ "./src/app/core/enumerations/CookRank.ts");
/* harmony import */ var src_app_core_enumerations_RecipeDifficulty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/enumerations/RecipeDifficulty */ "./src/app/core/enumerations/RecipeDifficulty.ts");
/* harmony import */ var src_app_core_components_questionComponent_dialog_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/components/questionComponent/dialog-question.component */ "./src/app/core/components/questionComponent/dialog-question.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/recipe.service */ "./src/app/core/services/recipe.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_core_services_signal_r_recipe_details_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/signal-r.recipe-details.service */ "./src/app/core/services/signal-r.recipe-details.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _comments_list_comments_list_comments_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../comments/list-comments/list-comments.component */ "./src/app/comments/list-comments/list-comments.component.ts");
/* harmony import */ var ngx_smart_popover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-smart-popover */ "./node_modules/ngx-smart-popover/__ivy_ngcc__/fesm2015/ngx-smart-popover.js");
/* harmony import */ var _core_pipes_safeUrl_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/pipes/safeUrl.pipe */ "./src/app/core/pipes/safeUrl.pipe.ts");


















function RecipeDetailsComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 60);
} if (rf & 2) {
    const i_r86 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-slide-to", i_r86);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function RecipeDetailsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pic_r87 = ctx.$implicit;
    const i_r88 = ctx.index;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, pic_r87 === ctx_r73.recipe.pictures[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pic_r87, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", "recipe picture " + (i_r88 + 1));
} }
function RecipeDetailsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r74.videoLink), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function RecipeDetailsComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeDetailsComponent_span_23_Template_span_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.goToEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeDetailsComponent_span_23_Template_span_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.confirmDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipeDetailsComponent_span_26_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 72);
} }
function RecipeDetailsComponent_span_26_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 73);
} }
function RecipeDetailsComponent_span_26_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 74);
} }
function RecipeDetailsComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecipeDetailsComponent_span_26_i_1_Template, 1, 0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RecipeDetailsComponent_span_26_i_2_Template, 1, 0, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecipeDetailsComponent_span_26_i_3_Template, 1, 0, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r76.ratingProperties.positive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r76.ratingProperties.halfStar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r76.ratingProperties.lacking);
} }
function RecipeDetailsComponent_tr_47_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipeDetailsComponent_tr_47_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["details", a1]; };
const _c2 = function (a0) { return { "ing-outlet": a0 }; };
const _c3 = function (a0) { return { outlets: a0 }; };
const _c4 = function (a1) { return ["/ingredients", a1]; };
function RecipeDetailsComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RecipeDetailsComponent_tr_47_span_10_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RecipeDetailsComponent_tr_47_span_11_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "popover-content", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ing_r97 = ctx.$implicit;
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ing_r97.id)))));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ing_r97.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ing_r97.ammount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ing_r97.isVegan ? "Vegan" : "Non-Vegan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r101)("popoverOnHover", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ing_r97.isEssential);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ing_r97.isEssential);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ing_r97.name)("animation", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ing_r97.picURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ing_r97.name + "-picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r77.trimAppropriate(ing_r97.description, 110));
} }
function RecipeDetailsComponent_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose rating...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipeDetailsComponent_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r102 = ctx.$implicit;
    const i_r103 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r103 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r102);
} }
function RecipeDetailsComponent_span_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 Remove from Favourite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipeDetailsComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0 Add to Favourite");
} }
const _c5 = function (a1) { return ["/user-data/profile/", a1]; };
const _c6 = function (a1) { return ["/categories/details", a1]; };
const _c7 = function (a0) { return { "not-allowed": a0 }; };
class RecipeDetailsComponent {
    constructor(router, route, authService, recipeService, dialog, toastr, singalRService) {
        this.router = router;
        this.authService = authService;
        this.recipeService = recipeService;
        this.dialog = dialog;
        this.toastr = toastr;
        this.singalRService = singalRService;
        this.ratingNames = ["Distasteful", "Questionable", "Acceptable", "Recomendable", "Good", "Magnifique"];
        this.recipe = null;
        this.recipe = route.snapshot.data.data;
        singalRService.startConnection(this.recipe);
    }
    get cookRank() {
        return src_app_core_enumerations_CookRank__WEBPACK_IMPORTED_MODULE_2__["CookRank"][this.recipe.authorCookRank];
    }
    get difficulty() {
        return src_app_core_enumerations_RecipeDifficulty__WEBPACK_IMPORTED_MODULE_3__["RecipeDifficulty"][this.recipe.difficulty];
    }
    get tags() {
        return this.recipe.tags.join(", ");
    }
    // {
    //   id: "2safdg2sadsadasd",
    //   name: "Боб с кюфтета",
    //   authorUserName: "User5",
    //   authorCookRank: "Wizard",
    //   categoryName: "BreakFast",
    //   dateOfLastEdit: "2/18/2020 8:18:57 PM",
    //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti necessitatibus odit illum incidunt autem soluta molestiae officia iusto doloremque voluptates facilis vero cumque, voluptatum, tenetur ullam blanditiis deserunt magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti necessitatibus odit illum incidunt autem soluta molestiae officia iusto doloremque voluptates facilis vero cumque, voluptatum, tenetur ullam blanditiis deserunt magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti necessitatibus odit illum incidunt autem soluta molestiae officia iusto doloremque voluptates facilis vero cumque, voluptatum, tenetur ullam blanditiis deserunt magnam.",
    //   pictures: ["https://www.theflavorbender.com/wp-content/uploads/2019/01/Easy-Chicken-Ramen-Featured.jpg",
    //     "https://www.justonecookbook.com/wp-content/uploads/2017/07/Spicy-Shoyu-Ramen-NEW-500x400.jpg",
    //     "https://cdn.ruled.me/wp-content/uploads/2019/09/ramen-bowl-featured.jpg"],
    //   videoLink: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
    //   votes: [{ name: "amet", vote: 3 }, { name: "aspar", vote: 4 }, { name: "chukcha", vote: 4 }, { name: "User1", vote: 3 }],
    //   difficulty: 2,
    //   tags: ["kufteta", "bobove", "zaprujka", "bobec"],
    //   ingredients: [
    //     { name: "Tomato", ammount: "2 spns", picURL: "https://cdn.ruled.me/wp-content/uploads/2019/09/ramen-bowl-featured.jpg", id: 2, isVegan: false, isEssential: true },
    //     { name: "Tomato", ammount: "2 spns", picURL: "https://cdn.ruled.me/wp-content/uploads/2019/09/ramen-bowl-featured.jpg", id: 2, isVegan: true, isEssential: false },
    //     { name: "Tomato", ammount: "2 spns", picURL: "https://cdn.ruled.me/wp-content/uploads/2019/09/ramen-bowl-featured.jpg", id: 2, isVegan: false, isEssential: true }
    //   ],
    //   favorizers: ["Aladin", "Sebaidin", "Maradin", "Martin"],
    // }
    get isUDAuthorized() {
        return this.authService.isAdmin || this.myName === this.recipe.authorUserName;
    }
    trimAppropriate(str, maxLength) {
        let res = str.slice(0, maxLength);
        let lastSpace = res.lastIndexOf(' ');
        return res.slice(0, lastSpace) + "...";
    }
    goToEdit() {
        this.router.navigate(["/recipes/edit", this.recipe.id]);
    }
    get videoLink() {
        if (!this.recipe.videoLink)
            return null;
        const id = this.recipe.videoLink.substr(this.recipe.videoLink.indexOf("v=") + 2 || this.recipe.videoLink.lastIndexOf("\\") + 1);
        return src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"].videoLinkMake(id);
    }
    get ratingProperties() {
        const meaningfullVotes = this.recipe.votes.slice().filter(v => v.vote > 0);
        const currentRating = meaningfullVotes.reduce((acc, next, _, arr) => acc + (next.vote / arr.length), 0);
        const rating = Math.round(currentRating * 2) / 2;
        const result = {
            halfStar: rating - Math.floor(rating) > 0,
            positive: new Array(Math.floor(rating)),
            lacking: new Array(6 - Math.ceil(rating)),
            overal: Math.floor(rating) - 1,
            voterCount: meaningfullVotes.length,
            avRating: currentRating,
            ratingName: meaningfullVotes.length > 1 ? this.ratingNames[Math.floor(rating) - 1] : "No votes yet!"
        };
        return result;
    }
    get isFavourite() {
        return this.isLoggedIn && this.recipe.favorizers.includes(this.authService.getUserInfo().userName);
    }
    get dateAdded() {
        return src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"].dateConvert(this.recipe.dateOfLastEdit, src_app_core_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["CustomDateFormats"].DefaultFormater);
    }
    get isLoggedIn() {
        return this.authService.isAuthenticated();
    }
    get myVote() {
        if (!this.isLoggedIn || !this.recipe)
            return 0;
        const mv = this.recipe.votes.find(x => x.name === this.myName);
        if (!mv)
            return 0;
        return mv.vote;
    }
    set myVote(v) { console.log(v); } //this getter is bound as default value of select btn!
    rateBtnEnabled({ choise }) {
        if (isNaN(choise) + choise === 0)
            return false;
        return this.authService.isAuthenticated() && +choise > 0 && +choise !== this.myVote;
    }
    makeVote({ choise }) {
        choise = +choise;
        if (![1, 2, 3, 4, 5, 6].includes(choise))
            return;
        this.recipeService.rateRecipe(this.recipe.id, choise).subscribe(() => {
            let myVoting = this.recipe.votes.find(x => x.name === this.myName);
            if (myVoting) {
                myVoting.vote = choise;
            }
            else {
                this.recipe.votes.push({ name: this.myName, vote: choise });
            }
            this.singalRService.patchRecipeData({ votes: this.recipe.votes });
        });
    }
    get myName() {
        if (!this.isLoggedIn)
            return null;
        return this.authService.getUserInfo().userName;
    }
    favUnfav() {
        if (!this.isLoggedIn)
            return;
        this.recipeService.favUnfavRecipe(this.recipe.id).subscribe(i_favedR => {
            if (i_favedR && !this.recipe.favorizers.includes(this.myName)) {
                this.recipe.favorizers.push(this.myName);
            }
            else if (!i_favedR && this.recipe.favorizers.includes(this.myName)) {
                this.recipe.favorizers = this.recipe.favorizers.filter(n => n !== this.myName);
            }
            this.singalRService.patchRecipeData({ favorizers: this.recipe.favorizers });
        });
    }
    ngOnDestroy() {
        this.singalRService.stopConnection();
    }
    confirmDelete() {
        let dialogRef = this.dialog.open(src_app_core_components_questionComponent_dialog_question_component__WEBPACK_IMPORTED_MODULE_4__["DialogQuestionComponent"], {
            width: "40em",
            data: {
                title: `Confirm Deletion Please:`,
                question: `Are you sure you wish to delete ${this.recipe.name}?`,
                picUrl: this.recipe.mainPicture,
                positiveAnswerBtnName: '<i class="far fa-trash-alt"></i> Delete',
                negativeAnswerBtnName: '<i class="fas fa-ban"></i> Abort'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === "true") {
                this.recipeService.deleteIngredientById(this.recipe.id).subscribe(() => {
                    this.toastr.success(`Removed recipe ${this.recipe.name}`, "Success!");
                    this.router.navigate(['/index']);
                }, (err) => {
                    this.toastr.error(`Recipe ${this.recipe.name} was not removed`, "Failure");
                    console.log(err);
                });
            }
        });
    }
}
RecipeDetailsComponent.ɵfac = function RecipeDetailsComponent_Factory(t) { return new (t || RecipeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_7__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_signal_r_recipe_details_service__WEBPACK_IMPORTED_MODULE_10__["SignalRRecipeDetailsService"])); };
RecipeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeDetailsComponent, selectors: [["acr-rec-det"]], decls: 104, vars: 46, consts: [[1, "main"], [1, "row", "justify-content-start", "pt-3"], [1, "col-3", "p-3", "mt-4"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", 4, "ngFor", "ngForOf"], [1, "carousel-inner"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["class", "embed-responsive embed-responsive-16by9", 4, "ngIf"], [1, "col-9"], [1, "row", "justify-content-between", "pr-4", "pl-2"], [1, "col-5", "text-left"], [1, "fas", "fa-scroll"], [4, "ngIf"], [1, "col-4", "pl-2"], [1, "pt-2", "text-center"], [1, "col-3"], [1, "text-left", "d-inline", "d-block"], [1, "pb-0", "pr-2", "py-0", "my-0"], ["src", "../../../../assets/hat.png", "alt", "cook-hat", 1, "cook-hat"], [3, "routerLink"], [1, "hr"], [1, "text-center", "pb-2"], [1, "far", "fa-bookmark"], [1, "row", "justify-content-between", "pt-2", "px-3"], [1, "col-5"], ["class", "ings", 4, "ngFor", "ngForOf"], [1, "col-7"], [3, "ngSubmit"], ["f", "ngForm"], ["for", "choise"], [1, "row", "justify-content-start"], [1, "col-4"], ["name", "choise", "ngModel", "", "id", "choise", 1, "custom-select", 3, "ngModel", "disabled", "ngModelChange"], ["value", "0", "selected", "", "disabled", "", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-3", "pt-1"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "ngClass", "disabled"], [1, "fas", "fa-star"], [3, "innerHTML"], [1, "col-5", "pt-1", "px-0"], [1, "fav-btn"], ["color", "warn", 3, "checked", "ngClass", "disabled", "click"], ["btn", "matButtonToggle"], ["opt", "addOpt", 4, "ngIf", "ngIfElse"], ["removeOpt", ""], [1, "col-12", "py-2"], [1, "col-7", "px-0"], [1, "undecorated"], [1, "fas", "fa-user"], [1, "fas", "fa-poll"], [1, "far", "fa-clock"], [1, "fas", "fa-dumbbell"], [1, "pt-2"], [3, "recipeId", "recipeAuthorUserName", "signalR"], ["data-target", "#carouselExampleIndicators"], [1, "carousel-item", 3, "ngClass"], [1, "d-block", "w-100", "round", 3, "src", "alt"], [1, "embed-responsive", "embed-responsive-16by9"], ["allowfullscreen", "", 1, "embed-responsive-item"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "fas", "fa-tools"], [1, "btn", "btn-sm", "btn-danger", "ml-2", 3, "click"], [1, "far", "fa-trash-alt"], ["class", "fas fa-star pr-1", 4, "ngFor", "ngForOf"], ["class", "fas fa-star-half-alt pr-1", 4, "ngIf"], ["class", "far fa-star pr-1", 4, "ngFor", "ngForOf"], [1, "fas", "fa-star", "pr-1"], [1, "fas", "fa-star-half-alt", "pr-1"], [1, "far", "fa-star", "pr-1"], [1, "ings"], [1, "ing-info"], ["popoverPlacement", "top right", 1, "btn", "btn-link", "text-info", 3, "popover", "popoverOnHover"], ["closeOnClickOutside", "true", 3, "title", "animation"], ["ingInfo", ""], [1, "ing-cart"], [3, "src", "alt"], [1, "fas", "fa-question-circle"], [1, "fas", "fa-check-circle"], ["value", "0", "selected", "", "disabled", ""], [3, "value"], ["opt", "addOpt"], [1, "fas", "fa-heart-broken"], [1, "fas", "fa-heart"]], template: function RecipeDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RecipeDetailsComponent_li_5_Template, 1, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RecipeDetailsComponent_div_7_Template, 2, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RecipeDetailsComponent_div_16_Template, 3, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RecipeDetailsComponent_span_23_Template, 7, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RecipeDetailsComponent_span_26_Template, 5, 3, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u00A0Category: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ingredients: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, RecipeDetailsComponent_tr_47_Template, 18, 21, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "form", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RecipeDetailsComponent_Template_form_ngSubmit_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50); return ctx.makeVote(_r78.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Rate This Recipe:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecipeDetailsComponent_Template_select_ngModelChange_55_listener($event) { return ctx.myVote = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, RecipeDetailsComponent_option_56_Template, 2, 0, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, RecipeDetailsComponent_option_57_Template, 2, 2, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Rating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-button-toggle", 47, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeDetailsComponent_Template_mat_button_toggle_click_67_listener($event) { return ctx.favUnfav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, RecipeDetailsComponent_span_69_Template, 3, 0, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, RecipeDetailsComponent_ng_template_70_Template, 2, 0, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "How to prepare:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "acr-list-comments", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
        const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipe.pictures);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipe.pictures);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx.recipe.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUDAuthorized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ratingProperties.voterCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ratingProperties.ratingName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cookRank, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c5, ctx.recipe.authorUserName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.recipe.authorUserName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c6, ctx.recipe.categoryId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.categoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipe.ingredients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.myVote)("disabled", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myVote === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ratingNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c7, !ctx.rateBtnEnabled(_r78.value)))("disabled", !ctx.rateBtnEnabled(_r78.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.myVote ? "Change" : "Give", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isLoggedIn && ctx.isFavourite)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c7, !ctx.isLoggedIn))("disabled", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFavourite)("ngIfElse", _r83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx.ratingProperties.voterCount, " Voters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](82, 35, ctx.ratingProperties.avRating, "1.2"), " Average Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx.recipe.favorizers.length, " users Bookmerked this recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 Last Modified: ", ctx.dateAdded, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 Difficulty: ", ctx.difficulty, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 Tags: ", ctx.tags, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipeId", ctx.recipe.id)("recipeAuthorUserName", ctx.recipe.authorUserName)("signalR", ctx.singalRService);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggle"], _comments_list_comments_list_comments_component__WEBPACK_IMPORTED_MODULE_14__["ListCommentsComponent"], ngx_smart_popover__WEBPACK_IMPORTED_MODULE_15__["PopoverDirective"], ngx_smart_popover__WEBPACK_IMPORTED_MODULE_15__["PopoverContentComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"], _core_pipes_safeUrl_pipe__WEBPACK_IMPORTED_MODULE_16__["SafePipe"]], styles: ["section.main[_ngcontent-%COMP%] {\r\n    max-width: 100em; \r\n    margin: 0 auto;\r\n    background: rgb(241, 241, 241);\r\n}\r\n\r\n.hr[_ngcontent-%COMP%]{\r\n    border-bottom: 2px solid royalblue;\r\n    margin: 1em 2em;\r\n\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\nul.undecorated[_ngcontent-%COMP%]{\r\n    margin:0;\r\n    padding-left:1em;\r\n}\r\n\r\nul.undecorated[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    list-style-type: none;\r\n}\r\n\r\nbutton.not-allowed[_ngcontent-%COMP%]{cursor: not-allowed;}\r\n\r\nimg.round[_ngcontent-%COMP%] {\r\n    border-radius: 10%;\r\n    padding: 0 1em;\r\n  }\r\n\r\nimg.cook-hat[_ngcontent-%COMP%]{\r\n    width: 1em;\r\n    height:  1em;\r\n    text-align: left;\r\n    display: block;\r\n}\r\n\r\ndiv.embed-responsive[_ngcontent-%COMP%]{\r\n    margin:1em;\r\n    width: auto;\r\n  }\r\n\r\ntr.ings[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      text-decoration: none;\r\n  }\r\n\r\ntr.ings[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:nth-child(1) > a[_ngcontent-%COMP%]:before{\r\n    font-family: \"Font Awesome 5 Free\"; \r\n    font-weight: 900; \r\n    content: \"\\f12e  \";\r\n    font-size:0.75em;\r\n    padding:0 0.4em 0.6em 0;\r\n    color:green;\r\n}\r\n\r\ndiv.fav-btn[_ngcontent-%COMP%]{\r\n    float:left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZGV0YWlscy9yZWNpcGUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTs7QUFFbkI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBLG1CQUFtQixtQkFBbUIsQ0FBQzs7QUFFdkM7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7QUFFRjtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUU7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiOztBQUVBO01BQ0kscUJBQXFCO0VBQ3pCOztBQUVGO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGVzL3JlY2lwZS1kZXRhaWxzL3JlY2lwZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uLm1haW4ge1xyXG4gICAgbWF4LXdpZHRoOiAxMDBlbTsgXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxufVxyXG5cclxuLmhye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJveWFsYmx1ZTtcclxuICAgIG1hcmdpbjogMWVtIDJlbTtcclxuXHJcbn1cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnVsLnVuZGVjb3JhdGVke1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MWVtO1xyXG59XHJcblxyXG51bC51bmRlY29yYXRlZCBsaXtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLm5vdC1hbGxvd2Vke2N1cnNvcjogbm90LWFsbG93ZWQ7fVxyXG5cclxuaW1nLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG4gIH1cclxuXHJcbmltZy5jb29rLWhhdHtcclxuICAgIHdpZHRoOiAxZW07XHJcbiAgICBoZWlnaHQ6ICAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiAgZGl2LmVtYmVkLXJlc3BvbnNpdmV7XHJcbiAgICBtYXJnaW46MWVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICB0ci5pbmdzIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxudHIuaW5ncz50ZDpudGgtY2hpbGQoMSk+YTpiZWZvcmV7XHJcbiAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7IFxyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDsgXHJcbiAgICBjb250ZW50OiBcIlxcZjEyZSAgXCI7XHJcbiAgICBmb250LXNpemU6MC43NWVtO1xyXG4gICAgcGFkZGluZzowIDAuNGVtIDAuNmVtIDA7XHJcbiAgICBjb2xvcjpncmVlbjtcclxufVxyXG5cclxuZGl2LmZhdi1idG57XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-rec-det',
                templateUrl: './recipe-details.component.html',
                styleUrls: ['./recipe-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: src_app_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_7__["RecipeService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }, { type: src_app_core_services_signal_r_recipe_details_service__WEBPACK_IMPORTED_MODULE_10__["SignalRRecipeDetailsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipes/recipes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.module.ts ***!
  \*******************************************/
/*! exports provided: RecipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesModule", function() { return RecipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _recipe_cart_recipe_main_recipe_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-cart/recipe-main/recipe-card.component */ "./src/app/recipes/recipe-cart/recipe-main/recipe-card.component.ts");
/* harmony import */ var _recipe_cart_recipe_sub_info_card_recipe_sub_info_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-cart/recipe-sub-info-card/recipe-sub-info-card.component */ "./src/app/recipes/recipe-cart/recipe-sub-info-card/recipe-sub-info-card.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-details/recipe-details.component */ "./src/app/recipes/recipe-details/recipe-details.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create/create.component */ "./src/app/recipes/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/recipes/edit/edit.component.ts");
/* harmony import */ var _create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-edit-form/create-edit-form.component */ "./src/app/recipes/create-edit-form/create-edit-form.component.ts");
/* harmony import */ var _comments_comments_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../comments/comments.module */ "./src/app/comments/comments.module.ts");
/* harmony import */ var _list_recipes_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-recipes/base/list-recipes.component */ "./src/app/recipes/list-recipes/base/list-recipes.component.ts");
/* harmony import */ var _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-recipes/recipes-list-exporter */ "./src/app/recipes/list-recipes/recipes-list-exporter.ts");













const recipeListings = [_list_recipes_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_10__["ListRecipesComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListAllRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListCommentedRecentlyRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListHighlyRatedRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListMostCommentedRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListMostRecentRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListSearchedRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListMostFavouredRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListMostRatedRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListUserSharedRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListMyFavouriteRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListMyCommentedRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListIngredientsContainingRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListInCategoryRComponent"]];
class RecipesModule {
}
RecipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RecipesModule });
RecipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RecipesModule_Factory(t) { return new (t || RecipesModule)(); }, imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _comments_comments_module__WEBPACK_IMPORTED_MODULE_9__["CommentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecipesModule, { declarations: [_recipe_cart_recipe_main_recipe_card_component__WEBPACK_IMPORTED_MODULE_1__["RecipeCartComponent"], _recipe_cart_recipe_sub_info_card_recipe_sub_info_card_component__WEBPACK_IMPORTED_MODULE_2__["RecipeSubInfoCardComponent"], _recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailsComponent"],
        _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateRecipeComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditRecipeComponent"], _create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_8__["CreateEditFormComponent"],
        _list_recipes_base_list_recipes_component__WEBPACK_IMPORTED_MODULE_10__["ListRecipesComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListAllRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListCommentedRecentlyRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListHighlyRatedRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListMostCommentedRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListMostRecentRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListSearchedRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListMostFavouredRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListMostRatedRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListUserSharedRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListMyFavouriteRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListMyCommentedRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListIngredientsContainingRComponent"], _list_recipes_recipes_list_exporter__WEBPACK_IMPORTED_MODULE_11__["ListInCategoryRComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _comments_comments_module__WEBPACK_IMPORTED_MODULE_9__["CommentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_recipe_cart_recipe_main_recipe_card_component__WEBPACK_IMPORTED_MODULE_1__["RecipeCartComponent"], _recipe_cart_recipe_sub_info_card_recipe_sub_info_card_component__WEBPACK_IMPORTED_MODULE_2__["RecipeSubInfoCardComponent"], _recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailsComponent"],
                    _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateRecipeComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditRecipeComponent"], _create_edit_form_create_edit_form_component__WEBPACK_IMPORTED_MODULE_8__["CreateEditFormComponent"], recipeListings
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _comments_comments_module__WEBPACK_IMPORTED_MODULE_9__["CommentsModule"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class FooterComponent {
    constructor() {
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
        setInterval(() => {
            this.year = new Date().getFullYear();
        }, 1000 * 60 * 60 * 24);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["acr-footer"]], decls: 4, vars: 1, consts: [[1, "footer", "text-center", "py-3", "bg-dark", "fixed-bottom", "text-warning"], ["routerLink", "GDPR"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " GDPR Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Acresh: ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#page-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    min-height: 100vh;\r\n  }\r\n  \r\n  #content-wrap[_ngcontent-%COMP%] {\r\n    padding-bottom: 2.5rem;    \r\n  }\r\n  \r\n  #footer[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 2.5rem;            \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQixLQUFLLGtCQUFrQjtFQUMvQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGNBQWMsYUFBYSxrQkFBa0I7RUFDL0MiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250ZW50LXdyYXAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTsgICAgLyogRm9vdGVyIGhlaWdodCAqL1xyXG4gIH1cclxuICBcclxuICAjZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07ICAgICAgICAgICAgLyogRm9vdGVyIGhlaWdodCAqL1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_core_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/message.service */ "./src/app/core/services/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = ["searchPhrase"];
function HeaderComponent_ul_61_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r238.unreadCount, "");
} }
const _c1 = function (a1) { return ["/user-data/profile/", a1]; };
const _c2 = function () { return ["/recipes/add-new"]; };
const _c3 = function (a1) { return ["/recipes/user/", a1]; };
function HeaderComponent_ul_61_Template(rf, ctx) { if (rf & 1) {
    const _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u00A0 My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 Share New Recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u00A0 Communications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_ul_61_span_16_Template, 2, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A0 My Commented");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A0 My Favourite Recipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u00A0 My Shared Recipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_61_Template_a_click_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r240); const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r239.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u00A0 Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r234.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r234.userName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r234.unreadCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, ctx_r234.userName));
} }
function HeaderComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(router, authService, toastr, messageService) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.messageService = messageService;
        this.userName = null;
    }
    ngDoCheck() {
        if (this.authService.isAuthenticated() && !this.userName) {
            this.userName = this.authService.getUserInfo().userName;
            this.messageService.signalR.startConnection(this.userName).then(() => this.messageService.signalR.updateUserUnreadCount(this.userName));
        }
    }
    get unreadCount() {
        return this.messageService.signalR.unreadCount;
    }
    ngOnDestroy() {
        this.messageService.signalR.stopConnection();
    }
    logout() {
        this.authService.clearUserData();
        this.toastr.show("Goodbye user!");
        this.userName = null;
        this.router.navigate([""]);
        this.messageService.signalR.stopConnection();
    }
    search() {
        let v = this.phrase.nativeElement.value;
        if (v.length < 2)
            return;
        this.router.navigate([`/recipes/search/${v}`]);
        // this.router.navigate([`/recipes/search/${v}`, { phrase: v }]);
        this.phrase.nativeElement.value = '';
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["acr-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.phrase = _t.first);
    } }, decls: 70, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "nav-pills"], ["routerLink", "", 1, "navbar-brand"], [1, "acsh"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarColor02", "aria-controls", "navbarColor02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarColor02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "mr-2"], ["routerLink", "couldron", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-flask"], [1, "dropdown"], ["href", "#", "role", "button", "id", "dropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-scroll"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu"], ["routerLink", "recipes/all", 1, "dropdown-item"], ["routerLink", "recipes/recent", 1, "dropdown-item"], [1, "fas", "fa-concierge-bell"], ["routerLink", "recipes/commented", 1, "dropdown-item"], [1, "far", "fa-comments"], ["routerLink", "recipes/commented-recently", 1, "dropdown-item"], [1, "far", "fa-clock"], ["routerLink", "recipes/highly-rated", 1, "dropdown-item"], [1, "fas", "fa-medal"], ["routerLink", "recipes/most-rated", 1, "dropdown-item"], [1, "fas", "fa-users"], ["routerLink", "recipes/most-favoured", 1, "dropdown-item"], [1, "fas", "fa-grin-hearts"], [1, "nav-item"], ["routerLink", "/ingredients", 1, "nav-link"], [1, "fas", "fa-puzzle-piece"], ["routerLink", "categories/", 1, "nav-link"], [1, "fas", "fa-book-open"], [1, "navbar-nav", "mr-auto", "main-logo"], [1, "nav-link", "font-italic"], ["class", "navbar-nav pl-2 pr-0", 4, "ngIf", "ngIfElse"], ["unloggedOptions", ""], [1, "input-group", "pl-2", "pr-2", "col-2", "ml-0"], ["type", "text", "placeholder", "Name of recipe...", "aria-label", "Search", 1, "form-control", "my-0", "py-1", "lime-border"], ["searchPhrase", ""], [1, "input-group-append"], ["id", "sbtn", 1, "input-group-text", "lime", "lighten-2", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-search"], [1, "navbar-nav", "pl-2", "pr-0"], [1, "dropdown", "dropdown-menu-right"], [1, "fa", "fa-user", "fa-lg"], [1, "dropdown-item", 3, "routerLink"], [1, "fas", "fa-user-cog"], [1, "fas", "fa-plus-circle"], ["routerLink", "/message-box", 1, "dropdown-item", "pt-2"], [1, "far", "fa-envelope"], ["class", "badge badge-pill badge-danger ml-2 py-2 my-0 px-2", 4, "ngIf"], ["routerLink", "/recipes/my-commented", 1, "dropdown-item"], [1, "far", "fa-comment-alt"], ["routerLink", "/recipes/my-favourite", 1, "dropdown-item"], [1, "far", "fa-heart"], [1, "fas", "fa-share-alt"], [1, "dropdown-item", 3, "click"], [1, "fas", "fa-sign-out-alt"], [1, "badge", "badge-pill", "badge-danger", "ml-2", "py-2", "my-0", "px-2"], ["routerLink", "authentication/login", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/authentication/register", "routerLinkActive", "active", 1, "nav-link"], ["href", "#", 1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ACRESH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Couldron");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Recipes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00A0 All Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u00A0 Recently Added Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u00A0 Most Commented Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A0 Recently Commented Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00A0 Highly Rated Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00A0 Most Rated Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u00A0 Most Favoured");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00A0Ingredients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "pplication for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "ooking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "RE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "cipes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "SH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "aring ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, HeaderComponent_ul_61_Template, 29, 10, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, HeaderComponent_ng_template_62_Template, 10, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_68_listener($event) { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userName)("ngIfElse", _r235);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color:blanchedalmond;\r\n    background-image: none;\r\n}\r\n#sbtn[_ngcontent-%COMP%]:hover {\r\n    background-color:blanchedalmond;\r\n    color: rgb(80, 15, 153);\r\n}\r\n@media  screen and (max-width: 1455px) {\r\n    ul.main-logo[_ngcontent-%COMP%] {\r\n     display: none;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0k7S0FDQyxhQUFhO0lBQ2Q7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1tZW51IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFuY2hlZGFsbW9uZDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuI3NidG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFuY2hlZGFsbW9uZDtcclxuICAgIGNvbG9yOiByZ2IoODAsIDE1LCAxNTMpO1xyXG59XHJcbkBtZWRpYSAgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDU1cHgpIHtcclxuICAgIHVsLm1haW4tbG9nbyB7XHJcbiAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: src_app_core_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }]; }, { phrase: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["searchPhrase"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/main/main.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/main/main.component.ts ***!
  \**********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class MainComponent {
    constructor(authService) {
        this.authService = authService;
        this.chupakabra = null;
    }
    getChupakabra() {
        this.authService.getChupakabra().subscribe(c => {
            this.chupakabra = c;
            console.log(this.authService.getUserInfo());
        }); //,this.chupakabra=null)
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["acr-main"]], decls: 4, vars: 3, consts: [[1, "btn", "btn-primary", 3, "click"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_0_listener($event) { return ctx.getChupakabra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " GetChupakabra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.chupakabra), "");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'acr-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/shared/components/main/main.component.ts");







class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
                ],
                exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/store/actions/user.unread.count.action.ts":
/*!***********************************************************!*\
  !*** ./src/app/store/actions/user.unread.count.action.ts ***!
  \***********************************************************/
/*! exports provided: SET_UNR_MESSAGE_COUNT, RESET_UNR_MESSAGE_COUNT, INCREMENT_UNR_MESSAGE_COUNT, SetMessageCount, ResetMessageCount, IncrementMessageCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_UNR_MESSAGE_COUNT", function() { return SET_UNR_MESSAGE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_UNR_MESSAGE_COUNT", function() { return RESET_UNR_MESSAGE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_UNR_MESSAGE_COUNT", function() { return INCREMENT_UNR_MESSAGE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMessageCount", function() { return SetMessageCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetMessageCount", function() { return ResetMessageCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementMessageCount", function() { return IncrementMessageCount; });
const SET_UNR_MESSAGE_COUNT = "[UnrMessage] Set";
const RESET_UNR_MESSAGE_COUNT = "[UnrMessage] Reset";
const INCREMENT_UNR_MESSAGE_COUNT = "[UnrMessage] Increment";
class SetMessageCount {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_UNR_MESSAGE_COUNT;
    }
}
class ResetMessageCount {
    constructor(payload) {
        this.payload = payload;
        this.type = RESET_UNR_MESSAGE_COUNT;
    }
}
class IncrementMessageCount {
    constructor(payload) {
        this.payload = payload;
        this.type = INCREMENT_UNR_MESSAGE_COUNT;
    }
}


/***/ }),

/***/ "./src/app/store/reducers/unread.msg.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/store/reducers/unread.msg.reducer.ts ***!
  \******************************************************/
/*! exports provided: unreadMsgsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unreadMsgsReducer", function() { return unreadMsgsReducer; });
/* harmony import */ var _actions_user_unread_count_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user.unread.count.action */ "./src/app/store/actions/user.unread.count.action.ts");

const initialValue = [{ userName: "kitodar", unreadMessagesCount: -2 }];
function unreadMsgsReducer(state = initialValue, action) {
    switch (action.type) {
        case _actions_user_unread_count_action__WEBPACK_IMPORTED_MODULE_0__["RESET_UNR_MESSAGE_COUNT"]:
            return [];
        case _actions_user_unread_count_action__WEBPACK_IMPORTED_MODULE_0__["SET_UNR_MESSAGE_COUNT"]:
            return setUnreadMessagesCountForUser(state, action.payload);
        case _actions_user_unread_count_action__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_UNR_MESSAGE_COUNT"]:
            return addNewUnreadMessage(state, action.payload);
        case _actions_user_unread_count_action__WEBPACK_IMPORTED_MODULE_0__["RESET_UNR_MESSAGE_COUNT"]:
            return resetUserUnreadMessages(state, action.payload);
        default:
            return state;
    }
}
function setUnreadMessagesCountForUser(state, userUnrMessages) {
    return [...state.slice().filter(x => x.userName !== userUnrMessages.userName), userUnrMessages];
}
function addNewUnreadMessage(state, username) {
    console.log(state, "asiktir");
    let foundUser = state.find(x => x.userName === username);
    if (!foundUser) {
        return state;
    }
    let { userName, unreadMessagesCount } = foundUser;
    if (!userName) {
        //it does not matter for this user he ll see when he logs in!
        return state;
    }
    unreadMessagesCount++;
    return [...state.slice().filter(x => x.userName !== userName), { userName, unreadMessagesCount: unreadMessagesCount }];
}
function resetUserUnreadMessages(state, username) {
    return state.slice().filter(x => x.userName !== username);
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Code Work\My app\Acresh\AcreshApp-SPAngular.NET_CoreApp\AngularApp\AcreshApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map