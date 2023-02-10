import { lazy } from 'react';

const router = [
	{
		path: '/',
		component: lazy(() => import('./components/PostList'))
	}
];

export default router;