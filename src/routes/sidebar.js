import React from 'react';
import { NavLink } from 'react-router-dom';
import { TeamOutlined , AppstoreOutlined, ShoppingOutlined, UnorderedListOutlined, BarcodeOutlined, GiftOutlined, SettingOutlined, UserSwitchOutlined  } from '@ant-design/icons';


/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */

//  const { managerId } = useParams();
//  console.log(managerId);

 const routes = [
    {
        key: 'dashboard', 
        icon: <AppstoreOutlined />, 
        label: <NavLink to="dashboard">Dashboard</NavLink>,
    },
    {
        key: 'products', 
        icon: <ShoppingOutlined />, 
        label: <NavLink to="products">Products</NavLink> 
    },
    {
        key: 'categories',
        icon: <UnorderedListOutlined />, 
        label: <NavLink to="categories">Categories</NavLink> 
    },
    {
        key: 'customers',
        icon: <TeamOutlined />, 
        label: <NavLink to="customers">Customers</NavLink>
    },
    {
        key: 'orders',
        icon: <BarcodeOutlined />, 
        label: <NavLink to="orders">Orders</NavLink> 
    },
    {
        key: 'promotions',
        icon: <GiftOutlined />, 
        label: <NavLink to="promotions">Promotions</NavLink> 
    },
    {
        key: 'our-staff',
        icon: <UserSwitchOutlined />,
        label: <NavLink to="our-staff">Our staff</NavLink>
    },
    {
        key: 'settings', 
        icon:  <SettingOutlined />,
        label: <NavLink to="settings">Settings</NavLink>
    },
];

export default routes