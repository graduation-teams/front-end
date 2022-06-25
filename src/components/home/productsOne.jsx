import { Col, Row } from 'antd';
import React from 'react';
import Btn, { BtnHover } from '../cummon/button';
import Rating from '../cummon/rate';
import Icon from '@ant-design/icons';

import { ReactComponent as IconLogo1 } from '@assets/images/footer-1.svg';

function ProductsOne(props) {
    return (
        <section className="products-one mb-5">
            <div className="container-1200">
                <Row>
                    <Col xs={24} sm={24} md={11} lg={7} xl={7} className="products-one__left">
                        <a href="#">
                            <div className="products-one__left--img">
                                <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/30.jpg" alt="" />
                            </div>
                            <div className="products-one__left--inner">
                                <p className="title">DJI Phantom 4 Pro</p>
                                <p className="branch">Apple</p>
                                <Rating />
                                <p className="price">3.600.000 vnđ</p>
                                <div className="available">
                                    <span className="available-color">
                                        Available: <em>269</em>
                                    </span>
                                    <span>
                                        Sold: <em>65</em>
                                    </span>
                                </div>
                                <div className="products-one__left--btn">
                                    <BtnHover>Add to cart</BtnHover>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs={24} sm={24} md={13} lg={17} xl={17}>
                        <div className="products-box ml-10">
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <a href="#" className="product-item">
                                        <div className="product-item--img">
                                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/1.1-1.jpg" alt="" />
                                        </div>
                                        <div className="product-item--icon">
                                            <div className="product-item--icon_card">
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                            </div>
                                        </div>
                                        <span className="sale">SALE</span>
                                        <div className="desc">
                                            <p className="title">Native Union SMART 4 Charger 1</p>
                                            <p className="branch">LG</p>
                                            <p className="price">
                                                <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                            </p>
                                        </div>
                                    </a>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <a href="#" className="product-item">
                                        <div className="product-item--img">
                                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.2-2.jpg" alt="" />
                                        </div>
                                        <div className="product-item--icon">
                                            <div className="product-item--icon_card">
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <p className="title">Native Union SMART 4 Charger 1</p>
                                            <p className="branch">LG</p>
                                            <p className="price">
                                                <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                            </p>
                                        </div>
                                    </a>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <a href="#" className="product-item">
                                        <div className="product-item--img">
                                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1-3.jpg" alt="" />
                                        </div>
                                        <div className="product-item--icon">
                                            <div className="product-item--icon_card">
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <p className="title">Native Union SMART 4 Charger 1</p>
                                            <p className="branch">LG</p>
                                            <p className="price">
                                                <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                            </p>
                                        </div>
                                    </a>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <a href="#" className="product-item">
                                        <div className="product-item--img">
                                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1.jpg" alt="" />
                                        </div>
                                        <div className="product-item--icon">
                                            <div className="product-item--icon_card">
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <p className="title">Native Union SMART 4 Charger 1</p>
                                            <p className="branch">LG</p>
                                            <p className="price">
                                                <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                            </p>
                                        </div>
                                    </a>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <a href="#" className="product-item">
                                        <div className="product-item--img">
                                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1.jpg" alt="" />
                                        </div>
                                        <div className="product-item--icon">
                                            <div className="product-item--icon_card">
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <p className="title">Native Union SMART 4 Charger 1</p>
                                            <p className="branch">LG</p>
                                            <p className="price">
                                                <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                            </p>
                                        </div>
                                    </a>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <a href="#" className="product-item">
                                        <div className="product-item--img">
                                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/1.1-1.jpg" alt="" />
                                        </div>
                                        <div className="product-item--icon">
                                            <div className="product-item--icon_card">
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <p className="title">Native Union SMART 4 Charger 1</p>
                                            <p className="branch">LG</p>
                                            <p className="price">
                                                <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                            </p>
                                        </div>
                                    </a>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <a href="#" className="product-item">
                                        <div className="product-item--img">
                                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.2-2.jpg" alt="" />
                                        </div>
                                        <div className="product-item--icon">
                                            <div className="product-item--icon_card">
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <p className="title">Native Union SMART 4 Charger 1</p>
                                            <p className="branch">LG</p>
                                            <p className="price">
                                                <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                            </p>
                                        </div>
                                    </a>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <a href="#" className="product-item">
                                        <div className="product-item--img">
                                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.1-3.jpg" alt="" />
                                        </div>
                                        <div className="product-item--icon">
                                            <div className="product-item--icon_card">
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                                <Icon component={IconLogo1} />
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <p className="title">Native Union SMART 4 Charger 1</p>
                                            <p className="branch">LG</p>
                                            <p className="price">
                                                <del>1.600.000 vnđ</del> 1.200.000 vnđ
                                            </p>
                                        </div>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default ProductsOne;
