import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { MenuFoldOutlined, MenuUnfoldOutlined, DashboardOutlined, UsergroupAddOutlined, LaptopOutlined, GlobalOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const { Text } = Typography;


const ITEMS = [
    {
        key: '1',
        icon: <GlobalOutlined />,
        label: <Link to="/"><Text style={{color:'#fff'}}>Overviews</Text></Link>,
    },
    {
        key: 'dashboard',
        icon: <DashboardOutlined />,
        label: 'Dashboard',
    },
    {
        key: '3',
        icon: <UsergroupAddOutlined />,
        label: 'Manage users',
    },
    {
        key: '4',
        icon: <LaptopOutlined />,
        label: 'Manage products',
    },
];

function AdminLayouts({ childrenComponent, ...props }) {
    const [components, setComponents] = useState([]);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        if (childrenComponent.length > 0) {
            setComponents(childrenComponent);
        }
    }, [childrenComponent]);

    return (
        <React.Fragment>
            <Layout style={typeof window === 'undefined' ? { display: 'none' } : { backgroundColor: '#ffffff' }}>
                <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']} items={ITEMS} />
                </Layout.Sider>
                <Layout className="site-layout">
                    <Layout.Header
                        className="site-layout-background"
                    >
                        <Row gutter={16} align="middle" justify="space-around" className="header-row-top" wrap={false}>
                            <Col xs={24} sm={24} md={24} xl={4}>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                            })}
                            </Col>
                            <Col xs={24} sm={24} md={24} xl={20} >
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                            })}
                            </Col>
                        </Row>
                        
                    </Layout.Header>
                    <Layout.Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            height: '800px',
                        }}
                    >
                        {components && components.length > 0
                        ? components.map(({ element: Element }, index) => {
                              return <Element key={index} />;
                          })
                        : null}
                    </Layout.Content>
                    <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
                </Layout>
            </Layout>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash,
    search: state.router.location.search,
    query: state.router.location.query,
    key: state.router.location.key,
    action: state.router.action,
});

AdminLayouts.prototype = {
    childrenComponent: PropTypes.array,
};

AdminLayouts.defaultProps = {
    childrenComponent: []
};

export default connect(mapStateToProps)(AdminLayouts);
