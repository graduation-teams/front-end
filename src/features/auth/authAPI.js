import request from '@api/configureAPI';

const login = ({data}) => {
    return request.post('/auth/login/email',data)
}

const register = ({data}) => {
    return request.post('/auth/register/email',data)
}

const forgotPassword = ({data}) => {
    return request.post('/auth/forgot-password',data)
}

const logout = () => {
    return request.post('/auth/logout')
}

const resetPassword = ({data}) => {
    return request.post('/auth/reset-password',data)
}

export default {
    login,
    register,
    forgotPassword,
    logout,
    resetPassword
  };
  