import React, { useState } from 'react';
import { DownOutlined, UserOutlined, HeartOutlined, ShoppingCartOutlined, MenuOutlined, PhoneOutlined, GiftOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import { Layout, Row, Col, BackTop, Button, Dropdown, Menu, Space, message, Tooltip, AutoComplete, Input, Badge, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as IconLogo2 } from '@assets/images/ts.svg';
import { ReactComponent as IconUser } from '@assets/images/user-icon.svg';
import HeaderMobi from './headerMobi';

const { Text } = Typography;

const handleButtonClick = e => {
    message.info('Click on left button.');
    console.log('click left button', e);
};

const handleMenuClick = e => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const items = [
    {
        label: 'item 1',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: 'item 2',
        key: '2',
        icon: <UserOutlined />,
    },
    {
        label: 'item 3',
        key: '3',
        icon: <UserOutlined />,
    },
];

const menu = (
    <Menu>
        {items.map(function (item) {
            return (
                <Menu.Item key={item.key}>
                    <Text strong>{item.label}</Text>
                </Menu.Item>
            );
        })}
    </Menu>
);

export const menuSecond = [
    {
        link: '#',
        name: 'Home',
    },
    {
        link: '#',
        name: 'Elements',
    },
    {
        link: '#',
        name: 'Shop',
    },
    {
        link: '#',
        name: 'News',
    },
    {
        link: '#',
        name: 'Delivery',
    },
    {
        link: '#',
        name: 'Contact us',
    },
    {
        link: '#',
        name: 'Our Offers',
    },
];

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = query =>
    new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((_, idx) => {
            const category = `${query}${idx}`;
            return {
                value: category,
                label: (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>
                            Found {query} on{' '}
                            <a href={`https://s.taobao.com/search?q=${query}`} target="_blank" rel="noopener noreferrer">
                                {category}
                            </a>
                        </span>
                        <span>{getRandomInt(200, 100)} results</span>
                    </div>
                ),
            };
        });

function Header(props) {
    const [options, setOptions] = useState([]);

    const handleSearch = value => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = value => {
        console.log('onSelect', value);
    };

    return (
        <Layout.Header style={{ backgroundColor: '#fff', minHeight: '150px', padding: 0 }}>
            <div className="header__mobi">
                <HeaderMobi />
            </div>
            <section className="header">
                <div className="header_action">
                    <div className="container-1200">
                        <Row align={'middle'}>
                            <Col sm={24} md={24} xl={6}>
                                <a href="#" className="header_link">
                                    <Icon component={IconLogo2} />
                                    <span>TechStore</span>
                                </a>
                            </Col>
                            <Col sm={24} md={24} xl={12}>
                                <div className="header_search_box">
                                    <Dropdown className="header_dropdown" overlay={menu} trigger={['click']}>
                                        <Button>
                                            <Space>
                                                All categories
                                                <DownOutlined />
                                            </Space>
                                        </Button>
                                    </Dropdown>
                                    <AutoComplete
                                        className="header_search"
                                        dropdownMatchSelectWidth={252}
                                        style={{
                                            width: 300,
                                        }}
                                        options={options}
                                        onSelect={onSelect}
                                        onSearch={handleSearch}
                                    >
                                        <Input.Search className="header_input_search" size="large" placeholder="Type here..." enterButton />
                                    </AutoComplete>
                                </div>
                            </Col>
                            <Col sm={24} md={24} xl={6}>
                                <ul className="header_list">
                                    <li className="header_item">
                                        <a href="" className="header_item_link">
                                            <span className="icon">
                                                <Icon component={IconUser} />
                                            </span>
                                            <p className="header_item_link-text">LOG IN / SIGN UP</p>
                                        </a>
                                    </li>
                                    <li className="header_item header_item_mobi">
                                        <a href="" className="header_item_link">
                                            <Badge count={5}>
                                                <HeartOutlined className="header_icon" />
                                            </Badge>
                                        </a>
                                    </li>
                                    <li className="header_item header_item_mobi">
                                        <a href="" className="header_item_link">
                                            <Badge count={5}>
                                                <ShoppingCartOutlined className="header_icon" />
                                            </Badge>
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="header_nav">
                    <div className="container-1200">
                        <Row>
                            <Col sm={24} md={6} xl={6}>
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <a className="header_nav--btn" onClick={e => e.preventDefault()}>
                                        <Space>
                                            <span>All departments</span>
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </Col>
                            <Col sm={24} md={6} xl={14}>
                                <ul className="header_nav--list">
                                    {menuSecond.map((e, i) => (
                                        <li key={i} className="header_nav--item">
                                            <a href={e.link}>{e.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col sm={24} md={6} xl={4}></Col>
                        </Row>
                    </div>
                </div>
            </section>
        </Layout.Header>
    );
}

export default Header;
