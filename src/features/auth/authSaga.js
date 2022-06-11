import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { push,goBack } from 'connected-react-router';
import { useSelector } from 'react-redux';
import API from './authAPI';
import { authenticationConstants as AC_AUTH } from '@constants/auth';
import { userConstants as AC_USER } from '@constants/user';
import {setLocalStorage, removeLocalStorage, getLocalStorage} from '@utils/helpers';
import {handleHttpCode, extractErrorMsg} from '@api/httpCode';

function* loginSaga(action) {
    try {
        yield put({ type: AC_AUTH.AUTH_LOGIN_START });
        const dataAction = action.payload;
        const {data} = yield call(API.login, {data: dataAction.data});
        console.log('logged', data)
        if(typeof getLocalStorage('user')&&getLocalStorage('token') !== 'undefined'){
            yield removeLocalStorage('user');
            yield removeLocalStorage('token');
        }
        yield setLocalStorage('token', data.token);
        yield setLocalStorage('user', JSON.stringify(data));
        yield put({type:AC_USER.SET_INFO_USER, payload: data});
        yield put({ type: AC_AUTH.AUTH_LOGIN_SUCCESS });
        message.success('Đăng nhập thành công!');
        yield put(push('/'));
        
    }
    catch (error) {
        yield put({ type: AC_AUTH.AUTH_LOGIN_FAILED });
        console.error('API login failed', error)
        message.error('Đăng nhập thất bại!');
    }
}

export const authSaga = [
    takeLatest(AC_AUTH.AUTH_LOGIN, loginSaga),
]