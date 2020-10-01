import React from 'react';
import './App.less';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes } from './routers';
import BasicFrame from './components/BasicFrame';

const App = props => {

  props.history.listen(location => {
    //find()方法主要用来返回数组中符合条件的第一个元素（没有的话，返回undefined）
    // filter()方法主要用来筛选数组中符合条件的所有元素，并且放在一个新数组中，如果没有，返回一个空数组
    // map()方法主要用来对数组中的元素调用函数进行处理，并且把处理结果放在一个新数组中返回（如果没有返回值，新数组中的每一个元素都为undefined）
    // forEach()方法也是用于对数组中的每一个元素执行一次回调函数，但它没有返回值（或者说它的返回值为undefined，即便我们在回调函数中写了return语句，返回值依然为undefined）
    const findOne = privateRoutes.find(item => item.pathname === location.pathname);
    window.document.title = findOne && findOne.title;
  });

  return (
    <BasicFrame>
      <Switch>
        {
          // secondary route
          privateRoutes.map(item => {
            return (
              // <Route key={item.pathname} path={item.pathname} component={item.component} />
              <Route key={item.pathname} exact={item.exact} path={item.pathname} render={props => {
                return <item.component {...props} />
              }} />
            )
          })
        }

        {/* 配置默认重定向 */}
        <Redirect from="/admin" to="/admin/dashboard" exact />
        <Redirect to="/404" />
      </Switch>
    </BasicFrame>
  );
}

export default App;
