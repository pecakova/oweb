import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutuspageComponent } from './aboutuspage/aboutuspage.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'menu',
        component: MenuComponent,
        title: 'Menu'
    },
    {
        path: 'about',
        component: AboutuspageComponent,
        title: 'Our Story'
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    }
];
