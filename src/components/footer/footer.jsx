import React from 'react';

import Icon from '@ant-design/icons';
import { Layout, Row, Col, BackTop } from 'antd';
import {withErrorBoundary} from 'react-error-boundary'
import { ErrorComponent } from '@components/common';
import { ReactComponent as IconLogo1 } from '@assets/images/footer-1.svg';

const FooterComponent = () => {
    return (
        <Layout.Footer style={{ padding: 0, minHeight: '200px', backgroundColor: '#fff' }}>
            <section className="footer">
                <div className="footer__header">
                    <div className="container-1200">
                        <Row>
                            <Col sm={24} md={8} xl={8}>
                                <div className="footer-support">
                                    <Icon component={IconLogo1} />
                                    <div className="footer-sp">
                                        <h1 className="title">CALL US 24/7</h1>
                                        <p className="desc">+1 (310) 888 8808, +1 (310) 777 8808</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} md={8} xl={8}>
                                <div className="footer-support">
                                    <Icon component={IconLogo1} />
                                    <div className="footer-sp">
                                        <h1 className="title">WRITE TO US</h1>
                                        <p className="desc">electon.@gm.com , electron@gm.com</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} md={8} xl={8}>
                                <div className="footer-support">
                                    <Icon component={IconLogo1} />
                                    <div className="footer-sp">
                                        <h1 className="title">CONTACT INFO</h1>
                                        <p className="desc">USA, New York, Second Street 289</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>

            <section className="container-1200">
                <div className="footer__mid">
                    <Row>
                        <Col sm={24} md={7} xl={7} className="footer__mid--columns">
                            <h1 className="text">Sign up to Our Newsletter</h1>
                        </Col>
                        <Col sm={24} md={10} xl={10} className="footer__mid--columns">
                            <div className="input-signup">
                                <input type="text" className="text-signup" placeholder="Enter your email !" />
                                <button className="btn-signup">SIGN UP</button>
                            </div>
                        </Col>
                        <Col sm={24} md={7} xl={7} className="footer__mid--columns">
                            <div className="icon-social-media">
                                <Icon component={IconLogo1} />
                                <Icon component={IconLogo1} />
                                <Icon component={IconLogo1} />
                                <Icon component={IconLogo1} />
                                <Icon component={IconLogo1} />
                                <Icon component={IconLogo1} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section className="container-1200">
                <div className="footer__bot">
                    <Row>
                        <Col xs={24} md={12} xl={6} className="footer__bot--columns">
                            <h1 className="text">ELECTRON 01</h1>
                            <hr />
                            <ul>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={24} md={12} xl={6} className="footer__bot--columns">
                            <h1 className="text">ELECTRON 01</h1>
                            <hr />
                            <ul>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={24} md={12} xl={6} className="footer__bot--columns">
                            <h1 className="text">ELECTRON 01</h1>
                            <hr />
                            <ul>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={24} md={12} xl={6} className="footer__bot--columns">
                            <h1 className="text">ELECTRON 01</h1>
                            <hr />
                            <ul>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                                <li className="item">
                                    <a href="#">Nguyen Tinh Quan</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
                <hr />
            </section>

            <div className="container-1200">
                <p className="copyright">Copyright © 2021 XStore Theme. Created by 8theme - Premium WooCommerce Themes.</p>
            </div>
        </Layout.Footer>
    );
};

export default withErrorBoundary(FooterComponent,{
    FallbackComponent: ErrorComponent
});
