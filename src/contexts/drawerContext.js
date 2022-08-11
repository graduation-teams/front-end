import React, {useMemo, useState, createContext, useContext} from 'react';


export const DrawerContext =createContext(false);

export const DrawerProvider = ({children}) => {

    const [isVisibleModalProduct, setIsVisibleModalProduct] = useState(false);
    const [isVisibleModalCategories, setIsVisibleModalCategories] = useState(false);


    function closeModalProduct(){
        setIsVisibleModalProduct(false);
    }

    function toggleModalProduct(){
        setIsVisibleModalProduct(!isVisibleModalProduct);
    }

    function closeModalCategories(){
        setIsVisibleModalCategories(false);
    }

    function toggleModalCategories(){
        setIsVisibleModalCategories(!isVisibleModalCategories);
    }
    const modalProduct = useMemo(() => ({
        closeModalProduct,
        toggleModalProduct,
        isVisibleModalProduct
    }), [isVisibleModalProduct]);

    const modalCategories = useMemo(() => ({
        closeModalCategories,
        toggleModalCategories,
        isVisibleModalCategories
    }), [isVisibleModalCategories]);

    return <DrawerContext.Provider value={{DrawerProduct:modalProduct,DrawerCategories:modalCategories}}>{children}</DrawerContext.Provider>
}

export const useDrawerContext = () => useContext(DrawerContext);