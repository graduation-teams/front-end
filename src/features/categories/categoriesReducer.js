import { createAction, createReducer } from '@reduxjs/toolkit';
import { categoriesConstants as AC_CATE } from '@constants/categories';
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

const fetchParameter = createReducer({ ...listInitialState }, (builder) => {
    builder
    .addCase(createAction(AC_CATE.CATEGORIES_FETCH_PARAMETER_START),(state, action)=>{
        return { ...state, pending: true };
    })
    .addCase(createAction(AC_CATE.CATEGORIES_FETCH_PARAMETER_SUCCESS),(state, action)=>{
        return { ...state, pending: false, success: true, data : action.payload.responsive };
    })
    .addCase(createAction(AC_CATE.CATEGORIES_FETCH_PARAMETER_FAILED),(state, action)=>{
        return { ...state, failed: true, success: false, pending: false, data:[] };
    })
    .addDefaultCase((state, action) => {
        return { ...state };
    })
})

const fetchById = createReducer({ ...listInitialState }, (builder) => {
    builder
    .addCase(createAction(AC_CATE.CATEGORIES_FETCH_BY_ID_START),(state, action)=>{
        return { ...state, pending: true };
    })
    .addCase(createAction(AC_CATE.CATEGORIES_FETCH_BY_ID_SUCCESS),(state, action)=>{
        return { ...state, pending: false, success: true, data : action.payload.responsive };
    })
    .addCase(createAction(AC_CATE.CATEGORIES_FETCH_BY_ID_FAILED),(state, action)=>{
        return { ...state, failed: true, success: false, pending: false, data:[] };
    })
    .addDefaultCase((state, action) => {
        return { ...state };
    })
})


export default combineReducers({
    fetchParameter,
    fetchById
});