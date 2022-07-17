import { Row, Col } from 'antd';
import React from 'react';
import {Btn} from '@components/common';
import ItemSlideShow from './itemSlideShow';
import {withErrorBoundary} from 'react-error-boundary'
import { ErrorComponent } from '@components/common';

function ProductDetail(props) {
    return (
        <div className="product-detail">
            <section className="detail-item">
                <div className="container-1200">
                    <Row>
                        <Col sm={24} md={12} xl={12}>
                            <div className="detail-item__images">
                                <ItemSlideShow />
                            </div>
                        </Col>
                        <Col sm={24} md={12} xl={12}>
                            <div className="detail-item__content">
                                <h1 className="detail-item__content--title">Native Union SMART 4 Charger 1</h1>
                                <p className="detail-item__content--price">
                                    <strike>$90.00</strike>$70.00
                                </p>
                                <p className="detail-item__content--desc">
                                    Dimensions (WxDxH) 44.6 x 81.8 x 55 cm <br />
                                    Capacity – the number of sets of 9 sets.
                                    <br />
                                    Water consumption in the cycle of 9.9 liters
                                    <br />
                                    Annual energy consumption 222 kWh = 122.10 rubles per year
                                    <br />
                                    Noise level (washing) 51 dB
                                </p>
                                <div className="detail-item__content--quatity">
                                    <span> - </span>
                                    <input type="number" />
                                    <span> + </span>

                                    <Btn className="btn-black">Add to card</Btn>
                                </div>
                                <div className="detail-item__content--different">
                                    <p>
                                        <span>Brand: </span> <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-5.png" alt="" />
                                    </p>
                                    <p>
                                        <span>SKU: </span>32564
                                    </p>
                                    <p>
                                        <span>Category: </span>Electro
                                    </p>
                                    <p>
                                        <span>Tags: </span>bootstrap, collections, color, responsive
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
}

export default withErrorBoundary(ProductDetail, {
    FallbackComponent: ErrorComponent,
});
