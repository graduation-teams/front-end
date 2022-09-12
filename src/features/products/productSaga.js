import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { push } from '@lagunovsky/redux-react-router';
import API from './productAPI';
import { productsConstants as AC_PRODUCT } from '@constants/products';
import { handleHttpCode, extractErrorMsg } from '@api/httpCode';

function* fetchAllProductsSaga(action) {
    try {
        yield put({ type: AC_PRODUCT.PRODUCTS_FETCH_ALL_START });
        const { data } = yield call(API.fetchAllProductsAPI);
        yield put({ type: AC_PRODUCT.PRODUCTS_FETCH_ALL_SUCCESS, payload: { responsive: data } });
    } catch (e) {
        extractErrorMsg(e);
        yield put({ type: AC_PRODUCT.PRODUCTS_FETCH_ALL_FAILED });
    }
}

function* deleteByIdProductsSaga(action) {
    try {
        yield put({ type: AC_PRODUCT.PRODUCTS_DELETE_BY_ID_START });
        const idProduct = action?.payload?.idProduct;
        yield call(API.deleteByIdProductsAPI, { id: idProduct });
        yield put({ type: AC_PRODUCT.PRODUCTS_DELETE_BY_ID_SUCCESS });
        yield put({ type: AC_PRODUCT.PRODUCTS_FETCH_ALL });
        yield toast.success('Product deleted successfully');
    } catch (e) {
        extractErrorMsg(e);
        yield put({ type: AC_PRODUCT.PRODUCTS_DELETE_BY_ID_FAILED });
        yield toast.error('Error deleting product');
    }
}

export const productsSaga = [takeLatest(AC_PRODUCT.PRODUCTS_FETCH_ALL, fetchAllProductsSaga), takeLatest(AC_PRODUCT.PRODUCTS_DELETE_BY_ID, deleteByIdProductsSaga)];
