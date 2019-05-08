

import HomeComponent from './components/HomeComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import PropertyComponent from './components/PropertyComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import PropertySingleComponent from './components/PropertySingleComponent.vue';
import LoginComponent from './components/Auth/LoginComponent';
import RegisterComponent from './components/Auth/RegisterComponent';



export const myroutes = [
    {
        name: 'home',
        path: '/',
        component: HomeComponent,
        
    },
    {
        name: 'about',
        path: '/about',
        component: AboutComponent,
    },
    {
        name: 'property',
        path: '/property',
        component: PropertyComponent,
        
    },
    {
        name: 'contact',
        path: '/contact',
        component: ContactComponent,
    },
    {
        name: 'property-single',
        path: '/property-single/:id?',
        component: PropertySingleComponent
    },
    {
        name: 'login',
        path: '/login',
        component: LoginComponent
    },
    {
        name: 'register',
        path: '/register',
        component: RegisterComponent
    }
  ];


