import { productsConstants as AC_PRODUCT } from '@constants/products';

export const fetchAllProductAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC_PRODUCT.PRODUCTS_FETCH_ALL,
        };
    return {
        type: AC_PRODUCT.PRODUCTS_FETCH_ALL,
        payload: dataPayload,
    };
};


export const fetchByIdProductsAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC_PRODUCT.PRODUCTS_FETCH_BY_ID,
        };
    return {
        type: AC_PRODUCT.PRODUCTS_FETCH_BY_ID,
        payload: dataPayload,
    };
};

export const deleteByIdProductsAction = dataPayload => {
    if (typeof dataPayload === 'undefined')
        return {
            type: AC_PRODUCT.PRODUCTS_DELETE_BY_ID,
        };
    return {
        type: AC_PRODUCT.PRODUCTS_DELETE_BY_ID,
        payload: dataPayload,
    };
};