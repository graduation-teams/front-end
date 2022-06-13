import React from 'react';
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import Icon from '@ant-design/icons';

import { ReactComponent as IconLogo1 } from '@assets/images/footer-1.svg';

const LoginForm = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <div className="header__login">
                <Icon component={IconLogo1} />
                LOGIN
            </div>
            <Row>
                <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="container-1200">
                        <Form className="form-login" name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                            <h1>Login</h1>
                            <hr />
                            <Form.Item
                                label="Username"
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

                            <div className="above__submit">
                                <Form.Item name="remember" valuePropName="checked">
                                    <Checkbox>Remember password</Checkbox>
                                </Form.Item>

                                <Form.Item>
                                    <a href="#">Forget password ?</a>
                                </Form.Item>
                            </div>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login__submit">
                                    Sign In
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default LoginForm;
