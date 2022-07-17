import React from 'react';
import { Helmet } from 'react-helmet';
import Layouts from '@layouts';
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
    const viewPort = useViewport();
    const Elements = React.useMemo(() => {
        let arrayElements = [{ element: SlideShow }, { element: Service }, { element: ProductsOne }, { element: ProductsTwo }, { element: ProductsThree }, { element: ProductsFour }, { element: ProductsFive }, { element: BranchProducts }];
        return arrayElements;
    }, [viewPort.width]);

    return (
        <React.Fragment>
            <Helmet>
                <title>Home - TechStore</title>
            </Helmet>
            <Layouts childrenComponent={Elements} />
        </React.Fragment>
    );
}

export default HomePage;
