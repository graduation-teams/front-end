import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import API from './typeAPI';
import { typeConstants as AC_TYPE } from '@constants/typeCategories';
import {handleHttpCode, extractErrorMsg} from '@api/httpCode';


function* fetchAllTypeCategoriesSaga(action) {
    try{
        yield put({ type: AC_TYPE. TYPE_FETCH_ALL_START });
        const { data } = yield call(API.fetchAllTypeCategoriesAPI);
        yield put({ type: AC_TYPE. TYPE_FETCH_ALL_SUCCESS, payload: {responsive:data} });
    }
    catch(e){
        extractErrorMsg(e);
        yield put({ type: AC_TYPE. TYPE_FETCH_ALL_FAILED });
    }
}

function* deleteByIdTypeCategoriesSaga(action) {
    try{
        yield put({ type: AC_TYPE. TYPE_DELETE_BY_ID_START });
        const idType = action?.payload?.idTypeCategory;
        yield call(API.deleteByIdTypeCategoriesAPI,{id: idType});
        yield put({ type: AC_TYPE. TYPE_DELETE_BY_ID_SUCCESS });
        yield put({ type: AC_TYPE. TYPE_FETCH_ALL});
        yield toast.success('Type category deleted successfully');
    }
    catch(e){
        extractErrorMsg(e);
        yield put({ type: AC_TYPE. TYPE_DELETE_BY_ID_FAILED });
        yield toast.error('Error deleting type category');
    }
}

export const typeCategoriesSaga = [
    takeLatest(AC_TYPE. TYPE_FETCH_ALL, fetchAllTypeCategoriesSaga),
    takeLatest(AC_TYPE. TYPE_DELETE_BY_ID, deleteByIdTypeCategoriesSaga)
]