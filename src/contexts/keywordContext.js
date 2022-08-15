import React, {useEffect, useState, useMemo, useContext, useTransition } from 'react'
export const KeywordContext = React.createContext(null);

export const KeywordProvider = ({children}) => {
    const [keywordValue, setKeywordValue] = useState(null);
    const [isPending, startTransition] = useTransition();

    function handleSetKeyword(value){
        startTransition(() => {
            setKeywordValue(value);
        });
    }

    

    const value = useMemo(() => ({
        keywordValue,
        handleSetKeyword,
        isPending:isPending
    }), [keywordValue])

    return <KeywordContext.Provider value={value}>{children}</KeywordContext.Provider>
}
export const useKeywordContext = () => useContext(KeywordContext);