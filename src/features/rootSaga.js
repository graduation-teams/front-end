import { all } from 'redux-saga/effects';
import {authSaga} from './auth/authSaga';
import {categoriesSaga} from './categories/categoriesSaga';
import {productsSaga} from './products/productSaga';
import {typeCategoriesSaga} from './type/typeSaga';
export default function* rootSaga() {
    yield all([
        ...authSaga,
        ...categoriesSaga,
        ...productsSaga,
        ...typeCategoriesSaga
    ]);
};