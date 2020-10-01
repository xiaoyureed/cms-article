// import Article from './Article';
// import Dashboard from './Dashboard';
// import Login from './Login';
// import NotFound from './NotFound';
// import Setting from './Setting';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';

/***
 * 借助 loadable, 可以实现 懒加载, 提高首页加载速度
 */


const Article = Loadable({
  loader: () => import('./Article'),
  loading: Loading,
});
const ArticleEdit = Loadable({
  loader: () => import('./Article/Edit'),
  loading: Loading,
});


const Dashboard = Loadable({
  loader: () => import('./Dashboard'),
  loading: Loading,
});


const Setting = Loadable({
  loader: () => import('./Setting'),
  loading: Loading,
});


const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading,
});


const Login = Loadable({
  loader: () => import('./Login'),
  loading: Loading,
});

const Notification = Loadable({
  loader: () => import('./Notification'),
  loading: Loading,
})


export {
  Article,
  ArticleEdit,
  Dashboard,
  Login,
  NotFound,
  Setting,
  Notification,
}
