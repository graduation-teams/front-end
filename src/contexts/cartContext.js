import React, { useMemo, useState, createContext, useContext, useEffect } from 'react';
import { getLocalStorage, removeLocalStorage, setLocalStorage, addToCart } from '@utils/helpers';
export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [isAddToCarted, setIsAddToCarted] = useState(false);
    const [arrayCart, setArrayCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (JSON.parse(getLocalStorage('cart'))?.length > 0) {
            setArrayCart(JSON.parse(getLocalStorage('cart')));
        }
    }, []);

    useEffect(() => {
        if (arrayCart.length > 0) {
            setIsAddToCarted(true);
        }
        setTotal(arrayCart.reduce((a, b) => a + b.price * b.quantity, 0));
        const timeLoading = setTimeout(() => {
            setLoading(false);
        }, 2000);
        setIsAddToCarted(true);
        setLocalStorage('cart', JSON.stringify(arrayCart));
        return () => {
            clearTimeout(timeLoading);
        };
    }, [arrayCart]);

    function addToCart({ item }) {
        setLoading(true);
        const isItem = arrayCart.find(x => x.id === item.id);
        if (isItem) {
            const newArrayCart = arrayCart.map(x => {
                if (x.id === item.id) {
                    return { ...x, quantity: x.quantity + item.quantity };
                }
                return x;
            });
            setArrayCart(newArrayCart);
        } else {
            setArrayCart([...arrayCart, item]);
        }
    }

    function updateQuantity(id, quantity) {
        const newArray = arrayCart.map(item => {
            if (item.id === id) {
                return { ...item, quantity };
            }
            return item;
        });
        setArrayCart(newArray);
    }

    function removeCartItem(params) {
        const newArray = arrayCart.filter(item => item.id !== params.id);
        setArrayCart(newArray);
    }

    function removeAllCartItem() {
        setArrayCart([]);
        removeLocalStorage('cart');
    }

    const cartContextValue = useMemo(
        () => ({
            isItem: isAddToCarted,
            totalProduct: arrayCart.length,
            totalPrice: total,
            dataCart: arrayCart,
            addToCart,
            updateQuantity,
            removeCartItem,
            removeAllCartItem,
            loadingAdd: loading,
        }),
        [arrayCart, loading, total]
    );

    return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
