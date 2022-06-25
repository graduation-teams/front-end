import { Col, Row } from 'antd';
import React from 'react';

function productsFive(props) {
    return (
        <section className="products-five mb-5">
            <div className="container-1200">
                <h1 className="products-five--title">Popular categories</h1>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                        <div className="products-five__box">
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/elementor/thumbs/cat6-orsux0y77n10cnphlm24a39sg9deve9v40r4su058c.png" alt="" />
                            <p>Smart Electronic Devices</p>
                            <span>Car Video Players (2)</span>
                            <span>Batteries & Accessories</span>
                            <a href="#">View all</a>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={6} className="pl-10">
                        <div className="products-five__box">
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/elementor/thumbs/cat12-orsux0y77n10cnphlm24a39sg9deve9v40r4su058c.png" alt="" />
                            <p>Smart Electronic Devices</p>
                            <span>Car Video Players (2)</span>
                            <span>Batteries & Accessories</span>
                            <a href="#">View all</a>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={6} className="pl-10">
                        <div className="products-five__box">
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/elementor/thumbs/cat4-orsux0y77n10cnphlm24a39sg9deve9v40r4su058c.png" alt="" />
                            <p>Smart Electronic Devices</p>
                            <span>Car Video Players (2)</span>
                            <span>Batteries & Accessories</span>
                            <a href="#">View all</a>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={6} className="pl-10">
                        <div className="products-five__box">
                            <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/elementor/thumbs/2.0-1-orsux0y77n10cnphlm24a39sg9deve9v40r4su058c.jpg" alt="" />
                            <p>Smart Electronic Devices</p>
                            <span>Car Video Players (2)</span>
                            <span>Batteries & Accessories</span>
                            <a href="#">View all</a>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default productsFive;
