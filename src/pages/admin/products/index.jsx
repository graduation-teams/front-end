import React, { useEffect, useState } from 'react';
import FilterAddTechStore from '@components/common/filterAddTechStore';
import DrawerTechStore from '@components/common/drawerTechStore';
import TableTechStore from '@components/common/tableTechStore';

function ManageProducts(){

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
            <FilterAddTechStore isCategory={false} subTitle="Add your product and necessary information from here" title="Product" onOpenDrawer={handleOpenDrawer} />
            <TableTechStore/>
        </React.Fragment>
    )
}

export default ManageProducts;