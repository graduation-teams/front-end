import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import Btn from '@components/common/button';
import TextArea from 'antd/lib/input/TextArea';
import { useCartContext } from '@contexts/cartContext';
import { formatCurrency } from '@utils/helpers';
const { Search } = Input;

function CheckoutCart(props) {
    const { dataCart, totalProduct, totalPrice, removeAllCartItem } = useCartContext();
    
    const onSearch = value => console.log(value);

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const [coupon, setCoupon] = useState(false);
    function handleClickCoupon() {
        setCoupon(!coupon);
    }

    return (
        <div className="container-1200">
            <div className="check-out">
                <Row>
                    <Col xs={24} md={24} lg={12}>
                        <div className="have-cuppon">
                            Have a coupon?{' '}
                            <span className="have-cuppon_span" onClick={handleClickCoupon}>
                                Click here to enter your code
                            </span>
                            <Search
                                placeholder="Enter discount code"
                                allowClear
                                enterButton="Check"
                                size="large"
                                onSearch={onSearch}
                                style={{
                                    width: 400,
                                }}
                                className={`coupon ${coupon ? 'showCoupon' : ''}`}
                            />
                        </div>
                        <h3>BILLING DETAILS</h3>
                        <hr style={{ marginBottom: '30px' }} />
                        <Form
                            name="basic"
                            labelCol={{
                                span: 5,
                            }}
                            wrapperCol={{
                                span: 19,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="First name"
                                name="first-name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your first name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Last name"
                                name="last-name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your last name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Address"
                                name="address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your address!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="City"
                                name="city"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your city!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Phone number"
                                name="phonenumber"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                ]}
                            >
                                <Input type="number" />
                            </Form.Item>
                            <Form.Item label="Order notes" name="notes">
                                <TextArea rows={4} />
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col xs={24} md={24} lg={12}>
                        <div className="shopping-card_bill">
                            <div className="shopping-card_bill_box">
                                <Space size={[222, 16]} wrap align="baseline" onClick={()=>removeAllCartItem()}><h3>YOUR ORDER / TOTAL: {totalProduct}</h3><Button type="dashed" danger>Remove all cart</Button></Space>
                                <hr />
                                {dataCart.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div className="shopping-card_bill_box_item" key={index}>
                                            <p className="subtotal">
                                                <span>{item?.name} * quantity: {item?.quantity}</span>
                                                <span>{formatCurrency(item?.price * item?.quantity,'vnđ')}</span>
                                            </p>
                                        </div>
                                    </React.Fragment>
                                ))}
                                
                                <hr />
                                <p className="subtotal">
                                    <span>Subtotal</span>
                                    <span>{formatCurrency(totalPrice,'vnđ')}</span>
                                </p>
                                <p className="total">
                                    <span>TOTAL</span>
                                    <span><strong>{formatCurrency(totalPrice,'vnđ')}</strong></span>
                                </p>
                                <div className="warnning-checkout">
                                    <p>Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                                </div>
                                <Btn className="bg-black">PROCEED TO CHECKOUT</Btn>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default CheckoutCart;
