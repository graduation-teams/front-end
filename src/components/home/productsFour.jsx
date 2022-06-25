import { Col, Row } from 'antd';
import React from 'react';
import Btn from '../cummon/button';

function ProductsFour(props) {
    return (
        <section className="product-four mb-5">
            <div className="container-1200">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div className="product-four__img">
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/home-banner-drone-2.jpg" alt="" />
                        </div>
                        <div className="content">
                            <p className="title">SOUNDLINK REVOLVE</p>
                            <p className="price">1.200.000 vnd</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                        <div className="second">
                            <div className="product-four__img">
                                <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/home-banner-usb.jpg" alt="" />
                            </div>
                            <div className="content">
                                <p className="title-buy-now">Your google assistant can help</p>
                                <p className="btn-buy-now">
                                    <Btn>BUY NOW</Btn>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                        <div className="product-four__img">
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/home-banner-charge.jpg" alt="" />
                        </div>
                        <div className="content">
                            <p className="title-buy-now">Quietcomfort 35 headphones II</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default ProductsFour;
