import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Space, InputNumber } from 'antd';
import Btn from '@components/common/button';
import TextArea from 'antd/lib/input/TextArea';
import { useCartContext } from '@contexts/cartContext';
import { formatCurrency } from '@utils/helpers';
const { Search } = Input;

function CheckoutCart(props) {
    const { dataCart, totalProduct, totalPrice, removeAllCartItem, updateQuantity } = useCartContext();
    const [quantityProduct, setQuantityPoduct] = useState(1);
    const onSearch = value => console.log(value);

    const onFinish = values => {
        console.log('Success:', values);
    };

    const handleChangeQuatity = value => {
        setQuantityPoduct(value);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const [coupon, setCoupon] = useState(false);
    function handleClickCoupon() {
        setCoupon(!coupon);
    }

    // const handleChangeQuatity = (value, item) => {
    //     // console.log('changed', idProduct);
    //     setQuantityPoduct(value);
    // };

    return (
        <div className="container-1200">
            <div className="check-out">
                <Row>
                    <Col xs={24} md={24} lg={8}>
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
                                label="Phone"
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

                            {/* <Form.Item
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
                            </Form.Item> */}
                        </Form>
                    </Col>
                    <Col xs={24} md={24} lg={16}>
                        <div className="shopping-card_bill">
                            <div className="shopping-card_bill_box">
                                <div className="shopping-card_bill_box--remove">
                                    <h3>YOUR ORDER / TOTAL: {totalProduct}</h3>
                                    <Space size={[222, 16]} wrap align="baseline" onClick={() => removeAllCartItem()}>
                                        <Button type="dashed" danger>
                                            Remove all cart
                                        </Button>
                                    </Space>
                                </div>
                                <hr />
                                {dataCart.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div className="cart-items">
                                            <div className="cart-img">
                                                <img src={item?.thumbnail} alt="" />
                                                <div className="shopping-card_bill_box_item" key={index}>
                                                    <p className="subtotal">
                                                        <span>{item?.name}</span>
                                                    </p>
                                                    {/* <span>* quantity: {item?.quantity}</span> */}
                                                    <div className="quantity-number"></div>
                                                    <span style={{ marginRight: '10px' }}>* Quantity: </span>
                                                    <InputNumber value={item?.quantity} size="large" min={1} max={item?.totalQuatity} defaultValue={1} onChange={e => updateQuantity(item.id, e)} />
                                                </div>
                                            </div>
                                            <span>{formatCurrency(item?.price * item?.quantity, 'vnđ')}</span>
                                        </div>
                                    </React.Fragment>
                                ))}

                                <hr />
                                <p className="subtotal">
                                    <span>Subtotal</span>
                                    <span>{formatCurrency(totalPrice, 'vnđ')}</span>
                                </p>
                                <p className="total">
                                    <span>TOTAL</span>
                                    <span>
                                        <strong>{formatCurrency(totalPrice, 'vnđ')}</strong>
                                    </span>
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
