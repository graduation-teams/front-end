import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { END } from "redux-saga";
// import {routerMiddleware} from 'connected-react-router';
import 'regenerator-runtime/runtime';
import getPreloadedState  from './getPreloadState';
import rootReducer from '~/features/rootReducer';
import rootSaga from '~/features/rootSaga';
export default function configureAppStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: getPreloadedState(),
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
      thunk: true,
      serializableCheck: true,
      immutableCheck: true,
    }).concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
  });
  sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);
  return store;
}
