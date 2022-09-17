import React from 'react';
import Highlighter from 'react-highlight-words';
import { CheckOutlined, CloseOutlined, DeleteOutlined, ZoomInOutlined, EditOutlined } from '@ant-design/icons';
import { hasKeyword, removeAccents } from '@utils/helpers';
import { Typography, Avatar, Switch, Tooltip, Button, Tag } from 'antd';

const { Text } = Typography;
export const getColumnConfig = (filterValue, viewDetailItem, deleteItem, updateItem, isLogged) => [
    // {
    //     title: (
    //         <Text ellipsis strong>
    //             ID
    //         </Text>
    //     ),
    //     dataIndex: 'key',
    //     filterMultiple: false,
    //     width: 60,
    //     filteredValue: [filterValue],
    //     render: key => {
    //         return (
    //             <div className="table-item">
    //                 <Text ellipsis>{key}</Text>
    //             </div>
    //         );
    //     },
    // },
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
                ICON
            </Text>
        ),
        dataIndex: 'icon',
        width: 60,
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
                CHILDREN
            </Text>
        ),
        dataIndex: 'cateChild',
        width: 350,
        filterMultiple: false,
        filteredValue: [filterValue],
        render: cateChild => {
            return (
                <div className="table-item">
                   {
                        cateChild?.length >0 && cateChild.map((item,index)=>{
                            return (
                                <Tag color="magenta" key={index}>
                                    {item.name}
                                </Tag>
                            )
                        })
                   }
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
        width: 120,
        filterMultiple: false,
        filteredValue: [filterValue],
        render: author => {
            return (
                <div className="table-item">
                    {author !== '-'?(<Tag color="processing">
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
        width: 120,
        filteredValue: [filterValue],
        render: type => {
            return (
                <div className="table-item">
                    {typeof type !== "undefined"?(<Tag color="purple">{type}</Tag>):'-'}
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
        width: 90,
        filteredValue: [filterValue],
        render: published => {
            return (
                <div className="table-item">
                    <Switch size="small" checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked={published?.value===1?true:false} disabled={published?.idItem===1}/>
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
                {
                    !options?.hiddenButton && (<Button onClick={() => viewDetailItem(options)} className="override-ant-button-actions" icon={<ZoomInOutlined />} />)
                }
                {isLogged?.isAdmin() && options?.id !==1 &&(
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