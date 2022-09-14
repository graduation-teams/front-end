import React,{ useEffect, useState} from 'react';
import { Col, Row, Table, Space, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import PropTypes from 'prop-types';
function TypeCategories({ dataAPI, callingAPI, columConfigs }, ...props) {
    

    return (
        <React.Fragment>
            <section className="section__type-categories-tech-store">
                <h4 className="section__type-categories-tech-store--title">Types</h4>
                <Row gutter={[24, 48]} align="middle" className="section__type-categories-tech-store--row" justify="start">
                    <Col span={15}>
                        <Table
                            columns={columConfigs}
                            loading={callingAPI}
                            dataSource={dataAPI}
                            className="override-ant-table-wrapper"
                            pagination={false}
                            scroll={{ x: 350, y: 540 }}
                        />
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    );
}

TypeCategories.propTypes = {
    dataAPI: PropTypes.array,
    callingAPI: PropTypes.bool,
    columConfigs: PropTypes.array,
};

TypeCategories.defaultProps = {
    dataAPI: [],
    callingAPI: false,
    columConfigs: [],
};

export default withErrorBoundary(TypeCategories, {
    FallbackComponent: ErrorComponent,
});
