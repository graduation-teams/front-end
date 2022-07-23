import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import {withErrorBoundary} from 'react-error-boundary'
import { ErrorComponent } from '@components/common';

function StatisticalProducts(param) { 
    return(
        <React.Fragment>
            <Row gutter={16}>
              <Col span={6}>
                <Card>
                  <Statistic
                    title="Total products"
                    value={11.28}
                    precision={2}
                    valueStyle={{
                      color: '#3f8600',
                    }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Statistic
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{
                      color: '#cf1322',
                    }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>
        </React.Fragment>
    )
 }

export default withErrorBoundary(StatisticalProducts,{
    FallbackComponent: ErrorComponent
});