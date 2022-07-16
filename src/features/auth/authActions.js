import { authenticationConstants as AC } from '@constants/auth';

export const loginAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC.AUTH_LOGIN,
        };
    return {
        type: AC.AUTH_LOGIN,
        payload: dataPayload,
    };
};

export const registerAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC.AUTH_REGISTER,
        };
    return {
        type: AC.AUTH_REGISTER,
        payload: dataPayload,
    };
};

export const logoutAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC.AUTH_LOGOUT,
        };
    return {
        type: AC.AUTH_LOGOUT,
        payload: dataPayload,
    };
};

export const forgotPasswordAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC.AUTH_FORGOT_PASSWORD,
        };
    return {
        type: AC.AUTH_FORGOT_PASSWORD,
        payload: dataPayload,
    };
};

export const resetPasswordAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC.AUTH_RESET_PASSWORD,
        };
    return {
        type: AC.AUTH_RESET_PASSWORD,
        payload: dataPayload,
    };
};