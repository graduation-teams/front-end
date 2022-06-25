import { Col, Row } from 'antd';
import React from 'react';
import Icon from '@ant-design/icons';

import Icon1 from '@assets/images/award.png';
import Icon2 from '@assets/images/home-icon-2.png';
import Icon3 from '@assets/images/home-icon-3.png';
import Icon4 from '@assets/images/home-icon-4.png';

function Service(props) {
    return (
        <section className="container-1200 mb-5">
            <Row className="service">
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                    <div className="service__box__item">
                        <img src={Icon1} alt="" />
                        <p>Recommended by 99% of customers</p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                    <div className="service__box__item">
                        <img src={Icon2} alt="" />
                        <p>Saving your money for next purchases</p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                    <div className="service__box__item">
                        <img src={Icon3} alt="" />
                        <p>Delivery – when you want and anywhere</p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                    <div className="service__box__item">
                        <img src={Icon4} alt="" />
                        <p>A huge selection of best products</p>
                    </div>
                </Col>
            </Row>
        </section>
    );
}

export default Service;
