import 'core-js/stable';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/es/map';
import 'core-js/es/set';
import 'raf/polyfill';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, ReactReduxContext } from 'react-redux';
import { ConfigProvider } from 'antd';
import en_US from 'antd/lib/locale/en_US';
import configureAppStore from './app/store';
import 'moment/locale/vi';
import { history } from '@utils/index';
import App from './app';
import { ToastContainer } from 'react-toastify';
import './styles/base/reset.css';
import './styles/base/app.less';
import './styles/index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.min.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from '@contexts/authContext';
import { DrawerProvider } from '@contexts/drawerContext';
import { FilterProvider } from '@contexts/filterContext';
import { KeywordProvider } from '@contexts/keywordContext';
import { ReduxRouter } from '@lagunovsky/redux-react-router';

const container = document.getElementById('root-app');
const store = configureAppStore();
const root = createRoot(container);

function AppWithCallbackAfterRender() {
    return (
        <React.Fragment>
            <ConfigProvider locale={en_US}>
                <Provider store={store} context={ReactReduxContext}>
                    <AuthProvider>
                        <DrawerProvider>
                            <FilterProvider>
                                <KeywordProvider>
                                    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                                    <ReduxRouter history={history}>
                                        <App />
                                    </ReduxRouter>
                                </KeywordProvider>
                            </FilterProvider>
                        </DrawerProvider>
                    </AuthProvider>
                </Provider>
            </ConfigProvider>
        </React.Fragment>
    );
}

root.render(<AppWithCallbackAfterRender />);

reportWebVitals();
serviceWorker.unregister();
