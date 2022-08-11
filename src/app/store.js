import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { END } from "redux-saga";
import { createRouterMiddleware } from '@lagunovsky/redux-react-router';
import 'regenerator-runtime/runtime';
import  {getPreloadState}  from './getPreloadState';
import { history } from '@utils/index';
import rootReducer from '@features/rootReducer';
import rootSaga from '@features/rootSaga';

export default function configureAppStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: getPreloadState(),
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
      thunk: true,
      serializableCheck: true,
      immutableCheck: true,
    }).concat(sagaMiddleware,createRouterMiddleware(history)),
    devTools: process.env.NODE_ENV !== 'production',
  });
  sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);
  return store;
}
