import { userConstants as AC } from '@constants/user';

export const setInfoUserAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC.SET_INFO_USER,
        };
    return {
        type: AC.SET_INFO_USER,
        payload: dataPayload,
    };
};