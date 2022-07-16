import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { push,goBack } from 'connected-react-router';
import API from './authAPI';
import { authenticationConstants as AC_AUTH } from '@constants/auth';
import { userConstants as AC_USER } from '@constants/user';
import {setLocalStorage, removeLocalStorage, getLocalStorage} from '@utils/helpers';
import {handleHttpCode, extractErrorMsg} from '@api/httpCode';

function* loginSaga(action) {
    try {
        yield put({ type: AC_AUTH.AUTH_LOGIN_START });
        const dataAction = action.payload;
        const { message, user, authorisation} = yield call(API.login, {data: dataAction.data});
        if(JSON.parse(getLocalStorage('user'))?.id && getLocalStorage('access_token')){
            yield removeLocalStorage('user');
            yield removeLocalStorage('access_token');
            yield removeLocalStorage('token_type');
        }
        yield setLocalStorage('access_token', authorisation?.access_token);
        yield setLocalStorage('token_type', authorisation?.token_type);
        yield setLocalStorage('user', JSON.stringify(user));
        yield put({type:AC_USER.SET_INFO_USER, payload: user});
        yield put({ type: AC_AUTH.AUTH_LOGIN_SUCCESS });
        yield put(push('/'));
        yield toast.success(message,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            limit:1
        })
    }
    catch (error) {
        extractErrorMsg(error);
        yield put({ type: AC_AUTH.AUTH_LOGIN_FAILED });
    }
}

function* registerSaga(action) {
    try {
        yield put({ type: AC_AUTH.AUTH_REGISTER_START });
        const dataAction = action.payload;
        const {message, status} = yield call(API.register, {data: dataAction.data});
        yield put({ type: AC_AUTH.AUTH_REGISTER_SUCCESS });
        yield toast.success(message,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            limit:1
        })
    }
    catch (error) {
        extractErrorMsg(error);
        yield put({ type: AC_AUTH.AUTH_REGISTER_FAILED });
    }
}

function* logoutSaga(action) {
    try {
        yield put({ type: AC_AUTH.AUTH_LOGOUT_START });
        const { message } = yield call(API.logout);
        if(JSON.parse(getLocalStorage('user'))?.id && getLocalStorage('access_token')){
            yield removeLocalStorage('user');
            yield removeLocalStorage('access_token');
            yield removeLocalStorage('token_type');
        }
        yield put({type:AC_USER.SET_INFO_USER, payload: {}});
        yield put({ type: AC_AUTH.AUTH_LOGOUT_SUCCESS });
        yield put(push('/'));
        yield toast.success(message,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            limit:1
        })
    }
    catch (error) {
        extractErrorMsg(error);
        yield put({ type: AC_AUTH.AUTH_LOGOUT_FAILED });
    }
}

function* forgotPasswordSaga(action) {
    try {
        yield put({ type: AC_AUTH.AUTH_FORGOT_PASSWORD_START });
        const dataAction = action.payload;
        const {message} = yield call(API.forgotPassword, {data: dataAction.data});
        yield put({ type: AC_AUTH.AUTH_FORGOT_PASSWORD_SUCCESS });
        yield toast.success(message,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            limit:1
        })
    }
    catch (error) {
        extractErrorMsg(error);
        yield put({ type: AC_AUTH.AUTH_FORGOT_PASSWORD_FAILED });
    }
}

function* resetPasswordSaga(action) {
    try {
        yield put({ type: AC_AUTH.AUTH_RESET_PASSWORD_START });
        const dataAction = action.payload;
        const { message} = yield call(API.resetPassword, {data: dataAction.data});
        if(JSON.parse(getLocalStorage('user'))?.id && getLocalStorage('access_token')){
            yield removeLocalStorage('user');
            yield removeLocalStorage('access_token');
            yield removeLocalStorage('token_type');
        }
        yield put({ type: AC_AUTH.AUTH_RESET_PASSWORD_SUCCESS });
        yield put(push('/login'));
        yield toast.success(message,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            limit:1
        })
    }
    catch (error) {
        extractErrorMsg(error);
        yield put({ type: AC_AUTH.AUTH_RESET_PASSWORD_FAILED });
    }
}

export const authSaga = [
    takeLatest(AC_AUTH.AUTH_LOGIN, loginSaga),
    takeLatest(AC_AUTH.AUTH_REGISTER, registerSaga),
    takeLatest(AC_AUTH.AUTH_LOGOUT, logoutSaga),
    takeLatest(AC_AUTH.AUTH_FORGOT_PASSWORD, forgotPasswordSaga),
    takeLatest(AC_AUTH.AUTH_RESET_PASSWORD, resetPasswordSaga),
]