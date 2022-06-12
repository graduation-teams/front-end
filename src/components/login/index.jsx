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
                TÀI KHOẢN
            </div>
            <Row>
                <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="container-1200">
                        <Form className="form-login" name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                            <h1>Đăng nhập</h1>
                            <hr />
                            <Form.Item
                                label="Tài khoản"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập tài khoản của bạn !',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Mật khẩu"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập mật khẩu của bạn !',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <div className="above__submit">
                                <Form.Item name="remember" valuePropName="checked">
                                    <Checkbox>Nhớ mật khẩu</Checkbox>
                                </Form.Item>

                                <Form.Item>
                                    <a href="#">Quên mật khẩu mật khẩu</a>
                                </Form.Item>
                            </div>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login__submit">
                                    Đăng nhập
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
