import React from 'react';
import { Col, Row } from 'antd';
import {withErrorBoundary} from 'react-error-boundary'
import { ErrorComponent } from '@components/common';

function ProductsTwo(props) {
    return (
        <section className="product-two mb-5">
            <div className="container-1200">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <div className="product-two__img">
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/home-banner-charge-2.jpg" alt="" />
                            <p>Catch huge discounts</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <div className="product-two__img">
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/home-banner-phone.jpg" alt="" />
                            <p>New AirPods from $159.99</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <div className="product-two__img">
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/home-banner-drone.jpg" alt="" />
                            <p>Only new trend for you</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default withErrorBoundary(ProductsTwo, {
    FallbackComponent: ErrorComponent,
});
