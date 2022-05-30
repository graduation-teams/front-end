import UserModels from '~/models/userModels';
import {getLocalStorage} from '~/utils/helpers';

export default function getPreloadState() {
    let state = {};
    const dataInLocalStorage = getLocalStorage('user');
    if (typeof window !== 'undefined') {
       if(dataInLocalStorage){
           state = {
               user: {
                     current: new UserModels(JSON.parse(dataInLocalStorage))
               }
           }
       }else{
              state = {
                user: {
                     current: new UserModels({})
                }
              }
       }
    }
    return state;
}