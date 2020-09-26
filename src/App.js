import React from 'react';
import './App.less';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes } from './routers';
import BasicFrame from './components/BasicFrame';

function App() {
  return (
    <BasicFrame>
      <Switch>
        {
          // secondary route
          privateRoutes.map(item => {
            return (
              // <Route key={item.pathname} path={item.pathname} component={item.component} />
              <Route key={item.pathname} path={item.pathname} render={props => {
                return <item.component {...props} />
              }} />
            )
          })
        }

        {/* 默认路径 */}
        <Redirect from="/admin" to={privateRoutes[0].pathname} />
        <Redirect to="/404" />
      </Switch>
    </BasicFrame>
  );
}

export default App;
