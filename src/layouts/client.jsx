import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import FooterComponent from '../components/footer/footer';
import HeaderComponent from '../components/header/header';
import PropTypes from 'prop-types';

function Layouts({ childrenComponent , ...props }) {
    const [components, setComponents] = useState([]);

    useEffect(() => {
        if (childrenComponent.length > 0) {
            setComponents(childrenComponent);
        }
    }, [childrenComponent]);

    return (
        <React.Fragment>
            <Layout style={typeof window === 'undefined' ? { display: 'none' } : { backgroundColor: '#ffffff' }}>
                <HeaderComponent />
                <Layout.Content>
                    {components && components.length > 0
                        ? components.map(({ element: Element }, index) => {
                              return <Element key={index} />;
                          })
                        : null}
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

Layouts.prototype = {
    childrenComponent: PropTypes.array,
}

Layouts.defaultProps = {
    childrenComponent: []
};

export default connect(mapStateToProps)(Layouts);