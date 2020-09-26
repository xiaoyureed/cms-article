import Article from './Article';
import Dashboard from './Dashboard';
import Login from './Login';
import NotFound from './NotFound';
import Setting from './Setting';
import Loadable from 'react-loadable';
import Loading from './my-loading-component';
 
const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading: Loading,
});


export {
    Article,
    Dashboard,
    Login,
    NotFound,
    Setting,
}
