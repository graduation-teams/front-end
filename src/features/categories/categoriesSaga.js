import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import API from './categoriesAPI';
import { categoriesConstants as AC_CATE } from '@constants/categories';
import {handleHttpCode, extractErrorMsg} from '@api/httpCode';


function* fetchAllCategoriesSaga(action) {
    try{
        yield put({ type: AC_CATE. CATEGORIES_FETCH_ALL_START });
        const { data } = yield call(API.fetchAllCategoriesAPI);
        yield put({ type: AC_CATE. CATEGORIES_FETCH_ALL_SUCCESS, payload: {responsive:data} });
    }
    catch(e){
        extractErrorMsg(e);
        yield put({ type: AC_CATE. CATEGORIES_FETCH_ALL_FAILED });
    }
}

function* deleteByIdCategoriesSaga(action) {
    try{
        yield put({ type: AC_CATE. CATEGORIES_DELETE_BY_ID_START });
        const idCategory = action?.payload?.idCategory;
        const {message} = yield call(API.deleteByIdCategoriesAPI,{id: idCategory});
        yield put({ type: AC_CATE. CATEGORIES_DELETE_BY_ID_SUCCESS });
        yield put({ type: AC_CATE. CATEGORIES_FETCH_ALL });
        yield toast.success(message);
    }
    catch(e){
        extractErrorMsg(e);
        yield put({ type: AC_CATE. CATEGORIES_DELETE_BY_ID_FAILED });
    }
}

export const categoriesSaga = [
    takeLatest(AC_CATE. CATEGORIES_FETCH_ALL, fetchAllCategoriesSaga),
    takeLatest(AC_CATE. CATEGORIES_DELETE_BY_ID, deleteByIdCategoriesSaga)
]