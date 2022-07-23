import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import { ScanOutlined, ShoppingCartOutlined, CreditCardOutlined, CheckCircleOutlined, SyncOutlined, CheckOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic, Typography } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as IconTruck } from '@assets/icons/truck.svg';
const { Text } = Typography;

function CardStatistic({ title, value, icon, color }, ...props) {
    return (
        <React.Fragment>
            <div className="section__statistic">
                <h4 className="title--static">{title ?? 'Dashboard Overview'}</h4>
                <Row gutter={[24, 48]} align="middle" justify="space-around" className="section__statistic--row">
                    <Col xs={24} sm={24} md={8} xl={8}>
                        <Card className="card-1">
                            <Statistic
                                title={
                                    <div className="title-statistic">
                                        <div className="title-statistic__icon">
                                            <ScanOutlined className="title-statistic__icon--custom" />
                                        </div>
                                        <Text className="title-statistic__text">Total Order</Text>
                                    </div>
                                }
                                value={890}
                                precision={0}
                                suffix="$"
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} xl={8}>
                        <Card className="card-2">
                            <Statistic
                                title={
                                    <div className="title-statistic">
                                        <div className="title-statistic__icon">
                                            <ShoppingCartOutlined className="title-statistic__icon--custom" />
                                        </div>
                                        <Text className="title-statistic__text">This Month</Text>
                                    </div>
                                }
                                value={600}
                                precision={0}
                                suffix="$"
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} xl={8}>
                        <Card className="card-3">
                            <Statistic
                                title={
                                    <div className="title-statistic">
                                        <div className="title-statistic__icon">
                                            <CreditCardOutlined className="title-statistic__icon--custom" />
                                        </div>
                                        <Text className="title-statistic__text">This Month</Text>
                                    </div>
                                }
                                value={600}
                                precision={0}
                                suffix="$"
                            />
                        </Card>
                    </Col>

                    {/* Four column*/}
                    <Col xs={24} sm={24} md={6} xl={6}>
                        <Card className="card-4">
                            <Statistic 
                            title={<Text className="title-statistic__text">Total Order</Text>} 
                            value={1128} prefix={<ShoppingCartOutlined style={{ color: '#d03801' }} />} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={6} xl={6}>
                        <Card className="card-5">
                            <Statistic title={<Text className="title-statistic__text">Order Pending</Text>} value={1128} prefix={<SyncOutlined style={{ color: '#1c64f2' }} />} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={6} xl={6}>
                        <Card className="card-6">
                            <Statistic title={<Text className="title-statistic__text">Order Processing</Text>} value={1128} prefix={<Icon component={IconTruck} style={{ color: '#047481' }} />} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={6} xl={6}>
                        <Card className="card-7">
                            <Statistic title={<Text className="title-statistic__text">Order Delivered</Text>} value={1128} prefix={<CheckOutlined style={{ color: '#057a55' }} />} />
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}

export default withErrorBoundary(CardStatistic, {
    FallbackComponent: ErrorComponent,
});
