import UserModels from '@models/userModels';
import {getLocalStorage} from '@utils/helpers';

const getPreloadState = () => {
    let state = {};
    const dataInLocalStorage = getLocalStorage('user');
    if (typeof window !== 'undefined') {
       if(dataInLocalStorage){
           state = {
               user: {
                     info: new UserModels(JSON.parse(dataInLocalStorage))
               }
           }
       }else{
              state = {
                user: {
                     info: new UserModels({})
                }
              }
       }
    }
    return state;
}
export { getPreloadState };