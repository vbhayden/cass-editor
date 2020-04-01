import Vue from 'vue';
import Router from 'vue-router';

import About from './views/About.vue';
import Test from './lode/views/Test.vue';
import Frameworks from './views/framework/Frameworks.vue';
import Framework from './views/framework/Framework.vue';
import Organizations from './views/organization/Organizations.vue';
import Organization from './views/organization/Organization.vue';
import Import from './views/framework/Import.vue';
import ConceptScheme from './views/conceptScheme/ConceptScheme.vue';
import Login from './views/login/Login.vue';
import ConfigurationEditor from './views/configuration/ConfigurationEditor';
import UserGroupEditor from './views/usersGroups/UserGroupEditor';
import FrameworkCrosswalk from './views/framework/Crosswalk';
import NotFound from './views/NotFound.vue';
import InternalError from './views/InternalError.vue';
import Forbidden from './views/Forbidden.vue';
import Sidebar from './components/SideBar.vue';
import Topbar from './components/Topbar.vue';

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'frameworks',
            components: {
                default: Frameworks,
                sidebar: Sidebar,
                topbar: Topbar
            },
            alias: '/cass-editor/'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/config',
            name: 'configuration',
            components: {
                default: ConfigurationEditor,
                sidebar: Sidebar,
                topbar: Topbar
            }
        },
        {
            path: '/userGroup',
            name: 'usergroup',
            components: {
                default: UserGroupEditor,
                sidebar: Sidebar,
                topbar: Topbar
            }
        },
        {
            path: '/crosswalk',
            name: 'crosswalk',
            components: {
                default: FrameworkCrosswalk,
                sidebar: Sidebar,
                topbar: Topbar
            }
        },
        {
            path: '/about',
            name: 'about',
            components: {
                default: About,
                sidebar: Sidebar,
                topbar: Topbar
            }
        },
        {
            path: '/framework',
            name: 'framework',
            components: {
                default: Framework,
                sidebar: Sidebar,
                topbar: Topbar
            }
        },
        {
            path: '/import',
            name: 'import',
            components: {
                default: Import,
                sidebar: Sidebar,
                topbar: Topbar
            }
        },
        {
            path: '/organizations',
            name: 'organizations',
            components: {
                default: Organizations,
                sidebar: Sidebar,
                topbar: Topbar
            }
        },
        {
            path: '/organization',
            name: 'organization',
            components: {
                default: Organization,
                sidebar: Sidebar,
                topbar: Topbar
            }
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/conceptScheme',
            name: 'conceptScheme',
            components: {
                default: ConceptScheme,
                sidebar: Sidebar,
                topbar: Topbar
            }
        },
        {
            path: '/403',
            name: 'Forbidden',
            component: Forbidden
        },
        {
            path: '/500',
            name: 'InternalError',
            component: InternalError
        },
        {
            path: '/*',
            name: 'NotFound',
            component: NotFound
        }
    ]
});
