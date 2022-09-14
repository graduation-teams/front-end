import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useViewport } from '@hooks';
import SlideShow from './components/slideShow';
import Service from './components/service';
import ProductsOne from './components/productsOne';
import ProductsTwo from './components/productsTwo';
import ProductsThree from './components/productsThree';
import ProductsFour from './components/productsFour';
import ProductsFive from './components/productsFive';
import BranchProducts from './components/branchProducts';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProductAction } from '@features/products/productActions';
import ProductModels from '@models/productModels';

function HomePage() {
    const dispatch = useDispatch();
    const svProducts = useSelector(state => state.products.fetchAll);
    const dataProduct = useMemo(() => {
        if (svProducts?.failed) return [];
        if (svProducts?.success && svProducts?.data?.length > 0) {
            return new ProductModels()?.handleDataApiProductSale(svProducts?.data);
        }
    }, [svProducts]);

    useEffect(() => {
        dispatch(fetchAllProductAction());
    }, []);
    // console.log('dataProduct: ', dataProduct);
    return (
        <React.Fragment>
            <SlideShow />
            <Service />
            <ProductsOne dataAPI={dataProduct} />
            <ProductsTwo />
            <ProductsThree dataAPI={dataProduct} />
            <ProductsFour />
            <ProductsFive />
            <BranchProducts />
        </React.Fragment>
    );
}

export default HomePage;
