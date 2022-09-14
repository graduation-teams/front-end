import { typeConstants as AC_TYPE } from '@constants/typeCategories';

export const fetchAllTypeCategoriesAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC_TYPE.TYPE_FETCH_ALL,
        };
    return {
        type: AC_TYPE.TYPE_FETCH_ALL,
        payload: dataPayload,
    };
};


export const fetchByIdTypeCategoriesAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC_TYPE.TYPE_FETCH_BY_ID,
        };
    return {
        type: AC_TYPE.TYPE_FETCH_BY_ID,
        payload: dataPayload,
    };
};

export const updateByIdTypeCategoriesAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC_TYPE.TYPE_UPDATE_BY_ID,
        };
    return {
        type: AC_TYPE.TYPE_UPDATE_BY_ID,
        payload: dataPayload,
    };
};

export const createTypeCategoriesAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC_TYPE.TYPE_CREATE,
        };
    return {
        type: AC_TYPE.TYPE_CREATE,
        payload: dataPayload,
    };
};

export const deleteByIdTypeCategoriesAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC_TYPE.TYPE_DELETE_BY_ID,
        };
    return {
        type: AC_TYPE.TYPE_DELETE_BY_ID,
        payload: dataPayload,
    };
};