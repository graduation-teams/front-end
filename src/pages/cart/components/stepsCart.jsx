import React from 'react';
import { Col, Row, Steps } from 'antd';
const { Step } = Steps;
import Icon, { ShoppingCartOutlined } from '@ant-design/icons';
import EmptyCart from './emptyCart';
import ShoppingCart from './shoppingCart';
import CheckoutCart from './checkoutCart';

function StepsCart(props) {
    return (
        <div className="container-1200">
            <div className="cart__steps">
                <Steps current={0}>
                    <Step title="SHOPPING CART" status='wait'/>
                    <Step title="CHECKOUT" />
                    <Step title="ORDER STATUS" />
                </Steps>
            </div>
            <EmptyCart />
            <ShoppingCart />
            <CheckoutCart />
        </div>
    );
}

export default StepsCart;
