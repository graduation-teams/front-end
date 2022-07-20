import React, { useState } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
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

function TableTechStore(props) {

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