import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { push } from '@lagunovsky/redux-react-router';
import API from './categoriesAPI';
import { categoriesConstants as AC_CATE } from '@constants/categories';
import {handleHttpCode, extractErrorMsg} from '@api/httpCode';


function* fetchParameterCategoriesSaga(action) {
    try{
        yield put({ type: AC_CATE. CATEGORIES_FETCH_PARAMETER_START });
        const parameterRequest = action?.payload?.parameter;
        const { data } = yield call(API.fetchParameterCategoriesAPI,{parameter: parameterRequest});
        yield put({ type: AC_CATE. CATEGORIES_FETCH_PARAMETER_SUCCESS, payload: {responsive:data} });
    }
    catch(e){
        extractErrorMsg(e);
        yield put({ type: AC_CATE. CATEGORIES_FETCH_PARAMETER_FAILED });
    }
}

export const categoriesSaga = [
    takeLatest(AC_CATE. CATEGORIES_FETCH_PARAMETER, fetchParameterCategoriesSaga)
]