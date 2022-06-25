import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import API from '@api/configureAPI';

import { Helmet } from 'react-helmet';
import Layouts from '@layouts';
import { useViewport } from '@hooks';

import SlideShow from '../../components/home/slideShow';
import Service from '../../components/home/service';
import ProductsOne from '../../components/home/productsOne';
import ProductsTwo from '../../components/home/productsTwo';
import ProductsThree from '../../components/home/productsThree';
import ProductsFour from '../../components/home/productsFour';
import ProductsFive from '../../components/home/productsFive';
import BranchProducts from '../../components/home/branchProducts';

function Home() {
    const viewPort = useViewport();
    const Elements = React.useMemo(() => {
        let arrayElements = [{ element: SlideShow }, { element: Service }, { element: ProductsOne }, { element: ProductsTwo }, { element: ProductsThree }, { element: ProductsFour }, { element: ProductsFive }, { element: BranchProducts }];
        return arrayElements;
    }, [viewPort.width]);

    const fetch = async () => {
        const response = await API.post('/auth/register/email', {
            full_name: 'Huỳnh Kim Hồng',
            email: 'kimhong212@gmail.com',
            password: 'MinhTu1401@',
        });
        const data = response;
        console.log(data);
    };

    return (
        // <>
        //     <h1>Home page</h1>
        //     <Button type="primary" onClick={() => fetch()}>
        //         Primary
        //     </Button>
        // </>
        <React.Fragment>
            <Helmet>
                <title>Trang chủ - TechStore</title>
            </Helmet>
            <Layouts childrenComponent={Elements} />
        </React.Fragment>
    );
}

export default Home;
