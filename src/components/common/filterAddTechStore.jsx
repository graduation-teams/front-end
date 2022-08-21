import React, {useEffect} from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import { Col, Row, Typography, Space, Button, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import { useDrawerContext } from '@contexts/drawerContext';
import { useFilterContext } from '@contexts/filterContext';
import { useKeywordContext } from '@contexts/keywordContext';

const { Option } = Select;


function FilterAddTechStore({ title, placeholderInput, isCategories }, ...props) {
    const { DrawerProduct, DrawerCategories } = useDrawerContext();
    const { keywordValue, handleSetKeyword } = useKeywordContext();
    const { handleFilter, filterValue } = useFilterContext();

    function handleChange(e){
        handleSetKeyword(e.target.value);
    }


    return (
        <React.Fragment>
            <div className="section__filter-add-tech-store">
                <h4 className="section__filter-add-tech-store--title">{title}</h4>
                <Row gutter={[24, 48]} align="middle" justify="space-around" className="section__filter-add-tech-store--row">
                    <Col span={24} className="section__filter-add-tech-store--col">
                        <div className="section__filter-add-tech-store--box">
                            <Space size="large" align="center" wrap={false} className="custom--space">
                                <Input placeholder={placeholderInput} size="large" className="custom--input" onChange={handleChange}/>
                                <Select size="large" className="custom--select" defaultValue="all" style={{
                                    width: isCategories ? '430px' : '205px',
                                }} onChange={(value, option)=>handleFilter(value)}>
                                    <Option value="all" key="all">All</Option>
                                    <Option value="blog" key="blog">Blogs</Option>
                                    <Option value="product" key="product">Products</Option>
                                </Select>
                                {
                                    !isCategories && (
                                        <Select size="large" className="custom--select" defaultValue="Price"
                                        style={{
                                            width: isCategories ? '430px' : '205px',
                                        }}>
                                            <Option value="de2">Tu</Option>
                                            <Option value="de3">Tu</Option>
                                            <Option value="de5">Tu</Option>
                                            <Option value="de6">Tu</Option>
                                        </Select>
                                    )
                                }
                                <Button type="primary" icon={<PlusOutlined />} size="large" className="custom--button" onClick={(e)=>isCategories ? DrawerCategories?.toggleModalCategories() : DrawerProduct?.toggleModalProduct()}>
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
    isCategories: PropTypes.bool,
};

FilterAddTechStore.defaultProps = {
    title: 'Categories',
    placeholderInput: 'Search by category type',
    isCategories: false,
};

export default withErrorBoundary(FilterAddTechStore, {
    FallbackComponent: ErrorComponent,
});
