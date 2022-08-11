import { all } from 'redux-saga/effects';
import {authSaga} from './auth/authSaga';
import {categoriesSaga} from './categories/categoriesSaga';

export default function* rootSaga() {
    yield all([
        ...authSaga,
        ...categoriesSaga
    ]);
};