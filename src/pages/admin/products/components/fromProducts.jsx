import React, { useState, useRef } from 'react';
const { Option } = Select;
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import { Col, Row, Table, Space, Button, message, Upload, Divider, Input, Select, Checkbox, Form } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

    onChange(info) {
        const { status } = info.file;

        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }

        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },

    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
// ===Product Type=== //
let index = 0;

// ===Parent Category=== //
const onFinish = () => {
    console.log('Success:', values);
};

const onFinishFailed = () => {
    console.log('Failed:', errorInfo);
};

function FromProducts(param) {
    const [parentCategories, setParentCategories] = useState(['jack', 'lucy', 'mikey', 'draken']);
    const [childCategories, setChildCategories] = useState(['jack', 'lucy', 'mikey', 'draken']);
    const [productType, setProductType] = useState(['jack', 'lucy', 'mikey', 'draken']);

    return (
        <React.Fragment>
            <Form name="basic" wrapperCol={{ span: 24 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                <Row style={{ marginBottom: '25px' }}>
                    <Col span={6}>Category Icon</Col>
                    <Col span={18}>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                        </Dragger>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>Product SKU</Col>
                    <Col span={18}>
                        <Form.Item style={{ width: '100%' }} rules={[{ required: true, message: "Don't leave it blank" }]}>
                            <Input size="large" placeholder="Product SKU" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>Product Title/Name</Col>
                    <Col span={18}>
                        <Form.Item style={{ width: '100%' }} rules={[{ required: true, message: "Don't leave it blank" }]}>
                            <Input size="large" placeholder="Product Title/Name" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>Product Slug</Col>
                    <Col span={18}>
                        <Form.Item style={{ width: '100%' }} rules={[{ required: true, message: "Don't leave it blank" }]}>
                            <Input size="large" placeholder="Product Slug" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>Product Description</Col>
                    <Col span={18}>
                        <Form.Item>
                            <TextArea rows={4} placeholder="Product Description" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '25px' }}>
                    <Col span={6}>Parent Category</Col>
                    <Col span={18}>
                        <Select
                            style={{
                                width: '100%',
                            }}
                            size="large"
                            placeholder="Parent Category"
                            dropdownRender={menu => <>{menu}</>}
                        >
                            {parentCategories.map(item => (
                                <Option key={item}>{item}</Option>
                            ))}
                        </Select>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '25px' }}>
                    <Col span={6}>Child Category</Col>
                    <Col span={18}>
                        <Select
                            style={{
                                width: '100%',
                            }}
                            size="large"
                            placeholder="Child Category"
                            dropdownRender={menu => <>{menu}</>}
                        >
                            {childCategories.map(item => (
                                <Option key={item}>{item}</Option>
                            ))}
                        </Select>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '25px' }}>
                    <Col span={6}>Product Type</Col>
                    <Col span={18}>
                        <Select
                            style={{
                                width: '100%',
                            }}
                            size="large"
                            placeholder="Product Type"
                            dropdownRender={menu => <>{menu}</>}
                        >
                            {productType.map(item => (
                                <Option key={item}>{item}</Option>
                            ))}
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>Unit (kg/pc/lb/ml/g...etc)</Col>
                    <Col span={18}>
                        <Form.Item style={{ width: '100%' }} rules={[{ required: true, message: "Don't leave it blank" }]}>
                            <Input size="large" placeholder="Unit" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>Product Quantity</Col>
                    <Col span={18}>
                        <Form.Item style={{ width: '100%' }} rules={[{ required: true, message: "Don't leave it blank" }]}>
                            <Input size="large" placeholder="Quantity" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>Product Price</Col>
                    <Col span={18}>
                        <Form.Item style={{ width: '100%' }} rules={[{ required: true, message: "Don't leave it blank" }]}>
                            <Input size="large" placeholder="Price" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>Sale Price</Col>
                    <Col span={18}>
                        <Form.Item style={{ width: '100%' }} rules={[{ required: true, message: "Don't leave it blank" }]}>
                            <Input size="large" placeholder="Sale Price" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>Product Tag</Col>
                    <Col span={18}>
                        <Form.Item style={{ width: '100%' }} rules={[{ required: true, message: "Don't leave it blank" }]}>
                            <Input size="large" placeholder="Product Tag" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </React.Fragment>
    );
}

export default withErrorBoundary(FromProducts, {
    FallbackComponent: ErrorComponent,
});
