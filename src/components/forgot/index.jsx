import React from 'react';
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import {withErrorBoundary} from 'react-error-boundary'
import { ErrorComponent } from '@components/common';
import { ReactComponent as IconLogo1 } from '@assets/images/footer-1.svg';

function ForgotForm(props) {
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
                <span>Forgot Password</span>
            </div>
            <Row className="over_element">
                <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="container-1200">
                        <div className="section-form-login">
                            <Form className="form-login" name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                                <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>

                                <Form.Item
                                    label="Please enter your email here"
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

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login__submit">
                                        Reset Password
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

export default withErrorBoundary(ForgotForm,{
    FallbackComponent: ErrorComponent
});
