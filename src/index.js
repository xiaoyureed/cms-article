import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { commonRoutes } from './routers';
import './index.less';


ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Router>
      <Switch>
        <Route path="/admin" render={(props) => {
          // 授权检测
          return <App {...props} />;
        }}/>

        {
          commonRoutes.map((item, index) => {
            return (
              <Route key={item.pathname} path={item.pathname} component={item.component} />
            )
          })
        }

        {/*  配置默认 path: "/" 转到 "/admin" */}
        <Redirect from="/" to="/admin" exact />
        {/* 匹配不到, 转到 404 */}
        <Redirect to="/404" />
      </Switch>
    </Router>
  </ConfigProvider>,
  document.getElementById('root')
);
