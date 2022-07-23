import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { TeamOutlined , AppstoreOutlined, ShoppingOutlined, UnorderedListOutlined, BarcodeOutlined, GiftOutlined, SettingOutlined, UserSwitchOutlined  } from '@ant-design/icons';
import { Layout, Menu, Typography, Row, Col, Breadcrumb, Space, Avatar, Button, Dropdown } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {ReactComponent as IconLogo} from '@assets/icons/ts.svg'
import Icon from '@ant-design/icons';
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
    getItem(<Text >Dashboard</Text>, 'dashboard', <AppstoreOutlined />),
    getItem(<Text>Products</Text>, 'products', <ShoppingOutlined />),
    getItem(<Text>Categories</Text>, 'categories', <UnorderedListOutlined />),
    getItem(<Text >Customers</Text>, 'customers', <TeamOutlined />),
    getItem(<Text >Orders</Text>, 'orders', <BarcodeOutlined />),
    getItem(<Text >Promotions</Text>, 'promotions', <GiftOutlined />),
    getItem(<Text >Our staff</Text>, 'our-staff', <UserSwitchOutlined />),
    getItem(<Text >Settings</Text>, 'settings', <SettingOutlined />),
];

const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item
            </a>
          ),
        },
      ]}
    />
  );
  
function AdminLayouts({ childrenComponent, ...props }) {
    const [components, setComponents] = useState([]);
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(false);
    const [keyTab, setKeyTab] = useState('dashboard');

    useEffect(() => {
        if (childrenComponent.length > 0) {
            setComponents(childrenComponent);
        }
    }, [childrenComponent]);

    function handleSelectedItemMenu({ item, key, keyPath, selectedKeys, domEvent }) {
        props?.changeTab({
            tabCurrent: key,
        });
    }

    return (
        <React.Fragment>
            <Layout style={{  minHeight: '100vh', }} className='layout-admin_custom'>
                <Sider  collapsed={collapsed} onCollapse={value => setCollapsed(value)} className='layout-admin_custom--slider' width={256}>
                    <div className='layout-admin_custom--slider__logo'>
                        <Icon component={IconLogo} className="icon-logo"/>
                        <h4 className='text-logo'>TechStore</h4>
                    </div>
                    <Menu theme="light" mode="inline" items={items} onSelect={handleSelectedItemMenu} />
                </Sider>
                <Layout>
                    <Header className='layout-admin_custom--header' style={{ position: 'fixed',zIndex: 999,width:'calc(100% - 256px)',}}>
                        <div className='custom-header-admin'>
                            <Row gutter={16} align="middle" justify="space-around" className="" wrap={false}>
                                <Col span={24}>
                                    <div className="container-1280">
                                        <Row align="middle" justify="space-around" gutter={16}>
                                            <Col span={12} offset={12}>
                                                <div className="header-admin-right">
                                                <Dropdown
                                                    overlay={menu}
                                                    placement="bottomRight"
                                                    arrow={{
                                                        pointAtCenter: true,
                                                    }}
                                                    trigger={['click']}
                                                    >
                                                     <Avatar src="https://res.cloudinary.com/graduation-techstore/image/upload/v1657878118/profile/z3457071278314_9ac0426ccedd84a60099ded4950ad32a_vrt9y6.jpg" size="large" className='header-admin-right__item'/>
                                                </Dropdown>
                                                   
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Header>
                    <Content style={{backgroundColor: "rgba(249,250,251,1)", paddingTop:"87px"}} className="layout-admin_custom--content">
                        <div className="container-1280">
                        {components && components.length > 0
                            ? components.map(({ element: Element }, index) => {
                                  return <Element key={index} />;
                              })
                            : null}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', }} >
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
