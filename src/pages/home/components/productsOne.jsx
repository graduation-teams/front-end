import { Col, Row, Card } from 'antd';
import { Btn, BtnHover, Rating } from '@components/common';
import Icon from '@ant-design/icons';
import { ReactComponent as IconLogo1 } from '@assets/icons/Bag_alt_light.svg';
import { ReactComponent as IconLogo2 } from '@assets/icons/Copy_light.svg';
import { ReactComponent as IconLogo3 } from '@assets/icons/Pin_light.svg';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

function ProductsOne({ dataAPI }, ...props) {
    const [visible, setVisible] = useState(6);

    const showMoreItems = () => {
        setVisible(prevValue => prevValue + 3);
    };

    return (
        <section className="products-one mb-5">
            <div className="container-1200">
                <Row>
                    <Col xs={24} sm={24} md={11} lg={7} xl={7} className="products-one__left">
                        <a href="#" className="products-one__left--box">
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
                                {dataAPI?.slice(0, visible)?.map(item => (
                                    <Col key={item?.key} xs={12} sm={12} md={12} lg={8} xl={8} className="p-2 mb20">
                                        <Link to={`/product-detail/${item?.slug}`} className="product-item">
                                            <Card
                                                hoverable
                                                style={{
                                                    width: 240,
                                                }}
                                                cover={<img alt="example" src={item?.thumbnailUrl} />}
                                            >
                                                <div className="product-item--icon">
                                                    <div className="product-item--icon_card">
                                                        <Icon component={IconLogo1} />
                                                        <Icon component={IconLogo2} />
                                                        <Icon component={IconLogo3} />
                                                    </div>
                                                </div>
                                                <span className="sale">SALE</span>
                                                <div className="desc">
                                                    <p className="title">{item?.name}</p>
                                                    <p className="price">
                                                        <del>{item?.unitPrice} vnđ</del> {item?.discountPrice} vnđ
                                                    </p>
                                                </div>
                                            </Card>
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Btn onClick={showMoreItems}>Xem thêm</Btn>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default withErrorBoundary(ProductsOne, {
    FallbackComponent: ErrorComponent,
});
