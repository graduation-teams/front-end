import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { Layout } from 'antd';
import { Helmet } from 'react-helmet';
import FooterComponent from '../components/footer/footer';
import HeaderComponent from '../components/header/header';
import PropTypes from 'prop-types';
import { Link, Outlet} from 'react-router-dom';


function LayoutCustomer({ childrenComponent, ...props }) {
   

    return (
        <React.Fragment>
            <Helmet>
                <title>TechStore</title>
            </Helmet>
            <Layout style={typeof window === 'undefined' ? { display: 'none' } : { backgroundColor: '#ffffff' }}>
                <HeaderComponent />
                <Layout.Content>
                    <Outlet/>
                </Layout.Content>
                <FooterComponent />
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

LayoutCustomer.prototype = {
    childrenComponent: PropTypes.array,
};

LayoutCustomer.defaultProps = {
    childrenComponent: [],
};

export default connect(mapStateToProps)(LayoutCustomer);
