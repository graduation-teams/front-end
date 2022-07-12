import request from '@api/configureAPI';

const login = ({data}) => {
    return request.post('/auth/login/email',data)
}

const register = ({data}) => {
    return request.post('/auth/register/email',data)
}

export default {
    login,
    register
  };
  