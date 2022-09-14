import { toast } from 'react-toastify';

const extractErrorMsg = (messageError) => {
    try{
        if(process.env.NODE_ENV === 'development'){
            console.error('API register failed', messageError)
        }
        const { response } = messageError;
        console.log('data', response?.data)    
        if(typeof response?.data?.message === 'string'){
            return toast.error(response?.data?.message);
        }else if(response?.data?.message?.length>=1){
            return response?.data?.message?.forEach((item)=>toast.error(item));
        }
        
    }catch(error){
        console.error(error);
        return toast.error('API Error!');
    }
}

const handleHttpCode = (response) =>{
    // let status = response?.response?.status ?? 0;
    const status = response?.response?.status ?? 200;
    switch(status){
        case 401:
            return '/login';
        case 403:
            return '/not-authorized';
        case 404:
            return '/not-found';
        case 500:
            return '/server-died';
        default:
            return '/';
    }
}

export {extractErrorMsg, handleHttpCode};