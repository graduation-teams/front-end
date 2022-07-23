import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Row, Col } from 'antd';
import { resetPasswordAction } from '@features/auth/authActions';
import Icon from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconLogo1 } from '@assets/icons/footer-1.svg';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import { useQuery } from '@hooks';

const initValues = (f, v) => {
    return f.setFieldsValue({
        resetPassword: {
            email: v?.email ?? '',
            password: v?.password ?? '',
        },
    });
};

const ResetPasswordForm = () => {
    const query = useQuery();
    const [formResetPassword] = Form.useForm();
    const dispatch = useDispatch();
    const [tokenUrl, setTokenUrl] = useState(null);
    const svResetPassword = useSelector(state => state?.auth?.resetPassword);
    const [progress, setProgress] = useState(false);

    useEffect(() => {
        console.log('query', query.get('token'));
        if (query.get('token') !== null) {
            setTokenUrl(query.get('token'));
        }
    }, []);

    useEffect(() => {
        if (svResetPassword?.pending) {
            setProgress(true);
        }

        if (svResetPassword?.success) {
            formResetPassword.resetFields();
        }
        return () => {
            setProgress(false);
        };
    }, [svResetPassword]);

    const onFinish = values => {
        dispatch(
            resetPasswordAction({
                data: {
                    token: tokenUrl??'',
                    email: values.resetPassword.email,
                    password: values.resetPassword.password,
                },
            })
        );
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className="header__login">
                <Icon component={IconLogo1} />
                <span>RESET PASSWORD</span>
            </div>
            <Row className="over_element">
                <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="container-1200">
                        <div className="section-form-login">
                            <Form form={formResetPassword} className="form-login" name="resetPassword" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                                <h1>Reset password</h1>
                                <hr />
                                <Form.Item
                                    label="Email"
                                    name={['resetPassword', 'email']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter your email address',
                                        },
                                        {
                                            type: 'email',
                                            message: 'Invalid email',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name={['resetPassword', 'password']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter your password',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item>
                                    <Button loading={progress} type="primary" htmlType="submit" className="login__submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default withErrorBoundary(ResetPasswordForm, {
    FallbackComponent: ErrorComponent,
});
