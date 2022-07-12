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
import configureAppStore from './app/store';
import 'moment/locale/vi';
import { history } from '@utils/index';
import App from './app';
import './styles/base/reset.css';
import './styles/base/app.less';
import 'antd/dist/antd.min.css';
import './styles/index.scss';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const store = configureAppStore();
const root = createRoot(container);

function AppWithCallbackAfterRender() {

  return (<React.Fragment>
    <ConfigProvider locale={vi_VN}>
      <Provider store={store} context={ReactReduxContext}>
          <ToastContainer/>
          <App history={history} context={ReactReduxContext}/>
      </Provider>
    </ConfigProvider>
  </React.Fragment>)
};

root.render(<AppWithCallbackAfterRender/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();