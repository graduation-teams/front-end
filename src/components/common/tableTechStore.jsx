import React, { useState } from 'react';
import { Table, Typography } from 'antd';
import Highlighter from 'react-highlight-words';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import { hasKeyword, removeAccents } from '@utils/helpers';
const { Text } = Typography;

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
    },
    {
      title: 'Created at',
      dataIndex: 'createdAt',
    },
  ];
  const data = [];
  
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
const getColumnConfig = (filterValue, viewDetail, deleteCloth, updateCloth, roles) => [
  {
    title: (
      <Text ellipsis strong>
        Name
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
];


function TableTechStore({dataTable},...props) {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    };


    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
          Table.SELECTION_ALL,
          Table.SELECTION_INVERT,
          Table.SELECTION_NONE,
          {
            key: 'odd',
            text: 'Select Odd Row',
            onSelect: (changableRowKeys) => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                if (index % 2 !== 0) {
                  return false;
                }
    
                return true;
              });
              setSelectedRowKeys(newSelectedRowKeys);
            },
          },
          {
            key: 'even',
            text: 'Select Even Row',
            onSelect: (changableRowKeys) => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                if (index % 2 !== 0) {
                  return true;
                }
    
                return false;
              });
              setSelectedRowKeys(newSelectedRowKeys);
            },
          },
        ],
      };


    return (
        <React.Fragment>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </React.Fragment>
    );
}

export default withErrorBoundary(TableTechStore, {
    FallbackComponent: ErrorComponent,
});