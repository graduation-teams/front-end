import { all } from 'redux-saga/effects';
import {authSaga} from './auth/authSaga';
import {categoriesSaga} from './categories/categoriesSaga';
import {productsSaga} from './products/productSaga';
export default function* rootSaga() {
    yield all([
        ...authSaga,
        ...categoriesSaga,
        ...productsSaga
    ]);
};