import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'nb-home',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'MENU',
        group: true,
    }, {
        title: 'Subscription',
        icon: 'nb-layout-default',
        link: '/pages/subscription',
    },
    {
        title: 'Organizational Unit',
        icon: 'nb-keypad',
        link: '/pages/organization',
    },
    {
        title: 'Projects',
        link: '/pages/projects',
        icon: 'nb-list',
    },
   
    {
        title: 'EA Management',
        icon: 'nb-bar-chart',
        link: '/pages/EAManagement',

    },
    {
        title: 'Quota Allocation',
        icon: 'nb-drops',
        link: '/pages/quotaallocation',
    },

    {
        title: 'Hr List',
        icon: 'nb-list',
        link: '/pages/hrlist',
    }

];
