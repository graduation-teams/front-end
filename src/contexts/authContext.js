import React, {useEffect, useState, useMemo, useContext } from 'react'
import { useSelector } from 'react-redux';
import UserModels from '@models/userModels';


export const AuthContext = React.createContext(null);

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const svUser = useSelector(state => state?.user?.info);
    const svLogout = useSelector(state => state?.auth?.logout);
    const svLogin = useSelector(state => state?.auth?.login);

    useEffect(() => {
        svUser?.id && setIsAuthenticated(true);
        svLogout.success && setIsAuthenticated(false);
        svLogin.success && setIsAuthenticated(true);
    },[svUser, svLogout, svLogin]);

    

    const value = useMemo(() => ({
        isAuthenticated,
        isAdmin: new UserModels(svUser).isAdmin(),
    }), [isAuthenticated])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export const useAuthContext = () => useContext(AuthContext);