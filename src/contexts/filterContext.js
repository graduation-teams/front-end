import React, {useEffect, useState, useMemo, useContext } from 'react'


export const FilterContext = React.createContext('all');

export const FilterProvider = ({children}) => {
    const [filterValue, setFilterValue] = useState('all');

    function handleFilter(value){
        setFilterValue(value);
    }
    

    const value = useMemo(() => ({
        filterValue,
        handleFilter,
    }), [filterValue])

    return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
}
export const useFilterContext = () => useContext(FilterContext);