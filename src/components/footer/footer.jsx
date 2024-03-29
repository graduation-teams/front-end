import React from 'react';
import { Layout, Row, Col, BackTop } from 'antd';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import Icon from '@ant-design/icons';
import { ReactComponent as IconLogo1 } from '@assets/icons/footer-1.svg';
import { ReactComponent as Ytb } from '@assets/icons/YouTube.svg';
import { ReactComponent as Fb } from '@assets/icons/Facebook.svg';
import { ReactComponent as Gg } from '@assets/icons/Google.svg';
import IconFooter1 from '@assets/images/icon-support.png';
import IconFooter2 from '@assets/images/icon-message.png';
import IconFooter3 from '@assets/images/icon-contact.png';
// import Ytb from '@assets/images/YouTube.svg';

function FooterComponent() {
    return (
        <Layout.Footer style={{ padding: 0, minHeight: '200px', backgroundColor: '#fff' }}>
            <section className="footer">
                <div className="footer__header">
                    <div className="container-1200">
                        <Row>
                            <Col sm={24} md={8} xl={8}>
                                <div className="footer-support">
                                    <img src={IconFooter1} alt="" />
                                    <div className="footer-sp">
                                        <h1 className="title">CALL US 24/7</h1>
                                        <p className="desc">+1 (310) 888 8808, +1 (310) 777 8808</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} md={8} xl={8}>
                                <div className="footer-support footer-support-margin-center">
                                    <img src={IconFooter2} alt="" />
                                    <div className="footer-sp">
                                        <h1 className="title">WRITE TO US</h1>
                                        <p className="desc">eteachstore.support@gmail.com</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} md={8} xl={8}>
                                <div className="footer-support footer-support-margin-right">
                                    <img src={IconFooter3} alt="" />
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
                                <Icon component={Ytb} />
                                <Icon component={Fb} />
                                <Icon component={Gg} />
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
                                    <a href="#">Company Information</a>
                                </li>
                                <li className="item">
                                    <a href="#">Conditions of Sales</a>
                                </li>
                                <li className="item">
                                    <a href="#">Privacy policy</a>
                                </li>
                                <li className="item">
                                    <a href="#">Returns and refunds</a>
                                </li>
                                <li className="item">
                                    <a href="#">Dispute Resolution</a>
                                </li>
                                <li className="item">
                                    <a href="#">Returns and refunds</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={24} md={12} xl={6} className="footer__bot--columns">
                            <h1 className="text">CUSTOMER SERVICE</h1>
                            <hr />
                            <ul>
                                <li className="item">
                                    <a href="#">Help Center</a>
                                </li>
                                <li className="item">
                                    <a href="#">Returns</a>
                                </li>
                                <li className="item">
                                    <a href="#">Product Recalls</a>
                                </li>
                                <li className="item">
                                    <a href="#">Feedback</a>
                                </li>
                                <li className="item">
                                    <a href="#">Contact Us</a>
                                </li>
                                <li className="item">
                                    <a href="#">Store Pickup</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={24} md={12} xl={6} className="footer__bot--columns">
                            <h1 className="text">USEFUL LINKS</h1>
                            <hr />
                            <ul>
                                <li className="item">
                                    <a href="#">Fast Shipping</a>
                                </li>
                                <li className="item">
                                    <a href="#">PayPal/Secure Payment</a>
                                </li>
                                <li className="item">
                                    <a href="#">30 Days Return Policy</a>
                                </li>
                                <li className="item">
                                    <a href="#">Business Development</a>
                                </li>
                                <li className="item">
                                    <a href="#">Terms of Us</a>
                                </li>
                                <li className="item">
                                    <a href="#">Returns and refunds</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={24} md={12} xl={6} className="footer__bot--columns">
                            <h1 className="text">LET US HELP YOU</h1>
                            <hr />
                            <ul>
                                <li className="item">
                                    <a href="#">Feedback</a>
                                </li>
                                <li className="item">
                                    <a href="#">30 Days Return Policy</a>
                                </li>
                                <li className="item">
                                    <a href="#">Returns and refunds</a>
                                </li>
                                <li className="item">
                                    <a href="#">Dispute Resolution</a>
                                </li>
                                <li className="item">
                                    <a href="#">Returns and refunds</a>
                                </li>
                                <li className="item">
                                    <a href="#">Conditions of Sales</a>
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
}

export default withErrorBoundary(FooterComponent, {
    FallbackComponent: ErrorComponent,
});
