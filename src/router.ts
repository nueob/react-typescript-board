import { lazy } from 'react';

const router = [
	{
		path: '/',
		component: lazy(() => import('./pages/PostList'))
	},
	{
		path: '/test',
		component: lazy(() => import('./pages/Test'))
	}
];

export default router;