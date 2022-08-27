import { combineReducers } from "redux";
import { createRouterReducer } from '@lagunovsky/redux-react-router'
import { history } from '@utils/index';
import authReducer from './auth/authReducer';
import userReducer from './user/userReducer';
import categoriesReducer from './categories/categoriesReducer';
import productsReducer from './products/productsReducer';
import typeReducer from './type/typeReducer';
export default combineReducers({
    router: createRouterReducer(history),
    auth:authReducer,
    user:userReducer,
    categories:categoriesReducer,
    products:productsReducer,
    type:typeReducer
});