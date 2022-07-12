import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import { loginAction } from '@features/auth/authActions';
import Icon from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconLogo1 } from '@assets/images/footer-1.svg';
import {withErrorBoundary} from 'react-error-boundary'
import { ErrorComponent } from '@components/common';

const initValues = (f, v) => {
    return f.setFieldsValue({
        login: {
            email: v?.email ?? '',
            password: v?.password ?? '',
        },
    });
};

const LoginForm = () => {
    const [formLogin] = Form.useForm();
    const dispatch = useDispatch();
    const svLogin = useSelector(state => state?.auth?.login);
    const [progress, setProgress] = useState(false);


    useEffect(() => {
        if (svLogin?.pending) {
            setProgress(true);
        }
        
        if(svLogin?.success){
            formLogin.resetFields();
        }
        return()=>{
            setProgress(false);
        }
    }, [svLogin]);

    const onFinish = values => {
        dispatch(loginAction(
            {
                data: {
                    email: values.login.email,
                    password: values.login.password,
                },
            }
        ));
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className="header__login">
                <Icon component={IconLogo1} />
                <span>LOGIN</span>
            </div>
            <Row className="over_element">
                <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="container-1200">
                        <div className="section-form-login">
                            <Form form={formLogin} className="form-login" name="login" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                                <h1>Login</h1>
                                <hr />
                                <Form.Item
                                    label="Email"
                                    name={['login','email']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter your email address',
                                        },
                                        {
                                            type: 'email',
                                            message: 'Invalid email',
                                        }
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name={['login','password']}
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
                                        <a href="/forgot-password">Forget password ?</a>
                                    </Form.Item>
                                </div>

                                <Form.Item>
                                    <Button loading={progress} type="primary" htmlType="submit" className="login__submit">
                                        Sign In
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

export default withErrorBoundary(LoginForm,{
    FallbackComponent: ErrorComponent
});
