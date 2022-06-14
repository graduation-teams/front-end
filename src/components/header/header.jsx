import React, { useState } from 'react';
import { DownOutlined, UserOutlined, HeartOutlined, ShoppingCartOutlined, MenuOutlined, PhoneOutlined, GiftOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import { Layout, Row, Col, BackTop, Button, Dropdown, Menu, Space, message, Tooltip, AutoComplete, Input, Badge, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as IconLogo2 } from '@assets/images/ts.svg';

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
        <Layout.Header className="header">
            {/* <div className="header"> */}
            <section className="header_action">
                <div className="container-1200">
                    <Row align={'middle'}>
                        <Col sm={24} md={6} xl={6}>
                            <a href="#" className="header_link">
                                <Icon component={IconLogo2} />
                                <span>TechStore</span>
                            </a>
                        </Col>
                        <Col sm={24} md={12} xl={12}>
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
                        <Col sm={24} md={6} xl={6}>
                            <ul className="header_list">
                                <li className="header_item">
                                    <a href="" className="header_item_link">
                                        <p className="header_item_link-text">LOG IN / SIGN UP</p>
                                    </a>
                                </li>{' '}
                                |
                                <li className="header_item">
                                    <a href="" className="header_item_link">
                                        <Badge count={5}>
                                            <HeartOutlined className="header_icon" />
                                        </Badge>
                                    </a>
                                </li>{' '}
                                |
                                <li className="header_item">
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
            </section>

            <section className="header_nav">
                <div className="container-1200">
                    <Row>
                        <div className="header_nav_row">
                            <Col sm={24} md={6} xl={6}>
                                <div className="header_cate_dropdown">
                                    <Dropdown className="header_dropdown" overlay={menu} trigger={['click']}>
                                        <Button>
                                            <Space>
                                                <p>
                                                    <MenuOutlined /> All departments
                                                </p>
                                                <DownOutlined />
                                            </Space>
                                        </Button>
                                    </Dropdown>
                                </div>
                            </Col>
                            <Col sm={24} md={6} xl={14}>
                                <div>
                                    <Menu mode="horizontal">
                                        {items.map(function (item) {
                                            return (
                                                <Menu.Item key={item.key}>
                                                    {item.icon}
                                                    <Text strong>{item.label}</Text>
                                                </Menu.Item>
                                            );
                                        })}
                                    </Menu>
                                </div>
                            </Col>
                            <Col sm={24} md={6} xl={4} className=""></Col>
                        </div>
                    </Row>
                </div>
            </section>
            {/* </div> */}
        </Layout.Header>
    );
}

export default Header;
