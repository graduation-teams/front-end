import React from 'react';
import { Col, InputNumber, Row, Space, Table, Tag } from 'antd';
import Btn from '@components/common/button';

const onChange = value => {
    console.log('changed', value);
};

const columns = [
    {
        title: 'IMAGE',
        dataIndex: 'image',
        key: 'image',
        render: image => <img src={image} className="img__item__cart" />,
    },
    {
        title: 'PRODUCT NAME',
        dataIndex: 'product',
        key: 'product',
    },
    {
        title: 'PRICE',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'QUANTITY',
        dataIndex: 'quantity',
        key: 'quantity',
        render: quantity => <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />,
    },
    {
        title: 'SUBTOTAL',
        key: 'subtotal',
        dataIndex: 'subtotal',
    },
];
const data = [
    {
        key: '1',
        product: 'Iphone 12',
        image: 'https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/2.2-4.jpg',
        price: 32000000,
    },
    {
        key: '2',
        product: 'Iphone 12',
        image: 'https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/3.1-7.jpg',
        price: 42,
    },
    {
        key: '3',
        product: 'Iphone 12',
        image: 'https://xstore.8theme.com/elementor/demos/electron01/wp-content/uploads/sites/31/2018/09/1.1-1.jpg',
        price: 32,
    },
];

function ShoppingCart(props) {
    return (
        <div className="shopping-cart">
            <Row>
                <Col xs={24} md={24} lg={16}>
                    <Table columns={columns} dataSource={data} />
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <div className="shopping-card_bill">
                        <div className="shopping-card_bill_box">
                            <h3>CART TOTALS</h3>
                            <hr />
                            <p className="subtotal">
                                <span>Subtotal</span>
                                <span>$70.00</span>
                            </p>
                            <p className="total">
                                <span>TOTAL</span>
                                <span>$70.00</span>
                            </p>
                            <Btn className="bg-black">PROCEED TO CHECKOUT</Btn>
                        </div>

                        <br />

                        <div className="payment">
                            <h3>PAYMENT SECURITY</h3>
                            <hr />
                            <p>Encryption ensures increased transaction security. SSL technology protects data linked to personal and payment info.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ShoppingCart;
