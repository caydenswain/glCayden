import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import RegisterAdmin from '@/views/RegisterAdmin.vue';
import RegisterNGO from '@/views/RegisterNGO.vue';
import RegisterVolunteer from '@/views/RegisterVolunteer.vue';
import Unauthorized from '@/views/Unauthorized.vue'; // Ensure you have an Unauthorized view

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        { path: '/register-admin', component: RegisterAdmin },
        { path: '/register-ngo', component: RegisterNGO },
        { path: '/register-volunteer', component: RegisterVolunteer },
        { path: '/create-account', component: CreateAccount } // Implement this component

        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: { role: 'user' }  // Specify role in meta data if needed
        },
        {
            path: '/admin',
            name: 'admin',
            component: Dashboard,
            meta: { role: 'admin' }
        },
        {
            path: '/unauthorized',
            name: 'unauthorized',
            component: Unauthorized
        }
    ]
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    // Access control by role
    const role = localStorage.getItem('role'); // Assume role is stored in localStorage
    if (to.meta.role && role !== to.meta.role) {
        return next('/unauthorized');
    }

    next();
});

export default router;
