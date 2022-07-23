import React, {useEffect, useState} from 'react';
import { Button, Drawer, Space } from 'antd';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import { CloseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

function TitleDrawer({ title, subTitle }) {
    

    return (
        <div className="custom--title_drawer">
            <h4>{title}</h4>
            <p>{subTitle}</p>
        </div>
    );
}

function FooterDrawer() {
    return (
        <div className="custom--footer_drawer">
            <Space size="large" align="center" wrap={false} className='custom--space'>
                <Button
                    className='custom--button_drawer button--cancel'
                    type="primary"
                    size="large"
                    style={{
                        width: '435px',
                    }}
                >
                    Cancel
                </Button>
                <Button
                    className='custom--button_drawer button--save'
                    type="primary"
                    size="large"
                    style={{
                        width: '435px',
                    }}
                >
                    Add Category
                </Button>
            </Space>
        </div>
    );
}

function DrawerTechStore({ title, subTitle, overrideWidth, element: Element, visibleDrawer, closeDrawer }, ...props) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(visibleDrawer){
            setVisible(visibleDrawer);
        }
    }, [visibleDrawer]);

    function handleCloseDrawer(e) {
        console.log('e', e);
        setVisible(false);
        closeDrawer(false);
    }

    return (
        <React.Fragment>
            <Drawer
                className="section__drawer--tech-store"
                closable={false}
                title={<TitleDrawer title={title} subTitle={subTitle} />}
                footer={<FooterDrawer />}
                headerStyle={{
                    backgroundColor: '#f9fafb',
                    padding: '24px',
                    minHeight: 'calc(148px - 24px*2)',
                }}
                width={overrideWidth}
                visible={visible}
                getContainer={() => document.getElementById('root-drawer')}
                onClose={handleCloseDrawer}
                extra={
                    <div
                        className=""
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            boxShadow:'0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
                            color: '#f05252'
                        }}
                        onClick={handleCloseDrawer}
                    >
                        <CloseOutlined />
                    </div>
                }
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                {/* <Element/> */}
            </Drawer>
        </React.Fragment>
    );
}

DrawerTechStore.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    overrideWidth: PropTypes.number,
    element: PropTypes.element,
    visibleDrawer: PropTypes.bool,
    closeDrawer: PropTypes.func,
};

DrawerTechStore.defaultProps = {
    title: 'Add Category',
    subTitle: 'Add your Product category and necessary information from here',
    overrideWidth: 960,
    // element: <div></div>,
    visibleDrawer: false,
};

export default withErrorBoundary(DrawerTechStore, {
    FallbackComponent: ErrorComponent,
});
