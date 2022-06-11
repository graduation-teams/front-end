import request from '@api/configureAPI';

const login = ({data}) => {
    return request.post('/users/login',data)
}

export default {
    login,
  };
  