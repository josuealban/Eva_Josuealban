import { Routes } from '@angular/router';
import { InicioPage } from './pages/inicio/inicio.page';
import { MenuPage } from './pages/menu/menu.page';
import { ContactosPage } from './pages/contactos/contactos.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioPage
  },
  {
    path: 'menu',
    component: MenuPage
  },
  {
    path: 'contactos',
    component: ContactosPage
  }
];
