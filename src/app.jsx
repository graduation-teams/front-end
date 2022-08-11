import React, { lazy, Suspense, useMemo, useEffect } from 'react';
import { Spin } from 'antd';
import { Routes, Route, Navigate, useLocation, useRoutes } from 'react-router-dom'; // react-router-dom v6
import { useAuthContext } from '@contexts/authContext';
import { publicRoutes, privateRoutes } from '@routes/router';

const LayoutCustomer = lazy(() => import('@containers/layoutCustomer'));
const LayoutAdmin = lazy(() => import('@containers/layoutAdmin'));

function App() {
    const { isAuthenticated, isAdmin } = useAuthContext();

    const middleware = useMemo(() => ({
        isLoggedIn: isAuthenticated,
        isAdmin: isAdmin,
    }), [isAuthenticated,isAdmin]);

    return (
        <React.Fragment>
            <Suspense fallback={<Spin style={{ position: 'absolute', zIndex: '999', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />}>
                <Routes>
                    <Route path="/" element={<LayoutCustomer />}>
                        {publicRoutes.map(({ element: Element, path }, index) => (
                            <Route
                                key={index}
                                path={path}
                                element={
                                    <Suspense fallback={<Spin style={{ position: 'absolute', zIndex: '999', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />}>
                                        <Element />
                                    </Suspense>
                                }
                            />
                        ))}
                    </Route>
                    {middleware.isAdmin ? (
                        <Route path="/admin/tab/*" element={<LayoutAdmin />}>
                            {privateRoutes.map(({ element: Element, path }, index) => (
                                <Route
                                    key={index}
                                    path={path}
                                    element={
                                        <Suspense fallback={<Spin style={{ position: 'absolute', zIndex: '999', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />}>
                                            <Element />
                                        </Suspense>
                                    }
                                />
                            ))}
                        </Route>
                    ):(
                        <Route path="/admin/tab/*" element={<Navigate to="/not-authorized" replace />} />
                    )}

                    <Route path="*" element={<Navigate to="/page-not-found" replace />} />
                </Routes>
            </Suspense>
        </React.Fragment>
    );
}

export default App;
