/****************************************
 *              IMPORTS                 *
 * **************************************/
//COMPONENTS
import HomeView from '../views/HomeView.vue'

/****************************************
 *              LISTE                   *
 *               DES                    *
 *             ROUTES                   *
 * **************************************/

const routes = [
	{ path: '/', name: 'home', component: HomeView },
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue'),
	}
]
export default routes;
