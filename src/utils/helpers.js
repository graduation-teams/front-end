import escapeRegExp from 'lodash/escapeRegExp';

/** Set item in localStorage  */
export const setLocalStorage = (itemName, data) => {
    if (!itemName || !data) return;
    return localStorage.setItem(itemName, data);
};

/** Get item in localStorage  */
export const getLocalStorage = itemName => {
    if (!itemName) return;
    return localStorage.getItem(itemName);
};

/** Remove item in localStorage  */
export const removeLocalStorage = itemName => {
    if (!itemName) return;
    return localStorage.removeItem(itemName);
};

export const SliceString = (str, length) => {
    if (length > 1 && length !== undefined) {
        return str.slice(0, length) + '...';
    } else if (str.length === 0) {
        return '';
    }
};

export const removeAccents = str => {
    if (!str) return '';
    return `${str}`
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D');
};

export const hasKeyword = (items, keyword) => {
    const re = new RegExp(escapeRegExp(removeAccents(keyword)), 'i');
    for (let i = 0; i < items.length; i += 1) {
        const result = re.test(removeAccents(items[i]));
        if (result) {
            return true;
        }
    }
    return false;
};

export const addToCart = objectProduct => {
    if (!getLocalStorage('cart')) {
        console.log('add to cart');
        let cartArray = [];
        cartArray.push(objectProduct);
        return setLocalStorage('cart', JSON.stringify(cartArray));
    }
};

export const formatCurrency = (x, showCurrencySymbol, delimiter = '.') => {
    let currency = '';
    if (showCurrencySymbol) {
        const currencyString = showCurrencySymbol.toUpperCase();
        currency = ` ${currencyString}`;
    }
    return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter) + currency;
};
