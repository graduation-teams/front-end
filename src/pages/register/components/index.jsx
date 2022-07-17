import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import { registerAction } from '@features/auth/authActions';
import { ReactComponent as IconLogo1 } from '@assets/images/footer-1.svg';
import {withErrorBoundary} from 'react-error-boundary'
import { ErrorComponent } from '@components/common';
import '../styles/index.scss';

const initValues = (f, v) => {
    return f.setFieldsValue({
        register: {
            email: v?.email ?? '',
            fullName: v?.fullName ?? '',
            password: v?.password ?? '',
            passwordConfirm: v.passwordConfirm ?? '',
        },
    });
};

function RegisterForm(props) {
    const [formRegister] = Form.useForm();
    const dispatch = useDispatch();
    const svRegister = useSelector(state => state?.auth?.register);
    const [progress, setProgress] = useState(false);

    useEffect(() => {
        if (svRegister?.pending) {
            setProgress(true);
        }
        
        if(svRegister?.success){
            console.log('register done')
            formRegister.resetFields();
        }
        return()=>{
            setProgress(false);
        }
    }, [svRegister]);
    
    const onFinish = values => {
        dispatch(
            registerAction({
                data: {
                    full_name: values.register.fullName,
                    email: values.register.email,
                    password: values.register.password,
                    password_confirm: values.register.passwordConfirm,
                },
            })
        );
    };

    const onFinishFailed = errorInfo => {
        // console.log('Failed:', errorInfo);
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
                            <Form className="form-login" form={formRegister} name="register" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" colon={false}>
                                <h1>REGISTER</h1>
                                <hr />

                                <Form.Item
                                    label="Full name"
                                    name={['register', 'fullName']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter your full name',
                                        },
                                    ]}
                                    colon={false}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Email"
                                    name={['register', 'email']}
                                    rules={[
                                        {
                                            type: 'email',
                                            required: true,
                                            message: 'Invalid email',
                                        },
                                    ]}
                                    colon={false}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name={['register', 'password']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter your password',
                                        },
                                    ]}
                                    colon={false}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    label="Password confirm"
                                    name={['register', 'passwordConfirm']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter your password confirm',
                                        },
                                    ]}
                                    colon={false}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item>
                                    <Button loading={progress} type="primary" htmlType="submit" className="login__submit" >
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

export default withErrorBoundary(RegisterForm,{
    FallbackComponent: ErrorComponent
});
