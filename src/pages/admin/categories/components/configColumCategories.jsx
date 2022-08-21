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
                Author
            </Text>
        ),
        dataIndex: 'author',
        width: 80,
        filterMultiple: false,
        filteredValue: [filterValue],
        render: author => {
            return (
                <div className="table-item">
                    {author !== '-'?(<Tag color="magenta">
                        <Highlighter highlightClassName="highlighted-text" searchWords={[filterValue]} autoEscape={true} textToHighlight={author} sanitize={removeAccents} />
                    </Tag>):author}
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
        width: 45,
        filteredValue: [filterValue],
        render: type => {
            return (
                <div className="table-item">
                    {type === 1 ? (<Tag color='#2db7f5'>Blog</Tag>) : (<Tag color='#87d068'>Product</Tag>)}
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
                    <Switch size="small" checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked={published===1?true:false} />
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