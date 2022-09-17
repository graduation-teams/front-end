import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import ProductDetail from './components/productDetail';
import ProductDescription from './components/productDescription';
import RelatedProducts from './components/relatedProducts';
import ProductsThree from '../home/components/productsThree';
import ItemSlideShow from './components/itemSlideShow';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBySlugProductsAction } from '@features/products/productActions';
import ProductModels from '@models/productModels';

function ProductDetailPage() {
    const dispatch = useDispatch();
    const { slug } = useParams();
    const svProductDetail = useSelector(state => state.products.fetchBySlug);
    const [urlCurrent, setUrlCurrent] = useState(null);

    const dataProductDetail = useMemo(() => {
        if (svProductDetail?.failed) return {};
        if (svProductDetail?.success && typeof svProductDetail?.data === 'object') {
            return new ProductModels(svProductDetail?.data);
        }
        return {};
    }, [svProductDetail]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUrlCurrent(slug);
        }
    }, [slug]);

    useEffect(() => {
        if (urlCurrent !== null) {
            console.log('urlCurrent', urlCurrent);
            dispatch(fetchBySlugProductsAction({ slugCurrent: urlCurrent }));
        }
    }, [urlCurrent]);

    return (
        <React.Fragment>
            <Helmet>
                <title>Product Detail{urlCurrent !== null ? ` - ${urlCurrent}` : ''}</title>
            </Helmet>
            <ProductDetail dataAPI={dataProductDetail} />
            <ProductDescription />
            <RelatedProducts />
        </React.Fragment>
    );
}

export default ProductDetailPage;
