import React from 'react';
import { Helmet } from 'react-helmet';
import Layouts from '@layouts';
import { useViewport } from '@hooks';
import SlideShow from '@components/home/slideShow';
import Service from '@components/home/service';
import ProductsOne from '@components/home/productsOne';
import ProductsTwo from '@components/home/productsTwo';
import ProductsThree from '@components/home/productsThree';
import ProductsFour from '@components/home/productsFour';
import ProductsFive from '@components/home/productsFive';
import BranchProducts from '@components/home/branchProducts';

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
