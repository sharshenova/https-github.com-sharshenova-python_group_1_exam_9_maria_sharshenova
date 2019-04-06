

import {combineReducers} from 'redux';
import loginReducer from "./login";
import registerReducer from "./register";
import authReducer from "./auth";
import tokenLoginReducer from "./app";
import productsListReducer from "./products-list";
import categoriesListReducer from "./categories-list";



const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    auth: authReducer,
    app: tokenLoginReducer,
    productsList: productsListReducer,
    categoriesList: categoriesListReducer

});

export default rootReducer;