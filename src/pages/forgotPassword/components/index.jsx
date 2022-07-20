import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordAction } from '@features/auth/authActions';
import Icon from '@ant-design/icons';
import {withErrorBoundary} from 'react-error-boundary'
import { ErrorComponent } from '@components/common';
import { ReactComponent as IconLogo1 } from '@assets/icons/footer-1.svg';


const initValues = (f, v) => {
    return f.setFieldsValue({
        forgotPassWord: {
            email: v?.email ?? '',
        },
    });
};

function ForgotForm(props) {
    const [formForgot] = Form.useForm();
    const dispatch = useDispatch();
    const svForgotPassword = useSelector(state => state?.auth?.forgotPassword);
    const [progress, setProgress] = useState(false);

    useEffect(() => {
        if (svForgotPassword?.pending) {
            setProgress(true);
        }
        
        if(svForgotPassword?.success){
            formForgot.resetFields();
        }
        return()=>{
            setProgress(false);
        }
    }, [svForgotPassword]);

    const onFinish = values => {
        dispatch(forgotPasswordAction({
                data: {
                    email: values?.forgotPassWord?.email,
                },
        }))
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
                            <Form className="form-login" form={formForgot} name="forgotPassWord" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                                <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>

                                <Form.Item
                                    label="Please enter your email here"
                                    name={["forgotPassWord","email"]}
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
                                    <Button loading={progress} type="primary" htmlType="submit" className="login__submit">
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
