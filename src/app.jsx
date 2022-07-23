import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router'; // react-router v5
import { ConnectedRouter } from 'connected-react-router';
import arrayRouters from '@pages/routes.js';
import { Spin } from 'antd';

const ROUTER_MAP = arrayRouters;

function App({ history, context }) {
  const [arrayRouters, setArrayRouters] = useState([]);

  useEffect(() => {
    if(process.env.NODE_ENV === 'development'){
      console.log('ROUTER_MAP', ROUTER_MAP);
    }
    setArrayRouters(ROUTER_MAP.reverse());
  }, [ROUTER_MAP]);

  return (
    <React.Fragment>
      <ConnectedRouter history={history} context={context}>
        <Switch>
          {arrayRouters.length > 0 &&
            arrayRouters.map(({ component: Component, ...rest }, index) => {
              return (
                <Route
                  key={index}
                  {...rest}
                  render={props => (
                    <React.Suspense
                      fallback={
                        <Spin
                          style={{
                            position: 'absolute',
                            zIndex: '999',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                          }}
                        />
                      }
                    >
                      <Component {...props} />
                    </React.Suspense>
                  )}
                />
              );
            })}
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
