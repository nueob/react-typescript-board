import { lazy } from 'react';

const router = [
	{
		path: '/',
		component: lazy(() => import('./components/PostList'))
	},
	{
		path: '/test',
		component: lazy(() => import('./components/Test'))
	}
];

export default router;