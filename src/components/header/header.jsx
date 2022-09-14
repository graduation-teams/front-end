import React, { useState, useEffect, useRef, useMemo } from 'react';
import { DownOutlined, UserOutlined, HeartOutlined, ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Button, Dropdown, Menu, Space, message, Tooltip, AutoComplete, Input, Badge, Typography, Divider, Select, Avatar } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HeaderMobile from './headerMobile';
import UserMenu from '@components/userMenu/userMenu';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import { useViewport } from '@hooks';
import { fetchAllCategoriesAction } from '@features/categories/categoriesActions';
import CategoriesModels from '@models/categoriesModels';

const { Text } = Typography;
const { Option } = Select;

export const menuSecond = [
    {
        key: 'page-home',
        label: (
            <Link to="/" className="header-tech-store__category_right-menu-item">
                <Text strong>Home</Text>
            </Link>
        ),
    },
    {
        key: 'page-shop',
        label: (
            <Link to="/shop" className="header-tech-store__category_right-menu-item">
                <Text strong>Shop</Text>
            </Link>
        ),
    },
    {
        key: 'page-blog',
        label: (
            <Link to="/blog" className="header-tech-store__category_right-menu-item">
                <Text strong>Blog</Text>
            </Link>
        ),
    },
    {
        key: 'page-about',
        label: (
            <Link to="/about-us" className="header-tech-store__category_right-menu-item">
                <Text strong>About Us</Text>
            </Link>
        ),
    },
    {
        key: 'page-contact',
        label: (
            <Link to="/contact" className="header-tech-store__category_right-menu-item">
                <Text strong>Contact Us</Text>
            </Link>
        ),
    },
    {
        key: 'page-information-line',
        label: (
            <Link to="/information-line" className="header-tech-store__category_right-menu-item">
                <Text strong>Information Line</Text>
            </Link>
        ),
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
    const viewPort = useViewport();
    const dispatch = useDispatch();
    const svLogin = useSelector(state => state?.auth?.login);
    const svUser = useSelector(state => state?.user?.info);
    const svCategories = useSelector(state => state.categories.fetchAll);
    const [options, setOptions] = useState([]);
    const [isLogged, setIsLogged] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [infoUser, setInfoUser] = useState({});
    const [visibleSubMenuUser, setVisibleSubMenuUser] = useState(false);
    const headerRef = useRef(null);

    const dataCategory = useMemo(() => {
        if (svCategories?.failed) return [];
        if (svCategories?.success && svCategories?.data?.length > 0) {
            return new CategoriesModels()?.handleDataHomePage(svCategories?.data);
        }
    }, [svCategories]);

    useEffect(() => {
        console.log('dataCategory', dataCategory);
    }, [dataCategory]);

    useEffect(() => {
        dispatch(fetchAllCategoriesAction());
    }, []);

    useEffect(() => {
        if (svUser?.id) {
            setIsLogged(true);
            setInfoUser(svUser);
        }
    }, [svUser, svLogin]);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        };
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    useEffect(() => {
        if (viewPort?.width <= 480) {
            setIsMobile(true);
        }
    }, [viewPort]);

    const handleSearch = value => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = value => {
        console.log('onSelect', value);
    };

    function handleClickUser(e) {
        e.preventDefault();
        setVisibleSubMenuUser(!visibleSubMenuUser);
    }

    return (
        <Layout.Header style={{ backgroundColor: '#fff', minHeight: '64px', height: 'auto', padding: 0 }}>
            <div className="header__mobi">
                <HeaderMobile />
            </div>
            <section className="header-tech-store">
                <Row gutter={16} align="middle" justify="space-around" className="header-row-top" wrap={false}>
                    <Col span={24}>
                        <div className="container-1200">
                            <Row align="middle" justify="space-around" gutter={16}>
                                <Col xs={24} sm={24} md={24} xl={5}>
                                    <div className="header-tech-store__logo">
                                        <Space align="baseline" size="middle" className="override-ant-space">
                                            <Link to={'/'}>
                                                <Text className="logo-text">TechStore</Text>
                                            </Link>
                                        </Space>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} xl={12}>
                                    <div className="header-tech-store__search_category">
                                        <Input.Group
                                            compact
                                            style={{
                                                width: 'inherit',
                                            }}
                                        >
                                            <Select
                                                defaultValue="All categories"
                                                size="large"
                                                style={{
                                                    width: '30%',
                                                    maxHeight: '40px',
                                                }}
                                            >
                                                {dataCategory?.map(item => (
                                                    <Select.Option key={item?.key} value={item?.slug}>
                                                        {item?.name}
                                                    </Select.Option>
                                                ))}
                                            </Select>
                                            <AutoComplete
                                                style={{
                                                    width: '70%',
                                                    maxHeight: '40px',
                                                    outline: 'none',
                                                }}
                                                children={<Input.Search className="header-tech-store__search_category-input-search" size="large" placeholder="Type here..." enterButton />}
                                            />
                                        </Input.Group>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} xl={7}>
                                    <div className="header_right">
                                        <Space align="center" size="small" split={<Divider type="vertical" />}>
                                            {infoUser?.id ? (
                                                <div className="custom-user-info" onClick={handleClickUser}>
                                                    <Space align="center" size="small">
                                                        <Avatar
                                                            style={{ backgroundColor: '#0D1D2E', verticalAlign: 'middle' }}
                                                            size={{ xs: 40, sm: 40, md: 40, lg: 40, xl: 40, xxl: 40 }}
                                                            gap={3}
                                                            icon={<UserOutlined />}
                                                            src={infoUser?.avatarUrl}
                                                        />
                                                        <Button type="text" size="large">
                                                            <Text strong style={{ color: '#0D1D2E', fontFamily: "'Mulish', sans-serif", fontWeight: '700', fontStyle: 'normal', width: '100px' }} ellipsis={true}>
                                                                {infoUser?.fullName ?? ''}
                                                            </Text>
                                                        </Button>
                                                    </Space>
                                                    {visibleSubMenuUser ? <UserMenu user={infoUser} /> : null}
                                                </div>
                                            ) : (
                                                <Link to={'/login'}>
                                                    <Text strong className="button-login">
                                                        LOG IN/ SIGN UP
                                                    </Text>
                                                </Link>
                                            )}

                                            <Link
                                                to={`/whish-list?userId=${svUser?.id ? svUser?.id : 'new'}`}
                                                style={{
                                                    height: 'auto',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Badge count={1} size="small">
                                                    <HeartOutlined
                                                        style={{
                                                            fontSize: '24px',
                                                        }}
                                                        className="header_icon"
                                                    />
                                                </Badge>
                                            </Link>
                                            <Link
                                                to={`/cart?userId=${svUser?.id ? svUser?.id : 'new'}`}
                                                style={{
                                                    height: 'auto',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Badge count={0} size="small">
                                                    <ShoppingCartOutlined
                                                        style={{
                                                            fontSize: '24px',
                                                        }}
                                                        className="header_icon"
                                                    />
                                                </Badge>
                                            </Link>
                                        </Space>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16} align="middle" justify="space-around" className="header-row-top" ref={headerRef} wrap={false}>
                    <Col span={24}>
                        <div className="container-1200">
                            <Row align="middle" justify="space-around" gutter={16}>
                                <Col xs={24} sm={24} md={6} xl={5}>
                                    <div className="header-tech-store__category_left">
                                        <Dropdown
                                            overlayStyle={{
                                                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px !important',
                                            }}
                                            // visible={true}
                                            overlay={
                                                <Menu
                                                    items={dataCategory?.map(item => {
                                                        delete item?.slug;
                                                        return {
                                                            ...item,
                                                            label: item?.name,
                                                        };
                                                    })}
                                                />
                                            }
                                            trigger={['click']}
                                        >
                                            <button className="header-tech-store__category_left-button">
                                                <Space align="center" size="large" style={{ color: '#fff', fontSize: '1.7rem' }} className="header-tech-store__category_left-space">
                                                    <MenuOutlined />
                                                    <Text className="header-tech-store__category_left-text-category" style={{ color: '#fff' }} strong>
                                                        All departments
                                                    </Text>
                                                    <DownOutlined style={{ color: '#fff', fontSize: '1.7rem' }} />
                                                </Space>
                                            </button>
                                        </Dropdown>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={6} xl={19}>
                                    <div className="header-tech-store__category_right">
                                        <Menu className="header-tech-store__category_right-menu" items={menuSecond} mode="horizontal" activeKey="page-home" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </section>
        </Layout.Header>
    );
}

export default withErrorBoundary(Header, {
    FallbackComponent: ErrorComponent,
});
