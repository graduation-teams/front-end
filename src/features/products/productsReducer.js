import { createAction, createReducer } from '@reduxjs/toolkit';
import { productsConstants as AC_PRODUCT } from '@constants/products';
import { combineReducers } from 'redux';

const actionInitialState = {
    pending: false,
    success: false,
    failed: false,
};

const listInitialState = {
    pending: false,
    success: false,
    failed: false,
    data: [],
}

const fetchAll = createReducer({ ...listInitialState }, (builder) => {
    builder
    .addCase(createAction(AC_PRODUCT.PRODUCTS_FETCH_ALL_START),(state, action)=>{
        return { ...state, pending: true };
    })
    .addCase(createAction(AC_PRODUCT.PRODUCTS_FETCH_ALL_SUCCESS),(state, action)=>{
        return { ...state, pending: false, success: true, data : action.payload.responsive };
    })
    .addCase(createAction(AC_PRODUCT.PRODUCTS_FETCH_ALL_FAILED),(state, action)=>{
        return { ...state, failed: true, success: false, pending: false, data:[] };
    })
    .addDefaultCase((state, action) => {
        return { ...state };
    })
})

const fetchById = createReducer({ ...listInitialState }, (builder) => {
    builder
    .addCase(createAction(AC_PRODUCT.PRODUCTS_FETCH_BY_ID_START),(state, action)=>{
        return { ...state, pending: true };
    })
    .addCase(createAction(AC_PRODUCT.PRODUCTS_FETCH_BY_ID_SUCCESS),(state, action)=>{
        return { ...state, pending: false, success: true, data : action.payload.responsive };
    })
    .addCase(createAction(AC_PRODUCT.PRODUCTS_FETCH_BY_ID_FAILED),(state, action)=>{
        return { ...state, failed: true, success: false, pending: false, data:[] };
    })
    .addDefaultCase((state, action) => {
        return { ...state };
    })
})


const deleteById = createReducer({ ...actionInitialState }, (builder) => {
    builder
    .addCase(createAction(AC_PRODUCT.PRODUCTS_DELETE_BY_ID_START),(state, action)=>{
        return { ...state, pending: true };
    })
    .addCase(createAction(AC_PRODUCT.PRODUCTS_DELETE_BY_ID_SUCCESS),(state, action)=>{
        return { ...state, pending: false, success: true};
    })
    .addCase(createAction(AC_PRODUCT.PRODUCTS_DELETE_BY_ID_FAILED),(state, action)=>{
        return { ...state, failed: true, success: false, pending: false};
    })
    .addDefaultCase((state, action) => {
        return { ...state };
    })
});


const updateById = createReducer({ ...actionInitialState }, (builder) => {
    builder
    .addCase(createAction(AC_PRODUCT.PRODUCTS_UPDATE_BY_ID_START),(state, action)=>{
        return { ...state, pending: true };
    })
    .addCase(createAction(AC_PRODUCT.PRODUCTS_UPDATE_BY_ID_SUCCESS),(state, action)=>{
        return { ...state, pending: false, success: true};
    })
    .addCase(createAction(AC_PRODUCT.PRODUCTS_UPDATE_BY_ID_FAILED),(state, action)=>{
        return { ...state, failed: true, success: false, pending: false};
    })
    .addDefaultCase((state, action) => {
        return { ...state };
    })
});

const create = createReducer({ ...actionInitialState }, (builder) => {
    builder
    .addCase(createAction(AC_PRODUCT.PRODUCTS_CREATE_START),(state, action)=>{
        return { ...state, pending: true };
    })
    .addCase(createAction(AC_PRODUCT.PRODUCTS_CREATE_SUCCESS),(state, action)=>{
        return { ...state, pending: false, success: true};
    })
    .addCase(createAction(AC_PRODUCT.PRODUCTS_CREATE_FAILED),(state, action)=>{
        return { ...state, failed: true, success: false, pending: false};
    })
    .addDefaultCase((state, action) => {
        return { ...state };
    })
});


export default combineReducers({
    fetchAll,
    fetchById,
    deleteById,
    updateById,
    create
});