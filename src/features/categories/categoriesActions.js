import { categoriesConstants as AC_CATE } from '@constants/categories';

export const fetchParameterCategoriesAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC_CATE.CATEGORIES_FETCH_PARAMETER,
        };
    return {
        type: AC_CATE.CATEGORIES_FETCH_PARAMETER,
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