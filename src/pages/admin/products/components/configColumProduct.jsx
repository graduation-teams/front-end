import React from 'react';
import Highlighter from 'react-highlight-words';
import { CheckOutlined, CloseOutlined, DeleteOutlined, ZoomInOutlined, EditOutlined } from '@ant-design/icons';
import { hasKeyword, removeAccents } from '@utils/helpers';
import { Typography, Avatar, Switch, Tooltip, Button, Tag } from 'antd';

const { Text } = Typography;
export const getColumnConfig = (filterValue, viewDetailItem, deleteItem, updateItem, isLogged) => [
    {
        title: (
            <Text ellipsis strong>
                SKU
            </Text>
        ),
        dataIndex: 'sku',
        filterMultiple: false,
        width: 40,
        filteredValue: [filterValue],
        render: sku => {
            return (
                <div className="table-item">
                    <Tag color="red">{sku}</Tag>
                </div>
            );
        },
    },
    {
        title: (
            <Text ellipsis strong>
                PRODUCT NAME
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
    },{
        title: (
            <Text ellipsis strong>
                CATEGORY
            </Text>
        ),
        dataIndex: 'category',
        width: 80,
        filterMultiple: false,
        filteredValue: [filterValue],
        render: category => {
            return (
                <div className="table-item">
                    <Text ellipsis>
                        <Highlighter highlightClassName="highlighted-text" searchWords={[filterValue]} autoEscape={true} textToHighlight={category} sanitize={removeAccents} />
                    </Text>
                </div>
            );
        },
    },
    {
        title: (
            <Text ellipsis strong>
                PRICE
            </Text>
        ),
        dataIndex: 'unitPrice',
        width: 45,
        filterMultiple: false,
        filteredValue: [filterValue],
        render: unitPrice => {
            return (
                <div className="table-item">
                    <Text ellipsis>
                        {unitPrice}
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
                {isLogged?.isAdmin() && (
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