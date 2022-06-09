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
import vi_VN from 'antd/lib/locale/vi_VN';
// import configureAppStore from '~/app/store';
import 'moment/locale/vi';
import App from './app';
import reportWebVitals from './reportWebVitals';

import './styles/base/reset.css';
import './styles/base/app.less';
import './styles/index.css';
const container = document.getElementById('root');
// const store = configureAppStore();
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider store={store} context={ReactReduxContext}> */}
      <ConfigProvider locale={vi_VN}>
        <App />
      </ConfigProvider>
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
