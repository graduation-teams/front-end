import React, { useEffect } from 'react';
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

function HomePage() {
    return (
        <React.Fragment>
            <SlideShow />
            <Service />
            <ProductsOne />
            <ProductsTwo />
            <ProductsThree />
            <ProductsFour />
            <ProductsFive />
            <BranchProducts />
        </React.Fragment>
    );
}

export default HomePage;
