/**
 * there are tow types of routes:
 * 1. common route
 * 2. private route
 */

import { Article, ArticleEdit, Dashboard, Login, NotFound, Setting, Notification } from "../views";
import { SettingOutlined, HomeOutlined, FileTextOutlined, EditOutlined, NotificationOutlined } from '@ant-design/icons'

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
        exact: true,// 开启精准匹配, 否则 edit 永远匹配不到
    }, {
        pathname: '/admin/article/edit/:id',
        component: ArticleEdit,
        title: 'ArticleEdit',
        isTop: false,
        icon:  EditOutlined,
    }, {
        pathname: '/admin/setting',
        component: Setting,
        title: 'System Setting', 
        isTop: true,
        icon: SettingOutlined,
    }, {
        pathname: '/admin/setting',
        component: Setting,
        title: 'setting', 
        isTop: false,
        icon: SettingOutlined,
    }, {
        pathname: '/admin/notification',
        component: Notification,
        title: 'notification',
        isTop: false,
        icon: NotificationOutlined,
    },
];

export {
    commonRoutes,
    privateRoutes,
}
