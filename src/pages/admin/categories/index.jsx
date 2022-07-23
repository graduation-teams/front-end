import React, { useEffect, useState,} from 'react';
// import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
// import { Card, Col, Row, Statistic } from 'antd';
import FilterAddTechStore from '@components/common/filterAddTechStore';
import DrawerTechStore from '@components/common/drawerTechStore';
import TableTechStore from '@components/common/tableTechStore';

function Categories(){
    const [openDrawer, setOpenDrawer] = useState(false);

    function handleOpenDrawer(value) {
      setOpenDrawer(value);
    }

    function handleCloseDrawer(value) {
      setOpenDrawer(value);
    }

    return (
      <React.Fragment>
        <DrawerTechStore visibleDrawer={openDrawer} closeDrawer={handleCloseDrawer}/>
        <FilterAddTechStore title="Category" onOpenDrawer={handleOpenDrawer} />
        <TableTechStore/>
      </React.Fragment>
    )
}

export default Categories;