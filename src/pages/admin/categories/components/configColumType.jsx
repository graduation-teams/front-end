import React from 'react';
import Highlighter from 'react-highlight-words';
import { CheckOutlined, CloseOutlined, DeleteOutlined, ZoomInOutlined, EditOutlined } from '@ant-design/icons';
import { hasKeyword, removeAccents } from '@utils/helpers';
import { Typography, Avatar, Switch, Tooltip, Button, Tag } from 'antd';

const { Text } = Typography;
export const getColumnConfigType = (filterValue, viewDetailItem, deleteItem, updateItem, isLogged) => [
    {
        title: (
            <Text ellipsis strong>
                ID
            </Text>
        ),
        dataIndex: 'key',
        filterMultiple: false,
        width: 60,
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
                NAME
            </Text>
        ),
        dataIndex: 'name',
        filterMultiple: false,
        width: 120,
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
                SLUG
            </Text>
        ),
        dataIndex: 'slug',
        width: 120,
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
            ACTIONS
          </Text>
        ),
        dataIndex: 'options',
        width: 120,
        filterMultiple: false,
        render: options => {
          return (
            <div className="table-item">
              <div className="row-actions">
                {isLogged?.isAdmin() &&(
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