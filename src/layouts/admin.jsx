import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { MenuFoldOutlined, MenuUnfoldOutlined, DashboardOutlined, UsergroupAddOutlined, LaptopOutlined, GlobalOutlined, FileOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography, Row, Col, Breadcrumb } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const { Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem(
        <Link to="/">
        <Text style={{ color: '#fff' }}>Overviews</Text>
    </Link>,
    'overviews',
    <GlobalOutlined />
    ),
    getItem(<Link to="/">
    <Text style={{ color: '#fff' }}>Dashboard</Text>
</Link>, 'dashboard', <DashboardOutlined />),
    getItem('Manage users', 'manage-users', <UsergroupAddOutlined />, [getItem('Tom', '3'), getItem('Bill', '4'), getItem('Alex', '5')]),
    getItem('Manage products', 'manage-products', <LaptopOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
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
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['dashboard']} mode="inline" items={items} />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    />
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <Breadcrumb
                            style={{
                                margin: '16px 0',
                            }}
                        >
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: 360,
                            }}
                        >
                            {components && components.length > 0
                                ? components.map(({ element: Element }, index) => {
                                      return <Element key={index} />;
                                  })
                                : null}
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
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
    childrenComponent: [],
};

export default connect(mapStateToProps)(AdminLayouts);
