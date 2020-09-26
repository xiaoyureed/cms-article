/**
 * there are tow types of routes:
 * 1. common route
 * 2. private route
 */

import { Article, Dashboard, Login, NotFound, Setting } from "../views";

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
    }, {
        pathname: '/admin/article',
        component: Article,
    }, {
        pathname: '/admin/setting',
        component: Setting,
    }
];

export {
    commonRoutes,
    privateRoutes,
}
