import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import LptA from '../components/LptA.vue';
import GameView from "@/components/GameView.vue";
import HlfetA from "@/components/HlfetA.vue";
import Menu from "@/components/Menu.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/menu',
        name: 'Menu',
        component: Menu,
    },
    {
        path: '/lpt',
        name: 'Lpt',
        component: LptA,
    },
    {
        path: '/hlfet',
        name: 'Hlfet',
        component: HlfetA,
    },
    {
        path: '/game',
        name: 'Game',
        component: GameView,
    },
];

const router = createRouter({
    history: createWebHistory('/taskschedule/'),
    routes,
});

export default router;
