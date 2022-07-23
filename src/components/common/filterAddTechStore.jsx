import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import { Col, Row, Typography, Space, Button, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
const { Option } = Select;

function FilterAddTechStore({ title, placeholderInput, isCategory, onOpenDrawer }, ...props) {
    return (
        <React.Fragment>
            <div className="section__filter-add-tech-store">
                <h4 className="section__filter-add-tech-store--title">{title}</h4>
                <Row gutter={[24, 48]} align="middle" justify="space-around" className="section__filter-add-tech-store--row">
                    <Col span={24} className="section__filter-add-tech-store--col">
                        <div className="section__filter-add-tech-store--box">
                            <Space size="large" align="center" wrap={false} className="custom--space">
                                <Input placeholder={placeholderInput} size="large" className="custom--input"/>
                                <Select size="large" className="custom--select" defaultValue="Category" style={{
                                    width: isCategory ? '430px' : '205px',
                                }}>
                                    <Option value="de2">Tu</Option>
                                    <Option value="de3">Tu</Option>
                                    <Option value="de5">Tu</Option>
                                    <Option value="de6">Tu</Option>
                                </Select>
                                {
                                    !isCategory && (
                                        <Select size="large" className="custom--select" defaultValue="Price"
                                        style={{
                                            width: isCategory ? '430px' : '205px',
                                        }}>
                                            <Option value="de2">Tu</Option>
                                            <Option value="de3">Tu</Option>
                                            <Option value="de5">Tu</Option>
                                            <Option value="de6">Tu</Option>
                                        </Select>
                                    )
                                }
                                <Button type="primary" icon={<PlusOutlined />} size="large" className="custom--button" onClick={()=>onOpenDrawer(true)}>
                                    Add {title}
                                </Button>
                            </Space>
                        </div>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}

FilterAddTechStore.propTypes = {
    title: PropTypes.string,
    placeholderInput: PropTypes.string,
    isCategory: PropTypes.bool,
    onOpenDrawer: PropTypes.func,
};

FilterAddTechStore.defaultProps = {
    title: 'Category',
    placeholderInput: 'Search by category type',
    isCategory: true,
};

export default withErrorBoundary(FilterAddTechStore, {
    FallbackComponent: ErrorComponent,
});
