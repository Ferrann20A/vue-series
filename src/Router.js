import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import CreatePersonaje from './components/CreatePersonaje.vue';
import ModificarPersonaje from './components/ModificarPersonaje.vue';
import SerieComponent from './components/SerieComponent.vue';
import PersonajesComponent from './components/PersonajesComponent.vue';

const myRoutes = [
    {
        path:"/", component: HomeComponent
    },
    {
        path:"/create", component:CreatePersonaje
    },
    {
        path:"/update", component: ModificarPersonaje
    },
    {
        path:"/serie/:id", component: SerieComponent
    },
    {
        path:"/personajes/:idserie", component: PersonajesComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;