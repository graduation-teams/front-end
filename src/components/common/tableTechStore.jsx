import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import { useKeywordContext } from '@contexts/keywordContext';

function TableTechStore({ dataAPI, callingAPI, columConfigs }, ...props) {
    const {  isPending } = useKeywordContext();

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
          console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
          console.log(selected, selectedRows, changeRows);
        },
      };

    return (
        <React.Fragment>
            <Table
                rowSelection={{ ...rowSelection}}
                columns={columConfigs}
                loading={callingAPI || isPending}
                dataSource={dataAPI}
                className="override-ant-table-wrapper"
                pagination={{
                    defaultPageSize: 10,
                    showLessItems: true,
                    showSizeChanger: true,
                    showTotal: (total, range) => `${range[0]}-${range[1]} total ${total} items`,
                    pageSizeOptions: [10, 20, 50, 100, 200, 500],
                    className: 'override-ant-pagination',
                }}
                scroll={{ x: 1500, y: 450 }}
            />
        </React.Fragment>
    );
}

TableTechStore.propTypes = {
    dataAPI: PropTypes.array,
    callingAPI: PropTypes.bool,
    columConfigs: PropTypes.array,
};

TableTechStore.defaultProps = {
    dataAPI: [],
    callingAPI: false,
    columConfigs: [],
};

export default withErrorBoundary(TableTechStore, {
    FallbackComponent: ErrorComponent,
});
