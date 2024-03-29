import { Row, Col, InputNumber } from 'antd';
import React from 'react';
import { Btn } from '@components/common';
import ItemSlideShow from './itemSlideShow';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import PropTypes from 'prop-types';

const onChange = value => {
    console.log('changed', value);
};

function ProductDetail({dataAPI},...props) {
    return (
        <div className="product-detail">
            <section className="detail-item">
                <div className="container-1200">
                    <Row>
                        <Col sm={24} md={10} xl={10}>
                            <div className="detail-item__images">
                                <ItemSlideShow />
                            </div>
                        </Col>
                        <Col sm={24} md={14} xl={14}>
                            <div className="detail-item__content">
                                <h1 className="detail-item__content--title">{dataAPI?.name}</h1>
                                <p className="detail-item__content--price">
                                    {dataAPI?.discountPrice > 0 ? <React.Fragment>
                                        <strike>${dataAPI?.unitPrice}</strike>
                                        <span>${dataAPI?.discountPrice}</span>
                                    </React.Fragment> : <span>${dataAPI?.unitPrice}</span>}
                                </p>
                                <div className="detail-item__content--desc" dangerouslySetInnerHTML={{__html: dataAPI?.description}}/>
                                <div className="detail-item__content--quatity" style={{marginTop:'25px'}}>
                                    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                                    <Btn className="btn-black">Add to card</Btn>
                                </div>
                                <div className="detail-item__content--different">
                                    <p>
                                        <span>BRAND: </span> <img src="https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/10/electron-logo-5.png" alt="" />
                                    </p>
                                    <p>
                                        <span>QUANTITY: </span>{dataAPI?.quantity}
                                    </p>
                                    <p>
                                        <span>SKU: </span>{dataAPI?.sku}
                                    </p>
                                    <p>
                                        <span>CATEGORY: </span>Electro
                                    </p>
                                    <p>
                                        <span>TAGS: </span>bootstrap, collections, color, responsive
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
ProductDetail.propTypes = {
    dataAPI: PropTypes.object,
};

ProductDetail.defaultProps = {
    dataAPI: {},
}
export default withErrorBoundary(ProductDetail, {
    FallbackComponent: ErrorComponent,
});
