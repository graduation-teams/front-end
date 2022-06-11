import { push } from 'connected-react-router'

const extractErrorMsg = (response) => {
    try{
        console.log(response?.error);
        let message = response
        // if(response?.error){
        //     message = response?.error.message;
        // }
        return message;
    }catch(error){
        console.error(error);
        return 'API lỗi!';
    }
}

const handleHttpCode = (response) =>{
    let status = response?.response?.status ?? 0;
    switch(status){
        case 401:
            return '/login';
        case 403:
            return '/403';
        case 404:
            return '/404';
        case 500:
            return '/500';
    }
}

export {extractErrorMsg, handleHttpCode};