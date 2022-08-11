import React, { useEffect, useState } from 'react';
import FilterAddTechStore from '@components/common/filterAddTechStore';
import DrawerTechStore from '@components/common/drawerTechStore';
import TableTechStore from '@components/common/tableTechStore';

function Products(){



    return (
        <React.Fragment>
            <DrawerTechStore  isCategories={false}/>
            <FilterAddTechStore isCategories={false} subTitle="Add your product and necessary information from here" title="Product"/>
            <TableTechStore/>
        </React.Fragment>
    )
}

export default Products;