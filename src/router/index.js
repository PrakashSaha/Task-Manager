import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Team from '../views/Team.vue'
import Tasks from '../views/Tasks.vue'
import Bin from '../views/Bin.vue'
import Account from '../views/Account.vue'
import Setting from '../views/Setting.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Dashboard
		},
		{
			path: '/bin',
			component: Bin
		},
		{
			path: '/account',
			component: Account
		},
		{
			path: '/setting',
			component: Setting
		},
		{
			path: '/team',
			component: Team
		},
		{
			path: '/task',
			component: Tasks
		}
	],
})

export default router