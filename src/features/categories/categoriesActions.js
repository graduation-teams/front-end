import { categoriesConstants as AC_CATE } from '@constants/categories';

export const fetchAllCategoriesAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC_CATE.CATEGORIES_FETCH_ALL,
        };
    return {
        type: AC_CATE.CATEGORIES_FETCH_ALL,
        payload: dataPayload,
    };
};


export const fetchByIdCategoriesAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC_CATE.CATEGORIES_FETCH_BY_ID,
        };
    return {
        type: AC_CATE.CATEGORIES_FETCH_BY_ID,
        payload: dataPayload,
    };
};


export const updateByIdCategoriesAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC_CATE.CATEGORIES_UPDATE_BY_ID,
        };
    return {
        type: AC_CATE.CATEGORIES_UPDATE_BY_ID,
        payload: dataPayload,
    };
};

export const createCategoriesAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC_CATE.CATEGORIES_CREATE,
        };
    return {
        type: AC_CATE.CATEGORIES_CREATE,
        payload: dataPayload,
    };
};

export const deleteByIdCategoriesAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC_CATE.CATEGORIES_DELETE_BY_ID,
        };
    return {
        type: AC_CATE.CATEGORIES_DELETE_BY_ID,
        payload: dataPayload,
    };
};