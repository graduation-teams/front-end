import React, { useState, useEffect, useMemo } from 'react';
import { Table, Typography, Avatar, Switch, Tooltip, Button, Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Highlighter from 'react-highlight-words';
import { CheckOutlined, CloseOutlined, DeleteOutlined, ZoomInOutlined, EditOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import { hasKeyword, removeAccents } from '@utils/helpers';
import { useKeywordContext } from '@contexts/keywordContext';
import UserModels from '@models/userModels';
import {ModalConfirmTechStore} from '@components/common';

const { Text } = Typography;

const getColumnConfig = (filterValue, viewDetailItem, deleteItem, updateItem, isLogged) => [
    {
        title: (
            <Text ellipsis strong>
                ID
            </Text>
        ),
        dataIndex: 'key',
        filterMultiple: false,
        width: 30,
        filteredValue: [filterValue],
        render: key => {
            return (
                <div className="table-item">
                    <Text ellipsis>{key}</Text>
                </div>
            );
        },
    },
    {
        title: (
            <Text ellipsis strong>
                PARENT
            </Text>
        ),
        dataIndex: 'name',
        filterMultiple: false,
        width: 60,
        filteredValue: [filterValue],
        render: name => {
            return (
                <div className="table-item">
                    <Text ellipsis>
                        <Highlighter highlightClassName="highlighted-text" searchWords={[filterValue]} autoEscape={true} textToHighlight={name} sanitize={removeAccents} />
                    </Text>
                </div>
            );
        },
    },
    {
        title: (
            <Text ellipsis strong>
                ICON
            </Text>
        ),
        dataIndex: 'icon',
        width: 45,
        filterMultiple: false,
        filteredValue: [filterValue],
        render: icon => {
            return (
                <div className="table-item">
                    <Avatar size={'default'} src={icon} />
                </div>
            );
        },
    },
    {
        title: (
            <Text ellipsis strong>
                SLUG
            </Text>
        ),
        dataIndex: 'slug',
        width: 80,
        filterMultiple: false,
        filteredValue: [filterValue],
        render: slug => {
            return (
                <div className="table-item">
                    <Text ellipsis>
                        <Highlighter highlightClassName="highlighted-text" searchWords={[filterValue]} autoEscape={true} textToHighlight={slug} sanitize={removeAccents} />
                    </Text>
                </div>
            );
        },
    },
    {
        title: (
            <Text ellipsis strong>
                TYPE
            </Text>
        ),
        dataIndex: 'type',
        filterMultiple: false,
        width: 30,
        filteredValue: [filterValue],
        render: type => {
            return (
                <div className="table-item">
                    <Text ellipsis>{type === 1 ? 'Blog' : 'Product'}</Text>
                </div>
            );
        },
    },
    {
        title: (
            <Text ellipsis strong>
                PUBLISHED
            </Text>
        ),
        dataIndex: 'published',
        filterMultiple: false,
        width: 45,
        filteredValue: [filterValue],
        render: published => {
            return (
                <div className="table-item">
                    <Switch size="small" checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} checked={published===1?true:false} />
                </div>
            );
        },
    },
    {
        title: (
          <Text ellipsis strong>
            ACTIONS
          </Text>
        ),
        dataIndex: 'options',
        width: 60,
        filterMultiple: false,
        render: options => {
          return (
            <div className="table-item">
              <div className="row-actions">
                {
                    !options?.hiddenButton && (<Button onClick={() => viewDetailItem(options)} className="override-ant-button-actions" icon={<ZoomInOutlined />} />)
                }
                {isLogged.isAdmin() && (
                  <React.Fragment>
                    <Tooltip placement="top" destroyTooltipOnHide={true} color='cyan' title={'Edit'} zIndex={500}><Button onClick={() => updateItem(options)} className="override-ant-button-actions" icon={<EditOutlined />} /></Tooltip>
                    <Tooltip placement="top" destroyTooltipOnHide={true} color='#f50' title={'Delete'} zIndex={500}><Button onClick={() => deleteItem(options)} className="override-ant-button-actions" icon={<DeleteOutlined />} /></Tooltip>
                  </React.Fragment>
                )}
              </div>
            </div>
          );
        },
      },
];

function TableTechStore({ dataAPI, callingAPI, isCategories }, ...props) {
    const { keywordValue, isPending } = useKeywordContext();
    const svUser = useSelector(state => state?.user?.info);
    const [colConfigs, setColConfigs] = useState([]);
    const [dataTable, setDataTable] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [modalProps, setModalProps] = useState({});

    const dataUser = useMemo(() => {
        return new UserModels(svUser);
    }, [svUser]);

    useEffect(() => {
        if (dataAPI.length > 0) {
            const results = dataAPI
                .filter(item => item.id)
                .map((item, index) => ({
                    key: index+1,
                    name: item?.name,
                    slug: item?.slug_seo,
                    icon: item?.thumbnail_url,
                    active: item?.active,
                    published: item?.public_site,
                    type: item?.type_category,
                    children: item?.id_parent,
                    options: {
                        ...item,
                        hiddenButton:isCategories
                    },
                }));
            // setDataTable(results.length > 1 ? results.reverse() : results);
            setDataTable(results);
            setTotalItems(dataAPI.length);
        }
        setColConfigs(getColumnConfig(keywordValue, viewDetailItem, deleteItem, updateItem, dataUser));
    }, [dataAPI]);


    function viewDetailItem(record) {
        console.log('viewDetail: ', record);
    }

    function deleteItem(record) {
        setModalProps({
            idItem:record?.id,
        });
    }

    function updateItem(record) {}

    return (
        <React.Fragment>
            <ModalConfirmTechStore dataModal={modalProps} isCategory={true} />
            <Table
                rowSelection={{}}
                columns={colConfigs}
                loading={callingAPI || isPending}
                dataSource={dataTable}
                className="override-ant-table-wrapper"
                pagination={{
                    defaultPageSize: 10,
                    showLessItems: true,
                    showSizeChanger: true,
                    showTotal: (total, range) => `${range[0]}-${range[1]} total ${total} items`,
                    pageSizeOptions: [10, 20, 50, 100, 200, 500],
                    className: 'override-ant-pagination',
                }}
                scroll={{ x: 560, y: 450 }}
            />
        </React.Fragment>
    );
}

TableTechStore.propTypes = {
    dataAPI: PropTypes.array,
    callingAPI: PropTypes.bool,
    isCategories: PropTypes.bool,
};

TableTechStore.defaultProps = {
    dataAPI: [],
    callingAPI: false,
    isCategories: false,
};

export default withErrorBoundary(TableTechStore, {
    FallbackComponent: ErrorComponent,
});
