/**
 * there are tow types of routes:
 * 1. common route
 * 2. private route
 */

import { Article, Dashboard, Login, NotFound, Setting } from "../views";
import { SettingOutlined, HomeOutlined, FileTextOutlined } from '@ant-design/icons'

const commonRoutes = [
    {
        pathname: '/login',
        component: Login,
    }, {
        pathname: '/404',
        component: NotFound,
    }
];

const privateRoutes = [
    {
        pathname: '/admin/dashboard',
        component: Dashboard,
        title: 'Dashboard',
        isTop: true,
        icon: HomeOutlined,
    }, {
        pathname: '/admin/article',
        component: Article,
        title: 'Article',
        isTop: true,
        icon: FileTextOutlined,
    }, {
        pathname: '/admin/setting',
        component: Setting,
        title: 'System Setting', 
        isTop: true,
        icon: SettingOutlined,
    }, {
        pathname: '/admin/setting',
        component: Setting,
        title: 'hello', 
        isTop: false,
        icon: SettingOutlined,
    }
];

export {
    commonRoutes,
    privateRoutes,
}
