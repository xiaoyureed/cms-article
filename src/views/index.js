// import Article from './Article';
// import Dashboard from './Dashboard';
// import Login from './Login';
// import NotFound from './NotFound';
// import Setting from './Setting';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';
 
const Article = Loadable({
  loader: () => import('./Article'),
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
  

export {
    Article,
    Dashboard,
    Login,
    NotFound,
    Setting,
}
