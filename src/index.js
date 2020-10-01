import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { commonRoutes } from './routers';
import './index.less';

const isDev = process.env.NODE_ENV === 'development';
if (!isDev) {
  console.log = function() {}
}

ReactDOM.render(
  // antd default to En, this can make antd to zh-CN
  <ConfigProvider locale={zhCN}>
    {/* Route have to be used inside Router */}
    <Router>
      {/* 页面切换, match route one by one, Onece matched, stop. in the end only one route will display */}
      <Switch>
        <Route path="/admin" render={(props) => {
          // 授权检测
          //...

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
        {/* 一定要加上 exact, 因为默认不是精确匹配 */}
        <Redirect from="/" to="/admin" exact />
        {/* 匹配不到, 转到 404 */}
        <Redirect to="/404" />
      </Switch>
    </Router>
  </ConfigProvider>,
  document.getElementById('root')
);
