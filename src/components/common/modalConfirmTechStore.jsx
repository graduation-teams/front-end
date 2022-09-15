import React, { useState, useEffect } from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Typography } from 'antd';
import { deleteByIdCategoriesAction } from '@features/categories/categoriesActions';
import { deleteByIdTypeCategoriesAction } from '@features/type/typeActions';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
const { Text } = Typography;

function ModalConfirmTechStore({ dataModal, title, subTitle, isCategory, icon, textConfirm, textCancel , confirmIs}) {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    function handleConfirmDelete() {
            switch (dataModal?.confirmIs) {
                case 'categories':
                    dispatch(deleteByIdCategoriesAction({idCategory: dataModal?.idItem }))
                    break;
                case 'type':
                    dispatch(deleteByIdTypeCategoriesAction({idTypeCategory: dataModal?.idItem }))
                    break;
                default:
                    break;
            }
        setModalVisible(false);
    }

    function handleCancelDelete() {
        setModalVisible(false);
    }

    useEffect(() => {
        if (typeof dataModal?.idItem === 'number') {
            setModalVisible(true);
        }
    }, [dataModal]);

    return (
        <React.Fragment>
            <Modal
                open={modalVisible}
                closable={false}
                centered={true}
                width={'576px'}
                getContainer={document.getElementById('root-modal')}
                destroyOnClose={true}
                forceRender={true}
                className="override-ant-modal"
                onOk={handleConfirmDelete}
                onCancel={handleCancelDelete}
                footer={null}
            >
                <div className="custom-content-modal">
                    <div className="custom-content-modal-icon">{icon}</div>
                    <div className="custom-content-modal-text">
                        <Text level={2} strong>
                            {title}
                        </Text>
                        <Text>{subTitle}</Text>
                    </div>
                    <div className="custom-content-modal-button">
                        <Space align="center" size="large">
                            <Button type="text" size="large" style={{ backgroundColor: '#e5e7eb', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }} onClick={handleCancelDelete}>
                                {textCancel}
                            </Button>
                            <Button type="primary" size="large" style={{ backgroundColor: '#C0202B', borderRadius: '0.5rem', border: '1px solid #C0202B' }} onClick={handleConfirmDelete}>
                                {textConfirm}
                            </Button>
                        </Space>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
}

ModalConfirmTechStore.propTypes = {
    dataModal: PropTypes.object,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    isCategory: PropTypes.bool,
    icon: PropTypes.any,
    textConfirm: PropTypes.string,
    textCancel: PropTypes.string,
    confirmIs: PropTypes.string,
};

ModalConfirmTechStore.defaultProps = {
    dataModal: {},
    isCategory: false,
    title: 'Are You Sure! Want to Delete This Record?',
    subTitle: "Do you really want to delete these records? You can't view this in your list anymore if you delete!",
    icon: <DeleteOutlined style={{ color: '#f05252', marginBottom: '1.5rem', fontSize: ' 3rem' }} />,
    textConfirm: 'Yes, Delete It',
    textCancel: 'No, Keep It',
    confirmIs: 'category',
};

export default withErrorBoundary(ModalConfirmTechStore, {
    FallbackComponent: ErrorComponent,
});
