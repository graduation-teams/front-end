import React, { useState, useRef } from 'react';
const { Option } = Select;
import ImgCrop from 'antd-img-crop';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import { Col, Row, Table, Space, Button, message, Upload, Divider, Input, Select, Checkbox, Form } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import { getLocalStorage } from '@utils/helpers';
import TCKEditor from '@components/common/TCKEditor';
const { Dragger } = Upload;
const props = {
    name: 'upload',
    multiple: false,
    method: 'post',
    headers: {
        Authorization: {
            toString() {
                return `${getLocalStorage('token_type')} ${getLocalStorage('access_token')}`;
            },
        },
    },
    action:  `${process.env.REACT_APP_BASE_URL_API}/media/upload/public/sub-folder/category`,

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

function FromCategories(param) {
    const [items, setItems] = useState(['jack', 'lucy']);

    return (
        <React.Fragment>
            <Form name="categories" wrapperCol={{ span: 24 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                <Row style={{ marginBottom: '45px' }} gutter={[16, 16]}>
                    <Col span={6}>Category Icon</Col>
                    <Col span={18}>
                       <Form.Item name={['categories','thumbnail']}>
                        <ImgCrop rotate>
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                        </Dragger>
                        </ImgCrop>
                       </Form.Item>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '25px' }} gutter={[16, 16]}>
                    <Col span={6}>Product Type</Col>
                    <Col span={18}>
                    <Form.Item name={['categories','types']}>
                        <Select
                            style={{
                                width: '100%',
                            }}
                            size="large"
                            placeholder="Select Items"
                            dropdownRender={menu => <>{menu}</>}
                        >
                            {items.map(item => (
                                <Option key={item}>{item}</Option>
                            ))}
                        </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={6}>Parent Category</Col>
                    <Col span={18}>
                        <Form.Item style={{ width: '100%' }} rules={[{ required: true, message: "Don't leave it blank" }]}>
                            <Input size="large" placeholder="Category Title" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={6}>Child Category</Col>
                    <Col span={18}>
                        <Form.Item style={{ width: '100%' }} rules={[{ required: true, message: "Don't leave it blank" }]}>
                            <Input size="large" placeholder="Child Category (Write then press enter to add new child category)" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={24}>Description</Col>
                    <Col span={24}>
                        <Form.Item style={{ width: '100%' }} >
                            <TCKEditor overrideHightEditor={800}/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </React.Fragment>
    );
}

export default withErrorBoundary(FromCategories, {
    FallbackComponent: ErrorComponent,
});
