import React from 'react';
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import Icon from '@ant-design/icons';

import { ReactComponent as IconLogo1 } from '@assets/images/footer-1.svg';

function RegisterForm(props) {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className="header__login">
                <Icon component={IconLogo1} />
                <span>REGISTER</span>
            </div>
            <Row className="over_element">
                <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="container-1200">
                        <div className="section-form-login">
                            <Form className="form-login" name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                                <h1>REGISTER</h1>
                                <hr />

                                <Form.Item
                                    label="User name"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter your username',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        {
                                            type: 'email',
                                            required: true,
                                            message: 'Invalid email',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter your password',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    label="Password confirm"
                                    name="repassword"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter your password confirm',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login__submit">
                                        Sign Up
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default RegisterForm;