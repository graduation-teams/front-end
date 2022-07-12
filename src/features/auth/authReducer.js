import { createAction, createReducer } from '@reduxjs/toolkit';
import { authenticationConstants as AC_AUTH } from '@constants/auth';
import { combineReducers } from 'redux';

const actionInitialState = {
    pending: false,
    success: false,
    failed: false,
};


const login = createReducer({ ...actionInitialState }, (builder) => {
    builder
    .addCase(createAction(AC_AUTH.AUTH_LOGIN_START),(state, action)=>{
        return { ...state, pending: true };
    })
    .addCase(createAction(AC_AUTH.AUTH_LOGIN_SUCCESS),(state, action)=>{
        return { ...state, pending: false, success: true };
    })
    .addCase(createAction(AC_AUTH.AUTH_LOGIN_FAILED),(state, action)=>{
        return { ...state, failed: true, success: false, pending: false };
    })
    .addDefaultCase((state, action) => {
        return { ...state };
    })
});

const register = createReducer({ ...actionInitialState }, (builder) => {
    builder
    .addCase(createAction(AC_AUTH.AUTH_REGISTER_START),(state, action)=>{
        return { ...state, pending: true };
    })
    .addCase(createAction(AC_AUTH.AUTH_REGISTER_SUCCESS),(state, action)=>{
        return { ...state, pending: false, success: true};
    })
    .addCase(createAction(AC_AUTH.AUTH_REGISTER_FAILED),(state, action)=>{
        return { ...state, failed: true, success: false, pending: false };
    })
    .addDefaultCase((state, action) => {
        return { ...state };
    })
});

export default combineReducers({
    login,
    register
});